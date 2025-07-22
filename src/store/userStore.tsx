"use client";

import Loader from "@/components/shared/loader";
import getProfile from "@/helpers/getProfile";
import useLoading from "@/hooks/useLoading";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

// TUserProfile tip tanımınızın burada veya global bir dosyada olduğunu varsayıyorum.
// type TUserProfile = { ... };

const userInitial: TUserProfile = {
  id: 0,
  firstName: "",
  lastName: "",
  email: "",
  isEducator: false,
  isFirstLogin: false,
  updatedAt: "",
  createdAt: "",
};

export const UserContext = createContext<{
  user: TUserProfile | null;
  setUser: (user: TUserProfile) => void;
  updateUser: () => Promise<void>; // Artık async olduğu için Promise<void> dönebilir
  logout: () => void;
}>({
  user: null,
  setUser: () => {},
  updateUser: async () => {},
  logout: () => {},
});

export function useUserContext() {
  const ctx = useContext(UserContext);
  if (!ctx) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  return ctx;
}

export function UserContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<TUserProfile | null>(null);
  // Bu state, ilk yükleme ve yönlendirme mantığı tamamlanana kadar tüm arayüzü kilitlemek için kullanılır.
  const [isInitializing, setIsInitializing] = useState(true);
  const { loading, startLoading, stopLoading } = useLoading(); // Bu hook'u manuel güncelleme için saklayalım.
  const router = useRouter();

  // Sadece component ilk yüklendiğinde çalışacak olan ana useEffect.
  // Görevi: Kullanıcıyı çekmek, durumu kontrol etmek ve ya yönlendirmek ya da uygulamayı başlatmak.
  useEffect(() => {
    const initializeUser = async () => {
      try {
        const userProfile = await getProfile();
        if (!userProfile.success || !userProfile.data) {
          throw new Error(userProfile.message || "Profil alınamadı.");
        }

        const fetchedUser = userProfile.data as TUserProfile;

        // Kritik kontrol: Yönlendirme kararını state'i güncellemeden HEMEN ÖNCE yapıyoruz.
        if (fetchedUser.isFirstLogin) {
          // Eğer ilk giriş ise, state'i güncelleyip render'a sebep olmaya gerek yok.
          // Doğrudan yönlendiriyoruz. Bu component unmount olacağı için
          // setIsInitializing(false) demeye gerek kalmaz.
          setUser(fetchedUser); // State'i yine de güncelleyelim ki, yönlendirme sonrası yeni sayfada context doğru başlasın.
          setIsInitializing(false); // Yönlendirme öncesi yükleme ekranını kapat

          router.push("/skolar/role-selection");
          // Not: Yönlendirme sonrası yeni sayfada bu context tekrar başlayacak.
        } else {
          // Her şey yolunda, kullanıcı giriş yapmış ve rolünü seçmiş.
          // Artık kullanıcı bilgisini set edip, yükleme ekranını kaldırabiliriz.
          setUser(fetchedUser);
          setIsInitializing(false);
        }
      } catch (err) {
        // Token geçersiz, süresi dolmuş veya herhangi bir ağ hatası.
        // Kullanıcıyı güvenli bir şekilde login sayfasına yönlendir.
        console.error("Kullanıcı başlatma hatası:", err);
        router.push("/login");
      }
    };

    initializeUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Bu effect'in sadece bir kez çalışması kritik, bu yüzden bağımlılık dizisi boş.

  // İsteğe bağlı olarak kullanıcı profilini manuel güncellemek için bir fonksiyon.
  // Örneğin profil sayfasında bir "Yenile" butonu için kullanılabilir.
  const updateUser = async () => {
    startLoading(); // Manuel güncelleme için görsel feedback başlat
    try {
      const userProfile = await getProfile();
      if (userProfile.success && userProfile.data) {
        setUser(userProfile.data as TUserProfile);
      } else {
        throw new Error(userProfile.message || "Profil güncellenemedi.");
      }
    } catch (err) {
      console.error("Profil güncelleme hatası:", err);
      // Manuel güncelleme başarısız olunca login'e atmak sert bir tepki olabilir,
      // burada bir toast notification göstermek daha iyi olabilir. Şimdilik yönlendirme yapmıyoruz.
    } finally {
      stopLoading(); // Manuel güncelleme için görsel feedback bitir
    }
  };
  //Logout
  const logout = async () => {
    setUser(null);
    router.push("/login");
  };

  // Ana başlatma süreci tamamlanana kadar tüm alt component'leri (children) render etme.
  // Bu, kullanıcının /skolar sayfasını görmesini engeller.
  if (isInitializing) {
    return (
      <div className="w-screen h-screen flex items-center justify-center bg-background">
        <Loader />
      </div>
    );
  }

  // Başlatma tamamlandıysa ve kullanıcı varsa, uygulamayı göster.
  return (
    <UserContext.Provider
      value={{
        user: user,
        setUser: setUser,
        updateUser: updateUser,
        logout: logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
