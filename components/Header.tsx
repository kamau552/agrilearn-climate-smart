"use client";

import { useState, useEffect, useRef } from "react";
import { FiSearch, FiMenu } from "react-icons/fi";
import { WiDayCloudy } from "react-icons/wi";
import { BiAccessibility } from "react-icons/bi";
import { 
  RiFontSize, 
  RiContrastLine, 
  RiEyeLine, 
  RiEyeCloseLine,
  RiVolumeUpLine,
  RiBracesLine
} from "react-icons/ri";
import Image from "next/image";

interface HeaderProps {
  onMenuToggle: () => void;
  isSidebarOpen: boolean;
}

export default function Header({ onMenuToggle, isSidebarOpen }: HeaderProps) {
  const [language, setLanguage] = useState<"EN" | "SW">("EN");
  const [isMobile, setIsMobile] = useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const [showAccessibilityMenu, setShowAccessibilityMenu] = useState(false);
  
  // Accessibility states
  const [fontSize, setFontSize] = useState<"normal" | "large" | "x-large">("normal");
  const [highContrast, setHighContrast] = useState(false);
  const [screenReader, setScreenReader] = useState(false);
  const [grayscale, setGrayscale] = useState(false);

  const accessibilityRef = useRef<HTMLDivElement>(null);

  // Helper function to apply accessibility settings
  const applyAccessibilitySettings = (settings: {
    fontSize: "normal" | "large" | "x-large";
    highContrast: boolean;
    screenReader: boolean;
    grayscale: boolean;
  }) => {
    // Ensure we're on client side
    if (typeof document === 'undefined') return;
    
    const root = document.documentElement;
    const body = document.body;
    
    // Font size
    root.style.fontSize = settings.fontSize === "normal" ? "16px" : settings.fontSize === "large" ? "18px" : "20px";
    
    // High contrast
    if (settings.highContrast) {
      body.classList.add('high-contrast');
    } else {
      body.classList.remove('high-contrast');
    }
    
    // Grayscale
    if (settings.grayscale) {
      body.style.filter = 'grayscale(100%)';
    } else {
      body.style.filter = 'none';
    }
    
    // Screen reader
    if (settings.screenReader) {
      root.setAttribute('aria-live', 'polite');
    } else {
      root.removeAttribute('aria-live');
    }
  };

  // Reset accessibility settings
  const resetAccessibilitySettings = () => {
    const root = document.documentElement;
    const body = document.body;
    
    root.style.fontSize = '16px';
    body.classList.remove('high-contrast');
    body.style.filter = 'none';
    root.removeAttribute('aria-live');
    
    // Stop any ongoing speech
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      speechSynthesis.cancel();
    }
  };

  // Text-to-speech function
  const speakText = (text: string) => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window && screenReader) {
      // Stop any current speech
      speechSynthesis.cancel();
      
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.8;
      utterance.pitch = 1;
      utterance.volume = 1;
      speechSynthesis.speak(utterance);
    }
  };

  // Apply settings when component mounts or accessibility states change
  useEffect(() => {
    applyAccessibilitySettings({ fontSize, highContrast, screenReader, grayscale });
  }, [fontSize, highContrast, screenReader, grayscale]);

  // Apply initial settings on mount
  useEffect(() => {
    applyAccessibilitySettings({ fontSize, highContrast, screenReader, grayscale });
  }, []);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Close accessibility menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (accessibilityRef.current && !accessibilityRef.current.contains(event.target as Node)) {
        setShowAccessibilityMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header 
      className={`fixed top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-green-100 transition-all duration-300
        ${isSidebarOpen ? 'lg:left-72' : 'lg:left-20'} left-0 right-0`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left section - Logo and Mobile menu */}
          <div className="flex items-center gap-4">
            {/* Mobile menu button - Only visible on mobile */}
            <button
              onClick={onMenuToggle}
              className="lg:hidden p-2 rounded-md text-gray-600 hover:text-green-600 hover:bg-green-50 transition-colors"
              title="Open menu"
              aria-label="Open navigation menu"
            >
              <FiMenu size={20} />
            </button>

            {/* Responsive Logo - Hidden when sidebar is open on desktop */}
            <div className={`flex items-center transition-all duration-300 ${
              // Show on mobile always, hide on desktop when sidebar is open
              isSidebarOpen && !isMobile ? 'lg:opacity-0 lg:scale-95 lg:absolute lg:-left-full' : 'opacity-100 scale-100'
            }`}>
              {/* Desktop logo - Full version */}
              <div className="hidden lg:flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-white to-green-50 rounded-lg flex items-center justify-center shadow-sm flex-shrink-0">
                  <Image
                    src="/assets/images/Logo.png"
                    alt="AgriLearn"
                    width={24}
                    height={24}
                    className="rounded-md object-contain"
                    priority
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-green-800 font-bold text-lg leading-tight whitespace-nowrap">
                    AgriLearn
                  </span>
                  <span className="text-green-600 text-xs font-medium whitespace-nowrap">
                    Smart Farming
                  </span>
                </div>
              </div>

              {/* Mobile logo - Always visible on mobile */}
              <div className="lg:hidden flex items-center gap-2">
                <div className="w-9 h-9 bg-gradient-to-br from-white to-green-50 rounded-lg flex items-center justify-center shadow-sm">
                  <Image
                    src="/assets/images/Logo.png"
                    alt="AgriLearn"
                    width={20}
                    height={20}
                    className="rounded-md object-contain"
                    priority
                  />
                </div>
                <span className="text-green-800 font-bold text-md">
                  AgriLearn
                </span>
              </div>
            </div>
          </div>

          {/* Search Bar - Takes more space when logo is hidden */}
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

          {/* Right actions */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Mobile search toggle button */}
            {isMobile && (
              <button
                onClick={() => setShowMobileSearch(!showMobileSearch)}
                className="p-2 rounded-md text-gray-600 hover:text-green-600 hover:bg-green-50 transition-colors"
                title="Search"
                aria-label="Toggle search bar"
              >
                <FiSearch size={20} />
              </button>
            )}

            {/* Language Selector */}
            <button
              onClick={() =>
                setLanguage((prev) => (prev === "EN" ? "SW" : "EN"))
              }
              className="bg-green-50 text-green-700 px-3 py-2 rounded-xl font-medium hover:bg-green-100 transition-colors border border-green-100 text-sm sm:text-base whitespace-nowrap"
            >
              {language}
            </button>

            {/* Weather Widget - Hidden on mobile */}
            <div className="hidden sm:flex items-center gap-2 text-gray-700 bg-blue-50/80 px-3 py-2 rounded-xl border border-blue-100 whitespace-nowrap">
              <WiDayCloudy className="text-yellow-500" size={26} aria-hidden="true" />
              <div className="flex flex-col">
                <span className="font-semibold text-sm">24°C</span>
                <span className="text-xs text-gray-500">Rain likely</span>
              </div>
            </div>

            {/* Accessibility Menu */}
            <div className="relative" ref={accessibilityRef}>
              <button
                onClick={() => {
                  setShowAccessibilityMenu(!showAccessibilityMenu);
                }}
                className="bg-green-700 text-white px-4 py-2.5 rounded-xl font-medium hover:bg-green-800 transition-all shadow-sm hover:shadow-md flex items-center gap-2 whitespace-nowrap"
                aria-label="Accessibility settings"
                aria-expanded={showAccessibilityMenu ? "true" : "false"}
                title="Accessibility Menu"
              >
                <BiAccessibility size={20} aria-hidden="true" />
                <span className="hidden sm:inline">Accessibility</span>
              </button>

              {/* Accessibility Dropdown */}
              {showAccessibilityMenu && (
                <div className="absolute right-0 top-full mt-2 w-80 bg-white rounded-2xl shadow-2xl border border-green-200 z-50 overflow-hidden">
                  {/* Header */}
                  <div className="bg-green-700 text-white p-4">
                    <h3 className="font-bold text-lg">Accessibility Settings</h3>
                    <p className="text-green-100 text-sm mt-1">
                      Make the website comfortable for you
                    </p>
                  </div>

                  {/* Settings */}
                  <div className="p-4 space-y-4 max-h-96 overflow-y-auto">
                    {/* Text Size */}
                    <div className="space-y-2">
                      <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                        <RiFontSize className="text-green-600" />
                        Text Size
                      </label>
                      <div className="flex gap-2">
                        {(["normal", "large", "x-large"] as const).map((size) => (
                          <button
                            key={size}
                            onClick={() => {
                              setFontSize(size);
                            }}
                            className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-all ${
                              fontSize === size
                                ? "bg-green-100 text-green-800 border-2 border-green-500"
                                : "bg-gray-100 text-gray-700 hover:bg-gray-200 border-2 border-transparent"
                            }`}
                          >
                            {size === "normal" ? "A" : size === "large" ? "A+" : "A++"}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* High Contrast */}
                    <div className="flex items-center justify-between">
                      <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                        <RiContrastLine className="text-green-600" />
                        High Contrast
                      </label>
                      <button
                        onClick={() => {
                          setHighContrast(!highContrast);
                        }}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                          highContrast ? "bg-green-600" : "bg-gray-300"
                        }`}
                        title={highContrast ? "Disable High Contrast" : "Enable High Contrast"}
                        aria-label={highContrast ? "Disable High Contrast" : "Enable High Contrast"}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            highContrast ? "translate-x-6" : "translate-x-1"
                          }`}
                        />
                      </button>
                    </div>

                    {/* Screen Reader */}
                    <div className="flex items-center justify-between">
                      <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                        {screenReader ? <RiEyeLine className="text-green-600" /> : <RiEyeCloseLine className="text-green-600" />}
                        Screen Reader
                      </label>
                      <button
                        onClick={() => {
                          const newScreenReader = !screenReader;
                          setScreenReader(newScreenReader);
                          if (newScreenReader) {
                            speakText("Screen reader enabled. Use tab key to navigate and hear content.");
                          }
                        }}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                          screenReader ? "bg-green-600" : "bg-gray-300"
                        }`}
                        title={screenReader ? "Disable Screen Reader" : "Enable Screen Reader"}
                        aria-label={screenReader ? "Disable Screen Reader" : "Enable Screen Reader"}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            screenReader ? "translate-x-6" : "translate-x-1"
                          }`}
                        />
                      </button>
                    </div>

                    {/* Grayscale */}
                    <div className="flex items-center justify-between">
                      <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                        <RiBracesLine className="text-green-600" />
                        Grayscale Mode
                      </label>
                      <button
                        onClick={() => {
                          setGrayscale(!grayscale);
                        }}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                          grayscale ? "bg-green-600" : "bg-gray-300"
                        }`}
                        title={grayscale ? "Disable Grayscale Mode" : "Enable Grayscale Mode"}
                        aria-label={grayscale ? "Disable Grayscale Mode" : "Enable Grayscale Mode"}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            grayscale ? "translate-x-6" : "translate-x-1"
                          }`}
                        />
                      </button>
                    </div>

                    {/* Quick Actions */}
                    <div className="pt-2 border-t border-gray-200">
                      <h4 className="text-sm font-semibold text-gray-700 mb-2">Quick Actions</h4>
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          onClick={() => speakText("This is AgriLearn smart farming platform. Navigate using tab key and use accessibility features to enhance your experience.")}
                          className="flex items-center gap-2 p-2 bg-blue-50 rounded-lg text-blue-700 text-sm hover:bg-blue-100 transition-colors"
                        >
                          <RiVolumeUpLine />
                          Read Page
                        </button>
                        <button
                          onClick={() => {
                            document.documentElement.focus();
                            speakText("Focused on page content");
                          }}
                          className="flex items-center gap-2 p-2 bg-purple-50 rounded-lg text-purple-700 text-sm hover:bg-purple-100 transition-colors"
                        >
                          <RiEyeLine />
                          Focus Content
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="bg-gray-50 px-4 py-3 border-t border-gray-200">
                    <button
                      onClick={() => {
                        setFontSize("normal");
                        setHighContrast(false);
                        setScreenReader(false);
                        setGrayscale(false);
                        setShowAccessibilityMenu(false);
                      }}
                      className="w-full py-2 text-sm text-gray-600 hover:text-gray-800 font-medium transition-colors"
                    >
                      Reset All Settings
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Search Expandable */}
        {showMobileSearch && isMobile && (
          <div className="pb-4 px-2">
            <div className="relative">
              <FiSearch
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Search crops, livestock..."
                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all bg-gray-50"
                autoFocus
              />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}