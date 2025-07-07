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
      <div className="w-screen max-w-screen h-screen flex flex-col">
        <Header />
        <div className="w-full h-full flex">
          <Navbar />
          {children}
        </div>
      </div>
    </UserContextProvider>
  );
}
