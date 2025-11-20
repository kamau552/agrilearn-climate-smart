"use client";

import { FiSearch } from "react-icons/fi";

interface SearchBarProps {
  isMobile: boolean;
  showMobileSearch: boolean;
  isSidebarOpen: boolean;
}

export default function SearchBar({ isMobile, showMobileSearch, isSidebarOpen }: SearchBarProps) {
  return (
    <div
      className={`${
        isMobile && !showMobileSearch ? "hidden" : "flex-1"
      } transition-all duration-300 ${
        isSidebarOpen ? 'max-w-3xl' : 'max-w-2xl'
      } mx-4 lg:mx-8`}
    >
      <div className="relative">
        <FiSearch
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          size={20}
        />
        <input
          type="text"
          placeholder={
            isMobile
              ? "Search..."
              : "Search crops, livestock, or ask a question..."
          }
          className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all bg-gray-50/50 hover:bg-white"
          aria-label="Search crops, livestock, or ask a question"
        />
      </div>
    </div>
  );
}