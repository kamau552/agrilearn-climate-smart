"use client";

import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-green-900 text-green-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {/* 1. ABOUT */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Image
              src="/assets/images/Logo.png"
              alt="AgriLearn"
              width={32}
              height={32}
              className="rounded-md"
            />
            <h2 className="text-xl font-bold text-white">AgriLearn</h2>
          </div>

          <p className="text-green-200 text-sm leading-relaxed">
            Empowering Kenyan farmers with modern agriculture knowledge, 
            digital tools, and AI-powered farming support.
          </p>

          <div className="flex items-center gap-3 pt-2">
            <FaFacebook className="cursor-pointer hover:text-white text-lg" />
            <FaTwitter className="cursor-pointer hover:text-white text-lg" />
            <FaInstagram className="cursor-pointer hover:text-white text-lg" />
            <FaYoutube className="cursor-pointer hover:text-white text-lg" />
          </div>
        </div>

        {/* 2. QUICK LINKS */}
        <div className="space-y-3">
          <h3 className="text-white font-semibold text-lg">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Crops</li>
            <li className="hover:text-white cursor-pointer">Livestock</li>
            <li className="hover:text-white cursor-pointer">Vet Support</li>
            <li className="hover:text-white cursor-pointer">AI Assistant</li>
          </ul>
        </div>

        {/* 3. SERVICES */}
        <div className="space-y-3">
          <h3 className="text-white font-semibold text-lg">Our Services</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Farming Guides</li>
            <li className="hover:text-white cursor-pointer">Market Prices</li>
            <li className="hover:text-white cursor-pointer">Weather Insights</li>
            <li className="hover:text-white cursor-pointer">Training Courses</li>
            <li className="hover:text-white cursor-pointer">Community Support</li>
          </ul>
        </div>

        {/* 4. CONTACT */}
        <div className="space-y-3">
          <h3 className="text-white font-semibold text-lg">Contact Us</h3>

          <div className="flex items-start gap-2 text-sm">
            <FiMapPin className="text-green-300 mt-1 shrink-0" />
            <p>AgriLearn HQ, Nairobi, Kenya</p>
          </div>

          <div className="flex items-center gap-2 text-sm">
            <FiPhone className="text-green-300 shrink-0" />
            <p>+254 712 345 678</p>
          </div>

          <div className="flex items-center gap-2 text-sm">
            <FiMail className="text-green-300 shrink-0" />
            <p>support@agrilearn.com</p>
          </div>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="border-t border-green-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <p className="text-center text-green-300 text-xs">
            © {new Date().getFullYear()} AgriLearn — Smart Farming for Everyone. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}