import { IApiResponse } from "@/types/fetchWrapper"; // fetchWrapper'dan gelen standart yanıt tipiniz

/**
 * Bir API fonksiyonunu (IApiResponse döndüren) alır ve onu
 * useSWR'ın 'fetcher'ı olarak kullanılabilecek yeni bir fonksiyona dönüştürür.
 * Bu, bir "Higher-Order Function" (Yüksek Mertebeden Fonksiyon)'dır.
 *
 * @param apiFn Dönüştürülecek olan API fonksiyonu (örn: getNotifications, getUserProfile).
 * @returns useSWR tarafından kullanılmaya hazır, yeni bir fetcher fonksiyonu.
 */
export default function swrFetchAdapter<T, A extends any[]>(
  apiFn: (...args: A) => Promise<IApiResponse<T>>
) {
  // Bu, useSWR'a fetcher olarak verilecek olan asıl fonksiyondur.
  // SWR, 'key' içindeki argümanları bu fonksiyona yayar (...args).
  return async (...args: A): Promise<T> => {
    // 1. Orijinal API fonksiyonunu SWR'dan gelen argümanlarla çağır.
    const response = await apiFn(...args);

    // 2. fetchWrapper'dan gelen yanıtı kontrol et.
    // Başarısızsa, bir hata fırlat. SWR bu hatayı yakalayacak ve 'error' state'ine koyacak.
    if (!response.success) {
      const error = new Error(
        response.message || "SWR fetcher sırasında bir hata oluştu."
      );
      // Gelecekte hata objesine ek bilgi eklemek isterseniz:
      // (error as any).info = response.errorData;
      // (error as any).status = response.statusCode;
      throw error;
    }

    // 3. Başarılıysa, SADECE içindeki veriyi (`data`) döndür.
    // SWR bu veriyi kendi `data` state'ine koyacak.
    // Eğer `response.data` undefined ise, SWR'ın `data`'sı da undefined olacaktır.
    if (response.data === undefined) {
      // Bu durum, verinin T olmasını bekleyen yerlerde tip hatalarını önler.
      // SWR `undefined`'ı yönetebilir, bu yüzden bu güvenli bir varsayımdır.
      // Ancak, API'nizin veri döndürmesi gereken yerde boş bir array/obje
      // döndürmesi daha iyi bir pratiktir.
      return undefined as T;
    }
    return response.data;
  };
}
