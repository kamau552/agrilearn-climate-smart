"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { crops } from "@/constant/crops";
import { FiSearch } from "react-icons/fi";

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
          <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-3">
            🌱 All Crops
          </h1>
          <p className="text-lg md:text-xl text-gray-600">
            Discover climate-smart crops perfect for Kenyan farmers
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-2xl shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Search */}
            <div className="relative">
              <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search crops by name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent text-base"
              />
            </div>

            {/* Difficulty Filter */}
            <label htmlFor="difficulty-filter" className="sr-only">Filter by difficulty</label>
            <select
              id="difficulty-filter"
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent text-base"
            >
              <option value="all">All Difficulty Levels</option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
          </div>

          {/* Results Count */}
          <div className="mt-4 text-sm text-gray-600">
            Showing <span className="font-semibold text-green-700">{filteredCrops.length}</span> of <span className="font-semibold">{crops.length}</span> crops
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
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-7xl">{crop.emoji}</span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-bold text-green-800 text-xl mb-1">{crop.name}</h3>
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
            <div className="text-6xl mb-4">🌱</div>
            <h3 className="text-2xl font-bold text-gray-700 mb-2">No crops found</h3>
            <p className="text-gray-500 mb-6">Try adjusting your search or filters</p>
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