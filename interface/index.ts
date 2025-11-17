// ===== AGRICULTURAL DATA TYPES =====

export interface Fruit {
  id: string;
  name: string;
  localName: string;
  scientificName: string;
  image?: string;
  description: string;
  climateBadges: string[];
  difficulty: "beginner" | "intermediate" | "advanced";
  growthTime: string;
  waterNeeds: "low" | "moderate" | "high";
  temperatureRange: string;
  rainfallNeeds: string;
  soilType: string;
  careInstructions: string[];
  commonDiseases: Disease[];
  harvestTips: string[];
  nutritionalBenefits: string[];
}

export interface Crop {
  id: string;
  name: string;
  localName: string;
  scientificName: string;
  image?: string;
  category: "cereal" | "legume" | "vegetable" | "tuber" | "cash-crop";
  description: string;
  climateBadges: string[];
  difficulty: "beginner" | "intermediate" | "advanced";
  growthTime: string;
  waterNeeds: "low" | "moderate" | "high";
  temperatureRange: string;
  rainfallNeeds: string;
  soilType: string;
  careInstructions: string[];
  commonDiseases: Disease[];
  harvestTips: string[];
  marketValue: "low" | "medium" | "high";
}

export interface Livestock {
  id: string;
  name: string;
  localName: string;
  scientificName: string;
  image?: string;
  description: string;
  climateBadges: string[];
  difficulty: "beginner" | "intermediate" | "advanced";
  maturityAge: string;
  spaceNeeds: string;
  waterNeeds: string;
  feedingGuide: string[];
  housingRequirements: string[];
  commonIssues: Disease[];
  breedingInfo: string[];
  productionPotential: string[];
  marketValue: "low" | "medium" | "high";
}

export interface Disease {
  name: string;
  symptoms: string;
  treatment: string;
}

// ===== CLIMATE & WEATHER TYPES =====

export interface WeatherData {
  temperature: number;
  feelsLike: number;
  humidity: number;
  windSpeed: number;
  description: string;
  icon: string;
  location: string;
  timestamp: Date;
}

export interface WeatherForecast {
  date: string;
  tempHigh: number;
  tempLow: number;
  condition: string;
  icon: string;
  precipitationChance: number;
}

export interface ClimateAlert {
  id: string;
  type: "warning" | "advisory" | "tip";
  severity: "low" | "medium" | "high" | "critical";
  title: string;
  message: string;
  affectedCrops?: string[];
  affectedLivestock?: string[];
  recommendedActions: string[];
  validUntil: Date;
}

export interface ClimateZone {
  id: string;
  name: string;
  region: string;
  averageRainfall: string;
  averageTemperature: string;
  soilType: string;
  recommendedCrops: string[];
  recommendedLivestock: string[];
  challenges: string[];
}

// ===== USER & PROFILE TYPES =====

export interface User {
  id: string;
  name: string;
  email: string;
  phoneNumber?: string;
  location: {
    county: string;
    subCounty?: string;
    ward?: string;
    coordinates?: {
      lat: number;
      lng: number;
    };
  };
  farmInfo?: FarmInfo;
  preferences: UserPreferences;
  createdAt: Date;
  lastActive: Date;
}

export interface FarmInfo {
  farmSize: number; // in acres
  mainCrops: string[];
  mainLivestock: string[];
  farmingExperience: "beginner" | "intermediate" | "experienced";
  challenges: string[];
}

export interface UserPreferences {
  language: "EN" | "SW";
  theme: "light" | "dark" | "system";
  notifications: {
    email: boolean;
    sms: boolean;
    push: boolean;
  };
  accessibility: {
    highContrast: boolean;
    largeText: boolean;
    screenReader: boolean;
  };
}

// ===== AI ASSISTANT TYPES =====

export interface ChatMessage {
  id: string;
  role: "user" | "assistant" | "system";
  content: string;
  timestamp: Date;
  relatedTo?: {
    type: "crop" | "livestock" | "fruit";
    id: string;
    name: string;
  };
}

export interface ChatSession {
  id: string;
  userId: string;
  messages: ChatMessage[];
  startedAt: Date;
  lastMessageAt: Date;
  topic?: string;
}

