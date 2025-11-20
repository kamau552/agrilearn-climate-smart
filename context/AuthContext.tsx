"use client";

import { createContext, useContext, useEffect, useState, useCallback } from "react";

interface User {
  id: string;
  name: string;
  email?: string;
  type: "guest" | "email";
}

interface StoredUser {
  email: string;
  password: string;
  name: string;
}

interface AuthContextType {
  user: User | null;
  loginAsGuest: () => void;
  login: (email: string, password: string) => void;
  signUp: (email: string, password: string, name: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [, setIsInitialized] = useState(false);

  // Load user on startup - using useCallback to avoid recreating the function
  const initializeAuth = useCallback(() => {
    try {
      const stored = localStorage.getItem("agri_user");
      if (stored) {
        const parsedUser = JSON.parse(stored);
        setUser(parsedUser);
      }
    } catch (error) {
      console.error("Error parsing stored user:", error);
      localStorage.removeItem("agri_user");
    } finally {
      setIsInitialized(true);
    }
  }, []);

  useEffect(() => {
    // Use requestAnimationFrame to defer the state update
    const timer = setTimeout(() => {
      initializeAuth();
    }, 0);

    return () => clearTimeout(timer);
  }, [initializeAuth]);

  // Guest login
  const loginAsGuest = useCallback(() => {
    const guest: User = { 
      id: `guest_${Date.now()}`, 
      name: "Guest Farmer", 
      type: "guest" 
    };
    localStorage.setItem("agri_user", JSON.stringify(guest));
    setUser(guest);
  }, []);

  // Sign up locally
  const signUp = useCallback((email: string, password: string, name: string) => {
    const users: StoredUser[] = JSON.parse(localStorage.getItem("agri_users") || "[]");

    if (users.find((u: StoredUser) => u.email === email)) {
      throw new Error("Email already registered");
    }

    const newUser: StoredUser = { email, password, name };
    users.push(newUser);
    localStorage.setItem("agri_users", JSON.stringify(users));

    const session: User = {
      id: email,
      name,
      email,
      type: "email",
    };

    localStorage.setItem("agri_user", JSON.stringify(session));
    setUser(session);
  }, []);

  // Login
  const login = useCallback((email: string, password: string) => {
    const users: StoredUser[] = JSON.parse(localStorage.getItem("agri_users") || "[]");
    const found = users.find(
      (u: StoredUser) => u.email === email && u.password === password
    );

    if (!found) throw new Error("Invalid credentials");

    const session: User = {
      id: email,
      name: found.name,
      email,
      type: "email",
    };

    localStorage.setItem("agri_user", JSON.stringify(session));
    setUser(session);
  }, []);

  // Logout
  const logout = useCallback(() => {
    localStorage.removeItem("agri_user");
    setUser(null);
  }, []);

  const value = {
    user,
    loginAsGuest,
    login,
    signUp,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};