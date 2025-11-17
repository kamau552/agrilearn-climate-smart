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
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-sm text-gray-600">
          <Link href="/" className="hover:text-green-600">Home</Link>
          <span>/</span>
          <Link href="/fruits" className="hover:text-green-600">Fruits</Link>
          <span>/</span>
          <span className="text-green-800 font-semibold">{fruit.name}</span>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Hero Section */}
          <div className="bg-linear-to-br from-orange-50 to-orange-100 p-8">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              {/* Image/Emoji */}
              <div className="w-full md:w-64 h-64 bg-white rounded-2xl shadow-md flex items-center justify-center shrink-0">
                {fruit.image ? (
                  <Image
                    src={fruit.image}
                    alt={fruit.name}
                    width={256}
                    height={256}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                ) : (
                  <span className="text-9xl">{fruit.emoji || '🍎'}</span>
                )}
              </div>

              {/* Info */}
              <div className="flex-1">
                <h1 className="text-4xl md:text-5xl font-bold text-orange-800 mb-2">
                  {fruit.name}
                </h1>
                <p className="text-2xl text-gray-600 italic mb-2">{fruit.localName}</p>
                <p className="text-sm text-gray-500 mb-6">{fruit.scientificName}</p>

                {/* Climate Badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {(fruit.climateBadges || []).map((badge, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-orange-600 text-white rounded-full text-sm font-medium"
                    >
                      {badge}
                    </span>
                  ))}
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-white p-4 rounded-xl shadow-sm">
                    <div className="text-sm text-gray-600 mb-1">Difficulty</div>
                    <div className="font-bold text-orange-800 capitalize">{fruit.difficulty}</div>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow-sm">
                    <div className="text-sm text-gray-600 mb-1">Growth Time</div>
                    <div className="font-bold text-orange-800">{fruit.growthTime}</div>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow-sm">
                    <div className="text-sm text-gray-600 mb-1">Water Needs</div>
                    <div className="font-bold text-orange-800 capitalize">{fruit.waterNeeds}</div>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow-sm">
                    <div className="text-sm text-gray-600 mb-1">Market Value</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="p-8 border-b">
            <p className="text-lg text-gray-700 leading-relaxed">
              {fruit.description}
            </p>
          </div>

          {/* Climate Requirements */}
          <div className="p-8 bg-blue-50 border-b">
            <h2 className="text-3xl font-bold text-orange-800 mb-6 flex items-center gap-3">
               Climate Requirements
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-semibold text-gray-700 mb-2">Temperature Range</h3>
                <p className="text-orange-700 font-medium text-lg">{fruit.temperatureRange}</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-semibold text-gray-700 mb-2">Rainfall Needs</h3>
                <p className="text-orange-700 font-medium text-lg">{fruit.rainfallNeeds}</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-semibold text-gray-700 mb-2">Soil Type</h3>
                <p className="text-orange-700 font-medium text-lg">{fruit.soilType}</p>
              </div>
            </div>
          </div>

          {/* Planting Instructions */}
          {fruit.plantingInstructions && fruit.plantingInstructions.length > 0 && (
            <div className="p-8 border-b">
              <h2 className="text-3xl font-bold text-orange-800 mb-6 flex items-center gap-3">
                How to Plant {fruit.name}
              </h2>
              <div className="space-y-4">
                {fruit.plantingInstructions.map((instruction, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <div className="shrink-0 w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold">
                      {idx + 1}
                    </div>
                    <p className="text-gray-700 text-lg pt-1">{instruction}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Common Diseases */}
          {fruit.commonDiseases && fruit.commonDiseases.length > 0 && (
            <div className="p-8 border-b">
              <h2 className="text-3xl font-bold text-orange-800 mb-6 flex items-center gap-3">
                Common Problems & Solutions
              </h2>
              <div className="space-y-6">
                {fruit.commonDiseases.map((disease, idx) => (
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
          )}

          {/* Harvest & Storage Tips */}
          {(fruit.harvestTips || fruit.storageTips) && (
            <div className="p-8 bg-green-50">
              <h2 className="text-3xl font-bold text-green-800 mb-6 flex items-center gap-3">
                Harvest & Storage
              </h2>
              <div className="space-y-6">
                {fruit.harvestTips && fruit.harvestTips.length > 0 && (
                  <div>
                    <h3 className="font-bold text-xl text-gray-800 mb-3">Harvesting Tips</h3>
                    <ul className="space-y-3">
                      {fruit.harvestTips.map((tip, idx) => (
                        <li key={idx} className="flex gap-3 items-start text-gray-700 text-lg">
                          <span className="text-green-600 text-2xl">✓</span>
                          <span className="pt-1">{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {fruit.storageTips && fruit.storageTips.length > 0 && (
                  <div>
                    <h3 className="font-bold text-xl text-gray-800 mb-3">Storage Guidelines</h3>
                    <ul className="space-y-3">
                      {fruit.storageTips.map((tip, idx) => (
                        <li key={idx} className="flex gap-3 items-start text-gray-700 text-lg">
                          <span className="text-blue-600 text-2xl">📦</span>
                          <span className="pt-1">{tip}</span>
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
            <div className="p-8 bg-purple-50">
              <h2 className="text-3xl font-bold text-green-800 mb-6 flex items-center gap-3">
                Nutritional Benefits
              </h2>
              <ul className="space-y-3">
                {fruit.nutritionalBenefits.map((benefit, idx) => (
                  <li key={idx} className="flex gap-3 items-start text-gray-700 text-lg">
                    <span className="text-green-600 text-2xl">•</span>
                    <span className="pt-1">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* AI Assistant CTA */}
        <div className="mt-8 bg-linear-to-r from-green-700 to-green-800 rounded-2xl p-8 text-white text-center shadow-xl">
          <h2 className="text-3xl font-bold mb-4">Have Questions About {fruit.name}?</h2>
          <p className="text-xl mb-6">Ask our AI assistant for personalized fruit farming advice</p>
          <Link
            href={`/ai-assistant?topic=${fruit.id}`}
            className="inline-block bg-white text-green-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-purple-50 transition-colors shadow-lg"
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

//Generate metadata
export async function generateMetadata({ params }: PageProps) {
  const { id } = await params;
  const fruit = fruits.find(f => f.id === id);
  
  return {
    title: fruit ? `${fruit.name} - AgriLearn` : 'Fruit Not Found',
    description: fruit?.description,
  };
}