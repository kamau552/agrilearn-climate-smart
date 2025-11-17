import { livestock } from "@/constant/livestock";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

interface PageProps {
  params: Promise<{ id: string }>;
}

// Define proper TypeScript interfaces
interface CommonIssue {
  name: string;
  symptoms: string;
  treatment: string;
}

export default async function LivestockDetailPage({ params }: PageProps) {
  const { id } = await params;
  
  // Find the livestock by ID
  const animal = livestock.find(a => a.id === id);
  
  // If livestock doesn't exist, show 404
  if (!animal) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main container with sidebar consideration */}
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-4 sm:py-6 lg:py-8 lg:ml-0 lg:mr-0 xl:mx-auto">
        {/* Breadcrumb - Responsive */}
        <nav className="mb-4 sm:mb-6 flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-gray-600 flex-wrap">
          <Link href="/" className="hover:text-green-600 transition-colors whitespace-nowrap">Home</Link>
          <span>/</span>
          <Link href="/livestock" className="hover:text-green-600 transition-colors whitespace-nowrap">Livestock</Link>
          <span>/</span>
          <span className="text-green-800 font-semibold truncate">{animal.name}</span>
        </nav>

        {/* Main Content */}
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden">
          {/* Hero Section - FIXED: Improved layout for quick stats */}
          <div className="bg-linear-to-br from-blue-50 to-blue-100 p-4 sm:p-6 lg:p-8">
            <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8 items-start">
              {/* Image/Emoji - Responsive */}
              <div className="w-full lg:w-64 xl:w-80 h-48 sm:h-64 lg:h-80 bg-white rounded-xl sm:rounded-2xl shadow-md overflow-hidden shrink-0 mx-auto lg:mx-0 mb-4 lg:mb-0">
                {animal.image ? (
                  <div className="relative w-full h-full">
                    <Image
                      src={animal.image}
                      alt={animal.name}
                      fill
                      className="object-cover rounded-xl sm:rounded-2xl"
                      priority
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 320px"
                    />
                  </div>
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-linear-to-br from-blue-100 to-green-100">
                    <span className="text-4xl sm:text-6xl lg:text-8xl">{animal.emoji}</span>
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="flex-1 w-full min-w-0">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-blue-800 mb-2 text-center lg:text-left wrap-break-words">
                  {animal.name}
                </h1>
                <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 italic mb-2 text-center lg:text-left wrap-break-words">
                  {animal.localName}
                </p>
                <p className="text-xs sm:text-sm text-gray-500 mb-4 sm:mb-6 text-center lg:text-left">
                  {animal.scientificName}
                </p>

                {/* Climate Badges */}
                <div className="flex flex-wrap gap-1 sm:gap-2 mb-4 sm:mb-6 justify-center lg:justify-start">
                  {animal.climateBadges.map((badge, idx) => (
                    <span
                      key={idx}
                      className="px-2 sm:px-3 py-1 sm:py-2 bg-blue-600 text-white rounded-full text-xs sm:text-sm font-medium whitespace-nowrap shrink-0"
                    >
                      {badge.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                    </span>
                  ))}
                </div>

                {/* Quick Stats - FIXED: Improved responsive grid that doesn't hide content */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                  {[
                    { label: "Difficulty", value: animal.difficulty, emoji: "📊" },
                    { label: "Maturity Time", value: animal.maturityAge, emoji: "⏱️" },
                    { label: "Space Needs", value: animal.spaceNeeds, emoji: "📏" },
                    { label: "Market Value", value: animal.marketValue, emoji: "💰" }
                  ].map((stat, index) => (
                    <div 
                      key={index} 
                      className="bg-white p-3 sm:p-4 rounded-lg sm:rounded-xl shadow-sm border border-blue-100 hover:border-blue-300 transition-colors"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-lg">{stat.emoji}</span>
                        <div className="text-xs sm:text-sm text-gray-600 font-medium truncate">
                          {stat.label}
                        </div>
                      </div>
                      <div className="font-bold text-blue-800 text-sm sm:text-base capitalize wrap-break-words">
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
              {animal.description}
            </p>
          </div>

          {/* Housing & Environment */}
          <div className="p-4 sm:p-6 lg:p-8 bg-blue-50 border-b">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-800 mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3 justify-center lg:justify-start">
              <span className="text-2xl sm:text-3xl">🏠</span>
              Housing & Environment
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
              <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-sm">
                <h3 className="font-semibold text-gray-700 text-sm sm:text-base mb-2">Space Needs</h3>
                <p className="text-blue-700 font-medium text-base sm:text-lg wrap-break-words">{animal.spaceNeeds}</p>
              </div>
              <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-sm">
                <h3 className="font-semibold text-gray-700 text-sm sm:text-base mb-2">Water Needs</h3>
                <p className="text-blue-700 font-medium text-base sm:text-lg wrap-break-words">{animal.waterNeeds}</p>
              </div>
            </div>
            {animal.housingRequirements && animal.housingRequirements.length > 0 && (
              <div className="mt-4 sm:mt-6 bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-sm">
                <h3 className="font-semibold text-gray-700 text-sm sm:text-base mb-3 sm:mb-4">Housing Requirements</h3>
                <ul className="space-y-1 sm:space-y-2">
                  {animal.housingRequirements.map((requirement, idx) => (
                    <li key={idx} className="flex items-start gap-2 sm:gap-3 text-blue-700 text-sm sm:text-base">
                      <span className="text-green-600 mt-0.5 sm:mt-1 text-lg shrink-0">•</span>
                      <span className="wrap-break-words">{requirement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Feeding & Nutrition - Responsive */}
          {animal.feedingGuide && animal.feedingGuide.length > 0 && (
            <div className="p-4 sm:p-6 lg:p-8 border-b">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-800 mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3 justify-center lg:justify-start">
                <span className="text-2xl sm:text-3xl">🌾</span>
                Feeding & Nutrition
              </h2>
              <div className="space-y-3 sm:space-y-4">
                {animal.feedingGuide.map((instruction, idx) => (
                  <div key={idx} className="flex gap-3 sm:gap-4 items-start">
                    <div className="shrink-0 w-6 h-6 sm:w-8 sm:h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs sm:text-sm">
                      {idx + 1}
                    </div>
                    <p className="text-gray-700 text-sm sm:text-lg pt-0.5 sm:pt-1 wrap-break-words">{instruction}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Common Health Issues*/}
          {animal.commonIssues && animal.commonIssues.length > 0 && (
            <div className="p-4 sm:p-6 lg:p-8 border-b">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-800 mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3 justify-center lg:justify-start">
                <span className="text-2xl sm:text-3xl">🐛</span>
                Common Health Issues
              </h2>
              <div className="space-y-4 sm:space-y-6">
                {animal.commonIssues.map((issue: CommonIssue, idx) => (
                  <div key={idx} className="border-l-4 border-red-500 bg-red-50 p-4 sm:p-6 rounded-r-lg sm:rounded-r-xl">
                    <h3 className="font-bold text-lg sm:text-xl text-gray-800 mb-2 sm:mb-3 wrap-break-words">{issue.name}</h3>
                    <div className="space-y-2 sm:space-y-3">
                      <div>
                        <span className="font-semibold text-gray-700 text-sm sm:text-base">Symptoms:</span>
                        <p className="text-gray-600 mt-1 text-sm sm:text-base wrap-break-words">{issue.symptoms}</p>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-700 text-sm sm:text-base">Treatment:</span>
                        <p className="text-gray-600 mt-1 text-sm sm:text-base wrap-break-words">{issue.treatment}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Breeding & Management*/}
          {(animal.breedingtips || animal.breedingtips) && (animal.breedingtips?.length > 0 || animal.breedingtips?.length > 0) && (
            <div className="p-4 sm:p-6 lg:p-8 bg-green-50">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-green-800 mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3 justify-center lg:justify-start">
                <span className="text-2xl sm:text-3xl">🐄</span>
                Breeding & Management
              </h2>
              <ul className="space-y-2 sm:space-y-3">
                {(animal.breedingtips || animal.breedingtips)?.map((tip, idx) => (
                  <li key={idx} className="flex gap-2 sm:gap-3 items-start text-gray-700 text-sm sm:text-lg">
                    <span className="text-green-600 text-xl sm:text-2xl mt-0.5 shrink-0">✓</span>
                    <span className="pt-0.5 sm:pt-1 wrap-break-words">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Production Potential */}
          {animal.productionPotential && animal.productionPotential.length > 0 && (
            <div className="p-4 sm:p-6 lg:p-8 bg-purple-50">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-purple-800 mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3 justify-center lg:justify-start">
                <span className="text-2xl sm:text-3xl">📈</span>
                Production Potential
              </h2>
              <ul className="space-y-2 sm:space-y-3">
                {animal.productionPotential.map((potential, idx) => (
                  <li key={idx} className="flex gap-2 sm:gap-3 items-start text-gray-700 text-sm sm:text-lg">
                    <span className="text-purple-600 text-xl sm:text-2xl mt-0.5 shrink-0">•</span>
                    <span className="pt-0.5 sm:pt-1 wrap-break-words">{potential}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* AI Assistant CTA */}
        <div className="mt-4 sm:mt-6 lg:mt-8 bg-linear-to-r from-purple-600 to-purple-700 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 text-white text-center shadow-xl">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 wrap-break-words">Have Questions About {animal.name}?</h2>
          <p className="text-base sm:text-xl mb-4 sm:mb-6">Ask our AI assistant for personalized livestock advice</p>
          <Link
            href={`/ai-assistant?topic=${animal.id}`}
            className="inline-block bg-white text-purple-600 px-6 sm:px-8 lg:px-10 py-2 sm:py-3 lg:py-4 rounded-lg sm:rounded-xl font-bold text-base sm:text-lg hover:bg-purple-50 transition-colors shadow-lg wrap-break-words"
          >
            Ask AI About {animal.name}
          </Link>
        </div>
      </div>
    </div>
  );
}

// Generate static params for better performance
export async function generateStaticParams() {
  return livestock.map((animal) => ({
    id: animal.id,
  }));
}

// Generate metadata
export async function generateMetadata({ params }: PageProps) {
  const { id } = await params;
  const animal = livestock.find(a => a.id === id);
  
  return {
    title: animal ? `${animal.name} - AgriLearn` : 'Livestock Not Found',
    description: animal?.description,
  };
}