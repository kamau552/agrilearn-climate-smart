"use client";

import { useState, useRef, useEffect } from "react";
import { BiAccessibility } from "react-icons/bi";
import {
  RiFontSize,
  RiContrastLine,
  RiEyeLine,
  RiEyeCloseLine,
  RiVolumeUpLine,
  RiBracesLine,
} from "react-icons/ri";

interface AccessibilityMenuProps {
  isMobile?: boolean;
}

export default function AccessibilityMenu({ isMobile = false }: AccessibilityMenuProps) {
  const [showAccessibilityMenu, setShowAccessibilityMenu] = useState(false);
  const [fontSize, setFontSize] = useState<"normal" | "large" | "x-large">("normal");
  const [highContrast, setHighContrast] = useState(false);
  const [screenReader, setScreenReader] = useState(false);
  const [grayscale, setGrayscale] = useState(false);

  const accessibilityRef = useRef<HTMLDivElement>(null);

  // Apply accessibility changes
  useEffect(() => {
    const root = document.documentElement;

    root.style.setProperty(
      "--accessibility-font-size",
      fontSize === "normal" ? "16px" : fontSize === "large" ? "18px" : "20px"
    );

    document.body.classList.toggle("high-contrast", highContrast);
    document.body.classList.toggle("grayscale", grayscale);
  }, [fontSize, highContrast, grayscale]);

  // Close menu on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (accessibilityRef.current && !accessibilityRef.current.contains(e.target as Node)) {
        setShowAccessibilityMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // Screen reader function
  const speakText = (text: string) => {
    if ("speechSynthesis" in window) {
      speechSynthesis.cancel();
      const msg = new SpeechSynthesisUtterance(text);
      msg.rate = 0.8;
      speechSynthesis.speak(msg);
    }
  };

  // Reset everything
  const resetAccessibilitySettings = () => {
    setFontSize("normal");
    setHighContrast(false);
    setScreenReader(false);
    setGrayscale(false);
    speechSynthesis.cancel();

    document.body.classList.remove("high-contrast", "grayscale");
    document.documentElement.style.setProperty("--accessibility-font-size", "16px");
  };

  return (
    <div className="relative" ref={accessibilityRef}>
      {/* Accessibility Button */}
      <button
        onClick={() => setShowAccessibilityMenu(!showAccessibilityMenu)}
        className={`inline-flex items-center justify-center text-white bg-green-700 hover:bg-green-800 border border-transparent shadow-xs font-medium rounded-lg transition-all focus:ring-4 focus:ring-green-300 ${
          isMobile ? "p-2" : "px-4 py-2.5 text-sm"
        }`}
        aria-label="Accessibility settings"
        aria-expanded={showAccessibilityMenu}
        title="Accessibility settings"
      >
        <BiAccessibility className="w-4 h-4" />
        {!isMobile && <span className="ml-1.5">Accessibility</span>}
      </button>

      {/*WIDER MENU FOR ALL SCREENS */}
      {showAccessibilityMenu && (
        <div className={`
          fixed sm:absolute right-4 left-4 sm:right-0 sm:left-auto top-20 sm:top-full mt-2 z-50 
          bg-white border border-gray-200 rounded-xl shadow-lg sm:shadow-xl
          w-[95vw] sm:w-[500px] md:w-[520px] lg:w-[540px]  /* WIDER WIDTHS FOR ALL SCREENS */
          max-w-none sm:max-w-none  /* REMOVE MAX-WIDTH CONSTRAINTS */
        `}>
          {/* Header */}
          <div className="bg-linear-to-r from-green-600 to-green-700 text-white p-4 rounded-t-xl">
            <h3 className="font-bold text-lg">Accessibility Settings</h3>
            <p className="text-green-100 text-sm mt-1">
              Make the website comfortable for you
            </p>
          </div>

          {/* Scrollable Content */}
          <div className="p-4 space-y-5 max-h-[60vh] overflow-y-auto">
            {/* TEXT SIZE */}
            <div>
              <label className="flex items-center gap-2 text-base font-semibold text-gray-800 mb-2">
                <RiFontSize className="text-green-600" />
                Text Size
              </label>

              <div className="flex gap-3"> {/* Increased gap */}
                {(["normal", "large", "x-large"] as const).map((size) => (
                  <button
                    key={size}
                    onClick={() => setFontSize(size)}
                    className={`flex-1 py-3 px-2 rounded-lg text-base font-medium transition-all ${
                      fontSize === size
                        ? "bg-green-100 text-green-800 border-2 border-green-500"
                        : "bg-gray-100 text-gray-700 border border-gray-200 hover:bg-gray-200"
                    }`}
                  >
                    {size === "normal" ? "Normal" : size === "large" ? "Large" : "Extra Large"}
                  </button>
                ))}
              </div>
            </div>

            {/* TOGGLE SWITCHES */}
            {[
              {
                label: "High Contrast Mode",
                state: highContrast,
                set: setHighContrast,
                icon: <RiContrastLine className="text-green-600" />,
              },
              {
                label: "Screen Reader",
                state: screenReader,
                set: setScreenReader,
                icon: screenReader ? (
                  <RiEyeLine className="text-green-600" />
                ) : (
                  <RiEyeCloseLine className="text-green-600" />
                ),
              },
              {
                label: "Grayscale Mode",
                state: grayscale,
                set: setGrayscale,
                icon: <RiBracesLine className="text-green-600" />,
              },
            ].map(({ label, state, set, icon }) => (
              <div key={label} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"> {/* Increased padding */}
                <div className="flex items-center gap-3 text-base font-semibold text-gray-800"> {/* Increased gap */}
                  {icon}
                  {label}
                </div>

                <button
                  onClick={() => set(!state)}
                  className={`relative inline-flex h-7 w-12 rounded-full transition-colors ${
                    state ? "bg-green-600" : "bg-gray-400"
                  }`}
                  role="switch"
                  aria-checked={state}
                  aria-label={`Toggle ${label}`}
                >
                  <span
                    className={`absolute h-5 w-5 bg-white rounded-full top-1 transition-transform ${
                      state ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </button>
              </div>
            ))}

            {/* QUICK ACTIONS */}
            <div className="pt-4 border-t border-gray-200"> {/* Increased padding */}
              <h4 className="text-base font-semibold text-gray-700 mb-3">Quick Actions</h4>

              <div className="grid grid-cols-2 gap-3"> {/* Increased gap */}
                <button
                  onClick={() => speakText("Welcome to AgriLearn smart farming platform. Use accessibility features to enhance your experience.")}
                  className="flex items-center justify-center gap-2 p-3 bg-blue-50 rounded-lg text-blue-600 hover:bg-blue-100 transition-colors text-base" /* Larger text */
                >
                  <RiVolumeUpLine className="text-lg" /> {/* Larger icon */}
                  <span className="font-medium">Read Page</span>
                </button>

                <button
                  onClick={() => {
                    document.documentElement.focus();
                    speakText("Focused on content.");
                  }}
                  className="flex items-center justify-center gap-2 p-3 bg-purple-50 rounded-lg text-purple-700 hover:bg-purple-100 transition-colors text-base" /* Larger text */
                >
                  <RiEyeLine className="text-lg" /> {/* Larger icon */}
                  <span className="font-medium">Focus Content</span>
                </button>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="p-4 bg-gray-50 border-t border-gray-200 rounded-b-xl">
            <button
              onClick={() => {
                resetAccessibilitySettings();
                setShowAccessibilityMenu(false);
              }}
              className="w-full py-3 text-base font-semibold text-gray-700 hover:text-gray-900 transition-colors"
            >
              Reset All Settings
            </button>
          </div>
        </div>
      )}
    </div>
  );
}