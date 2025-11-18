import Link from "next/link";
import Image from "next/image";
import { CardProps } from "@/interface";
import React from "react";

// Professional icons as React components
const PlantIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

const DifficultyIcons = {
  beginner: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  intermediate: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
    </svg>
  ),
  advanced: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" transform="translate(5,5)" />
    </svg>
  )
};

const MarketValueIcons = {
  low: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1" />
    </svg>
  ),
  medium: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v1" />
    </svg>
  ),
  high: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
    </svg>
  )
};

export default function AgriCard({ 
  id, 
  title, 
  localName,
  image,
  description, 
  badges = [],
  category,
  difficulty,
  marketValue
}: CardProps) {
  
  const difficultyColors = {
    beginner: "bg-green-100 text-green-700 border border-green-200",
    intermediate: "bg-yellow-100 text-yellow-700 border border-yellow-200",
    advanced: "bg-red-100 text-red-700 border border-red-200"
  };

  const marketColors = {
    low: "bg-gray-100 text-gray-700 border border-gray-200",
    medium: "bg-blue-100 text-blue-700 border border-blue-200",
    high: "bg-purple-100 text-purple-700 border border-purple-200"
  };

  return (
    <Link 
      href={`/${category}/${id}`}
      className="group block bg-white rounded-2xl overflow-hidden border-2 border-green-100 
                 transition-all duration-300 ease-in-out
                 hover:border-green-400 hover:-translate-y-3 hover:shadow-2xl
                 shadow-md hover:scale-[1.02]
                 transform-gpu will-change-transform"
    >
      {/* Image Section */}
      <div className="relative h-48 bg-linear-to-br from-green-50 to-emerald-100 overflow-hidden">
        {image ? (
          <Image 
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-110 group-hover:rotate-1"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={false}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
            <div className="text-green-300 opacity-50 group-hover:opacity-70 transition-opacity">
              <PlantIcon />
            </div>
          </div>
        )}
        
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Difficulty Badge - Top Left */}
        {difficulty && (
          <div className={`absolute top-3 left-3 px-3 py-2 rounded-full text-xs font-semibold flex items-center gap-1 
                         ${difficultyColors[difficulty]}
                         transform transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1 group-hover:shadow-lg`}>
            {DifficultyIcons[difficulty]}
            <span>{difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}</span>
          </div>
        )}

        {/* Market Value Badge - Top Right */}
        {marketValue && (
          <div className={`absolute top-3 right-3 px-3 py-2 rounded-full text-xs font-semibold flex items-center gap-1 
                         ${marketColors[marketValue]}
                         transform transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1 group-hover:shadow-lg`}>
            {MarketValueIcons[marketValue]}
            <span>
              {marketValue === "high" ? "High Value" : marketValue === "medium" ? "Med Value" : "Low Value"}
            </span>
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-5 bg-white hover:bg-linear-to-br hover:from-white group-hover:to-green-50/30 transition-all duration-300">
        {/* Title */}
        <h3 className="text-xl font-bold text-green-800 mb-1 transition-colors duration-300 hover:text-green-600">
          {title}
        </h3>
        
        {/* Local Name */}
        <p className="text-sm text-gray-500 italic mb-3 transition-colors hover:text-gray-600">{localName}</p>

        {/* Climate Badges */}
        {badges.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {badges.slice(0, 3).map((badge, index) => (
              <span 
                key={index}
                className={`text-xs px-3 py-1.5 rounded-full font-medium border 
                           transform transition-all duration-200 hover:scale-105
                           ${typeof badge === 'string' ? getBadgeColor(badge) : badge.color}`}
              >
                {typeof badge === 'string' ? badge.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') : badge.label}
              </span>
            ))}
            {badges.length > 3 && (
              <span className="text-xs px-3 py-1.5 rounded-full font-medium bg-gray-100 text-gray-600 border border-gray-200 
                             transform transition-all duration-200 hover:scale-105">
                +{badges.length - 3} more
              </span>
            )}
          </div>
        )}

        {/* Description */}
        <p className="text-gray-600 text-sm line-clamp-3 mb-4 leading-relaxed transition-colors group-hover:text-gray-700">
          {description}
        </p>

        {/* Learn More Button */}
        <div className="flex items-center text-green-600 font-semibold text-sm group-hover:text-green-700 transition-colors">
          <span className="transform transition-transform duration-300 group-hover:translate-x-1">Learn More</span>
          <svg className="w-4 h-4 ml-2 transform transition-transform duration-300 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  );
}

// Helper function to convert climate badges to proper format
export function getBadgeColor(badge: string): string {
  const badgeColors: Record<string, string> = {
    "drought-resistant": "bg-yellow-100 text-yellow-800 border border-yellow-200 hover:bg-yellow-200",
    "drought-tolerant": "bg-yellow-100 text-yellow-800 border border-yellow-200 hover:bg-yellow-200",
    "heat-adapted": "bg-orange-100 text-orange-800 border border-orange-200 hover:bg-orange-200",
    "heat-resistant": "bg-orange-100 text-orange-800 border border-orange-200 hover:bg-orange-200",
    "cool-climate": "bg-blue-100 text-blue-800 border border-blue-200 hover:bg-blue-200",
    "low-water": "bg-cyan-100 text-cyan-800 border border-cyan-200 hover:bg-cyan-200",
    "moderate-water": "bg-teal-100 text-teal-800 border border-teal-200 hover:bg-teal-200",
    "high-water": "bg-blue-200 text-blue-800 border border-blue-300 hover:bg-blue-300",
    "flood-tolerant": "bg-indigo-100 text-indigo-800 border border-indigo-200 hover:bg-indigo-200",
    "high-value": "bg-purple-100 text-purple-800 border border-purple-200 hover:bg-purple-200",
    "fast-growing": "bg-green-100 text-green-800 border border-green-200 hover:bg-green-200",
    "disease-resistant": "bg-emerald-100 text-emerald-800 border border-emerald-200 hover:bg-emerald-200",
    "versatile": "bg-gray-100 text-gray-800 border border-gray-200 hover:bg-gray-200",
    "low-maintenance": "bg-lime-100 text-lime-800 border border-lime-200 hover:bg-lime-200",
    "tropical": "bg-red-100 text-red-800 border border-red-200 hover:bg-red-200",
    "warm-climate": "bg-orange-100 text-orange-800 border border-orange-200 hover:bg-orange-200",
    "seasonal": "bg-purple-100 text-purple-800 border border-purple-200 hover:bg-purple-200",
    "high-rainfall": "bg-blue-100 text-blue-800 border border-blue-200 hover:bg-blue-200"
  };
  
  return badgeColors[badge] || "bg-gray-100 text-gray-700 border border-gray-200 hover:bg-gray-200";
}

// Helper function to format badges from your data
export function formatBadges(climateBadges: string[]): Array<{ label: string; color: string }> {
  return climateBadges.map(badge => ({
    label: badge.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
    color: getBadgeColor(badge)
  }));
}