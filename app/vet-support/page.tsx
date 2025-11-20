"use client";

import { useState } from "react";
import { 
  FiActivity, 
  FiAlertTriangle, 
  FiPhone, 
  FiUser, 
  FiMessageCircle,
} from "react-icons/fi";

export default function VetSupportPage() {
  const [symptoms, setSymptoms] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [aiResponse, setAiResponse] = useState("");

  const handleAISubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!symptoms.trim()) return;

    setIsLoading(true);
    
    // Simulate AI response - in real implementation, this would call your AI API
    setTimeout(() => {
      setAiResponse(`Based on the symptoms you've described, here are some initial recommendations:

1. Monitor the animal's temperature and hydration levels
2. Ensure access to clean water and a comfortable resting area
3. Consider consulting a veterinarian for proper diagnosis
4. Keep the animal isolated if showing signs of contagious illness

⚠️ This is AI-generated advice and should not replace professional veterinary care.`);
      setIsLoading(false);
    }, 2000);
  };

  const emergencySymptoms = [
    "Not eating or drinking for 24+ hours",
    "Difficulty breathing or rapid breathing",
    "Sudden collapse or inability to stand",
    "Blood in stool, urine, or severe diarrhea",
    "Swollen stomach (bloat) with discomfort",
    "High fever, shaking, or extreme weakness",
    "Bleeding wounds or visible injuries",
    "Seizures or loss of consciousness",
    "Difficulty giving birth",
    "Pale or blue-colored gums"
  ];

  const vetContacts = [
    {
      region: "Central Kenya Region",
      contact: "County Veterinary Office",
      description: "Large animals, dairy cattle, goats"
    },
    {
      region: "Rift Valley Region", 
      contact: "County Veterinary Services",
      description: "Beef cattle, sheep, poultry"
    },
    {
      region: "Western Kenya Region",
      contact: "Regional Veterinary Center", 
      description: "Poultry, pigs, dairy cattle"
    },
    {
      region: "Coastal Region",
      contact: "County Livestock Office",
      description: "Goats, indigenous cattle, poultry"
    }
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-green-50 to-emerald-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="mb-8 sm:mb-12 text-center">
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm mb-4 sm:mb-6 border border-green-100">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-green-700 font-bold text-xs sm:text-sm uppercase tracking-wider">
              Animal Health Support
            </span>
          </div>
          <div className="flex items-center justify-center gap-3 mb-4">
            <FiActivity className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" />
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
              Vet Support
            </h1>
          </div>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Get AI-powered guidance for animal health issues and connect with veterinary resources
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* AI Assistant Section */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-green-200 transform hover:-translate-y-1 lg:col-span-2">
            <div className="bg-linear-to-r from-green-500 to-emerald-600 p-6 rounded-t-2xl">
              <div className="flex items-center gap-3 text-white">
                <FiMessageCircle className="w-6 h-6 sm:w-8 sm:h-8" />
                <h2 className="text-xl sm:text-2xl font-bold">AI Veterinary Assistant</h2>
              </div>
              <p className="text-green-100 mt-2 text-sm sm:text-base">
                Describe your animal&apos;s symptoms for initial guidance
              </p>
            </div>

            <div className="p-6">
              <form onSubmit={handleAISubmit} className="space-y-4">
                <div>
                  <label htmlFor="symptoms" className="block text-sm font-medium text-gray-700 mb-2">
                    Animal Symptoms Description
                  </label>
                  <textarea
                    id="symptoms"
                    value={symptoms}
                    onChange={(e) => setSymptoms(e.target.value)}
                    placeholder="Describe the animal's symptoms, behavior changes, duration, and any other relevant details..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none text-sm sm:text-base"
                    rows={4}
                  />
                </div>

                {/* Button Group */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    disabled={isLoading || !symptoms.trim()}
                    className="flex-1 bg-linear-to-r from-green-500 to-emerald-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:-translate-y-0.5"
                  >
                    {isLoading ? (
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Analyzing Symptoms...
                      </div>
                    ) : (
                      "Get AI Recommendations"
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setSymptoms("");
                      setAiResponse("");
                    }}
                    disabled={isLoading}
                    className="flex-1 bg-gray-200 text-gray-700 py-3 px-6 rounded-xl font-semibold hover:bg-gray-300 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:-translate-y-0.5 border border-gray-300"
                  >
                    Clear
                  </button>
                </div>
              </form>

              {aiResponse && (
                <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-xl">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-blue-800 flex items-center gap-2">
                      <FiActivity className="w-4 h-4" />
                      AI Recommendations
                    </h3>
                    <button
                      onClick={() => setAiResponse("")}
                      className="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors"
                    >
                      Clear Response
                    </button>
                  </div>
                  <p className="text-blue-700 text-sm whitespace-pre-line leading-relaxed">
                    {aiResponse}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Emergency Symptoms Section - RESTORED */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-red-200 transform hover:-translate-y-1">
            <div className="bg-linear-to-r from-red-500 to-orange-600 p-6 rounded-t-2xl">
              <div className="flex items-center gap-3 text-white">
                <FiAlertTriangle className="w-6 h-6 sm:w-8 sm:h-8" />
                <h2 className="text-xl sm:text-2xl font-bold">Emergency Warning Signs</h2>
              </div>
              <p className="text-red-100 mt-2 text-sm sm:text-base">
                Immediate veterinary attention required
              </p>
            </div>

            <div className="p-6">
              <ul className="space-y-3">
                {emergencySymptoms.map((symptom, index) => (
                  <li key={index} className="flex items-start gap-3 group hover:bg-red-50 p-2 rounded-lg transition-colors">
                    <div className="w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-xs font-bold mt-0.5 shrink-0">
                      !
                    </div>
                    <span className="text-gray-700 text-sm sm:text-base leading-relaxed group-hover:text-gray-900">
                      {symptom}
                    </span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-xl">
                <p className="text-red-700 text-sm font-semibold">
                  🚨 If you observe any emergency signs, contact a veterinarian immediately!
                </p>
              </div>
            </div>
          </div>

          {/* Veterinary Contacts */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-200 transform hover:-translate-y-1">
            <div className="bg-linear-to-r from-blue-500 to-cyan-600 p-6 rounded-t-2xl">
              <div className="flex items-center gap-3 text-white">
                <FiPhone className="w-6 h-6 sm:w-8 sm:h-8" />
                <h2 className="text-xl sm:text-2xl font-bold">Veterinary Contacts</h2>
              </div>
              <p className="text-blue-100 mt-2 text-sm sm:text-base">
                Contact your local veterinary services
              </p>
            </div>

            <div className="p-6">
              <div className="space-y-4">
                {vetContacts.map((vet, index) => (
                  <div key={index} className="p-4 border border-gray-200 rounded-xl hover:border-blue-300 hover:bg-blue-50 transition-all duration-300 group">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                        <FiUser className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 text-base sm:text-lg group-hover:text-blue-700 transition-colors">
                          {vet.region}
                        </h3>
                        <p className="text-gray-600 text-sm sm:text-base mt-1 flex items-center gap-2">
                          <FiPhone className="w-4 h-4" />
                          {vet.contact}
                        </p>
                        <p className="text-gray-500 text-xs sm:text-sm mt-2">
                          {vet.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-xl">
                <h4 className="font-semibold text-green-800 mb-2 text-sm">How to Find Local Vets:</h4>
                <ul className="text-green-700 text-xs space-y-1">
                  <li>• Contact your County Agriculture Office</li>
                  <li>• Visit Kenya Veterinary Association website</li>
                  <li>• Check with local farmer cooperatives</li>
                  <li>• Ask at agricultural extension offices</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Important Notice */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
          <div className="flex items-start gap-3">
            <FiAlertTriangle className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-amber-800 text-lg mb-2">Important Notice</h3>
              <p className="text-amber-700 text-sm leading-relaxed">
                This AI assistant provides general guidance only and is not a substitute for professional veterinary care. 
                Always consult a qualified veterinarian for accurate diagnosis and treatment of animal health issues. 
                In emergencies, contact your local veterinary service immediately.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}