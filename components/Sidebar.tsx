// components/Sidebar.tsx
"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Menu, Search } from "lucide-react";
import { useChatStore } from "@/lib/store";
import { cn } from "@/lib/utils";

// Dummy data for chat history
const chatHistory = {
  Today: ["React Typescript Tailwind P..."],
  Yesterday: [
    "React Typescript Tailwind ...",
    "React, Typescript, Tailwind ...",
  ],
  "Last 7 Days": [
    "Gemini Model Speed Expla...",
    "Used 2016 Honda Amaze ...",
    "Github push issue",
    "Extract text from message",
    "HTML Tag Target Attribute",
    "Book Cover Website Image",
  ],
};

export function Sidebar() {
  // Select each piece of state with its own hook.
  const isSidebarOpen = useChatStore((state) => state.isSidebarOpen);
  const toggleSidebar = useChatStore((state) => state.toggleSidebar);
  return (
    <div
      className={cn(
        "flex h-full flex-col bg-[#171717] text-white transition-all duration-300 ease-in-out",
        isSidebarOpen ? "w-[260px] p-4" : "w-0 p-0 overflow-hidden"
      )}
    >
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 hover:bg-[#212121]"
            onClick={toggleSidebar} // <-- Add the onClick handler
          >
            <Menu className="h-6 w-6" />
          </Button>
          <h1 className="text-xl font-bold">T3.clone</h1>
        </div>
      </div>

      {/* New Chat Button */}
      <Button className="mb-4 w-full bg-[#3B242A] text-white hover:bg-[#4a2e35]">
        New Chat
      </Button>

      {/* Search Input */}
      <div className="relative mb-4">
        <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
        <Input
          placeholder="Search your threads..."
          className="bg-[#212121] pl-8 text-white"
        />
      </div>

      {/* Chat History */}
      <ScrollArea className="flex-1">
        <div className="space-y-4">
          {Object.entries(chatHistory).map(([period, threads]) => (
            <div key={period}>
              <h2 className="mb-2 text-xs font-semibold text-gray-400">
                {period}
              </h2>
              <ul className="space-y-0">
                {threads.map((thread, index) => (
                  <li
                    key={index}
                    className="cursor-pointer rounded-md px-2 py-3 text-sm hover:bg-[#212121]"
                  >
                    {thread}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </ScrollArea>

      {/* User Profile Section */}
      <div className="mt-auto flex items-center gap-3 border-t border-gray-700 pt-4">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="Akhil P Nair" />
          <AvatarFallback>AP</AvatarFallback>
        </Avatar>
        <div>
          <p className="font-semibold">Akhil P Nair</p>
          <p className="text-xs text-gray-400">Pro</p>
        </div>
      </div>
    </div>
  );
}
