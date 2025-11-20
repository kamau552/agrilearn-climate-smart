"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";
import Image from "next/image";
import { crops } from "@/constant/crops";
import { livestock } from "@/constant/livestock";
import { fruits } from "@/constant/fruits";
import { FiSearch, FiMic, FiArrowRight } from "react-icons/fi";
import { RiPlantLine, RiAppleLine, RiLightbulbFlashLine } from "react-icons/ri";
import { PiCow } from "react-icons/pi";
import { BaseItem } from "@/interface";

const backgroundImages = [
  "/assets/images/soil.png",
  "/assets/images/hero2.png",
  "/assets/images/hero3.png",
  "/assets/images/child.png",
];

// Define types for our data
interface Crop extends BaseItem {
  growthTime: string;
}

interface Livestock extends BaseItem {
  maturityAge: string;
}

interface Fruit extends BaseItem {
  growthTime: string;
}

export default function HomePage() {
  const { user } = useAuth();
  const router = useRouter();
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Authentication check
  useEffect(() => {
    // If no user is logged in, redirect to signin
    if (!user) {
      router.push("/signin");
    }
  }, [user, router]);

  // Background image rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentBgIndex((prev) => (prev + 1) % backgroundImages.length);
        setIsTransitioning(false);
      }, 800); // Match this with CSS transition duration
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Show loading state while checking authentication
  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🌾</div>
          <h1 className="text-2xl font-bold text-green-800">AgriLearn</h1>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  const featuredCrops = (crops as Crop[]).slice(0, 4);
  const featuredLivestock = (livestock as Livestock[]).slice(0, 4);
  const featuredFruits = (fruits as Fruit[]).slice(0, 4);

  return (
    <div className="min-h-screen bg-white">
      {/* Welcome Banner - Fixed gradient class */}
      <div className="bg-linear-to-r from-green-600 to-emerald-600 text-white py-3 px-4 rounded-lg">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm font-medium">
            Welcome back, <span className="font-bold">{user.name}</span>!
            <span className="ml-2 text-green-100">
              {user.type === "guest" ? "Guest Account" : "Email Account"}
            </span>
          </p>
        </div>
      </div>

      {/* Hero section*/}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden rounded-lg">
        {/* Background Images */}
        <div className="absolute inset-0">
          {backgroundImages.map((image, index) => (
            <div
              key={image}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                index === currentBgIndex
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-105"
              } ${isTransitioning ? "transition-all duration-1000" : ""}`}
            >
              <Image
                src={image}
                alt="Farm background"
                fill
                className="object-cover"
                priority={index === 0}
                sizes="100vw"
                quality={90}
              />
              {/* Dark overlay for better text readability */}
              <div className="absolute inset-0 bg-black/50" />
            </div>
          ))}
        </div>

        {/* Hero Content - FIXED */}
        <div className="relative z-10 text-center text-white px-4 w-full">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-[1.1] drop-shadow-2xl">
            Grow Sustainably in a
            <span className="block text-green-300 mt-4 drop-shadow-md">
              Changing Climate
            </span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-8 text-green-100 mx-auto leading-relaxed drop-shadow">
            Get AI-powered advice for climate-smart farming tailored to Kenyan
            smallholders.
          </p>

          <div className="flex flex-col sm:flex-row gap-2 md:gap-3 justify-center items-center">
            <Link
              href="/ai-assistant"
              className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white px-4 md:px-6 py-2 md:py-3 rounded-xl font-semibold text-sm md:text-base transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group"
            >
              <RiLightbulbFlashLine className="text-lg" />
              Ask AI
              <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-200" />
            </Link>

            <Link
              href="/ai-assistant?voice=true"
              className="w-full sm:w-auto bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-4 md:px-6 py-2 md:py-3 rounded-xl font-semibold text-sm md:text-base transition-all duration-300 border border-white/30 hover:border-white/50 flex items-center justify-center gap-2"
            >
              <FiMic className="text-lg" />
              Ask by Voice
            </Link>

            <Link
              href="/climate-tips"
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-4 md:px-6 py-2 md:py-3 rounded-xl font-semibold text-sm md:text-base transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group"
            >
              <FiSearch className="text-lg" />
              Climate Tips
              <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>
        </div>
      </section>

      {/* Browse Categories Section */}
      <section className="py-8 md:py-12 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-6 md:mb-10">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-green-800 mb-3">
              Explore Farming Resources
            </h2>
            <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
              Discover climate-resilient crops, livestock, and fruits perfect
              for Kenyan farmers
            </p>
          </div>

          {/* Category Quick Links */}
          <div className="flex justify-center mb-6 md:mb-10">
            <div className="bg-white rounded-xl shadow-lg p-2 inline-flex flex-wrap gap-2 justify-center">
              <a
                href="#crops"
                className="px-3 md:px-6 py-2 md:py-3 rounded-lg font-semibold text-green-700 hover:bg-green-50 transition-colors duration-300 flex items-center gap-2"
              >
                <RiPlantLine />
                Crops
              </a>
              <a
                href="#livestock"
                className="px-3 md:px-6 py-2 md:py-3 rounded-lg font-semibold text-green-700 hover:bg-green-50 transition-colors duration-300 flex items-center gap-2"
              >
                <PiCow />
                Livestock
              </a>
              <a
                href="#fruits"
                className="px-3 md:px-6 py-2 md:py-3 rounded-lg font-semibold text-green-700 hover:bg-green-50 transition-colors duration-300 flex items-center gap-2"
              >
                <RiAppleLine />
                Fruits
              </a>
            </div>
          </div>

          {/* Crops Section */}
          <div id="crops" className="mb-10 md:mb-14">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 md:mb-6 gap-4">
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-green-800 flex items-center gap-2">
                <RiPlantLine className="text-green-600" />
                Popular Crops
              </h3>
              <Link
                href="/crops"
                className="bg-green-600 hover:bg-green-700 text-white px-3 md:px-6 py-2 rounded-lg font-semibold text-xs md:text-sm flex items-center gap-2 transition-all duration-300 shadow-md hover:shadow-lg group"
              >
                View All Crops
                <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {featuredCrops.map((crop) => (
                <Link
                  key={crop.id}
                  href={`/crops/${crop.id}`}
                  className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-green-100 hover:border-green-300 overflow-hidden group"
                >
                  {/* Image Container */}
                  <div className="relative h-32 md:h-40 bg-green-100 overflow-hidden">
                    {crop.image ? (
                      <Image
                        src={crop.image}
                        alt={crop.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <RiPlantLine className="text-4xl md:text-5xl text-green-600" />
                      </div>
                    )}
                  </div>

                  <div className="p-3 md:p-4">
                    <h4 className="font-bold text-green-800 text-base md:text-lg mb-1">
                      {crop.name}
                    </h4>
                    <p className="text-gray-600 text-xs md:text-sm mb-2 md:mb-3">
                      {crop.localName}
                    </p>
                    <div className="flex flex-wrap gap-1 mb-2 md:mb-3">
                      {crop.climateBadges.slice(0, 2).map((badge, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium"
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                    <div className="text-xs md:text-sm text-gray-500">
                      {crop.difficulty} • {crop.growthTime}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Livestock Section */}
          <div id="livestock" className="mb-10 md:mb-14">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 md:mb-6 gap-4">
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-green-800 flex items-center gap-2">
                <PiCow className="text-green-600" />
                Popular Livestock
              </h3>
              <Link
                href="/livestock"
                className="bg-green-600 hover:bg-green-700 text-white px-3 md:px-6 py-2 rounded-lg font-semibold text-xs md:text-sm flex items-center gap-2 transition-all duration-300 shadow-md hover:shadow-lg group"
              >
                View All Livestock
                <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {featuredLivestock.map((animal) => (
                <Link
                  key={animal.id}
                  href={`/livestock/${animal.id}`}
                  className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-blue-100 hover:border-blue-300 overflow-hidden group"
                >
                  {/* Image Container */}
                  <div className="relative h-32 md:h-40 bg-blue-100 overflow-hidden">
                    {animal.image ? (
                      <Image
                        src={animal.image}
                        alt={animal.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <PiCow className="text-4xl md:text-5xl text-blue-600" />
                      </div>
                    )}
                  </div>

                  <div className="p-3 md:p-4">
                    <h4 className="font-bold text-green-800 text-base md:text-lg mb-1">
                      {animal.name}
                    </h4>
                    <p className="text-gray-600 text-xs md:text-sm mb-2 md:mb-3">
                      {animal.localName}
                    </p>
                    <div className="flex flex-wrap gap-1 mb-2 md:mb-3">
                      {animal.climateBadges.slice(0, 2).map((badge, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium"
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                    <div className="text-xs md:text-sm text-gray-500">
                      {animal.difficulty} • {animal.maturityAge}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Fruits Section */}
          <div id="fruits">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 md:mb-6 gap-4">
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-green-800 flex items-center gap-2">
                <RiAppleLine className="text-green-600" />
                Popular Fruits
              </h3>
              <Link
                href="/fruits"
                className="bg-green-600 hover:bg-green-700 text-white px-3 md:px-6 py-2 rounded-lg font-semibold text-xs md:text-sm flex items-center gap-2 transition-all duration-300 shadow-md hover:shadow-lg group"
              >
                View All Fruits
                <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {featuredFruits.map((fruit) => (
                <Link
                  key={fruit.id}
                  href={`/fruits/${fruit.id}`}
                  className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-orange-100 hover:border-orange-300 overflow-hidden group"
                >
                  {/* Image Container */}
                  <div className="relative h-32 md:h-40 bg-orange-100 overflow-hidden">
                    {fruit.image ? (
                      <Image
                        src={fruit.image}
                        alt={fruit.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <RiAppleLine className="text-4xl md:text-5xl text-orange-600" />
                      </div>
                    )}
                  </div>

                  <div className="p-3 md:p-4">
                    <h4 className="font-bold text-green-800 text-base md:text-lg mb-1">
                      {fruit.name}
                    </h4>
                    <p className="text-gray-600 text-xs md:text-sm mb-2 md:mb-3">
                      {fruit.localName}
                    </p>
                    <div className="flex flex-wrap gap-1 mb-2 md:mb-3">
                      {fruit.climateBadges.slice(0, 2).map((badge, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-medium"
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                    <div className="text-xs md:text-sm text-gray-500">
                      {fruit.difficulty} • {fruit.growthTime}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-8 md:py-12 bg-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-6 md:mb-10">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3">
              Why Choose AgriLearn?
            </h2>
            <p className="text-sm md:text-base text-green-200 max-w-2xl mx-auto">
              Empowering Kenyan small-scale farmers with climate-smart
              agricultural solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            <div className="text-center p-4 md:p-6">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-green-600 rounded-xl flex items-center justify-center mx-auto mb-3 md:mb-4">
                <RiLightbulbFlashLine className="text-xl md:text-2xl" />
              </div>
              <h3 className="text-base md:text-lg font-bold mb-2">
                AI-Powered Advice
              </h3>
              <p className="text-green-200 text-xs md:text-sm">
                Get personalized farming recommendations based on your location
                and climate
              </p>
            </div>

            <div className="text-center p-4 md:p-6">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-green-600 rounded-xl flex items-center justify-center mx-auto mb-3 md:mb-4">
                <RiPlantLine className="text-xl md:text-2xl" />
              </div>
              <h3 className="text-base md:text-lg font-bold mb-2">
                Climate Resilient
              </h3>
              <p className="text-green-200 text-xs md:text-sm">
                Discover crops and practices that thrive in Kenya&apos;s
                changing climate
              </p>
            </div>

            <div className="text-center p-4 md:p-6">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-green-600 rounded-xl flex items-center justify-center mx-auto mb-3 md:mb-4">
                <PiCow className="text-xl md:text-2xl" />
              </div>
              <h3 className="text-base md:text-lg font-bold mb-2">
                Smallholder Focused
              </h3>
              <p className="text-green-200 text-xs md:text-sm">
                Solutions designed specifically for Kenyan small-scale farmers
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 md:py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-green-800 mb-3">
            Ready to Transform Your Farm?
          </h2>
          <p className="text-sm md:text-base text-gray-600 mb-6 md:mb-8">
            Join thousands of Kenyan farmers growing sustainably with AgriLearn
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <Link
              href="/ai-assistant"
              className="bg-green-600 hover:bg-green-700 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg font-bold text-sm md:text-base transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Start Learning Now
            </Link>
            <Link
              href="/about"
              className="bg-white hover:bg-gray-50 text-green-600 px-4 md:px-6 py-2 md:py-3 rounded-lg font-bold text-sm md:text-base transition-all duration-300 border-2 border-green-600"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
