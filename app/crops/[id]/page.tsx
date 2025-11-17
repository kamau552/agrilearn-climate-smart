// app/crops/[id]/page.tsx
import { crops } from "@/constant/crops";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function CropDetailPage({ params }: PageProps) {
  const { id } = await params;
  
  // Find the crop by ID
  const crop = crops.find(c => c.id === id);
  
  // If crop doesn't exist, show 404
  if (!crop) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-sm text-gray-600">
          <Link href="/" className="hover:text-green-600">Home</Link>
          <span>/</span>
          <Link href="/crops" className="hover:text-green-600">Crops</Link>
          <span>/</span>
          <span className="text-green-800 font-semibold">{crop.name}</span>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Hero Section */}
          <div className="bg-green-100 p-8">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              {/* Image/Emoji */}
              <div className="w-full md:w-64 h-64 bg-white rounded-2xl shadow-md flex items-center justify-center shrink-0">
                {crop.image ? (
                  <Image
                    src={crop.image}
                    alt={crop.name}
                    width={256}
                    height={256}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                ) : (
                  <span className="text-9xl">{crop.emoji}</span>
                )}
              </div>

              {/* Info */}
              <div className="flex-1">
                <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-2">
                  {crop.name}
                </h1>
                <p className="text-2xl text-gray-600 italic mb-2">{crop.localName}</p>
                <p className="text-sm text-gray-500 mb-6">{crop.scientificName}</p>

                {/* Climate Badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {crop.climateBadges.map((badge, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-green-600 text-white rounded-full text-sm font-medium"
                    >
                      {badge}
                    </span>
                  ))}
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-white p-4 rounded-xl shadow-sm">
                    <div className="text-sm text-gray-600 mb-1">Difficulty</div>
                    <div className="font-bold text-green-800 capitalize">{crop.difficulty}</div>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow-sm">
                    <div className="text-sm text-gray-600 mb-1">Growth Time</div>
                    <div className="font-bold text-green-800">{crop.growthTime}</div>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow-sm">
                    <div className="text-sm text-gray-600 mb-1">Water Needs</div>
                    <div className="font-bold text-green-800 capitalize">{crop.waterNeeds}</div>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow-sm">
                    <div className="text-sm text-gray-600 mb-1">Market Value</div>
                    <div className="font-bold text-green-800 capitalize">{crop.marketValue}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="p-8 border-b">
            <p className="text-lg text-gray-700 leading-relaxed">
              {crop.description}
            </p>
          </div>

          {/* Climate Requirements */}
          <div className="p-8 bg-blue-50 border-b">
            <h2 className="text-3xl font-bold text-green-800 mb-6 flex items-center gap-3">
              🌡️ Climate Requirements
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-semibold text-gray-700 mb-2">Temperature Range</h3>
                <p className="text-green-700 font-medium text-lg">{crop.temperatureRange}</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-semibold text-gray-700 mb-2">Rainfall Needs</h3>
                <p className="text-green-700 font-medium text-lg">{crop.rainfallNeeds}</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-semibold text-gray-700 mb-2">Soil Type</h3>
                <p className="text-green-700 font-medium text-lg">{crop.soilType}</p>
              </div>
            </div>
          </div>

          {/* Care Instructions */}
          <div className="p-8 border-b">
            <h2 className="text-3xl font-bold text-green-800 mb-6 flex items-center gap-3">
              🌱 How to Grow {crop.name}
            </h2>
            <div className="space-y-4">
              {crop.careInstructions.map((instruction, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                    {idx + 1}
                  </div>
                  <p className="text-gray-700 text-lg pt-1">{instruction}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Common Diseases */}
          <div className="p-8 border-b">
            <h2 className="text-3xl font-bold text-green-800 mb-6 flex items-center gap-3">
              🐛 Common Problems & Solutions
            </h2>
            <div className="space-y-6">
              {crop.commonDiseases.map((disease, idx) => (
                <div key={idx} className="border-l-4 border-red-500 bg-red-50 p-6 rounded-r-xl">
                  <h3 className="font-bold text-xl text-gray-800 mb-3">{disease.name}</h3>
                  <div className="space-y-3">
                    <div>
                      <span className="font-semibold text-gray-700">Symptoms:</span>
                      <p className="text-gray-600 mt-1">{disease.symptoms}</p>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-700">Treatment:</span>
                      <p className="text-gray-600 mt-1">{disease.treatment}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Harvest Tips */}
          <div className="p-8 bg-green-50">
            <h2 className="text-3xl font-bold text-green-800 mb-6 flex items-center gap-3">
              🌾 Harvest Tips
            </h2>
            <ul className="space-y-3">
              {crop.harvestTips.map((tip, idx) => (
                <li key={idx} className="flex gap-3 items-start text-gray-700 text-lg">
                  <span className="text-green-600 text-2xl">✓</span>
                  <span className="pt-1">{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* AI Assistant CTA */}
        <div className="mt-8 bg-green-700 rounded-2xl p-8 text-white text-center shadow-xl">
          <h2 className="text-3xl font-bold mb-4">Have Questions About {crop.name}?</h2>
          <p className="text-xl mb-6">Ask our AI assistant for personalized farming advice</p>
          <Link
            href={`/ai-assistant?topic=${crop.id}`}
            className="inline-block bg-white text-purple-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-purple-50 transition-colors shadow-lg"
          >
            Ask AI About {crop.name}
          </Link>
        </div>
      </div>
    </div>
  );
}

// Generate static params for better performance
export async function generateStaticParams() {
  return crops.map((crop) => ({
    id: crop.id,
  }));
}

// Optional: Generate metadata
export async function generateMetadata({ params }: PageProps) {
  const { id } = await params;
  const crop = crops.find(c => c.id === id);
  
  return {
    title: crop ? `${crop.name} - AgriLearn` : 'Crop Not Found',
    description: crop?.description,
  };
}