// ===== SEARCH & FILTER TYPES =====

export interface SearchFilters {
  query?: string;
  category?: "crops" | "livestock" | "fruits" | "all";
  climateBadges?: string[];
  difficulty?: ("beginner" | "intermediate" | "advanced")[];
  waterNeeds?: ("low" | "moderate" | "high")[];
  marketValue?: ("low" | "medium" | "high")[];
}

export interface SearchResult {
  id: string;
  type: "crop" | "livestock" | "fruit";
  name: string;
  localName: string;
  emoji: string;
  description: string;
  relevanceScore: number;
}

// ===== FARM PRACTICES TYPES =====

export interface FarmPractice {
  id: string;
  title: string;
  category: "soil-management" | "water-conservation" | "pest-control" | "climate-adaptation" | "organic-farming";
  description: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  benefits: string[];
  steps: string[];
  requiredMaterials?: string[];
  estimatedCost?: string;
  timeRequired?: string;
  applicableTo: {
    crops?: string[];
    livestock?: string[];
    climateZones?: string[];
  };
}

// ===== VET SUPPORT TYPES =====

export interface VetQuery {
  id: string;
  userId: string;
  animalType: string;
  symptoms: string[];
  description: string;
  urgency: "low" | "medium" | "high" | "emergency";
  images?: string[];
  status: "pending" | "answered" | "closed";
  createdAt: Date;
  answeredAt?: Date;
  answer?: string;
}

export interface VetResource {
  id: string;
  title: string;
  type: "article" | "video" | "guide" | "contact";
  content: string;
  applicableTo: string[];
  tags: string[];
}

// ===== MARKET & PRICING TYPES =====

export interface MarketPrice {
  id: string;
  itemName: string;
  category: "crop" | "livestock" | "fruit";
  pricePerUnit: number;
  unit: string; // "kg", "piece", "liter", etc.
  market: string;
  county: string;
  date: Date;
  trend: "up" | "down" | "stable";
}

// ===== NOTIFICATION TYPES =====

export interface Notification {
  id: string;
  userId: string;
  type: "weather" | "climate" | "price" | "tip" | "alert";
  title: string;
  message: string;
  priority: "low" | "medium" | "high";
  read: boolean;
  createdAt: Date;
  expiresAt?: Date;
  actionUrl?: string;
}

// ===== API RESPONSE TYPES =====

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: {
    code: string;
    message: string;
  };
  timestamp: Date;
}

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

// ===== COMPONENT PROP TYPES =====

export interface CardProps {
  id: string;
  title: string;
  subtitle?: string;
  localName: string;
  scientificName?: string;
  emoji?: string;
  image?: string;
  badges?: (string | { label: string; color: string })[];
  description: string;
  onClick?: () => void;
  href?: string;
  category: "crops" | "livestock" | "fruits";
  difficulty?: "beginner" | "intermediate" | "advanced";
  marketValue?: "low" | "medium" | "high";
}


export interface BadgeProps {
  label: string;
  color: string;
  variant: "drought-resistant" | "heat-adapted" | "low-water" | "high-value" | "fast-growing" | "cool-climate";
  size?: "sm" | "md" | "lg";
}

export interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

export interface HeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  currentLanguage: "EN" | "SW";
  onLanguageToggle: () => void;
}

export interface BaseItem {
  id: string;
  name: string;
  localName: string;
  emoji: string;
  difficulty: string;
  climateBadges: string[];
  image?: string;
}

// ===== FORM TYPES =====

export interface FarmRegistrationForm {
  farmSize: number;
  mainCrops: string[];
  mainLivestock: string[];
  location: {
    county: string;
    subCounty?: string;
  };
  experience: "beginner" | "intermediate" | "experienced";
  challenges: string[];
}

export interface ContactForm {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

// ===== UTILITY TYPES =====

export type ClimateCategory = "arid" | "semi-arid" | "highland" | "coastal" | "humid";
export type Season = "long-rains" | "short-rains" | "dry-season";
export type Language = "EN" | "SW";
export type Difficulty = "beginner" | "intermediate" | "advanced";
export type WaterNeeds = "low" | "moderate" | "high";
export type MarketValue = "low" | "medium" | "high";