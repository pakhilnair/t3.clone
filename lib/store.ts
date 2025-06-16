// lib/store.ts
import { create } from "zustand";

// Define the types for your state and actions
interface ChatState {
  messages: { id: number; text: string; sender: "user" | "ai" }[];
  selectedModel: "Gemini" | "ChatGPT" | "Claude";
  isSidebarOpen: boolean; // <-- Add this
  addMessage: (message: { text: string; sender: "user" | "ai" }) => void;
  setModel: (model: "Gemini" | "ChatGPT" | "Claude") => void;
  toggleSidebar: () => void;
  
}

// Create the store
export const useChatStore = create<ChatState>((set) => ({
  // Initial state
  messages: [],
  selectedModel: "Gemini",
  isSidebarOpen: true, // <-- Default to open

  // Actions to modify the state
  addMessage: (message) =>
    set((state) => ({
      messages: [...state.messages, { ...message, id: Date.now() }],
    })),

  setModel: (model) => set({ selectedModel: model }),

  toggleSidebar: () =>
    set((state) => ({ isSidebarOpen: !state.isSidebarOpen })), // <-- Add the logic
}));