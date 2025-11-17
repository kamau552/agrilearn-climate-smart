"use client";
import AgriCard, { formatBadges } from "@/components/common/card";
import { fruits } from "@/constant/fruits";
import { useState } from "react";

export default function FruitsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFruits = fruits.filter(fruit =>
    fruit.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    fruit.localName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-green-800 mb-2">
          🍎 Fruits Guide
        </h1>
        <p className="text-gray-600 text-lg">
          High-value fruit crops for climate-smart farming
        </p>
      </div>

      {/* Search */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-8">
        <input
          type="text"
          placeholder="Search fruits..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
        />
      </div>

      {/* Fruits Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredFruits.map((fruit) => (
          <AgriCard
            key={fruit.id}
            id={fruit.id}
            title={fruit.name}
            localName={fruit.localName}
            emoji={fruit.emoji}
            description={fruit.description}
            badges={formatBadges(fruit.climateBadges)}
            category="fruits"
            difficulty={fruit.difficulty}
          />
        ))}
      </div>
    </div>
  );
}