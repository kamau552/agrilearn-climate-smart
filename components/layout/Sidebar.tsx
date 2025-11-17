"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import {
  RiHome5Line, RiBook2Line, RiSettings4Line,
  RiUserHeartLine, RiRobot2Line, RiUserLine
} from "react-icons/ri";
import { TbPlant2, TbDroplet, TbCloud } from "react-icons/tb";
import { GiCow } from "react-icons/gi";
import { FiChevronLeft, FiChevronRight, FiX } from "react-icons/fi";

// Split menu items into main items and user items
const mainMenuItems = [
  { name: "Home", icon: <RiHome5Line />, path: "/" },
  { name: "Crops", icon: <TbPlant2 />, path: "/crops" },
  { name: "Livestock", icon: <GiCow />, path: "/livestock" },
  { name: "Fruits", icon: <TbCloud />, path: "/fruits" },
  { name: "Farm Practices", icon: <RiBook2Line />, path: "/farm-practices" },
  { name: "Climate Tips", icon: <TbCloud />, path: "/climate-tips", badge: "NEW", badgeColor: "bg-green-500" },
  { name: "Water & Soil", icon: <TbDroplet />, path: "/water-soil" },
  { name: "Vet Support", icon: <RiUserHeartLine />, path: "/vet-support" },
  { name: "AI Assistant", icon: <RiRobot2Line />, path: "/ai-assistant", badge: "AI", badgeColor: "bg-purple-600" },
];

const userMenuItems = [
  { name: "Profile", icon: <RiUserLine />, path: "/profile" },
  { name: "Settings", icon: <RiSettings4Line />, path: "/settings" },
];

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

export default function Sidebar({ isOpen, onToggle }: SidebarProps) {
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <>
      {/* Mobile Overlay - Only show when sidebar is open on mobile */}
      {isMobile && isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onToggle}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-screen bg-gradient-to-br from-green-800 to-green-900 text-white transition-all duration-300 z-50 shadow-xl flex flex-col
          ${isOpen ? "w-72" : "w-20"}
          ${
            isMobile
              ? isOpen
                ? "translate-x-0"
                : "-translate-x-full"
              : "translate-x-0"
          }
        `}
      >
        {/* Logo Section */}
        <div className="flex-shrink-0">
          <div className="flex items-center justify-between p-4 border-b border-green-700/50">
            <div className="flex items-center gap-3">
              {isOpen ? (
                <>
                  {/* Large logo when sidebar is open */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-white to-green-50 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                      <Image
                        src="/assets/images/Logo.png"
                        alt="AgriLearn"
                        width={32}
                        height={32}
                        className="rounded-lg object-contain drop-shadow-sm"
                        priority
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-white font-bold text-xl tracking-tight">
                        AgriLearn
                      </span>
                      <span className="text-green-200 text-xs font-medium">
                        Smart Farming
                      </span>
                    </div>
                  </div>
                </>
              ) : (
                /* Small logo when sidebar is collapsed */
                <div className="w-12 h-12 bg-gradient-to-br from-white to-green-50 rounded-xl flex items-center justify-center mx-auto shadow-md">
                  <Image
                    src="/assets/images/Logo.png"
                    alt="AgriLearn"
                    width={28}
                    height={28}
                    className="rounded-lg object-contain drop-shadow-sm"
                    priority
                  />
                </div>
              )}
            </div>

            {/* Mobile close button */}
            {isMobile && isOpen && (
              <button
                onClick={onToggle}
                className="lg:hidden p-1 rounded-lg hover:bg-green-700 transition-colors"
                title="Close menu"
              >
                <FiX size={20} />
              </button>
            )}
          </div>
        </div>

        {/* Navigation - Removed overflow to eliminate scroll */}
        <nav className="flex-1 py-4">
          <div className="px-3 h-full flex flex-col">
            {/* Main Menu Items */}
            <div className="space-y-1">
              {mainMenuItems.map(({ name, icon, path, badge, badgeColor }) => {
                const isActive = pathname === path;
                return (
                  <Link
                    key={name}
                    href={path}
                    onClick={() => {
                      if (isMobile) {
                        onToggle();
                      }
                    }}
                    className={`group flex items-center rounded-xl px-3 py-3 transition-all
                      ${
                        isActive
                          ? "bg-green-600 text-white shadow-md"
                          : "hover:bg-green-700/50 text-green-100"
                      }
                      ${isOpen ? "justify-start gap-3" : "justify-center"}
                    `}
                  >
                    <div className={`text-xl flex-shrink-0 ${isActive ? "scale-110" : ""}`}>
                      {icon}
                    </div>

                    {isOpen && (
                      <div className="flex justify-between items-center w-full min-w-0">
                        <span className="text-sm font-medium truncate">{name}</span>
                        {badge && (
                          <span
                            className={`${badgeColor} text-xs text-white px-2 py-0.5 rounded-full flex-shrink-0 ml-2`}
                          >
                            {badge}
                          </span>
                        )}
                      </div>
                    )}

                    {/* Tooltip when collapsed - Only show on desktop */}
                    {!isOpen && !isMobile && (
                      <div className="absolute left-full ml-3 bg-green-800 text-white text-sm rounded-lg px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity shadow-md z-50 whitespace-nowrap">
                        {name}
                        {badge && (
                          <span className={`${badgeColor} text-xs text-white px-1 rounded ml-1`}>
                            {badge}
                          </span>
                        )}
                      </div>
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Spacer that pushes user menu to bottom */}
            <div className="flex-1"></div>

            {/* Separator - Only visible when sidebar is open */}
            {isOpen && (
              <div className="border-t border-green-700/50 my-4"></div>
            )}

            {/* User Menu Items - Always at bottom */}
            <div className="space-y-1">
              {userMenuItems.map(({ name, icon, path }) => {
                const isActive = pathname === path;
                return (
                  <Link
                    key={name}
                    href={path}
                    onClick={() => {
                      if (isMobile) {
                        onToggle();
                      }
                    }}
                    className={`group flex items-center rounded-xl px-3 py-3 transition-all
                      ${
                        isActive
                          ? "bg-green-600 text-white shadow-md"
                          : "hover:bg-green-700/50 text-green-100"
                      }
                      ${isOpen ? "justify-start gap-3" : "justify-center"}
                    `}
                  >
                    <div className={`text-xl flex-shrink-0 ${isActive ? "scale-110" : ""}`}>
                      {icon}
                    </div>

                    {isOpen && (
                      <div className="flex justify-between items-center w-full min-w-0">
                        <span className="text-sm font-medium truncate">{name}</span>
                      </div>
                    )}

                    {/* Tooltip when collapsed - Only show on desktop */}
                    {!isOpen && !isMobile && (
                      <div className="absolute left-full ml-3 bg-green-800 text-white text-sm rounded-lg px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity shadow-md z-50 whitespace-nowrap">
                        {name}
                      </div>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        </nav>

        {/* Desktop Toggle Button - Hidden on mobile */}
        {!isMobile && (
          <button
            onClick={onToggle}
            className="absolute -right-3 top-24 bg-green-700 text-white p-1.5 rounded-full shadow-lg hover:bg-green-600 transition-all border-2 border-white hover:scale-110 z-10"
          >
            {isOpen ? (
              <FiChevronLeft size={18} />
            ) : (
              <FiChevronRight size={18} />
            )}
          </button>
        )}
      </aside>
    </>
  );
}