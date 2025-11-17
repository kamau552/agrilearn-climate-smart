"use client";
import { useState } from "react";
import { FiSend, FiMic } from "react-icons/fi";

export default function AIAssistantPage() {
  const [messages, setMessages] = useState<Array<{role: string; content: string}>>([
    {
      role: "assistant",
      content: "Habari! 👋 I'm your AgriLearn AI assistant. Ask me anything about crops, livestock, climate-smart farming, or any agricultural question. I'm here to help Kenyan farmers succeed!"
    }
  ]);
  const [input, setInput] = useState("");

  const suggestedQuestions = [
    "What crops grow well in drought conditions?",
    "How do I prevent maize lethal necrosis?",
    "Best time to plant tomatoes in Kenya?",
    "How to improve dairy cow milk production?",
    "What are signs of sick chickens?",
    "How to conserve water on my farm?"
  ];

  return (
    <div className="max-w-4xl mx-auto h-[calc(100vh-12rem)]">
      <div className="mb-6">
        <h1 className="text-4xl font-bold text-green-800 mb-2">
          🤖 AI Assistant
        </h1>
        <p className="text-gray-600">
          Get instant answers to all your farming questions
        </p>
      </div>

      {/* Chat Container */}
      <div className="bg-white rounded-xl shadow-md flex flex-col h-full">
        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[80%] p-4 rounded-2xl ${
                  msg.role === "user"
                    ? "bg-green-600 text-white"
                    : "bg-gray-100 text-gray-800"
                }`}
              >
                {msg.content}
              </div>
            </div>
          ))}

          {/* Suggested Questions */}
          {messages.length === 1 && (
            <div className="mt-6">
              <p className="text-sm text-gray-600 mb-3">Suggested questions:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {suggestedQuestions.map((q, idx) => (
                  <button
                    key={idx}
                    className="text-left p-3 bg-green-50 hover:bg-green-100 rounded-lg text-sm text-gray-700 transition-colors"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Input */}
        <div className="border-t p-4">
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything about farming..."
              className="flex-1 px-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
            <button className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
             title= "Voice Input"
            >
              <FiMic size={20} 
              />
            </button>
            <button className="p-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors"
            title="Send Message"
            >
              <FiSend size={20} 
              />
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-2 text-center">
            AI responses are for guidance only. Consult experts for critical decisions.
          </p>
        </div>
      </div>
    </div>
  );
}