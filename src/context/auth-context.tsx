'use client';
import { userDetail } from "@/lib/services/auth-api";
import React, { createContext, useContext, useEffect, useState } from "react";

type Props = {
  children: React.ReactNode;
};

type UserType = {
  name: string;
  email: string;
  id: string;
  role: string;
  iat:number
} | null;

type AuthContextType = {
  user: UserType;
  setUser: React.Dispatch<React.SetStateAction<UserType>>;
  error: string | null;
  setError: React.Dispatch<React.SetStateAction<string | null>>;
  isLoading: boolean;
};

const InitialValue: AuthContextType = {
  user: null,
  error: null,
  setUser: () => undefined,
  setError: () => undefined,
  isLoading: true,
};

const AuthContext = createContext<AuthContextType>(InitialValue);

export const AuthContextProvider = ({ children }: Props) => {
  const [user, setUser] = useState<UserType>(InitialValue.user);
  const [error, setError] = useState<string | null>(InitialValue.error);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        setIsLoading(true);
        const res = await userDetail();
        
        if (res.status === 200) {
          setUser(res.data?.data);
          setError(null);
        } else {
          throw new Error("User not logged in");
        }
      } catch (err: any) {
        setUser(null);
        setError(err.message || "An error occurred");
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserDetails();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, error, setError, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);

export default AuthContextProvider;
