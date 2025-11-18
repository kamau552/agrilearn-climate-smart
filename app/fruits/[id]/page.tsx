import { fruits } from "@/constant/fruits";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function FruitDetailPage({ params }: PageProps) {
  const { id } = await params;
  
  // Find the fruit by ID
  const fruit = fruits.find(f => f.id === id);
  
  // If fruit doesn't exist, show 404
  if (!fruit) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main container with sidebar consideration */}
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-4 sm:py-6 lg:py-8 lg:ml-0 lg:mr-0 xl:mx-auto">
        {/* Breadcrumb */}
        <nav className="mb-4 sm:mb-6 flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-gray-600 flex-wrap">
          <Link href="/" className="hover:text-green-600 transition-colors whitespace-nowrap">Home</Link>
          <span>/</span>
          <Link href="/fruits" className="hover:text-green-600 transition-colors whitespace-nowrap">Fruits</Link>
          <span>/</span>
          <span className="text-green-800 font-semibold truncate">{fruit.name}</span>
        </nav>

        {/* Main Content */}
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden">
          {/* Hero Section */}
          <div className="bg-linear-to-br from-orange-50 to-orange-100 p-4 sm:p-6 lg:p-8">
            <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8 items-start">
              {/* Image - Responsive */}
              <div className="w-full lg:w-64 xl:w-80 h-48 sm:h-64 lg:h-80 bg-white rounded-xl sm:rounded-2xl shadow-md overflow-hidden shrink-0 mx-auto lg:mx-0 mb-4 lg:mb-0">
                {fruit.image ? (
                  <div className="relative w-full h-full">
                    <Image
                      src={fruit.image}
                      alt={fruit.name}
                      fill
                      className="object-cover rounded-xl sm:rounded-2xl"
                      priority
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 320px"
                    />
                  </div>
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-linear-to-br from-orange-100 to-orange-200">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-orange-200 rounded-full flex items-center justify-center mx-auto mb-2">
                        <svg className="w-8 h-8 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0A1.5 1.5 0 013 15.546V6.454c0-.523.151-1.046.454-1.5A2.704 2.704 0 016 4.454c.523 0 1.046.151 1.5.454a2.704 2.704 0 003 0 2.704 2.704 0 013 0 2.704 2.704 0 003 0 2.704 2.704 0 013 0c.454-.303.977-.454 1.5-.454.523 0 1.046.151 1.5.454.303.454.454.977.454 1.5v9.092z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 10V6.454c0-.523.151-1.046.454-1.5A2.704 2.704 0 0110 4.454c.523 0 1.046.151 1.5.454.303.454.454.977.454 1.5V10" />
                        </svg>
                      </div>
                      <p className="text-orange-400 text-sm font-medium">Image Coming Soon</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="flex-1 w-full min-w-0">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-orange-800 mb-2 text-center lg:text-left wrap-break-words">
                  {fruit.name}
                </h1>
                <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 italic mb-2 text-center lg:text-left wrap-break-words">
                  {fruit.localName}
                </p>
                <p className="text-xs sm:text-sm text-gray-500 mb-4 sm:mb-6 text-center lg:text-left">
                  {fruit.scientificName}
                </p>

                {/* Climate Badges */}
                <div className="flex flex-wrap gap-1 sm:gap-2 mb-4 sm:mb-6 justify-center lg:justify-start">
                  {(fruit.climateBadges || []).map((badge, idx) => (
                    <span
                      key={idx}
                      className="px-2 sm:px-3 py-1 sm:py-2 bg-orange-600 text-white rounded-full text-xs sm:text-sm font-medium whitespace-nowrap shrink-0"
                    >
                      {badge.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                    </span>
                  ))}
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                  {[
                    { label: "Difficulty", value: fruit.difficulty, icon: (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    )},
                    { label: "Growth Time", value: fruit.growthTime, icon: (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )},
                    { label: "Water Needs", value: fruit.waterNeeds, icon: (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    )}
                  ].map((stat, index) => (
                    <div 
                      key={index} 
                      className="bg-white p-3 sm:p-4 rounded-lg sm:rounded-xl shadow-sm border border-orange-100 hover:border-orange-300 transition-colors"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-orange-600">{stat.icon}</span>
                        <div className="text-xs sm:text-sm text-gray-600 font-medium truncate">
                          {stat.label}
                        </div>
                      </div>
                      <div className="font-bold text-orange-800 text-sm sm:text-base capitalize wrap-break-words">
                        {stat.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="p-4 sm:p-6 lg:p-8 border-b">
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              {fruit.description}
            </p>
          </div>

          {/* Climate Requirements */}
          <div className="p-4 sm:p-6 lg:p-8 bg-blue-50 border-b">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-orange-800 mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3 justify-center lg:justify-start">
              <svg className="w-6 h-6 sm:w-8 sm:h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              Climate Requirements
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
              <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-sm">
                <h3 className="font-semibold text-gray-700 text-sm sm:text-base mb-2">Temperature Range</h3>
                <p className="text-orange-700 font-medium text-base sm:text-lg wrap-break-words">{fruit.temperatureRange}</p>
              </div>
              <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-sm">
                <h3 className="font-semibold text-gray-700 text-sm sm:text-base mb-2">Rainfall Needs</h3>
                <p className="text-orange-700 font-medium text-base sm:text-lg wrap-break-words">{fruit.rainfallNeeds}</p>
              </div>
              <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-sm">
                <h3 className="font-semibold text-gray-700 text-sm sm:text-base mb-2">Soil Type</h3>
                <p className="text-orange-700 font-medium text-base sm:text-lg wrap-break-words">{fruit.soilType}</p>
              </div>
            </div>
          </div>

          {/* Planting Instructions */}
          {fruit.plantingInstructions && fruit.plantingInstructions.length > 0 && (
            <div className="p-4 sm:p-6 lg:p-8 border-b">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-orange-800 mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3 justify-center lg:justify-start">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                How to Plant {fruit.name}
              </h2>
              <div className="space-y-3 sm:space-y-4">
                {fruit.plantingInstructions.map((instruction, idx) => (
                  <div key={idx} className="flex gap-3 sm:gap-4 items-start">
                    <div className="shrink-0 w-6 h-6 sm:w-8 sm:h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-xs sm:text-sm">
                      {idx + 1}
                    </div>
                    <p className="text-gray-700 text-sm sm:text-lg pt-0.5 sm:pt-1 wrap-break-words">{instruction}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Common Diseases */}
          {fruit.commonDiseases && fruit.commonDiseases.length > 0 && (
            <div className="p-4 sm:p-6 lg:p-8 border-b">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-orange-800 mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3 justify-center lg:justify-start">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                Common Problems & Solutions
              </h2>
              <div className="space-y-4 sm:space-y-6">
                {fruit.commonDiseases.map((disease, idx) => (
                  <div key={idx} className="border-l-4 border-red-500 bg-red-50 p-4 sm:p-6 rounded-r-lg sm:rounded-r-xl">
                    <h3 className="font-bold text-lg sm:text-xl text-gray-800 mb-2 sm:mb-3 wrap-break-words">{disease.name}</h3>
                    <div className="space-y-2 sm:space-y-3">
                      <div>
                        <span className="font-semibold text-gray-700 text-sm sm:text-base">Symptoms:</span>
                        <p className="text-gray-600 mt-1 text-sm sm:text-base wrap-break-words">{disease.symptoms}</p>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-700 text-sm sm:text-base">Treatment:</span>
                        <p className="text-gray-600 mt-1 text-sm sm:text-base wrap-break-words">{disease.treatment}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Harvest & Storage Tips */}
          {(fruit.harvestTips || fruit.storageTips) && (
            <div className="p-4 sm:p-6 lg:p-8 bg-green-50">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-green-800 mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3 justify-center lg:justify-start">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Harvest & Storage
              </h2>
              <div className="space-y-4 sm:space-y-6">
                {fruit.harvestTips && fruit.harvestTips.length > 0 && (
                  <div>
                    <h3 className="font-bold text-lg sm:text-xl text-gray-800 mb-3">Harvesting Tips</h3>
                    <ul className="space-y-2 sm:space-y-3">
                      {fruit.harvestTips.map((tip, idx) => (
                        <li key={idx} className="flex gap-2 sm:gap-3 items-start text-gray-700 text-sm sm:text-lg">
                          <span className="text-green-600 text-xl sm:text-2xl mt-0.5 shrink-0">✓</span>
                          <span className="pt-0.5 sm:pt-1 wrap-break-words">{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {fruit.storageTips && fruit.storageTips.length > 0 && (
                  <div>
                    <h3 className="font-bold text-lg sm:text-xl text-gray-800 mb-3">Storage Guidelines</h3>
                    <ul className="space-y-2 sm:space-y-3">
                      {fruit.storageTips.map((tip, idx) => (
                        <li key={idx} className="flex gap-2 sm:gap-3 items-start text-gray-700 text-sm sm:text-lg">
                          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                          </svg>
                          <span className="pt-0.5 sm:pt-1 wrap-break-words">{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Nutritional Benefits */}
          {fruit.nutritionalBenefits && fruit.nutritionalBenefits.length > 0 && (
            <div className="p-4 sm:p-6 lg:p-8 bg-purple-50">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-green-800 mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3 justify-center lg:justify-start">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                Nutritional Benefits
              </h2>
              <ul className="space-y-2 sm:space-y-3">
                {fruit.nutritionalBenefits.map((benefit, idx) => (
                  <li key={idx} className="flex gap-2 sm:gap-3 items-start text-gray-700 text-sm sm:text-lg">
                    <span className="text-green-600 text-xl sm:text-2xl mt-0.5 shrink-0">•</span>
                    <span className="pt-0.5 sm:pt-1 wrap-break-words">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* AI Assistant CTA */}
        <div className="mt-4 sm:mt-6 lg:mt-8 bg-linear-to-r from-green-600 to-green-700 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 text-white text-center shadow-xl">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 wrap-break-words">Have Questions About {fruit.name}?</h2>
          <p className="text-base sm:text-xl mb-4 sm:mb-6">Ask our AI assistant for personalized fruit farming advice</p>
          <Link
            href={`/ai-assistant?topic=${fruit.id}`}
            className="inline-block bg-white text-green-600 px-6 sm:px-8 lg:px-10 py-2 sm:py-3 lg:py-4 rounded-lg sm:rounded-xl font-bold text-base sm:text-lg hover:bg-green-50 transition-colors shadow-lg wrap-break-words"
          >
            Ask AI About {fruit.name}
          </Link>
        </div>
      </div>
    </div>
  );
}

// Generate static params for better performance
export async function generateStaticParams() {
  return fruits.map((fruit) => ({
    id: fruit.id,
  }));
}

// Generate metadata
export async function generateMetadata({ params }: PageProps) {
  const { id } = await params;
  const fruit = fruits.find(f => f.id === id);
  
  return {
    title: fruit ? `${fruit.name} - AgriLearn` : 'Fruit Not Found',
    description: fruit?.description,
  };
}