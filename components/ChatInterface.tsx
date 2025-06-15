"use client"; // <-- This is essential!

import { useChatStore } from "@/lib/store";
import { Button } from "./ui/button";

export function ChatInterface() {
  // Select the specific state and actions you need
  const messages = useChatStore((state) => state.messages);
  const selectedModel = useChatStore((state) => state.selectedModel);
  const addMessage = useChatStore((state) => state.addMessage);
  const setModel = useChatStore((state) => state.setModel);

  const handleSendMessage = () => {
    // In a real app, this would come from an input field
    addMessage({ text: "Hello, AI!", sender: "user" });
  };

  return (
    <div className="w-full max-w-2xl rounded-lg border border-gray-700 bg-gray-800 p-4">
      <div className="mb-4 flex justify-between">
        <h2 className="text-xl font-bold">Model: {selectedModel}</h2>
        <div>
          <Button
            variant={selectedModel === "Gemini" ? "default" : "secondary"}
            onClick={() => setModel("Gemini")}
          >
            Gemini
          </Button>
          <Button
            className="ml-2"
            variant={selectedModel === "ChatGPT" ? "default" : "secondary"}
            onClick={() => setModel("ChatGPT")}
          >
            ChatGPT
          </Button>
        </div>
      </div>

      <div className="mb-4 h-64 overflow-y-auto rounded bg-gray-900 p-2">
        {messages.map((msg) => (
          <div key={msg.id} className="mb-2">
            <strong>{msg.sender}:</strong> {msg.text}
          </div>
        ))}
      </div>

      <Button onClick={handleSendMessage}>Send Message</Button>
    </div>
  );
}
