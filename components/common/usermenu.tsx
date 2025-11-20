"use client";

import { useState, useRef } from "react";
import { 
  RiUserLine,
  RiSettingsLine,
  RiLogoutBoxRLine,
  RiUserSettingsLine,
  RiArrowDownSLine,
  RiLoginBoxLine,
  RiUserAddLine
} from "react-icons/ri";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

interface UserMenuProps {
  isMobile?: boolean;
}

export default function UserMenu({ isMobile = false }: UserMenuProps) {
  const { user, logout } = useAuth();
  const router = useRouter();
  const [showUserMenu, setShowUserMenu] = useState(false);
  const userMenuRef = useRef<HTMLDivElement>(null);

  const handleLogout = () => {
    logout();
    setShowUserMenu(false);
    router.push("/signin");
  };

  return (
    <div className="relative" ref={userMenuRef}>
      <button
        onClick={() => setShowUserMenu(!showUserMenu)}
        className={`inline-flex items-center justify-center text-white bg-green-700 border border-transparent hover:bg-green-800 focus:ring-4 focus:ring-green-300 shadow-xs font-medium leading-5 rounded-lg focus:outline-none transition-all ${
          isMobile ? "p-2" : "px-4 py-2.5 text-sm"
        }`}
        aria-label="User menu"
        title="User menu"
      >
        <RiUserLine className="w-4 h-4" />
        {!isMobile && (
          <>
            <span className="mx-1.5">{user ? user.name.split(' ')[0] : "Account"}</span>
            <RiArrowDownSLine className={`w-4 h-4 transition-transform ${showUserMenu ? 'rotate-180' : ''}`} />
          </>
        )}
      </button>

      {/* User Dropdown Menu */}
      {showUserMenu && (
        <div className={`
          fixed sm:absolute right-4 left-4 sm:right-0 sm:left-auto top-20 sm:top-full mt-2 z-50 
          bg-white border border-gray-200 rounded-xl shadow-lg sm:shadow-xl
          ${isMobile ? "max-w-full" : "w-56"}
        `}>
          <ul className="p-2 text-sm text-gray-700 font-medium">
            {user ? (
              // Logged in state
              <>
                <li className="px-3 py-3 border-b border-gray-100 bg-gray-50 rounded-t-lg">
                  <p className="text-xs text-gray-500">Signed in as</p>
                  <p className="text-sm text-gray-900 truncate font-medium">
                    {user.name}
                  </p>
                  {user.email && (
                    <p className="text-xs text-gray-500 truncate">{user.email}</p>
                  )}
                  <p className="text-xs text-green-600 font-medium">
                    {user.type === "guest" ? "Guest Account" : "Email Account"}
                  </p>
                </li>
                <li>
                  <a
                    href="/profile"
                    className="flex items-center w-full p-3 hover:bg-green-50 hover:text-green-900 rounded-lg transition-colors"
                    onClick={() => setShowUserMenu(false)}
                  >
                    <RiUserLine className="w-4 h-4 mr-3 text-green-600" />
                    My Profile
                  </a>
                </li>
                <li>
                  <a
                    href="/settings"
                    className="flex items-center w-full p-3 hover:bg-green-50 hover:text-green-900 rounded-lg transition-colors"
                    onClick={() => setShowUserMenu(false)}
                  >
                    <RiSettingsLine className="w-4 h-4 mr-3 text-green-600" />
                    Settings
                  </a>
                </li>
                {user.type === "email" && (
                  <li>
                    <a
                      href="/account"
                      className="flex items-center w-full p-3 hover:bg-green-50 hover:text-green-900 rounded-lg transition-colors"
                      onClick={() => setShowUserMenu(false)}
                    >
                      <RiUserSettingsLine className="w-4 h-4 mr-3 text-green-600" />
                      Account Settings
                    </a>
                  </li>
                )}
                <li className="border-t border-gray-100 mt-2 pt-2">
                  <button
                    onClick={handleLogout}
                    className="flex items-center w-full p-3 text-red-600 hover:bg-red-50 hover:text-red-700 rounded-lg transition-colors"
                  >
                    <RiLogoutBoxRLine className="w-4 h-4 mr-3" />
                    Sign Out
                  </button>
                </li>
              </>
            ) : (
              // Logged out state
              <>
                <li>
                  <a
                    href="/signin"
                    className="flex items-center w-full p-3 hover:bg-green-50 hover:text-green-900 rounded-lg transition-colors"
                    onClick={() => setShowUserMenu(false)}
                  >
                    <RiLoginBoxLine className="w-4 h-4 mr-3 text-green-600" />
                    Sign In
                  </a>
                </li>
                <li>
                  <a
                    href="/signup"
                    className="flex items-center w-full p-3 hover:bg-green-50 hover:text-green-900 rounded-lg transition-colors"
                    onClick={() => setShowUserMenu(false)}
                  >
                    <RiUserAddLine className="w-4 h-4 mr-3 text-green-600" />
                    Create Account
                  </a>
                </li>
              </>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}