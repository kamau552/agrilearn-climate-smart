
export interface Crop {
  id: string;
  name: string;
  localName: string;
  scientificName: string;
  image?: string;
  emoji: string;
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
  commonDiseases: { name: string; symptoms: string; treatment: string }[];
  harvestTips: string[];
  marketValue: "low" | "medium" | "high";
}

export const crops: Crop[] = [
  // CEREALS
  {
    id: "maize",
    name: "Maize",
    localName: "Mahindi",
    scientificName: "Zea mays",
    emoji: "🌽",
    image: "/assets/images/crops/maize.png",
    category: "cereal",
    description: "Staple food crop in Kenya. Drought-resistant varieties available for different regions.",
    climateBadges: ["drought-resistant", "versatile"],
    difficulty: "beginner",
    growthTime: "90-120 days",
    waterNeeds: "moderate",
    temperatureRange: "18-30°C",
    rainfallNeeds: "500-800mm",
    soilType: "Well-drained loamy soil (pH 5.5-7.5)",
    careInstructions: [
      "Plant at onset of rains, 75cm between rows, 25cm between plants",
      "Apply fertilizer at planting and top-dress at knee height",
      "Weed regularly, especially first 6 weeks",
      "Monitor for fall armyworm and stem borers",
      "Ensure proper drainage to prevent waterlogging"
    ],
    commonDiseases: [
      {
        name: "Maize Lethal Necrosis (MLN)",
        symptoms: "Yellowing, dead patches on leaves, stunted growth",
        treatment: "Use certified resistant seeds, control vectors, crop rotation"
      },
      {
        name: "Fall Armyworm",
        symptoms: "Holes in leaves, damaged growing point",
        treatment: "Early detection, biopesticides, proper field sanitation"
      }
    ],
    harvestTips: [
      "Harvest when kernels are hard and moisture content is 13-15%",
      "Dry properly before storage to prevent aflatoxin",
      "Store in clean, dry, well-ventilated place"
    ],
    marketValue: "medium"
  },
  {
    id: "rice",
    name: "Rice",
    localName: "Mchele",
    scientificName: "Oryza sativa",
    emoji: "🌾",
    image: "/assets/images/crops/rice.png",
    category: "cereal",
    description: "Important cereal crop growing in irrigated lowlands. High demand in Kenyan markets.",
    climateBadges: ["high-water", "warm-climate"],
    difficulty: "intermediate",
    growthTime: "120-150 days",
    waterNeeds: "high",
    temperatureRange: "20-35°C",
    rainfallNeeds: "1000-2000mm or irrigation",
    soilType: "Clay loam, water-retentive soil (pH 5.5-6.5)",
    careInstructions: [
      "Prepare bunds for water retention",
      "Transplant seedlings 20-25 days after nursery",
      "Maintain 5-10cm water depth during growing season",
      "Apply nitrogen fertilizer in splits",
      "Control weeds early in the season"
    ],
    commonDiseases: [
      {
        name: "Rice Blast",
        symptoms: "Diamond-shaped lesions on leaves, neck rot",
        treatment: "Use resistant varieties, fungicide application, proper spacing"
      },
      {
        name: "Bacterial Leaf Blight",
        symptoms: "Water-soaked lesions turning yellow",
        treatment: "Resistant varieties, balanced fertilization, field hygiene"
      }
    ],
    harvestTips: [
      "Harvest when 80-85% of grains are golden yellow",
      "Cut and thresh when moisture is 20-25%",
      "Dry to 14% moisture before storage"
    ],
    marketValue: "high"
  },

  // VEGETABLES
  {
    id: "tomato",
    name: "Tomato",
    localName: "Nyanya",
    scientificName: "Solanum lycopersicum",
    emoji: "🍅",
    image: "/assets/images/crops/tomato.png",
    category: "vegetable",
    description: "High-value vegetable crop. Suitable for both greenhouse and open field production.",
    climateBadges: ["high-value", "year-round"],
    difficulty: "intermediate",
    growthTime: "75-90 days",
    waterNeeds: "moderate",
    temperatureRange: "18-27°C",
    rainfallNeeds: "500-1000mm or irrigation",
    soilType: "Well-drained loamy soil (pH 5.8-7)",
    careInstructions: [
      "Transplant seedlings after 4-5 weeks",
      "Stake or cage plants for support",
      "Apply mulch to retain moisture and prevent diseases",
      "Prune suckers for determinate varieties",
      "Water consistently to prevent blossom end rot"
    ],
    commonDiseases: [
      {
        name: "Late Blight",
        symptoms: "Dark spots on leaves and fruit, white mold",
        treatment: "Fungicide spray, remove infected plants, improve air circulation"
      },
      {
        name: "Bacterial Wilt",
        symptoms: "Sudden wilting, no recovery at night",
        treatment: "No cure - remove and destroy plants, crop rotation, use resistant varieties"
      }
    ],
    harvestTips: [
      "Harvest when fully colored but still firm",
      "Pick every 2-3 days during peak season",
      "Handle carefully to avoid bruising",
      "Store at room temperature for best flavor"
    ],
    marketValue: "high"
  },
  {
    id: "cabbage",
    name: "Cabbage",
    localName: "Kabichi",
    scientificName: "Brassica oleracea var. capitata",
    emoji: "🥬",
    image: "/assets/images/crops/cabbage.png",
    category: "vegetable",
    description: "Popular leafy vegetable with good market demand. Grows well in cool highland areas.",
    climateBadges: ["cool-climate", "moderate-water"],
    difficulty: "beginner",
    growthTime: "70-90 days",
    waterNeeds: "moderate",
    temperatureRange: "15-20°C",
    rainfallNeeds: "600-1000mm",
    soilType: "Fertile, well-drained soil (pH 6-7.5)",
    careInstructions: [
      "Transplant seedlings 4-6 weeks after sowing",
      "Space plants 45-60cm apart",
      "Apply compost or manure before planting",
      "Water regularly for consistent growth",
      "Control aphids and caterpillars"
    ],
    commonDiseases: [
      {
        name: "Clubroot",
        symptoms: "Swollen, distorted roots, stunted growth",
        treatment: "Lime soil to raise pH, long crop rotation, resistant varieties"
      },
      {
        name: "Black Rot",
        symptoms: "V-shaped yellow lesions on leaf margins",
        treatment: "Use disease-free seeds, copper sprays, remove infected plants"
      }
    ],
    harvestTips: [
      "Harvest when heads are firm and solid",
      "Cut with sharp knife leaving outer leaves",
      "Can store for several weeks in cool conditions"
    ],
    marketValue: "medium"
  },
  {
    id: "kale",
    name: "Kale",
    localName: "Sukuma Wiki",
    scientificName: "Brassica oleracea var. acephala",
    emoji: "🥬",
    image: "/assets/images/crops/kale.png",
    category: "vegetable",
    description: "Most common vegetable in Kenya. Hardy, nutritious, and grows almost year-round.",
    climateBadges: ["drought-tolerant", "heat-adapted"],
    difficulty: "beginner",
    growthTime: "45-60 days",
    waterNeeds: "moderate",
    temperatureRange: "15-25°C",
    rainfallNeeds: "400-800mm",
    soilType: "Any well-drained soil (pH 6-7)",
    careInstructions: [
      "Direct seed or transplant seedlings",
      "Space 30-45cm apart",
      "Water regularly during dry spells",
      "Apply compost or manure for better growth",
      "Harvest outer leaves, allowing plant to continue growing"
    ],
    commonDiseases: [
      {
        name: "Aphids",
        symptoms: "Curled leaves, sticky honeydew",
        treatment: "Neem spray, encourage beneficial insects, strong water spray"
      },
      {
        name: "Downy Mildew",
        symptoms: "Yellow spots on upper leaves, white growth underneath",
        treatment: "Improve air circulation, fungicide if severe"
      }
    ],
    harvestTips: [
      "Start harvesting outer leaves after 4-6 weeks",
      "Pick regularly to encourage new growth",
      "Best flavor when leaves are young and tender"
    ],
    marketValue: "medium"
  },
  {
    id: "cucumber",
    name: "Cucumber",
    localName: "Tango",
    scientificName: "Cucumis sativus",
    emoji: "🥒",
    image: "/assets/images/crops/cucumber.png",
    category: "vegetable",
    description: "Fast-growing vegetable with high market demand. Excellent for small-scale farmers.",
    climateBadges: ["fast-growing", "high-value"],
    difficulty: "beginner",
    growthTime: "50-70 days",
    waterNeeds: "high",
    temperatureRange: "18-30°C",
    rainfallNeeds: "600-1000mm or irrigation",
    soilType: "Well-drained, fertile soil (pH 6-7)",
    careInstructions: [
      "Plant in raised beds or mounds for drainage",
      "Provide trellis for climbing varieties",
      "Water regularly, especially during fruiting",
      "Apply mulch to retain moisture",
      "Harvest frequently to encourage production"
    ],
    commonDiseases: [
      {
        name: "Powdery Mildew",
        symptoms: "White powdery coating on leaves",
        treatment: "Sulfur spray, improve air circulation, resistant varieties"
      },
      {
        name: "Downy Mildew",
        symptoms: "Yellow patches on upper leaves",
        treatment: "Fungicide application, avoid overhead watering"
      }
    ],
    harvestTips: [
      "Harvest when fruits reach desired size (15-20cm)",
      "Pick every 2-3 days during peak production",
      "Cut with knife, leaving small stem attached"
    ],
    marketValue: "high"
  },
  {
    id: "eggplant",
    name: "Eggplant",
    localName: "Biringanya",
    scientificName: "Solanum melongena",
    emoji: "🍆",
    image: "/assets/images/crops/eggplant.png",
    category: "vegetable",
    description: "Warm-season crop with growing market demand. Suitable for diverse Kenyan climates.",
    climateBadges: ["heat-adapted", "moderate-water"],
    difficulty: "intermediate",
    growthTime: "80-100 days",
    waterNeeds: "moderate",
    temperatureRange: "20-30°C",
    rainfallNeeds: "600-1000mm",
    soilType: "Well-drained, fertile loam (pH 5.5-6.8)",
    careInstructions: [
      "Transplant seedlings 6-8 weeks after sowing",
      "Space plants 45-60cm apart",
      "Stake tall varieties for support",
      "Water consistently to prevent bitterness",
      "Apply balanced fertilizer every 3-4 weeks"
    ],
    commonDiseases: [
      {
        name: "Bacterial Wilt",
        symptoms: "Sudden wilting of entire plant",
        treatment: "Remove and destroy affected plants, crop rotation"
      },
      {
        name: "Fruit and Shoot Borer",
        symptoms: "Holes in fruit and stems, wilting shoots",
        treatment: "Regular monitoring, remove infected parts, insecticide if needed"
      }
    ],
    harvestTips: [
      "Harvest when fruit is glossy and full-sized",
      "Cut with pruning shears, leave short stem",
      "Pick regularly to encourage continued production"
    ],
    marketValue: "high"
  },
  {
    id: "courgette",
    name: "Courgette (Zucchini)",
    localName: "Zukini",
    scientificName: "Cucurbita pepo",
    emoji: "🥒",
    image: "/assets/images/crops/courgette.png",
    category: "vegetable",
    description: "Fast-maturing summer squash. Growing in popularity in urban and peri-urban markets.",
    climateBadges: ["fast-growing", "high-yield"],
    difficulty: "beginner",
    growthTime: "45-55 days",
    waterNeeds: "high",
    temperatureRange: "18-30°C",
    rainfallNeeds: "500-800mm or irrigation",
    soilType: "Rich, well-drained soil (pH 6-7.5)",
    careInstructions: [
      "Plant in hills or raised beds",
      "Space plants 90-120cm apart",
      "Water deeply and consistently",
      "Apply mulch to retain moisture",
      "Harvest frequently to encourage production"
    ],
    commonDiseases: [
      {
        name: "Powdery Mildew",
        symptoms: "White powder on leaves",
        treatment: "Baking soda spray, fungicides, resistant varieties"
      },
      {
        name: "Squash Vine Borer",
        symptoms: "Wilting vines, sawdust-like frass",
        treatment: "Monitor for eggs, remove by hand, protective barriers"
      }
    ],
    harvestTips: [
      "Harvest when 15-20cm long for best quality",
      "Check plants daily during peak season",
      "Cut with sharp knife, don't pull",
      "Smaller fruits are more tender"
    ],
    marketValue: "high"
  },

  // LEGUMES
  {
    id: "beans",
    name: "Beans",
    localName: "Maharagwe",
    scientificName: "Phaseolus vulgaris",
    emoji: "🫘",
    image: "/assets/images/crops/beans.png",
    category: "legume",
    description: "Important protein source and soil improver. Widely grown across Kenya.",
    climateBadges: ["nitrogen-fixing", "versatile"],
    difficulty: "beginner",
    growthTime: "60-90 days",
    waterNeeds: "moderate",
    temperatureRange: "16-24°C",
    rainfallNeeds: "500-800mm",
    soilType: "Well-drained loam (pH 6-7.5)",
    careInstructions: [
      "Plant at onset of rains, 10-15cm spacing",
      "Avoid overwatering to prevent root rot",
      "Weed when plants are young",
      "Apply phosphorus fertilizer at planting",
      "Harvest when pods are full but still green (for fresh) or dry (for storage)"
    ],
    commonDiseases: [
      {
        name: "Anthracnose",
        symptoms: "Dark sunken spots on pods and stems",
        treatment: "Use certified seeds, fungicide spray, crop rotation"
      },
      {
        name: "Bean Rust",
        symptoms: "Orange-brown pustules on leaves",
        treatment: "Resistant varieties, fungicide application"
      }
    ],
    harvestTips: [
      "Harvest fresh beans when pods snap easily",
      "For dry beans, wait until pods turn brown",
      "Dry thoroughly before storage",
      "Store in airtight containers"
    ],
    marketValue: "medium"
  },

  // TUBERS
  {
    id: "potato",
    name: "Potato",
    localName: "Viazi",
    scientificName: "Solanum tuberosum",
    emoji: "🥔",
    image: "/assets/images/crops/potato.png",
    category: "tuber",
    description: "Major food crop in highland Kenya. High demand in both rural and urban markets.",
    climateBadges: ["cool-climate", "high-value"],
    difficulty: "intermediate",
    growthTime: "90-120 days",
    waterNeeds: "moderate",
    temperatureRange: "15-20°C",
    rainfallNeeds: "500-700mm, well-distributed",
    soilType: "Well-drained, loose soil (pH 5-6.5)",
    careInstructions: [
      "Plant certified seed potatoes in ridges",
      "Earth up soil around plants as they grow",
      "Water regularly but avoid waterlogging",
      "Apply fertilizer at planting and during growth",
      "Spray for late blight prevention"
    ],
    commonDiseases: [
      {
        name: "Late Blight",
        symptoms: "Dark patches on leaves, white mold underneath",
        treatment: "Preventive fungicide sprays, remove infected plants"
      },
      {
        name: "Bacterial Wilt",
        symptoms: "Wilting, slimy bacterial ooze from stems",
        treatment: "Use clean seed, crop rotation, remove infected plants"
      }
    ],
    harvestTips: [
      "Harvest when foliage dies back naturally",
      "Cure in shade for 2 weeks before storage",
      "Store in cool, dark, well-ventilated place"
    ],
    marketValue: "high"
  }
];
