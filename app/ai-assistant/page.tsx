"use client";

import { useState } from "react";

export default function AIAssistantPage() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<{ role: string; text: string }[]>([]);
  const [loading, setLoading] = useState(false);

  async function sendMessage() {
    if (!input.trim()) return;

    const userMessage = { role: "user", text: input };
    setMessages(prev => [...prev, userMessage]);
    setLoading(true);

    const response = await fetch("/api/ai", {
      method: "POST",
      body: JSON.stringify({ message: input }),
    });

    const data = await response.json();

    const botMessage = { role: "assistant", text: data.reply };
    setMessages(prev => [...prev, botMessage]);

    setInput("");
    setLoading(false);
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-green-800 mb-4">🤖 AI Assistant</h1>
      <p className="text-gray-600 mb-6">
        Ask the AI about crops, livestock, soil, weather or climate-smart farming methods.
      </p>

      {/* Chat Area */}
      <div className="h-[450px] overflow-y-auto border rounded-xl p-4 bg-white shadow">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`mb-4 p-3 rounded-lg max-w-[80%] ${
              msg.role === "user"
                ? "ml-auto bg-green-600 text-white"
                : "bg-gray-100 text-gray-800"
            }`}
          >
            {msg.text}
          </div>
        ))}

        {loading && <p className="text-gray-500 animate-pulse">AI is thinking…</p>}
      </div>

      {/* Input */}
      <div className="mt-4 flex gap-3">
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Ask something..."
          className="flex-1 p-3 border rounded-lg"
        />
        <button
          onClick={sendMessage}
          className="px-4 py-3 bg-green-700 text-white rounded-lg"
        >
          Send
        </button>
      </div>
    </div>
  );
}
