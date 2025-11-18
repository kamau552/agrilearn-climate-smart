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
  commonIssues: { name: string; symptoms: string; treatment: string }[];
  breedingtips: string[];
  productionPotential: string[];
  marketValue: "low" | "medium" | "high";
}

export const livestock: Livestock[] = [
  {
    id: "cow",
    name: "Cow",
    localName: "Ng'ombe wa maziwa",
    scientificName: "Bos taurus",
    image: "/assets/images/livestock/cow.png",
    description: "Primary source of milk in Kenya. Suitable breeds include Friesian, Ayrshire, and Jersey for highland areas.",
    climateBadges: ["cool-climate", "high-value"],
    difficulty: "advanced",
    maturityAge: "2-2.5 years for first calving",
    spaceNeeds: "Minimum 4m x 3m per cow in zero-grazing, or 1-2 acres for grazing",
    waterNeeds: "40-60 liters per day (more for lactating cows)",
    feedingGuide: [
      "Napier grass, Rhodes grass, or other quality fodder (30-40kg daily)",
      "Dairy meal concentrate 2-4kg based on milk production",
      "Mineral supplements (salt lick, bone meal)",
      "Clean water always available",
      "Silage or hay during dry season"
    ],
    housingRequirements: [
      "Well-ventilated shed with good drainage",
      "Concrete or raised slatted floor for hygiene",
      "Separate feeding and water troughs",
      "Milking area if zero-grazing",
      "Protection from rain and extreme temperatures"
    ],
    commonIssues: [
      {
        name: "Mastitis",
        symptoms: "Swollen udder, abnormal milk, fever",
        treatment: "Antibiotic treatment, improve hygiene, proper milking technique"
      },
      {
        name: "East Coast Fever (ECF)",
        symptoms: "High fever, swollen lymph nodes, loss of appetite",
        treatment: "Immediate vet attention, antibiotics, tick control essential"
      },
      {
        name: "Foot and Mouth Disease",
        symptoms: "Blisters on mouth and feet, drooling, lameness",
        treatment: "Vaccination, isolate affected animals, contact vet"
      }
    ],
    breedingtips: [
      "Heat cycle every 21 days, lasts 12-18 hours",
      "Artificial insemination (AI) widely available",
      "Gestation period: 9 months",
      "Optimal breeding age: 18-24 months",
      "Allow 60-90 days rest between calving and re-breeding"
    ],
    productionPotential: [
      "High-grade dairy: 20-30 liters per day",
      "Crossbreeds: 10-20 liters per day",
      "Lactation period: 305 days (10 months)",
      "Manure production: excellent for compost",
      "Can also produce calves for sale"
    ],
    marketValue: "high"
  },
  {
    id: "goats",
    name: "Goats",
    localName: "Mbuzi",
    scientificName: "Capra aegagrus hircus",
    image: "/assets/images/livestock/goats.png",
    description: "Versatile livestock for meat, milk, and breeding. Excellent for small-scale farmers and drought-prone areas.",
    climateBadges: ["drought-tolerant", "heat-resistant", "versatile"],
    difficulty: "beginner",
    maturityAge: "6-8 months for breeding",
    spaceNeeds: "1-2 square meters per goat in housing, can browse on marginal land",
    waterNeeds: "3-5 liters per day (less in cool weather)",
    feedingGuide: [
      "Browse on trees, shrubs, and herbs (preferred)",
      "Napier grass, maize stover, sweet potato vines",
      "Dairy meal for milk goats (0.5-1kg daily)",
      "Mineral supplements and salt lick",
      "Clean water always available"
    ],
    housingRequirements: [
      "Well-ventilated shed raised off ground",
      "Slatted wooden floor for good drainage",
      "Separate kids from adults",
      "Protection from rain and predators",
      "Minimum height 1.5 meters"
    ],
    commonIssues: [
      {
        name: "Pneumonia",
        symptoms: "Coughing, nasal discharge, difficulty breathing",
        treatment: "Antibiotics from vet, improve ventilation, reduce stress"
      },
      {
        name: "Internal Parasites (Worms)",
        symptoms: "Weight loss, rough coat, anemia, bottle jaw",
        treatment: "Regular deworming every 3 months, pasture rotation"
      },
      {
        name: "External Parasites (Ticks, Lice)",
        symptoms: "Scratching, hair loss, skin irritation",
        treatment: "Acaricide dips or sprays, maintain clean housing"
      }
    ],
    breedingtips: [
      "Heat cycle every 18-21 days, multiple kids common",
      "Gestation period: 5 months (150 days)",
      "Can breed year-round",
      "Kids weaned at 3-4 months",
      "Does can kid twice per year in ideal conditions"
    ],
    productionPotential: [
      "Meat: 12-40kg live weight at 6-12 months",
      "Milk: 1-3 liters daily (dairy breeds)",
      "Manure: excellent for gardens",
      "Multiple offspring (twins/triplets common)",
      "Skin/hide for leather products"
    ],
    marketValue: "high"
  },
  {
    id: "indigenous-chicken",
    name: "Indigenous Chicken",
    localName: "Kuku wa kienyeji",
    scientificName: "Gallus gallus domesticus",
    image: "/assets/images/livestock/chicken2.png",
    description: "Hardy local chickens with high market demand. Disease-resistant and low maintenance.",
    climateBadges: ["drought-tolerant", "disease-resistant", "low-maintenance"],
    difficulty: "beginner",
    maturityAge: "5-6 months for laying/slaughter",
    spaceNeeds: "0.5-1 square meter per bird in housing, plus ranging area",
    waterNeeds: "250-500ml per day per bird",
    feedingGuide: [
      "Free-range scavenging (insects, seeds, greens)",
      "Supplementary feeds: maize, millet, kitchen scraps",
      "Commercial layers mash (50-100g daily)",
      "Grit for digestion",
      "Always provide clean water"
    ],
    housingRequirements: [
      "Simple chicken house with perches",
      "Nesting boxes (1 per 4 hens)",
      "Wire mesh to prevent predators",
      "Good ventilation but draft-free",
      "Easy to clean and disinfect"
    ],
    commonIssues: [
      {
        name: "Newcastle Disease",
        symptoms: "Twisted neck, paralysis, greenish diarrhea",
        treatment: "Vaccination is key prevention, no cure once infected"
      },
      {
        name: "Coccidiosis",
        symptoms: "Bloody diarrhea, drooping, huddling",
        treatment: "Anticoccidial drugs, keep brooder dry and clean"
      },
      {
        name: "External Parasites",
        symptoms: "Feather loss, reduced egg production, irritation",
        treatment: "Dust bath with ash/sand, parasiticide powder"
      }
    ],
    breedingtips: [
      "Hens start laying at 5-6 months",
      "Clutch size: 10-15 eggs",
      "Incubation: 21 days",
      "Broody hens make excellent mothers",
      "Keep 1 rooster per 8-10 hens"
    ],
    productionPotential: [
      "Eggs: 60-120 per year (free range)",
      "Meat: 1.2-2kg at 6 months",
      "High market price (2-3x commercial chicken)",
      "Low feed costs due to scavenging",
      "Manure for gardens"
    ],
    marketValue: "high"
  },
  {
    id: "sheep",
    name: "Sheep",
    localName: "Kondoo",
    scientificName: "Ovis aries",
    image: "/assets/images/livestock/sheep-1.png",
    description: "Raised for meat and wool. Suitable for cooler highland regions with good pasture.",
    climateBadges: ["cool-climate", "moderate-water"],
    difficulty: "intermediate",
    maturityAge: "8-12 months for slaughter, 12-18 months for breeding",
    spaceNeeds: "2-3 square meters per sheep in housing, 5-10 sheep per acre for grazing",
    waterNeeds: "4-6 liters per day",
    feedingGuide: [
      "Quality pasture or hay (main diet)",
      "Supplementary concentrates during pregnancy/lactation",
      "Mineral supplements and salt",
      "Browse on shrubs and crop residues",
      "Clean water always available"
    ],
    housingRequirements: [
      "Open-sided shed for shelter from rain",
      "Good drainage and ventilation",
      "Raised wooden slats or deep bedding",
      "Separate lambing area",
      "Protection from predators"
    ],
    commonIssues: [
      {
        name: "Foot Rot",
        symptoms: "Limping, foul smell from hooves, reluctance to walk",
        treatment: "Trim hooves, footbath with copper sulfate, antibiotics if severe"
      },
      {
        name: "Internal Parasites",
        symptoms: "Weight loss, anemia, bottle jaw, diarrhea",
        treatment: "Regular deworming, pasture rotation, fecal egg counts"
      },
      {
        name: "Pneumonia",
        symptoms: "Coughing, nasal discharge, labored breathing",
        treatment: "Antibiotics, improve ventilation, reduce stress"
      }
    ],
    breedingtips: [
      "Heat cycle every 17 days during breeding season",
      "Gestation: 5 months (147 days)",
      "Twins common in well-managed flocks",
      "Lambs weaned at 2-3 months",
      "Ewes can breed once or twice per year"
    ],
    productionPotential: [
      "Meat: 25-45kg live weight at 6-12 months",
      "Wool: 2-4kg per shearing (twice yearly)",
      "High-value mutton market",
      "Manure for fertilizer",
      "Multiple births increase productivity"
    ],
    marketValue: "high"
  },
  {
    id: "pigs",
    name: "Pigs",
    localName: "Nguruwe",
    scientificName: "Sus scrofa domesticus",
    image: "/assets/images/livestock/pigs.png",
    description: "Fast-growing livestock with high feed conversion efficiency. Growing market demand for pork.",
    climateBadges: ["fast-growing", "high-yield"],
    difficulty: "intermediate",
    maturityAge: "6-8 months for slaughter",
    spaceNeeds: "3-4 square meters per pig in housing",
    waterNeeds: "6-10 liters per day",
    feedingGuide: [
      "Commercial pig feed (grower/finisher)",
      "Kitchen waste and crop residues (cooked)",
      "Protein supplements (fishmeal, soybean)",
      "Green vegetables and fruits",
      "Clean water always available"
    ],
    housingRequirements: [
      "Solid concrete floor with slope for drainage",
      "Separate feeding and sleeping areas",
      "Wallowing area or water sprinkler for cooling",
      "Good ventilation",
      "Easy to clean and disinfect"
    ],
    commonIssues: [
      {
        name: "African Swine Fever (ASF)",
        symptoms: "High fever, reddening of skin, sudden death",
        treatment: "NO CURE - strict biosecurity, report to authorities immediately"
      },
      {
        name: "Pneumonia",
        symptoms: "Coughing, labored breathing, fever",
        treatment: "Antibiotics, improve ventilation, reduce crowding"
      },
      {
        name: "Mange",
        symptoms: "Intense itching, hair loss, crusty skin",
        treatment: "Injectable ivermectin, improve hygiene"
      }
    ],
    breedingtips: [
      "Heat cycle every 21 days",
      "Gestation: 3 months, 3 weeks, 3 days (114 days)",
      "Litter size: 8-12 piglets",
      "Piglets weaned at 6-8 weeks",
      "Sows can farrow twice per year"
    ],
    productionPotential: [
      "Slaughter weight: 80-100kg at 6-8 months",
      "High feed conversion ratio (3:1)",
      "Large litter sizes",
      "Manure excellent for biogas and fertilizer",
      "Rapid turnover for income"
    ],
    marketValue: "high"
  },
  {
    id: "rabbits",
    name: "Rabbits",
    localName: "Sungura",
    scientificName: "Oryctolagus cuniculus",
    image: "/assets/images/livestock/rabbits.png",
    description: "Excellent for small-scale farming. Low space requirements, fast reproduction, and quality meat.",
    climateBadges: ["low-space", "fast-breeding", "efficient"],
    difficulty: "beginner",
    maturityAge: "5-6 months for breeding",
    spaceNeeds: "0.5-1 square meter per rabbit in cage",
    waterNeeds: "200-500ml per day",
    feedingGuide: [
      "Quality hay or dried grass (main diet)",
      "Fresh vegetables and greens daily",
      "Pellets or concentrated feeds",
      "Salt lick for minerals",
      "Clean water in bottles or bowls"
    ],
    housingRequirements: [
      "Wire mesh cages raised off ground",
      "Nesting box for breeding does",
      "Protection from direct sun and rain",
      "Good ventilation but draft-free",
      "Easy access for cleaning"
    ],
    commonIssues: [
      {
        name: "Coccidiosis",
        symptoms: "Diarrhea, weight loss, rough coat",
        treatment: "Anticoccidial drugs in water, keep cages clean and dry"
      },
      {
        name: "Ear Mites",
        symptoms: "Head shaking, crusty ears, scratching",
        treatment: "Ivermectin drops, clean housing"
      },
      {
        name: "Bloat",
        symptoms: "Swollen abdomen, discomfort, reduced appetite",
        treatment: "Prevention through proper diet, immediate vet care if severe"
      }
    ],
    breedingtips: [
      "Ready to breed at 5-6 months",
      "Gestation: 30-32 days",
      "Litter size: 6-10 kits",
      "Can breed again immediately after kindling",
      "Does can produce 4-6 litters per year"
    ],
    productionPotential: [
      "Slaughter weight: 2-3kg at 10-12 weeks",
      "High-quality lean meat",
      "Pelts for crafts",
      "Manure excellent for gardens (high nitrogen)",
      "Rapid multiplication for income"
    ],
    marketValue: "medium"
  },
  {
    id: "ducks",
    name: "Ducks",
    localName: "Bata",
    scientificName: "Anas platyrhynchos",
    image: "/assets/images/livestock/duck.png",
    description: "Hardy waterbirds for eggs and meat. More disease-resistant than chickens, good foragers.",
    climateBadges: ["disease-resistant", "versatile", "low-maintenance"],
    difficulty: "beginner",
    maturityAge: "5-6 months for laying, 8-10 weeks for meat",
    spaceNeeds: "1 square meter per duck in housing, access to water for swimming",
    waterNeeds: "1 liter per day, plus swimming/bathing water",
    feedingGuide: [
      "Scavenging (snails, insects, worms, aquatic plants)",
      "Commercial duck/chicken feed",
      "Grains (maize, rice bran)",
      "Green vegetables",
      "Always provide swimming water"
    ],
    housingRequirements: [
      "Simple shelter with dry bedding",
      "Protection from predators (especially at night)",
      "Access to pond or water basin",
      "Nesting boxes for layers",
      "Well-ventilated but draft-free"
    ],
    commonIssues: [
      {
        name: "Duck Viral Enteritis",
        symptoms: "Bloody diarrhea, nasal discharge, sudden death",
        treatment: "Vaccination, biosecurity, isolate sick birds"
      },
      {
        name: "Botulism",
        symptoms: "Paralysis, inability to hold head up",
        treatment: "Prevention through clean water, antitoxin if available"
      },
      {
        name: "External Parasites",
        symptoms: "Feather damage, skin irritation",
        treatment: "Clean swimming water, dust baths, parasiticide if needed"
      }
    ],
    breedingtips: [
      "Start laying at 5-6 months",
      "Eggs larger than chicken eggs",
      "Incubation: 28 days",
      "Broody behavior varies by breed",
      "Keep 1 drake per 5-6 ducks"
    ],
    productionPotential: [
      "Eggs: 150-200 per year (good layers)",
      "Meat: 2-3kg at 8-10 weeks",
      "Duck eggs command premium price",
      "Excellent pest control in rice paddies",
      "Hardy and disease-resistant"
    ],
    marketValue: "medium"
  }
];

export const fruits: typeof livestock = []; 
export const crops: typeof livestock = [];  

// Export all data
export const agriLearnData = {
  fruits,
  crops,
  livestock
};