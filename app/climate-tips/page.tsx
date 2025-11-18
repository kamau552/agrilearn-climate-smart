import React from "react";

// Professional SVG Icons
const WaterIcon = ({ className = "w-12 h-12" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v6m4-6v6m4-6v6M3 12h18M3 7h18m-3-5H6a2 2 0 00-2 2v2a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2z" />
  </svg>
);

const SoilIcon = ({ className = "w-12 h-12" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
  </svg>
);

const ClimateIcon = ({ className = "w-12 h-12" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

const PestIcon = ({ className = "w-12 h-12" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
  </svg>
);

const CloudIcon = ({ className = "w-8 h-8" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4 4 0 003 15z" />
  </svg>
);

const RobotIcon = ({ className = "w-12 h-12" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
  </svg>
);

export default function ClimateTipsPage() {
  const tips = [
    {
      icon: <WaterIcon />,
      title: "Water Conservation",
      color: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
      borderColor: "border-blue-200",
      iconBg: "bg-blue-100",
      textColor: "text-blue-600",
      items: [
        "Use drip irrigation to save 50% more water",
        "Mulch around plants to retain moisture",
        "Harvest rainwater in tanks for dry seasons",
        "Plant drought-resistant crops",
        "Water early morning or late evening",
      ],
    },
    {
      icon: <SoilIcon />,
      title: "Soil Health",
      color: "from-green-500 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50",
      borderColor: "border-green-200",
      iconBg: "bg-green-100",
      textColor: "text-green-600",
      items: [
        "Add compost to improve soil structure",
        "Practice crop rotation every season",
        "Plant cover crops to prevent erosion",
        "Test soil pH and nutrient levels",
        "Avoid over-tilling to preserve soil life",
      ],
    },
    {
      icon: <ClimateIcon />,
      title: "Climate Adaptation",
      color: "from-orange-500 to-red-500",
      bgGradient: "from-orange-50 to-red-50",
      borderColor: "border-orange-200",
      iconBg: "bg-orange-100",
      textColor: "text-orange-600",
      items: [
        "Choose heat/drought-tolerant varieties",
        "Diversify crops to spread risk",
        "Plant trees for shade and windbreaks",
        "Monitor weather forecasts regularly",
        "Adjust planting dates based on rainfall",
      ],
    },
    {
      icon: <PestIcon />,
      title: "Organic Pest Control",
      color: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50",
      borderColor: "border-purple-200",
      iconBg: "bg-purple-100",
      textColor: "text-purple-600",
      items: [
        "Use neem oil for natural pest control",
        "Plant companion plants to deter pests",
        "Encourage beneficial insects",
        "Remove diseased plants immediately",
        "Rotate crops to break pest cycles",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-cyan-50 to-teal-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-12">
      <div className="max-w-7xl mx-auto">
        {/* Enhanced Header */}
        <div className="mb-8 sm:mb-12 text-center">
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 sm:px-5 sm:py-2 shadow-md mb-4 sm:mb-6 border border-blue-100">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <span className="text-blue-700 font-bold text-xs sm:text-sm uppercase tracking-wider">
              Climate Smart
            </span>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-4">
            <CloudIcon className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-blue-600" />
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 tracking-tight">
              Climate Tips
            </h1>
          </div>
          <p className="text-gray-600 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed px-2">
            Essential climate-smart farming practices for resilient agriculture in Kenya
          </p>
        </div>

        {/* Enhanced Tips Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
          {tips.map((tip) => (
            <div
              key={tip.title}
              className={`group bg-white rounded-xl sm:rounded-2xl lg:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 ${tip.borderColor} transform hover:-translate-y-1 sm:hover:-translate-y-2`}
            >
              {/* Top Gradient Bar */}
              <div className={`h-1.5 bg-linear-to-r ${tip.color} group-hover:h-2 transition-all duration-300`}></div>

              {/* Header Section */}
              <div
                className={`bg-linear-to-br ${tip.bgGradient} p-4 sm:p-6 lg:p-8 border-b-2 ${tip.borderColor} group-hover:bg-linear-to-br group-hover:from-white group-hover:to-${tip.bgGradient.split(' ')[2]} transition-all duration-300`}
              >
                <div
                  className={`${tip.iconBg} ${tip.textColor} w-16 h-16 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 shadow-md group-hover:scale-110 transition-transform duration-300 p-3`}
                >
                  {tip.icon}
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 tracking-tight group-hover:text-gray-800 transition-colors">
                  {tip.title}
                </h3>
              </div>

              {/* Content Section */}
              <div className="p-4 sm:p-6 lg:p-8">
                <ul className="space-y-2 sm:space-y-3 lg:space-y-4">
                  {tip.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 sm:gap-3 group/item hover:bg-gray-50 rounded-lg p-2 -mx-2 transition-colors">
                      <span
                        className={`shrink-0 w-5 h-5 sm:w-6 sm:h-6 bg-linear-to-br ${tip.color} rounded-full flex items-center justify-center text-white text-xs font-bold mt-0.5 shadow-sm group-hover/item:scale-110 transition-transform`}
                      >
                        ✓
                      </span>
                      <span className="text-gray-700 text-sm sm:text-base leading-relaxed group-hover/item:text-gray-800 transition-colors">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced CTA Card */}
        <div className="relative bg-linear-to-r from-green-600 via-emerald-600 to-teal-600 rounded-xl sm:rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-10 xl:p-14 text-white shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-white opacity-5 rounded-full -mr-16 sm:-mr-24 lg:-mr-32 -mt-16 sm:-mt-24 lg:-mt-32"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 sm:w-36 sm:h-36 lg:w-48 lg:h-48 bg-white opacity-5 rounded-full -ml-12 sm:-ml-18 lg:-ml-24 -mb-12 sm:-mb-18 lg:-mb-24"></div>

          <div className="relative max-w-3xl mx-auto text-center">
            <div className="text-green-200 mb-4 sm:mb-6 inline-block transform group-hover:scale-110 transition-transform duration-300">
              <RobotIcon className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16" />
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 tracking-tight group-hover:text-green-100 transition-colors">
              Need Personalized Climate Advice?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 text-green-50 leading-relaxed group-hover:text-green-100 transition-colors">
              Get AI-powered recommendations tailored to your specific farm location, crops, and climate conditions
            </p>
            <button className="group bg-white text-green-600 px-6 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-5 rounded-full font-bold text-sm sm:text-base lg:text-lg hover:bg-green-50 transition-all duration-300 shadow-xl hover:shadow-lg transform hover:-translate-y-1 hover:scale-105">
              Ask AI Now
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">
                →
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}