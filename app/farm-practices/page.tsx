import React from 'react'

export default function FarmPracticesPage() {
  const practices = [
    {
      title: "Crop Rotation",
      icon: "🔄",
      description: "Alternate different crops to improve soil health and reduce pests",
      steps: ["Plan 3-4 year rotation", "Alternate deep and shallow-rooted crops", "Include legumes for nitrogen", "Keep records"]
    },
    {
      title: "Composting",
      icon: "♻️",
      description: "Turn farm waste into nutrient-rich organic fertilizer",
      steps: ["Collect plant waste and manure", "Layer green and brown materials", "Keep moist and turn weekly", "Use after 2-3 months"]
    },
    {
      title: "Intercropping",
      icon: "🌿",
      description: "Grow complementary crops together for better yields",
      steps: ["Choose compatible crops", "Plant tall and short crops", "Maximize space usage", "Reduce pest problems"]
    },
    {
      title: "Mulching",
      icon: "🍂",
      description: "Cover soil to retain moisture and suppress weeds",
      steps: ["Use dry grass or crop residues", "Apply 5-10cm thick layer", "Keep away from plant stems", "Replenish as needed"]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-green-800 mb-2">
          📖 Farm Practices
        </h1>
        <p className="text-gray-600 text-lg">
          Sustainable farming techniques for better yields
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {practices.map((practice) => (
          <div key={practice.title} className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow">
            <div className="text-5xl mb-4">{practice.icon}</div>
            <h3 className="text-2xl font-bold text-green-800 mb-3">{practice.title}</h3>
            <p className="text-gray-700 mb-4">{practice.description}</p>
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">Steps:</h4>
              <ol className="space-y-1 text-gray-700">
                {practice.steps.map((step, index) => (
                  <li key={index}>• {step}</li>
                ))}
              </ol>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}