"use server";
import Header from "@/components/shared/header";
import Navbar from "@/components/shared/navbar";
import { UserContextProvider } from "@/store/userStore";

export default async function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <UserContextProvider>
      <div className="w-full h-screen flex flex-col bg-surface overflow-x-hidden">
        <Header />
        <div className="w-full flex-1 flex">
          <Navbar />
          <main className="flex-1 w-full overflow-y-auto">{children}</main>
        </div>
      </div>
    </UserContextProvider>
  );
}
