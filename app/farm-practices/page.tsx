import React from 'react'

// Professional SVG Icons
const CropRotationIcon = ({ className = "w-12 h-12" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
  </svg>
);

const CompostingIcon = ({ className = "w-12 h-12" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
  </svg>
);

const IntercroppingIcon = ({ className = "w-12 h-12" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
  </svg>
);

const MulchingIcon = ({ className = "w-12 h-12" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
  </svg>
);

const BookIcon = ({ className = "w-8 h-8" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
);

const LightbulbIcon = ({ className = "w-8 h-8" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m15.364-6.364l-.707-.707M12 5.5A6.5 6.5 0 005.5 12v3.5h11V12A6.5 6.5 0 0012 5.5z" />
  </svg>
);

export default function FarmPracticesPage() {
  const practices = [
    {
      title: "Crop Rotation",
      icon: <CropRotationIcon />,
      description: "Alternate different crops to improve soil health and reduce pests",
      steps: [
        "Plan 3-4 year rotation",
        "Alternate deep and shallow-rooted crops",
        "Include legumes for nitrogen",
        "Keep detailed records",
      ],
      color: "from-emerald-400 to-green-500",
      bgColor: "from-emerald-50 to-green-50",
      textColor: "text-emerald-600",
      accentColor: "emerald",
    },
    {
      title: "Composting",
      icon: <CompostingIcon />,
      description: "Turn farm waste into nutrient-rich organic fertilizer",
      steps: [
        "Collect plant waste and manure",
        "Layer green and brown materials",
        "Keep moist and turn weekly",
        "Use after 2-3 months maturation",
      ],
      color: "from-amber-400 to-orange-500",
      bgColor: "from-amber-50 to-orange-50",
      textColor: "text-amber-600",
      accentColor: "amber",
    },
    {
      title: "Intercropping",
      icon: <IntercroppingIcon />,
      description: "Grow complementary crops together for better yields and pest control",
      steps: [
        "Choose compatible crop combinations",
        "Plant tall and short crops together",
        "Maximize space usage efficiency",
        "Reduce pest and disease problems",
      ],
      color: "from-teal-400 to-cyan-500",
      bgColor: "from-teal-50 to-cyan-50",
      textColor: "text-teal-600",
      accentColor: "teal",
    },
    {
      title: "Mulching",
      icon: <MulchingIcon />,
      description: "Cover soil to retain moisture, suppress weeds, and regulate temperature",
      steps: [
        "Use dry grass or crop residues",
        "Apply 5-10cm thick layer",
        "Keep away from plant stems",
        "Replenish as needed seasonally",
      ],
      color: "from-amber-600 to-orange-600",
      bgColor: "from-amber-50 to-orange-50",
      textColor: "text-amber-600",
      accentColor: "amber",
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-green-50 via-emerald-50 to-teal-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-12">
      <div className="max-w-7xl mx-auto">
        {/* Enhanced Header Section */}
        <div className="mb-8 sm:mb-12 text-center">
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 sm:px-5 sm:py-2 shadow-md mb-4 sm:mb-6 border border-green-100">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-green-700 font-bold text-xs sm:text-sm uppercase tracking-wider">
              Sustainable Practices
            </span>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-4">
            <BookIcon className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-green-600" />
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 tracking-tight">
              Farm Practices Guide
            </h1>
          </div>
          <p className="text-gray-600 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed px-2">
            Master sustainable farming techniques for better yields and healthier soil ecosystems
          </p>
        </div>

        {/* Enhanced Practices Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {practices.map((practice, index) => (
            <div
              key={practice.title}
              className="group relative bg-white rounded-xl sm:rounded-2xl lg:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-gray-200 transform hover:-translate-y-1 sm:hover:-translate-y-2"
            >
              {/* Hover Gradient Overlay */}
              <div
                className={`absolute inset-0 bg-linear-to-br ${practice.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-xl sm:rounded-2xl lg:rounded-3xl`}
              ></div>

              {/* Top Accent Line */}
              <div className={`h-1.5 bg-linear-to-r ${practice.color} group-hover:h-2 transition-all duration-300`}></div>
              {/* Card Header with Gradient */}
              <div
                className={`bg-linear-to-br ${practice.bgColor} p-4 sm:p-6 lg:p-8 relative group-hover:bg-linear-to-br group-hover:from-white group-hover:to-${practice.bgColor.split(' ')[2]} transition-all duration-300`}
              >
                <div className="flex items-start justify-between mb-3 sm:mb-4">
                  <div className={`${practice.textColor} transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 p-1 sm:p-2`}>
                    {practice.icon}
                  </div>
                  <div
                    className={`bg-linear-to-br ${practice.color} text-white rounded-lg sm:rounded-xl lg:rounded-2xl w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 flex items-center justify-center font-bold text-xs sm:text-sm lg:text-lg shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2 sm:mb-3 tracking-tight group-hover:text-gray-800 transition-colors">
                  {practice.title}
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg group-hover:text-gray-600 transition-colors">
                  {practice.description}
                </p>
              </div>

              {/* Steps Section */}
              <div className="p-4 sm:p-6 lg:p-8">
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4 lg:mb-5">
                  <div
                    className={`w-6 sm:w-8 lg:w-10 h-1 bg-linear-to-r ${practice.color} rounded-full group-hover:w-8 sm:group-hover:w-10 lg:group-hover:w-12 transition-all duration-300`}
                  ></div>
                  <h4 className="font-bold text-gray-900 text-sm sm:text-base lg:text-lg group-hover:text-gray-800 transition-colors">
                    Implementation Steps
                  </h4>
                </div>
                <ul className="space-y-2 sm:space-y-3 lg:space-y-4">
                  {practice.steps.map((step, idx) => (
                    <li key={idx} className="flex items-start gap-2 sm:gap-3 lg:gap-4 group/item hover:bg-gray-50 rounded-lg p-2 -mx-2 transition-colors">
                      <span
                        className={`shrink-0 w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 bg-linear-to-br ${practice.color} rounded-full flex items-center justify-center text-white text-xs sm:text-xs lg:text-sm font-bold shadow-md group-hover/item:scale-110 group-hover/item:shadow-lg transition-all duration-200`}
                      >
                        {idx + 1}
                      </span>
                      <span className="text-gray-700 text-sm sm:text-base pt-0.5 sm:pt-1 leading-relaxed group-hover/item:text-gray-800 transition-colors">
                        {step}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Tip Card */}
        <div className="mt-8 sm:mt-12 bg-linear-to-r from-green-700 to-emerald-600 rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-10 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 lg:gap-6">
            <div className="text-green-200 transform group-hover:scale-110 transition-transform duration-300">
              <LightbulbIcon className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16" />
            </div>
            <div className="flex-1 text-center sm:text-left">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 group-hover:text-green-100 transition-colors">
                Pro Tip
              </h3>
              <p className="text-green-50 text-sm sm:text-base lg:text-lg group-hover:text-green-100 transition-colors">
                Combine multiple practices for maximum benefit. Crop rotation works even better when integrated with composting and mulching techniques!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}