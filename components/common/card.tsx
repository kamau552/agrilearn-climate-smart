import Link from "next/link";
import Image from "next/image";
import { CardProps } from "@/interface";
import React from "react";
import { BadgeProps } from "@/interface";

export default function AgriCard({ 
  id, 
  title, 
  localName,
  emoji, 
  image,
  description, 
  badges = [],
  category,
  difficulty,
  marketValue
}: CardProps) {
  
  const difficultyColors = {
    beginner: "bg-green-100 text-green-700",
    intermediate: "bg-yellow-100 text-yellow-700",
    advanced: "bg-red-100 text-red-700"
  };

  const marketColors = {
    low: "bg-gray-100 text-gray-700",
    medium: "bg-blue-100 text-blue-700",
    high: "bg-purple-100 text-purple-700"
  };

  return (
    <Link 
      href={`/${category}/${id}`}
      className="group block bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-green-100 hover:border-green-300 hover:-translate-y-2"
    >
      {/* Image Section */}
      <div className="relative h-48 bg-green-100 overflow-hidden">
        {image ? (
          <Image 
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-8xl">{emoji || "🌱"}</span>
          </div>
        )}
        
        {/* Difficulty Badge - Top Left */}
        {difficulty && (
          <div className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold ${difficultyColors[difficulty]}`}>
            {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
          </div>
        )}

        {/* Market Value Badge - Top Right */}
        {marketValue && (
          <div className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold ${marketColors[marketValue]}`}>
            {marketValue === "high" ? "💰 High Value" : marketValue === "medium" ? "💵 Med Value" : "💴 Low Value"}
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-5">
        {/* Title */}
        <h3 className="text-xl font-bold text-green-800 mb-1 group-hover:text-green-600 transition-colors">
          {emoji && <span className="mr-2">{emoji}</span>}
          {title}
        </h3>
        
        {/* Local Name */}
        <p className="text-sm text-gray-500 italic mb-3">{localName}</p>

        {/* Climate Badges */}
        {badges.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {badges.slice(0, 3).map((badge, index) => (
              <span 
                key={index}
                className={`text-xs px-3 py-1 rounded-full font-medium ${typeof badge === 'string' ? getBadgeColor(badge) : badge.color}`}
              >
                {typeof badge === 'string' ? badge.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') : badge.label}
              </span>
            ))}
            {badges.length > 3 && (
              <span className="text-xs px-3 py-1 rounded-full font-medium bg-gray-100 text-gray-600">
                +{badges.length - 3} more
              </span>
            )}
          </div>
        )}

        {/* Description */}
        <p className="text-gray-600 text-sm line-clamp-3 mb-4">
          {description}
        </p>

        {/* Learn More Button */}
        <div className="flex items-center text-green-600 font-semibold text-sm group-hover:text-green-700">
          Learn More
          <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
    "drought-resistant": "bg-yellow-100 text-yellow-800",
    "drought-tolerant": "bg-yellow-100 text-yellow-800",
    "heat-adapted": "bg-orange-100 text-orange-800",
    "heat-resistant": "bg-orange-100 text-orange-800",
    "cool-climate": "bg-blue-100 text-blue-800",
    "low-water": "bg-cyan-100 text-cyan-800",
    "moderate-water": "bg-teal-100 text-teal-800",
    "high-water": "bg-blue-200 text-blue-800",
    "flood-tolerant": "bg-indigo-100 text-indigo-800",
    "high-value": "bg-purple-100 text-purple-800",
    "fast-growing": "bg-green-100 text-green-800",
    "disease-resistant": "bg-emerald-100 text-emerald-800",
    "versatile": "bg-gray-100 text-gray-800",
    "low-maintenance": "bg-lime-100 text-lime-800"
  };
  
  return badgeColors[badge] || "bg-gray-100 text-gray-700";
}

// Helper function to format badges from your data
export function formatBadges(climateBadges: string[]): Array<{ label: string; color: string }> {
  return climateBadges.map(badge => ({
    label: badge.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
    color: getBadgeColor(badge)
  }));
}