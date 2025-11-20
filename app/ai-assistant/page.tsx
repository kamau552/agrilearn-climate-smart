"use client";

import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { FiSend, FiTrash2, FiMic } from "react-icons/fi";

// Define proper TypeScript interfaces for Web Speech API
interface SpeechRecognitionEvent extends Event {
  results: SpeechRecognitionResultList;
}

interface SpeechRecognition extends EventTarget {
  continuous: boolean;
  lang: string;
  interimResults: boolean;
  onstart: (() => void) | null;
  onend: (() => void) | null;
  onresult: ((event: SpeechRecognitionEvent) => void) | null;
  onerror: ((event: Event) => void) | null;
  start(): void;
  stop(): void;
}

interface Window {
  SpeechRecognition: {
    new (): SpeechRecognition;
  };
  webkitSpeechRecognition: {
    new (): SpeechRecognition;
  };
}

/* VOICE COMPONENT */

function VoiceToText({ onResult }: { onResult: (text: string) => void }) {
  const [listening, setListening] = useState(false);

  function startListening() {
    // Use type assertion for browser-specific APIs
    const SpeechRecognition = 
      (window as unknown as Window).SpeechRecognition || 
      (window as unknown as Window).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Your browser does not support voice input.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "sw-KE"; // Swahili for Kenya
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onstart = () => setListening(true);
    recognition.onend = () => setListening(false);
    
    recognition.onresult = (event: SpeechRecognitionEvent) => {
      const transcript = event.results[0][0].transcript;
      onResult(transcript);
    };

    recognition.onerror = (event: Event) => {
      console.error("Speech recognition error", event);
      setListening(false);
      alert("Voice input failed. Please try again.");
    };

    recognition.start();
  }

  return (
    <button
      type="button"
      onClick={startListening}
      disabled={listening}
      className={`p-2 rounded-full ml-2 transition-all ${
        listening 
          ? "bg-red-500 text-white animate-pulse" 
          : "bg-emerald-700 text-white hover:bg-emerald-600"
      }`}
      title={listening ? "Listening..." : "Voice input"}
    >
      {listening ? (
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          <FiMic className="w-4 h-4" />
        </div>
      ) : (
        <FiMic className="w-4 h-4" />
      )}
    </button>
  );
}

/*  MAIN AI ASSISTANT PAGE */

export default function AIAssistantPage() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<{ role: string; text: string }[]>([]);
  const [loading, setLoading] = useState(false);

  async function sendMessage() {
    if (!input.trim()) return;

    setMessages((prev) => [...prev, { role: "user", text: input }]);
    setLoading(true);

    try {
      const response = await fetch("/api/ai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: input }),
      });

      if (!response.ok) {
        throw new Error("Failed to get AI response");
      }

      const data = await response.json();

      setMessages((prev) => [
        ...prev,
        { role: "assistant", text: data.reply || "I'm sorry, I couldn't process your request." },
      ]);
    } catch (error) {
      console.error("Error sending message:", error);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", text: "Sorry, I'm having trouble responding right now. Please try again." },
      ]);
    } finally {
      setInput("");
      setLoading(false);
    }
  }

  const handleVoiceResult = (text: string) => {
    setInput(text);
  };

  const clearInput = () => {
    setInput("");
  };

  return (
    <div className="max-w-4xl mx-auto h-screen flex flex-col bg-gray-50">
      
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-emerald-700 rounded-full flex items-center justify-center text-white font-bold">
            <CgProfile className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-lg font-semibold text-gray-800">AgriLearn Assistant</h1>
            <p className="text-sm text-green-800 flex items-center gap-1">
              <span className="w-2 h-2 bg-green-800 rounded-full animate-pulse"></span>
              Online
            </p>
          </div>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-6 space-y-4">
        {messages.length === 0 && (
          <div className="text-center text-gray-500 mt-8">
            <p>Welcome! Ask me about farming, crops, livestock, or agriculture in Kenya.</p>
          </div>
        )}

        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
            
            {msg.role === "assistant" && (
              <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center text-white mr-2 shrink-0">
                <CgProfile className="w-4 h-4" />
              </div>
            )}

            <div className={`max-w-[70%] rounded-2xl px-4 py-3 ${
              msg.role === "user"
                ? "bg-emerald-800 text-white rounded-br-none"
                : "bg-white text-gray-800 border border-gray-200 rounded-bl-none shadow-sm"
            }`}>
              <p className="text-sm whitespace-pre-wrap leading-relaxed">{msg.text}</p>
              <p className={`text-xs mt-1 ${msg.role === "user" ? "text-green-100" : "text-gray-600"}`}>
                {new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
              </p>
            </div>

            {msg.role === "user" && (
              <div className="w-8 h-8 bg-cyan-700 rounded-full flex items-center justify-center text-white ml-2 shrink-0">
                <CgProfile className="w-4 h-4" />
              </div>
            )}
          </div>
        ))}

        {loading && (
          <div className="flex justify-start">
            <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center text-white mr-2 shrink-0">
              <CgProfile className="w-4 h-4" />
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl rounded-bl-none px-4 py-3 shadow-sm">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce animation-delay-100"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce animation-delay-200"></div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="bg-white border-t border-gray-200 px-4 py-4">
        <div className="flex gap-3 max-w-4xl mx-auto">
          <div className="flex-1 flex gap-2 items-center bg-gray-50 border border-gray-300 rounded-full px-4 py-2 focus-within:ring-2 focus-within:ring-emerald-500 focus-within:border-emerald-500 transition-all">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && sendMessage()}
              placeholder="Ask about crops, livestock, soil, weather, or farming methods..."
              className="flex-1 bg-transparent border-0 focus:ring-0 focus:outline-none text-sm"
              disabled={loading}
            />

            {/* Voice Input Button */}
            <VoiceToText onResult={handleVoiceResult} />

            <button
              onClick={clearInput}
              disabled={!input.trim() || loading}
              className="p-1 text-gray-400 hover:text-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              title="Clear input"
            >
              <FiTrash2 className="w-4 h-4" />
            </button>
          </div>

          <button
            onClick={sendMessage}
            disabled={!input.trim() || loading}
            className="px-6 py-3 bg-emerald-800 text-white rounded-full hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium flex items-center gap-2"
            title="Send message"
          >
            <FiSend className="w-4 h-4" />
            <span className="hidden sm:inline">Send</span>
          </button>
        </div>

        <p className="text-center text-xs text-gray-500 mt-3">
          AgriLearn AI • Ask about farming practices, crop diseases, or livestock care
        </p>
      </div>
    </div>
  );
}