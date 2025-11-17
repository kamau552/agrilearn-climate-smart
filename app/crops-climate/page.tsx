import React from "react";

export default function CropsClimatePage() {
  const climateZones = [
    {
      name: "Arid & Semi-Arid",
      emoji: "🏜️",
      rainfall: "< 500mm annually",
      crops: ["Sorghum", "Millet", "Cassava", "Pomegranate", "Drought-resistant maize"],
      livestock: ["Goats", "Camels", "Indigenous chickens"]
    },
    {
      name: "Highland",
      emoji: "⛰️",
      rainfall: "1000-1500mm annually",
      crops: ["Potatoes", "Cabbage", "Carrots", "Strawberries", "Tea", "Coffee"],
      livestock: ["Dairy cattle", "Sheep", "Rabbits"]
    },
    {
      name: "Coastal",
      emoji: "🌊",
      rainfall: "900-1200mm annually",
      crops: ["Coconuts", "Mangoes", "Cassava", "Rice", "Pineapples"],
      livestock: ["Goats", "Indigenous chickens", "Ducks"]
    },
    {
      name: "Humid",
      emoji: "🌧️",
      rainfall: "> 1500mm annually",
      crops: ["Bananas", "Sugar cane", "Rice", "Passion fruit", "Vegetables"],
      livestock: ["Cattle", "Pigs", "Chickens", "Ducks"]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-green-800 mb-2">
          ☀️ Crops & Climate Zones
        </h1>
        <p className="text-gray-600 text-lg">
          Find the best crops and livestock for your specific climate zone in Kenya
        </p>
      </div>

      {/* Climate Zones */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {climateZones.map((zone) => (
          <div key={zone.name} className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-5xl">{zone.emoji}</span>
              <div>
                <h3 className="text-2xl font-bold text-green-800">{zone.name}</h3>
                <p className="text-gray-600">{zone.rainfall}</p>
              </div>
            </div>

            <div className="mb-4">
              <h4 className="font-semibold text-green-700 mb-2">🌱 Recommended Crops:</h4>
              <div className="flex flex-wrap gap-2">
                {zone.crops.map((crop) => (
                  <span key={crop} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                    {crop}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-green-700 mb-2">🐄 Recommended Livestock:</h4>
              <div className="flex flex-wrap gap-2">
                {zone.livestock.map((animal) => (
                  <span key={animal} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    {animal}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}