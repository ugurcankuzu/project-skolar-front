"use client";

import TResolvedUserJWT from "@/types/ResolvedUserJWT";
import { createContext, useContext, useState } from "react";

export const UserContext = createContext({
  user: {
    id: 0,
    firstName: "",
    lastName: "",
    email: "",
    exp: "",
  },
  setUser: (user: TResolvedUserJWT) => {},
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
  const userInitial: TResolvedUserJWT = {
    id: 0,
    firstName: "",
    lastName: "",
    email: "",
    exp: "",
  };
  const [user, setUser] = useState<TResolvedUserJWT>(userInitial);
  const handleUserChange = (user: TResolvedUserJWT) => setUser(user);
  return (
    <UserContext.Provider
      value={{
        user: user,
        setUser: handleUserChange,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
