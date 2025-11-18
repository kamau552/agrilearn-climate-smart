"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { crops } from "@/constant/crops";
import { FiSearch } from "react-icons/fi";
import { PiPlant } from "react-icons/pi";

export default function CropsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("all");

  // Filter crops
  const filteredCrops = crops.filter(crop => {
    const matchesSearch = crop.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         crop.localName.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDifficulty = selectedDifficulty === "all" || crop.difficulty === selectedDifficulty;
    
    return matchesSearch && matchesDifficulty;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-green-800 mb-2 flex items-center gap-2">
            <PiPlant className="text-green-800" />
            Crop Guide
          </h1>
          <p className="text-lg md:text-xl text-gray-600">
            Discover climate-smart crops perfect for Kenyan farmers
          </p>
        </div>

        {/* Filters - Chip Style */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
          {/* Search */}
          <div className="relative mb-4">
            <FiSearch
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={18}
            />
            <input
              type="text"
              placeholder="Search crops by name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-sm transition-colors"
            />
          </div>

          {/* Difficulty Filter Chips */}
          <div className="flex flex-wrap gap-2">
            <span className="text-xs text-gray-500 font-medium mr-2 self-center">
              Difficulty:
            </span>
            {[
              {
                value: "all",
                label: "All Levels",
                color: "bg-gray-100 text-gray-700 hover:bg-gray-200",
              },
              {
                value: "beginner",
                label: "Beginner",
                color: "bg-green-100 text-green-700 hover:bg-green-200",
              },
              {
                value: "intermediate",
                label: "Intermediate",
                color: "bg-yellow-100 text-yellow-700 hover:bg-yellow-200",
              },
              {
                value: "advanced",
                label: "Advanced",
                color: "bg-red-100 text-red-700 hover:bg-red-200",
              },
            ].map((level) => (
              <button
                key={level.value}
                onClick={() => setSelectedDifficulty(level.value)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 border ${
                  selectedDifficulty === level.value
                    ? `${level.color.replace(
                        "hover:",
                        ""
                      )} border-current shadow-sm scale-105`
                    : `${level.color} border-transparent hover:scale-102`
                }`}
              >
                {level.label}
              </button>
            ))}
          </div>

          {/* Results Count */}
          <div className="mt-4 text-xs text-gray-500 flex items-center">
            <span>Showing</span>
            <span className="font-medium text-green-700 mx-1">
              {filteredCrops.length}
            </span>
            <span>of</span>
            <span className="font-medium text-gray-700 mx-1">
              {crops.length}
            </span>
            <span>crops</span>
          </div>
        </div>

        {/* Crops Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCrops.map((crop) => (
            <Link
              key={crop.id}
              href={`/crops/${crop.id}`}
              className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all border-2 border-green-100 hover:border-green-300 overflow-hidden group"
            >
              {/* Image Container */}
              <div className="relative h-48 bg-linear-to-br from-green-50 to-green-100 overflow-hidden">
                {crop.image ? (
                  <Image
                    src={crop.image}
                    alt={crop.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center"></div>
                )}
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-bold text-green-800 text-xl mb-1">
                  {crop.name}
                </h3>
                <p className="text-gray-600 text-base mb-3">{crop.localName}</p>

                {/* Badges */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {crop.climateBadges.slice(0, 2).map((badge, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium"
                    >
                      {badge}
                    </span>
                  ))}
                </div>

                {/* Info */}
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span className="capitalize">{crop.difficulty}</span>
                  <span>{crop.growthTime}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* No Results */}
        {filteredCrops.length === 0 && (
          <div className="text-center py-16">
            <div className="flex justify-center text-green-800 text-6xl mb-4"><PiPlant /></div>
            <h3 className="text-2xl font-bold text-gray-700 mb-2">
              No crops found
            </h3>
            <p className="text-gray-500 mb-6">
              Try adjusting your search or filters
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedDifficulty("all");
              }}
              className="bg-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-700 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}