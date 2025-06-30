"use server";
import Header from "@/components/shared/header";
import { UserContextProvider } from "@/store/userStore";

export default async function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <UserContextProvider>
      <Header />
      {children}
    </UserContextProvider>
  );
}
