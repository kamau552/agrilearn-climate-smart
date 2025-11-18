import React from "react";

// Professional SVG Icons
const DesertIcon = ({ className = "w-12 h-12" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
  </svg>
);

const MountainIcon = ({ className = "w-12 h-12" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
  </svg>
);

const CoastalIcon = ({ className = "w-12 h-12" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4 4 0 003 15z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 19l2-2m4 0l2 2" />
  </svg>
);

const RainIcon = ({ className = "w-12 h-12" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4 4 0 003 15z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 13l3 3m0 0l3-3m-3 3v6" />
  </svg>
);

const PlantIcon = ({ className = "w-8 h-8" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
  </svg>
);

const AnimalIcon = ({ className = "w-8 h-8" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.5 12.75l6 6 9-13.5" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21a9 9 0 110-18 9 9 0 010 18z" />
  </svg>
);

const SunIcon = ({ className = "w-8 h-8" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

const LocationIcon = ({ className = "w-8 h-8" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

export default function CropsClimatePage() {
  const climateZones = [
    {
      name: "Arid & Semi-Arid",
      icon: <DesertIcon />,
      rainfall: "< 500mm annually",
      description: "Low rainfall areas requiring drought-resistant varieties",
      crops: [
        "Sorghum",
        "Millet",
        "Cassava",
        "Pomegranate",
        "Drought-resistant maize",
      ],
      livestock: ["Goats", "Camels", "Indigenous chickens"],
      gradient: "from-yellow-400 to-orange-500",
      bgGradient: "from-yellow-50 to-orange-50",
      borderColor: "border-orange-300",
      accentColor: "orange",
      textColor: "text-orange-600",
    },
    {
      name: "Highland",
      icon: <MountainIcon />,
      rainfall: "1000-1500mm annually",
      description: "Cool temperatures, ideal for temperate crops",
      crops: [
        "Potatoes",
        "Cabbage",
        "Carrots",
        "Strawberries",
        "Tea",
        "Coffee",
      ],
      livestock: ["Dairy cattle", "Sheep", "Rabbits"],
      gradient: "from-blue-400 to-indigo-500",
      bgGradient: "from-blue-50 to-indigo-50",
      borderColor: "border-indigo-300",
      accentColor: "indigo",
      textColor: "text-indigo-600",
    },
    {
      name: "Coastal",
      icon: <CoastalIcon />,
      rainfall: "900-1200mm annually",
      description: "Warm, humid conditions near the ocean",
      crops: ["Coconuts", "Mangoes", "Cassava", "Rice", "Pineapples"],
      livestock: ["Goats", "Indigenous chickens", "Ducks"],
      gradient: "from-cyan-400 to-teal-500",
      bgGradient: "from-cyan-50 to-teal-50",
      borderColor: "border-teal-300",
      accentColor: "teal",
      textColor: "text-teal-600",
    },
    {
      name: "Humid",
      icon: <RainIcon />,
      rainfall: "> 1500mm annually",
      description: "High rainfall regions with lush vegetation",
      crops: ["Bananas", "Sugar cane", "Rice", "Passion fruit", "Vegetables"],
      livestock: ["Cattle", "Pigs", "Chickens", "Ducks"],
      gradient: "from-green-400 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50",
      borderColor: "border-emerald-300",
      accentColor: "emerald",
      textColor: "text-emerald-600",
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-amber-50 via-yellow-50 to-orange-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-12">
      <div className="max-w-7xl mx-auto">
        {/* Enhanced Header */}
        <div className="mb-8 sm:mb-12 text-center">
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 sm:px-5 sm:py-2 shadow-md mb-4 sm:mb-6 border border-orange-100">
            <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
            <span className="text-orange-700 font-bold text-xs sm:text-sm uppercase tracking-wider">
              Regional Guide
            </span>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-4">
            <SunIcon className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-orange-600" />
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 tracking-tight">
              Crops & Climate Zones
            </h1>
          </div>
          <p className="text-gray-600 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed px-2">
            Discover the best crops and livestock for your specific climate zone in Kenya
          </p>
        </div>

        {/* Enhanced Climate Zones Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {climateZones.map((zone) => (
            <div
              key={zone.name}
              className={`group bg-white rounded-xl sm:rounded-2xl lg:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 ${zone.borderColor} transform hover:-translate-y-1 sm:hover:-translate-y-2`}
            >
              {/* Top Gradient Bar */}
              <div className={`h-1.5 bg-linear-to-r ${zone.gradient} group-hover:h-2 transition-all duration-300`}></div>

              {/* Header Section with Enhanced Design */}
              <div
                className={`bg-linear-to-br ${zone.bgGradient} p-4 sm:p-6 lg:p-8 border-b-2 ${zone.borderColor} group-hover:bg-linear-to-br group-hover:from-white group-hover:to-${zone.bgGradient.split(' ')[2]} transition-all duration-300`}
              >
                <div className="flex items-start gap-3 sm:gap-4 lg:gap-5 mb-3 sm:mb-4">
                  <div className={`${zone.textColor} transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 p-1 sm:p-2`}>
                    {zone.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-1 sm:mb-2 tracking-tight group-hover:text-gray-800 transition-colors">
                      {zone.name}
                    </h3>
                    <div className="inline-block bg-white/80 backdrop-blur-sm rounded-full px-3 py-1 sm:px-4 sm:py-1.5 shadow-sm group-hover:bg-white transition-colors">
                      <p className="text-xs sm:text-sm font-bold text-gray-700">
                        {zone.rainfall}
                      </p>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed group-hover:text-gray-600 transition-colors">
                  {zone.description}
                </p>
              </div>

              {/* Content Section */}
              <div className="p-4 sm:p-6 lg:p-8 space-y-4 sm:space-y-6 lg:space-y-7">
                {/* Crops Section */}
                <div>
                  <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <div
                      className={`w-8 h-8 sm:w-10 sm:h-10 bg-linear-to-br ${zone.gradient} rounded-lg sm:rounded-xl flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform duration-300`}
                    >
                      <PlantIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <h4 className="font-bold text-gray-900 text-base sm:text-lg group-hover:text-gray-800 transition-colors">
                      Recommended Crops
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {zone.crops.map((crop) => (
                      <span
                        key={crop}
                        className="group/tag bg-green-100 text-green-800 px-3 py-1.5 sm:px-4 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold hover:bg-green-200 hover:shadow-md transition-all cursor-default border border-green-200 hover:scale-105"
                      >
                        {crop}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Livestock Section */}
                <div>
                  <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <div
                      className={`w-8 h-8 sm:w-10 sm:h-10 bg-linear-to-br ${zone.gradient} rounded-lg sm:rounded-xl flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform duration-300`}
                    >
                      <AnimalIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <h4 className="font-bold text-gray-900 text-base sm:text-lg group-hover:text-gray-800 transition-colors">
                      Recommended Livestock
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {zone.livestock.map((animal) => (
                      <span
                        key={animal}
                        className="group/tag bg-blue-100 text-blue-800 px-3 py-1.5 sm:px-4 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold hover:bg-blue-200 hover:shadow-md transition-all cursor-default border border-blue-200 hover:scale-105"
                      >
                        {animal}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Info Card */}
        <div className="mt-8 sm:mt-12 bg-linear-to-r from-orange-600 to-amber-600 rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-8 xl:p-10 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 lg:gap-6">
            <div className="text-orange-200 transform group-hover:scale-110 transition-transform duration-300">
              <LocationIcon className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />
            </div>
            <div className="flex-1 text-center sm:text-left">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-1 sm:mb-2 group-hover:text-orange-100 transition-colors">
                Not sure about your zone?
              </h3>
              <p className="text-orange-50 text-sm sm:text-base lg:text-lg group-hover:text-orange-100 transition-colors">
                Use our AI assistant to identify your climate zone and get personalized crop recommendations
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}