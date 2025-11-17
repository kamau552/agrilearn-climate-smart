export interface Fruit {
  id: string;
  name: string;
  localName: string;
  scientificName: string;
  emoji: string;
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
  storageTips?: string[];
  plantingInstructions: string[];
  commonDiseases: { name: string; symptoms: string; treatment: string }[];
  harvestTips: string[];
  nutritionalBenefits: string[];
}

export const fruits: Fruit[] = [
  {
    id: "avocado",
    name: "Avocado",
    localName: "Parachichi",
    scientificName: "Persea americana",
    emoji: "🥑",
    image: "/assets/images/fruits/avocado.png",
    description: "High-value fruit crop perfect for Kenya's highland regions. Rich in healthy fats and nutrients.",
    climateBadges: ["moderate-water", "cool-climate"],
    difficulty: "intermediate",
    growthTime: "3-4 years to first harvest",
    waterNeeds: "moderate",
    temperatureRange: "15-28°C",
    rainfallNeeds: "1000-1500mm annually",
    soilType: "Well-drained, slightly acidic soil (pH 5.5-7)",
    plantingInstructions: [
      "Plant grafted seedlings for better fruit quality",
      "Dig planting holes 60x60x60cm",
      "Mix soil with compost and well-rotted manure",
      "Space trees 6-8 meters apart",
      "Water immediately after planting",
      "Protect young trees from strong winds"
    ],
    careInstructions: [
      "Plant in well-drained soil with good organic matter",
      "Water deeply but infrequently once established",
      "Mulch heavily to retain moisture and suppress weeds",
      "Prune to maintain tree height and shape",
      "Apply balanced fertilizer 3-4 times per year"
    ],
    commonDiseases: [
      {
        name: "Root Rot",
        symptoms: "Wilting leaves, yellowing, tree decline",
        treatment: "Improve drainage, avoid overwatering, use resistant rootstocks"
      },
      {
        name: "Anthracnose",
        symptoms: "Dark spots on fruit and leaves",
        treatment: "Apply copper-based fungicides, prune infected branches"
      }
    ],
    harvestTips: [
      "Harvest when fruit reaches full size but is still firm",
      "Allow to ripen at room temperature after picking",
      "Handle carefully to avoid bruising",
      "Peak season is March-September in Kenya"
    ],
    nutritionalBenefits: [
      "Rich in healthy monounsaturated fats",
      "High in potassium and vitamin E",
      "Contains folate and fiber",
      "Supports heart health"
    ]
  },
  {
    id: "pineapple",
    name: "Pineapple",
    localName: "Nanasi",
    scientificName: "Ananas comosus",
    emoji: "🍍",
    image: "/assets/images/fruits/avocado.png",
    description: "Tropical fruit that thrives in warm coastal regions. High market demand both locally and for export.",
    climateBadges: ["drought-tolerant", "heat-adapted"],
    difficulty: "beginner",
    growthTime: "18-24 months",
    waterNeeds: "low",
    temperatureRange: "20-32°C",
    rainfallNeeds: "600-1500mm annually",
    soilType: "Well-drained sandy or loamy soil (pH 4.5-6.5)",
    plantingInstructions: [
      "Use suckers or crowns from healthy mother plants",
      "Plant in raised beds for better drainage",
      "Space plants 30cm apart in rows 60cm apart",
      "Plant crowns 2-3cm deep in soil",
      "Water immediately after planting",
      "Apply mulch to suppress weeds"
    ],
    careInstructions: [
      "Plant suckers or crowns in raised beds for good drainage",
      "Space plants 30cm apart in rows 60cm apart",
      "Apply mulch to suppress weeds and retain moisture",
      "Fertilize every 2-3 months with balanced NPK",
      "Control weeds regularly, especially when plants are young"
    ],
    commonDiseases: [
      {
        name: "Heart Rot",
        symptoms: "Rotting from the center of the plant",
        treatment: "Improve drainage, apply fungicides, remove affected plants"
      },
      {
        name: "Mealybugs",
        symptoms: "White cottony insects on leaves and fruit",
        treatment: "Use biological control or neem-based pesticides"
      }
    ],
    harvestTips: [
      "Harvest when fruit turns golden yellow at the base",
      "Cut fruit with a short stem attached",
      "Peak sweetness when fully ripe on the plant",
      "Handle carefully to avoid damage"
    ],
    nutritionalBenefits: [
      "High in vitamin C and manganese",
      "Contains bromelain enzyme for digestion",
      "Rich in antioxidants",
      "Supports immune health"
    ]
  },
  {
    id: "strawberry",
    name: "Strawberry",
    localName: "Stroberi",
    scientificName: "Fragaria × ananassa",
    emoji: "🍓",
    image: "/assets/images/fruits/avocado.png",
    description: "High-value berry crop growing in popularity in Kenya's highland regions. Excellent for small-scale farmers.",
    climateBadges: ["cool-climate", "high-value"],
    difficulty: "intermediate",
    growthTime: "3-4 months to harvest",
    waterNeeds: "high",
    temperatureRange: "15-25°C",
    rainfallNeeds: "600-800mm, supplemented with irrigation",
    soilType: "Well-drained, rich in organic matter (pH 5.5-6.5)",
    plantingInstructions: [
      "Prepare raised beds 15-20cm high",
      "Use certified disease-free runners",
      "Space plants 30-40cm apart in rows",
      "Plant with crown at soil level",
      "Install drip irrigation system",
      "Apply black plastic mulch"
    ],
    careInstructions: [
      "Plant in raised beds with drip irrigation system",
      "Use black plastic mulch to suppress weeds and retain moisture",
      "Water regularly, keeping soil consistently moist",
      "Apply organic fertilizer every 2 weeks during fruiting",
      "Remove runners to focus energy on fruit production"
    ],
    commonDiseases: [
      {
        name: "Powdery Mildew",
        symptoms: "White powdery coating on leaves",
        treatment: "Improve air circulation, apply sulfur-based fungicides"
      },
      {
        name: "Gray Mold (Botrytis)",
        symptoms: "Fuzzy gray mold on fruit and flowers",
        treatment: "Remove infected plant parts, improve ventilation, fungicide spray"
      }
    ],
    harvestTips: [
      "Pick when fully red and ripe",
      "Harvest every 2-3 days during peak season",
      "Pick in cool morning hours for best quality",
      "Handle gently to avoid bruising"
    ],
    nutritionalBenefits: [
      "Very high in vitamin C",
      "Rich in antioxidants and fiber",
      "Low in calories",
      "Supports heart health"
    ]
  },
  {
    id: "pomegranate",
    name: "Pomegranate",
    localName: "Komamanga",
    scientificName: "Punica granatum",
    emoji: "🍒",
    image: "/assets/images/fruits/avocado.png",
    description: "Drought-tolerant fruit with growing demand. Thrives in semi-arid regions of Kenya.",
    climateBadges: ["drought-resistant", "heat-adapted"],
    difficulty: "beginner",
    growthTime: "2-3 years to first harvest",
    waterNeeds: "low",
    temperatureRange: "18-35°C",
    rainfallNeeds: "400-600mm annually",
    soilType: "Well-drained loamy soil (pH 5.5-7)",
    plantingInstructions: [
      "Plant grafted seedlings for early fruiting",
      "Dig planting holes 60x60x60cm",
      "Space trees 4-5 meters apart",
      "Mix soil with compost and bone meal",
      "Water thoroughly after planting",
      "Stake young trees for support"
    ],
    careInstructions: [
      "Plant in full sun location",
      "Water deeply but infrequently once established",
      "Prune to remove suckers and maintain shape",
      "Fertilize twice yearly with compost or balanced NPK",
      "Mulch around base to retain moisture"
    ],
    commonDiseases: [
      {
        name: "Fruit Cracking",
        symptoms: "Splits in mature fruit",
        treatment: "Maintain consistent watering, avoid water stress"
      },
      {
        name: "Bacterial Blight",
        symptoms: "Dark spots on leaves and fruit",
        treatment: "Prune infected parts, apply copper-based sprays"
      }
    ],
    harvestTips: [
      "Harvest when fruit makes metallic sound when tapped",
      "Cut from tree with pruning shears",
      "Color change and surface texture indicate ripeness",
      "Can store for several weeks in cool conditions"
    ],
    nutritionalBenefits: [
      "Extremely high in antioxidants",
      "Rich in vitamin C and potassium",
      "Contains anti-inflammatory compounds",
      "Supports cardiovascular health"
    ]
  },
  {
    id: "dragon-fruit",
    name: "Dragon Fruit",
    localName: "Matunda ya dragon",
    scientificName: "Hylocereus undatus",
    emoji: "🐉",
    image: "/assets/images/fruits/avocado.png",
    description: "Exotic cactus fruit with high market value. Adaptable to various climates in Kenya.",
    climateBadges: ["drought-tolerant", "high-value"],
    difficulty: "intermediate",
    growthTime: "1-2 years to first harvest",
    waterNeeds: "low",
    temperatureRange: "20-30°C",
    rainfallNeeds: "500-1000mm annually",
    soilType: "Well-drained sandy soil with organic matter",
    plantingInstructions: [
      "Build strong trellis system before planting",
      "Use 2-3 meter long cuttings from healthy plants",
      "Plant cuttings 30cm deep in soil",
      "Space plants 2-3 meters apart",
      "Water lightly until roots establish",
      "Train vines to climb trellis"
    ],
    careInstructions: [
      "Provide strong support structure for climbing",
      "Plant in well-drained soil with good organic content",
      "Water moderately, reduce during flowering",
      "Apply compost or aged manure every 3 months",
      "Prune to maintain shape and encourage branching"
    ],
    commonDiseases: [
      {
        name: "Stem Rot",
        symptoms: "Soft, discolored patches on stems",
        treatment: "Improve drainage, remove infected parts, apply fungicide"
      },
      {
        name: "Anthracnose",
        symptoms: "Sunken spots on fruit",
        treatment: "Copper-based fungicide, proper spacing for air circulation"
      }
    ],
    harvestTips: [
      "Harvest when skin color changes from green to red/yellow",
      "Twist gently to separate from stem",
      "Slight give when gently pressed indicates ripeness",
      "Best consumed within a week of harvest"
    ],
    nutritionalBenefits: [
      "High in fiber and vitamin C",
      "Contains prebiotics for gut health",
      "Rich in antioxidants",
      "Low in calories"
    ]
  },
  {
    id: "peach",
    name: "Peach",
    localName: "Pichi",
    scientificName: "Prunus persica",
    emoji: "🍑",
    image: "/assets/images/fruits/avocado.png",
    description: "Temperate fruit growing well in Kenya's highland areas. Sweet and aromatic when ripe.",
    climateBadges: ["cool-climate", "moderate-water"],
    difficulty: "advanced",
    growthTime: "2-3 years to first harvest",
    waterNeeds: "moderate",
    temperatureRange: "15-25°C",
    rainfallNeeds: "800-1200mm annually",
    soilType: "Well-drained sandy loam (pH 6-7)",
    plantingInstructions: [
      "Choose varieties that require low chill hours",
      "Plant bare-root trees in dormant season",
      "Space trees 4-5 meters apart",
      "Dig holes twice as wide as root ball",
      "Mix soil with compost and phosphate fertilizer",
      "Water thoroughly after planting"
    ],
    careInstructions: [
      "Requires winter chill for proper fruiting",
      "Prune heavily in winter to maintain open center",
      "Thin fruit to 15cm apart for larger size",
      "Water deeply during fruit development",
      "Apply balanced fertilizer in early spring"
    ],
    commonDiseases: [
      {
        name: "Leaf Curl",
        symptoms: "Distorted, reddish leaves",
        treatment: "Copper fungicide spray during dormancy"
      },
      {
        name: "Brown Rot",
        symptoms: "Brown spots on fruit, fruit rot",
        treatment: "Remove infected fruit, fungicide application"
      }
    ],
    harvestTips: [
      "Harvest when fruit softens slightly and develops full color",
      "Twist gently to pick",
      "Peak season varies by variety",
      "Best eaten fresh or processed quickly"
    ],
    nutritionalBenefits: [
      "Good source of vitamins A and C",
      "Contains potassium and fiber",
      "Antioxidant properties",
      "Low in calories"
    ]
  },
  {
    id: "plum",
    name: "Plum",
    localName: "Plamu",
    scientificName: "Prunus domestica",
    emoji: "🍑",
    image: "/assets/images/fruits/avocado.png",
    description: "Stone fruit suitable for highland regions. Can be eaten fresh or dried.",
    climateBadges: ["cool-climate", "moderate-water"],
    difficulty: "intermediate",
    growthTime: "3-4 years to first harvest",
    waterNeeds: "moderate",
    temperatureRange: "15-25°C",
    rainfallNeeds: "700-1000mm annually",
    soilType: "Deep, well-drained loamy soil (pH 6-7)",
    plantingInstructions: [
      "Plant at least two varieties for cross-pollination",
      "Space trees 4-5 meters apart",
      "Dig holes 60x60x60cm",
      "Mix soil with compost and well-rotted manure",
      "Water immediately after planting",
      "Mulch around base to retain moisture"
    ],
    careInstructions: [
      "Plant multiple varieties for cross-pollination",
      "Prune annually to maintain shape and productivity",
      "Water regularly during fruit development",
      "Thin fruit for larger size and better quality",
      "Fertilize in early spring with balanced NPK"
    ],
    commonDiseases: [
      {
        name: "Brown Rot",
        symptoms: "Brown, moldy fruit",
        treatment: "Remove mummified fruit, fungicide spray"
      },
      {
        name: "Bacterial Canker",
        symptoms: "Sunken areas on bark, gum oozing",
        treatment: "Prune infected branches, copper spray"
      }
    ],
    harvestTips: [
      "Pick when fully colored and slightly soft",
      "Harvest over several pickings as fruits ripen",
      "Handle carefully to avoid bruising",
      "Can be dried for preservation"
    ],
    nutritionalBenefits: [
      "High in vitamins C and K",
      "Good source of fiber",
      "Contains antioxidants",
      "Supports digestive health"
    ]
  },
  {
    id: "passion-fruit",
    name: "Passion Fruit",
    localName: "Matunda ya pesheni",
    scientificName: "Passiflora edulis",
    emoji: "🥝",
    image: "/assets/images/fruits/avocado.png",
    description: "Popular tropical fruit with high demand. Excellent for juice production and fresh consumption.",
    climateBadges: ["moderate-water", "fast-growing"],
    difficulty: "beginner",
    growthTime: "6-8 months to first harvest",
    waterNeeds: "moderate",
    temperatureRange: "20-28°C",
    rainfallNeeds: "900-1500mm annually",
    soilType: "Well-drained soil rich in organic matter (pH 6-7)",
    plantingInstructions: [
      "Build strong trellis system before planting",
      "Use certified disease-free seedlings",
      "Space plants 3-4 meters apart",
      "Dig holes 40x40x40cm",
      "Mix soil with compost and phosphate fertilizer",
      "Water immediately after planting"
    ],
    careInstructions: [
      "Provide strong trellis or support structure",
      "Water regularly during dry periods",
      "Apply organic mulch around base",
      "Fertilize every 3 months with compost or NPK",
      "Prune after harvest to encourage new growth"
    ],
    commonDiseases: [
      {
        name: "Fusarium Wilt",
        symptoms: "Wilting vines, yellowing leaves",
        treatment: "Use resistant varieties, improve drainage, crop rotation"
      },
      {
        name: "Fruit Fly",
        symptoms: "Maggots in fruit, premature drop",
        treatment: "Fruit fly traps, proper sanitation, insecticide if needed"
      }
    ],
    harvestTips: [
      "Harvest when fruit drops naturally or skin wrinkles",
      "Purple varieties are ripe when deep purple",
      "Yellow varieties ripen when bright yellow",
      "Store at room temperature for a few days"
    ],
    nutritionalBenefits: [
      "Very high in vitamin C",
      "Rich in fiber and antioxidants",
      "Contains vitamin A and potassium",
      "Supports immune system"
    ]
  },
  {
    id: "mango",
    name: "Mango",
    localName: "Maembe",
    scientificName: "Mangifera indica",
    emoji: "🥭",
    image: "/assets/images/fruits/avocado.png",
    description: "Tropical fruit tree known for its sweet, juicy fruits. Widely grown across Kenya.",
    climateBadges: ["Tropical", "Warm Climate", "Seasonal"],
    difficulty: "beginner",
    growthTime: "3-5 years to fruit",
    waterNeeds: "moderate",
    temperatureRange: "20-35°C",
    rainfallNeeds: "800-1200mm annually",
    soilType: "Well-drained sandy loam",
    plantingInstructions: [
      "Plant grafted varieties for better fruit quality",
      "Space trees 10-12 meters apart",
      "Dig holes 1x1x1 meter",
      "Mix soil with compost and well-rotted manure",
      "Water thoroughly after planting",
      "Protect young trees from livestock"
    ],
    careInstructions: [
      "Plant in well-drained soil",
      "Water regularly during dry seasons",
      "Apply organic manure annually",
      "Prune to maintain manageable tree size",
      "Control pests and diseases promptly"
    ],
    commonDiseases: [
      {
        name: "Anthracnose",
        symptoms: "Black spots on fruits and leaves",
        treatment: "Copper-based fungicides"
      },
      {
        name: "Powdery Mildew",
        symptoms: "White powdery coating on leaves and flowers",
        treatment: "Sulfur-based fungicides, proper spacing"
      }
    ],
    harvestTips: [
      "Harvest when fruits develop yellow-orange blush",
      "Use picking poles for tall trees",
      "Handle fruits carefully to avoid bruising",
      "Harvest in multiple passes as fruits ripen"
    ],
    storageTips: [
      "Store at room temperature to ripen",
      "Refrigerate ripe fruits",
      "Avoid stacking to prevent bruising"
    ],
    nutritionalBenefits: [
      "Rich in vitamins A and C",
      "High in fiber and antioxidants",
      "Contains digestive enzymes",
      "Supports eye health"
    ]
  },
  {
    id: "banana",
    name: "Banana",
    localName: "Ndizi",
    scientificName: "Musa spp.",
    emoji: "🍌",
    image: "/assets/images/fruits/avocado.png",
    description: "Bananas are one of Kenya's most important fruit crops, providing food security and income for many small-scale farmers.",
    climateBadges: ["Tropical", "High Rainfall", "Warm"],
    difficulty: "beginner",
    growthTime: "9-12 months to harvest",
    waterNeeds: "high",
    temperatureRange: "20-30°C",
    rainfallNeeds: "1200-2000mm annually",
    soilType: "Deep, well-drained loamy soil",
    plantingInstructions: [
      "Use disease-free sword suckers or tissue culture plants",
      "Plant in pits 60x60x60cm filled with topsoil and manure",
      "Space plants 2-3 meters apart in rows 3 meters apart",
      "Water immediately after planting",
      "Mulch heavily around plants",
      "Support plants with stakes during fruiting"
    ],
    careInstructions: [
      "Use disease-free planting material",
      "Plant in pits with organic manure",
      "Space plants 2-3 meters apart",
      "Provide regular irrigation during dry periods",
      "Support plants with stakes during fruiting"
    ],
    commonDiseases: [
      {
        name: "Panama Disease",
        symptoms: "Yellowing leaves, wilting, plant death",
        treatment: "Use resistant varieties, crop rotation"
      },
      {
        name: "Black Sigatoka",
        symptoms: "Black spots on leaves, reduced yield",
        treatment: "Fungicide sprays, proper spacing"
      }
    ],
    harvestTips: [
      "Harvest when fingers are plump but still green",
      "Cut entire bunch with a sharp knife",
      "Handle bunches carefully to avoid bruising",
      "Harvest in morning when temperatures are cool"
    ],
    storageTips: [
      "Store at room temperature for ripening",
      "Refrigerate ripe bananas to slow ripening",
      "Hang bunches to prevent pressure spots"
    ],
    nutritionalBenefits: [
      "Rich in potassium and vitamin B6",
      "High in dietary fiber",
      "Contains natural sugars for energy",
      "Supports digestive health"
    ]
  }
];