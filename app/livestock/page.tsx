"use client";
import AgriCard from "@/components/common/card";
import { livestock } from "@/constant/livestock";
import { useState } from "react";
import { GiCow } from "react-icons/gi";
import { FiSearch } from "react-icons/fi";

export default function LivestockPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState("all");

  const filteredLivestock = livestock.filter(animal => {
    const matchesSearch = animal.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         animal.localName.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDifficulty = selectedDifficulty === "all" || animal.difficulty === selectedDifficulty;
    
    return matchesSearch && matchesDifficulty;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-green-800 mb-2 flex items-center gap-2">
          <GiCow className="text-green-600" />
          Livestock Guide
        </h1>
        <p className="text-gray-600 text-lg">
          Sustainable livestock farming for small-scale farmers
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
            placeholder="Search livestock by name..."
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
                  ? `${level.color.replace("hover:", "")} border-current shadow-sm scale-105`
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
            {filteredLivestock.length}
          </span>
          <span>of</span>
          <span className="font-medium text-gray-700 mx-1">
            {livestock.length}
          </span>
          <span>animals</span>
        </div>
      </div>

      {/* Livestock Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {filteredLivestock.map((animal) => (
          <AgriCard
            key={animal.id}
            id={animal.id}
            title={animal.name}
            localName={animal.localName}
            image={animal.image}
            description={animal.description}
            badges={animal.climateBadges}
            category="livestock"
            difficulty={animal.difficulty}
            marketValue={animal.marketValue}
          />
        ))}
      </div>

      {filteredLivestock.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No livestock found matching your criteria.</p>
        </div>
      )}
    </div>
  );
}