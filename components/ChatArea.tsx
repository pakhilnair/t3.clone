// components/ChatArea.tsx
"use client";
import { useChatStore } from "@/lib/store";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useTheme } from "next-themes";
import {
  ArrowUp,
  BookOpen,
  BrainCircuit,
  ChevronDown,
  Code,
  Paperclip,
  Sparkles,
  Sun,
  GitBranch,
  Menu,
  Moon,
} from "lucide-react";

const suggestionPrompts = [
  "How does AI work?",
  "Are black holes real?",
  'How many Rs are in the word "strawberry"?',
  "What is the meaning of life?",
];

export function ChatArea() {
  const { theme, setTheme } = useTheme();

  const isSidebarOpen = useChatStore((state) => state.isSidebarOpen);
  const toggleSidebar = useChatStore((state) => state.toggleSidebar);
  return (
    <div className="relative flex flex-1 flex-col bg-[#212121] text-white">
      {!isSidebarOpen && (
        <Button
          onClick={toggleSidebar}
          variant="ghost"
          size="icon"
          className="absolute left-4 top-4 z-10" // Position it top-left
        >
          <Menu className="h-6 w-6" />
        </Button>
      )}
      {/* Top right icons */}
      <div className="flex justify-end gap-4 p-4">
        <GitBranch className="h-5 w-5 cursor-pointer text-gray-400 hover:text-white" />
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </div>

      {/* Welcome/Chat Content Area */}
      <div className="flex flex-1 flex-col items-center justify-center">
        <div className="w-full max-w-3xl px-4">
          <h1 className="mb-6 text-4xl font-bold text-gray-300">
            How can I help you, Akhil?
          </h1>

          <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            <Button variant="secondary" className="bg-[#333] hover:bg-[#444]">
              <Sparkles className="mr-2 h-4 w-4" /> Create
            </Button>
            <Button variant="secondary" className="bg-[#333] hover:bg-[#444]">
              <BookOpen className="mr-2 h-4 w-4" /> Explore
            </Button>
            <Button variant="secondary" className="bg-[#333] hover:bg-[#444]">
              <Code className="mr-2 h-4 w-4" /> Code
            </Button>
            <Button variant="secondary" className="bg-[#333] hover:bg-[#444]">
              <BrainCircuit className="mr-2 h-4 w-4" /> Learn
            </Button>
          </div>

          <div className="space-y-4">
            {suggestionPrompts.map((prompt) => (
              <div
                key={prompt}
                className="cursor-pointer border-b border-gray-700 py-3 text-lg text-gray-400 hover:text-white"
              >
                {prompt}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Chat Input Section */}
      <div className="px-4 pb-4">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-xl border border-gray-600 bg-[#2a2a2a] p-4">
            <Textarea
              placeholder="Type your message here..."
              className="border-0 bg-transparent text-base text-white placeholder:text-gray-400 focus-visible:ring-0"
            />
            <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  className="flex items-center gap-1 hover:bg-[#444]"
                >
                  o4-mini <ChevronDown className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  className="flex items-center gap-1 hover:bg-[#444]"
                >
                  <Sparkles className="h-4 w-4" /> High
                </Button>
                <Button variant="ghost" className="hover:bg-[#444]">
                  <Paperclip className="h-4 w-4" /> Attach
                </Button>
              </div>
              <Button className="bg-[#3B242A] hover:bg-[#4a2e35]">
                <ArrowUp className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
