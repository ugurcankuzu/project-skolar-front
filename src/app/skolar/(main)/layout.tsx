import Header from "@/components/shared/header";
import Navbar from "@/components/shared/navbar";
import { ModalProvider } from "@/store/modalStore";
import { UserContextProvider } from "@/store/userStore";

export default async function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <UserContextProvider>
      <ModalProvider>
        <div className="w-full h-screen flex flex-col bg-surface overflow-hidden">
          <Header />
          <div className="w-full flex-1 flex min-h-0">
            <Navbar />
            <main className="flex-1 w-full h-full overflow-y-auto overflow-x-hidden relative">
              {children}
            </main>
          </div>
        </div>
      </ModalProvider>
    </UserContextProvider>
  );
}