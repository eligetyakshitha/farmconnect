import { useState } from "react";
import { Send, Bot, User } from "lucide-react";

export function AskExpert() {
  const [messages, setMessages] = useState<Array<{text: string; isUser: boolean}>>([
    { text: "Hello! I'm your farming expert assistant. How can I help you today?", isUser: false }
  ]);
  const [input, setInput] = useState("");

  const predefinedAnswers: Record<string, string> = {
    "wheat": "For wheat cultivation, sow seeds in November-December. Use 100 kg seeds per hectare. Fertilizer: Apply 120 kg N, 60 kg P2O5, and 40 kg K2O per hectare. Irrigate 4-6 times during the growing season.",
    "rice": "Rice grows best in waterlogged conditions. Transplant 21-25 day old seedlings. Apply nitrogen in 3 splits: 50% at transplanting, 25% at tillering, and 25% at panicle initiation. Maintain 2-3 cm water level.",
    "tomato": "Tomatoes need well-drained soil with pH 6-7. Plant spacing: 60x45 cm. Apply FYM @ 25-30 tons/hectare. Support with stakes. Watch for early blight and late blight diseases.",
    "fertilizer": "NPK ratio depends on your crop and soil test. General recommendation: For vegetables use 19:19:19, for cereals use urea (46% N) with DAP. Always conduct soil testing before application.",
    "pest": "Integrated Pest Management (IPM) is recommended. Use neem-based pesticides for initial control. Monitor crops regularly. Apply chemical pesticides only when pest population exceeds threshold level.",
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    setMessages([...messages, { text: userMessage, isUser: true }]);
    setInput("");

    // Simple keyword-based response
    setTimeout(() => {
      let response = "Thank you for your question. ";
      const lowerInput = userMessage.toLowerCase();
      
      let found = false;
      for (const [key, value] of Object.entries(predefinedAnswers)) {
        if (lowerInput.includes(key)) {
          response += value;
          found = true;
          break;
        }
      }
      
      if (!found) {
        response += "I recommend consulting with your local agricultural extension officer for specific guidance on this topic. You can also connect with our expert scientists through the Expert Connect feature.";
      }

      setMessages(prev => [...prev, { text: response, isUser: false }]);
    }, 1000);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white">
          <div className="flex items-center gap-3">
            <Bot className="w-8 h-8" />
            <div>
              <h1 className="text-2xl font-bold">Ask the Expert</h1>
              <p className="text-blue-100">Get instant answers to your farming questions</p>
            </div>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="h-[500px] overflow-y-auto p-6 space-y-4 bg-gray-50">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex gap-3 ${message.isUser ? "justify-end" : "justify-start"}`}
            >
              {!message.isUser && (
                <div className="bg-blue-600 rounded-full p-2 h-fit">
                  <Bot className="w-5 h-5 text-white" />
                </div>
              )}
              <div
                className={`max-w-[70%] p-4 rounded-lg ${
                  message.isUser
                    ? "bg-green-600 text-white"
                    : "bg-white text-gray-800 shadow-md"
                }`}
              >
                {message.text}
              </div>
              {message.isUser && (
                <div className="bg-green-600 rounded-full p-2 h-fit">
                  <User className="w-5 h-5 text-white" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Input Area */}
        <div className="p-4 bg-white border-t">
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSend()}
              placeholder="Ask your farming question..."
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <button
              onClick={handleSend}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Quick Questions */}
        <div className="p-4 bg-gray-50 border-t">
          <p className="text-sm text-gray-600 mb-2">Quick questions:</p>
          <div className="flex flex-wrap gap-2">
            {["How to grow wheat?", "Best fertilizer for rice?", "Tomato diseases?", "Pest control tips?"].map((q) => (
              <button
                key={q}
                onClick={() => setInput(q)}
                className="px-3 py-1 bg-white border border-gray-300 rounded-full text-sm hover:bg-gray-100 transition-colors"
              >
                {q}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
