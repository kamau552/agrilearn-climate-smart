"use client";

export default function VetSupportPage() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-green-800 mb-4">Vet Support</h1>
      <p className="text-gray-600 mb-6">
        Get help with animal health, emergency signs, and contact a local veterinarian.
      </p>

      {/* Ask AI (Placeholder) */}
      <div className="mb-8 p-5 border border-green-200 rounded-xl bg-green-50">
        <h2 className="text-xl font-semibold text-green-700 mb-2">
          🩺 Describe Your Animal’s Symptoms
        </h2>

        <input
          disabled
          placeholder="AI assistant is coming soon..."
          className="w-full p-3 border border-gray-300 rounded-lg bg-white text-gray-500"
        />

        <button
          disabled
          className="mt-3 w-full py-3 bg-green-400 text-white rounded-lg opacity-70 cursor-not-allowed"
        >
          Ask AI (Coming Soon)
        </button>

        <p className="text-sm text-gray-500 mt-3">
          AI veterinary feature is under development. Use the emergency signs below for now.
        </p>
      </div>

      {/* Emergency Symptoms */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-red-600 mb-3">
          🚨 Emergency Warning Signs
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Not eating or drinking</li>
          <li>Difficulty breathing</li>
          <li>Sudden collapse or inability to stand</li>
          <li>Blood in stool or severe diarrhea</li>
          <li>Swollen stomach (bloat)</li>
          <li>High fever, shaking, or weakness</li>
          <li>Bleeding wounds or visible injuries</li>
        </ul>
      </div>

      {/* Vet Contacts */}
      <div>
        <h2 className="text-xl font-semibold text-green-700 mb-3">
          🐄 Local Veterinarians
        </h2>

        <div className="space-y-4">
          <div className="p-4 border rounded-lg bg-white">
            <h3 className="font-semibold text-green-800">Dr. Wanjiku — Limuru</h3>
            <p>📞 0712 345 678</p>
            <p>🐄 Dairy cows, goats</p>
          </div>

          <div className="p-4 border rounded-lg bg-white">
            <h3 className="font-semibold text-green-800">Dr. Otieno — Kisumu East</h3>
            <p>📞 0799 111 222</p>
            <p>🐓 Poultry, goats</p>
          </div>

          <div className="p-4 border rounded-lg bg-white">
            <h3 className="font-semibold text-green-800">Dr. Kiprotich — Eldoret</h3>
            <p>📞 0700 555 333</p>
            <p>🐄 Cattle</p>
          </div>
        </div>

        <p className="text-sm text-gray-500 mt-4">
          More veterinarians will be added soon.
        </p>
      </div>
    </div>
  );
}
