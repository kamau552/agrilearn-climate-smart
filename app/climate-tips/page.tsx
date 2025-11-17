export default function ClimateTipsPage() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-green-800 mb-2">
          ☁️ Climate Tips
        </h1>
        <p className="text-gray-600 text-lg">
          Essential climate-smart farming practices for Kenya
        </p>
      </div>

      {/* Tips Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Water Conservation */}
        <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow">
          <div className="text-4xl mb-4">💧</div>
          <h3 className="text-2xl font-bold text-green-800 mb-3">Water Conservation</h3>
          <ul className="space-y-2 text-gray-700">
            <li>• Use drip irrigation to save 50% more water</li>
            <li>• Mulch around plants to retain moisture</li>
            <li>• Harvest rainwater in tanks for dry seasons</li>
            <li>• Plant drought-resistant crops</li>
            <li>• Water early morning or late evening</li>
          </ul>
        </div>

        {/* Soil Health */}
        <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow">
          <div className="text-4xl mb-4">🌱</div>
          <h3 className="text-2xl font-bold text-green-800 mb-3">Soil Health</h3>
          <ul className="space-y-2 text-gray-700">
            <li>• Add compost to improve soil structure</li>
            <li>• Practice crop rotation every season</li>
            <li>• Plant cover crops to prevent erosion</li>
            <li>• Test soil pH and nutrient levels</li>
            <li>• Avoid over-tilling to preserve soil life</li>
          </ul>
        </div>

        {/* Climate Adaptation */}
        <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow">
          <div className="text-4xl mb-4">🌡️</div>
          <h3 className="text-2xl font-bold text-green-800 mb-3">Climate Adaptation</h3>
          <ul className="space-y-2 text-gray-700">
            <li>• Choose heat/drought-tolerant varieties</li>
            <li>• Diversify crops to spread risk</li>
            <li>• Plant trees for shade and windbreaks</li>
            <li>• Monitor weather forecasts regularly</li>
            <li>• Adjust planting dates based on rainfall</li>
          </ul>
        </div>

        {/* Pest Management */}
        <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow">
          <div className="text-4xl mb-4">🐛</div>
          <h3 className="text-2xl font-bold text-green-800 mb-3">Organic Pest Control</h3>
          <ul className="space-y-2 text-gray-700">
            <li>• Use neem oil for natural pest control</li>
            <li>• Plant companion plants to deter pests</li>
            <li>• Encourage beneficial insects</li>
            <li>• Remove diseased plants immediately</li>
            <li>• Rotate crops to break pest cycles</li>
          </ul>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-8 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Need Personalized Climate Advice?</h2>
        <p className="text-lg mb-6">Ask our AI assistant for tips specific to your farm and location</p>
        <a
          href="/ai-assistant"
          className="inline-block bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-green-50 transition-colors"
        >
          Ask AI Now
        </a>
      </div>
    </div>
  );
}