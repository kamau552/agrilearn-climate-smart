"use client";
import AgriCard from "@/components/common/card";
import { livestock } from "@/constant/livestock";
import { useState } from "react";

export default function LivestockPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredLivestock = livestock.filter(animal =>
    animal.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    animal.localName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  console.log("Livestock page - animals:", filteredLivestock.map(a => a.id));

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-blue-800 mb-2">
          🐄 Livestock Guide
        </h1>
        <p className="text-gray-600 text-lg">
          Sustainable livestock farming for small-scale farmers
        </p>
      </div>

      {/* Search */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-8">
        <input
          type="text"
          placeholder="Search livestock..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      {/* Livestock Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredLivestock.map((animal) => (
          <AgriCard
            key={animal.id}
            id={animal.id}
            title={animal.name}
            localName={animal.localName}
            emoji={animal.emoji}
            description={animal.description}
            badges={animal.climateBadges}
            category="livestock"
            difficulty={animal.difficulty}
            marketValue={animal.marketValue}
          />
        ))}
      </div>
    </div>
  );
}