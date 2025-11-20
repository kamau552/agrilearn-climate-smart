"use client";

import { useState, useEffect } from "react";
import { FiMenu, FiSearch, FiX } from "react-icons/fi";
import Image from "next/image";
import SearchBar from "./common/searchbar";
import UserMenu from "./common/usermenu";
import AccessibilityMenu from "./common/accessibility";

interface HeaderProps {
  onMenuToggle: () => void;
  isSidebarOpen: boolean;
}

export default function Header({ onMenuToggle, isSidebarOpen }: HeaderProps) {
  const [language, setLanguage] = useState<"EN" | "SW">("EN");
  const [isMobile, setIsMobile] = useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(false);

  // ✅ Handle mobile detection
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();

    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 bg-white/90 backdrop-blur-md shadow-md border-b border-green-200 transition-all duration-300
      ${isSidebarOpen ? "lg:left-72" : "lg:left-20"} left-0 right-0`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        
        {/* MAIN HEADER CONTENT */}
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* LEFT SECTION: Menu + Logo */}
          <div className="flex items-center gap-2 sm:gap-3 lg:gap-4 shrink-0">
            {/* Mobile Menu Button */}
            <button
              onClick={onMenuToggle}
              className="lg:hidden p-2 rounded-md text-gray-600 hover:text-green-700 hover:bg-green-50 transition"
              aria-label="Open navigation menu"
            >
              <FiMenu size={20} />
            </button>

            {/* Logo */}
            <div
              className={`flex items-center transition-all duration-300 ${
                isSidebarOpen && !isMobile
                  ? "lg:opacity-0 lg:scale-95 lg:absolute lg:-left-full"
                  : "opacity-100 scale-100"
              }`}
            >
              {/* Desktop Logo */}
              <div className="hidden md:flex items-center gap-3">
                <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-lg bg-green-50 flex items-center justify-center shadow">
                  <Image
                    src="/assets/images/Logo.png"
                    alt="AgriLearn"
                    width={24}
                    height={24}
                    className="object-contain"
                    priority
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-green-800 font-bold text-lg lg:text-xl leading-tight">
                    AgriLearn
                  </span>
                  <span className="text-green-600 text-xs font-medium hidden lg:block">
                    Smart Farming
                  </span>
                </div>
              </div>

              {/* Mobile/Tablet Logo */}
              <div className="md:hidden flex items-center gap-2">
                <div className="w-8 h-8 bg-green-50 rounded-lg flex items-center justify-center shadow">
                  <Image
                    src="/assets/images/Logo.png"
                    alt="AgriLearn"
                    width={18}
                    height={18}
                    className="object-contain"
                    priority
                  />
                </div>
                <span className="text-green-800 font-bold text-base sm:text-lg">AgriLearn</span>
              </div>
            </div>
          </div>

          {/* CENTER SECTION: Search Bar (Hidden on mobile when collapsed) */}
          <div className="flex-1 max-w-2xl mx-2 lg:mx-4">
            {!isMobile && (
              <SearchBar
                isMobile={isMobile}
                showMobileSearch={showMobileSearch}
                isSidebarOpen={isSidebarOpen}
              />
            )}
          </div>

          {/* RIGHT SECTION: Actions */}
          <div className="flex items-center gap-2 sm:gap-3 lg:gap-4 shrink-0">

            {/* Mobile Search Toggle */}
            {isMobile && (
              <button
                onClick={() => setShowMobileSearch(!showMobileSearch)}
                className="p-2 rounded-md text-gray-600 hover:text-green-700 hover:bg-green-50 transition"
                title="Toggle search bar"
                aria-label="Toggle search bar"
              >
                {showMobileSearch ? <FiX size={18} /> : <FiSearch size={18} />}
              </button>
            )}

            {/* Language Toggle - Always visible */}
            <button
              onClick={() => setLanguage((prev) => (prev === "EN" ? "SW" : "EN"))}
              className="px-2 py-1 sm:px-3 sm:py-2 rounded-lg bg-green-50 border border-green-200 text-green-700 text-xs sm:text-sm font-medium hover:bg-green-100 transition whitespace-nowrap"
            >
              {language}
            </button>

            {/* User Menu - Icon only on mobile */}
            <div className={isMobile ? "flex items-center" : "flex items-center"}>
              <UserMenu isMobile={isMobile} />
            </div>

            {/* Accessibility Menu - Icon only on mobile */}
            <div className={isMobile ? "flex items-center" : "flex items-center"}>
              <AccessibilityMenu isMobile={isMobile} />
            </div>
          </div>
        </div>

        {/* MOBILE SEARCH EXPANDED */}
        {showMobileSearch && isMobile && (
          <div className="pb-3 px-2 border-t border-gray-100">
            <div className="relative">
              <FiSearch
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={18}
              />
              <input
                type="text"
                placeholder="Search crops, livestock..."
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 bg-gray-50 text-sm"
                autoFocus
              />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}