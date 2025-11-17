"use client";

import { useState, useEffect } from "react";
import Header from "./Header";
import Sidebar from "./layout/Sidebar";
import Footer from "./Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Pass isSidebarOpen to Header */}
      <Header onMenuToggle={toggleSidebar} isSidebarOpen={isSidebarOpen} />
      
      <Sidebar isOpen={isSidebarOpen} onToggle={toggleSidebar} />
      
      {/* Main Content */}
      <main className={`
        min-h-screen transition-all duration-300 pt-16
        ${!isMobile && isSidebarOpen ? 'lg:ml-72' : !isMobile ? 'lg:ml-20' : 'ml-0'}
      `}>
        <div className="p-4 sm:p-6 lg:p-8">
          {children}
        </div>
      </main>
      <div className="bg-white border-t mt-8 max-w-7xl mx-auto py-4 px-6 text-center text-sm text-gray-500">
        <Footer />
      </div>
    </div>
  );
}