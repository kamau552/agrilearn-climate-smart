import React from 'react'

export default function VetSupportPage() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-green-800 mb-2">
          👨‍⚕️ Veterinary Support
        </h1>
        <p className="text-gray-600 text-lg">
          Animal health resources and expert advice
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-md p-8">
        <h2 className="text-2xl font-bold text-green-800 mb-4">Need Vet Advice?</h2>
        <p className="text-gray-600 mb-6">
          Ask our AI assistant about animal health concerns or contact a local veterinarian.
        </p>
        <a
          href="/ai-assistant"
          className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
        >
          Ask AI About Animal Health
        </a>
      </div>
    </div>
  );
}