// components/Sidebar.tsx
"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChevronsLeft, Search } from "lucide-react";
import { useChatStore } from "@/lib/store";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { fontLogo } from "@/lib/fonts";

const chatHistory = {
  Today: ["Comprehensive Guide to React, Typescript, and Tailwind CSS"],
  Yesterday: [
    "How to implement a resizable sidebar in a Next.js application",
    "Exploring advanced state management patterns with Zustand",
  ],
  "Last 7 Days": [
    "A deep dive into the Gemini Language Model Speed Explanation",
    "Review of a Used 2016 Honda Amaze: Is it worth it in 2025?",
    "Troubleshooting a common Github push authentication issue",
    "How to extract specific text from a long message string",
    "Understanding the HTML Tag Target Attribute for security",
    "Generating a Book Cover Website Image with Midjourney",
  ],
  "Last 30 Days": [
    "How to setup a VPN for secure browsing on public networks",
    "The best Italian restaurants in New York City for a date night",
    "A step-by-step guide to fixing a leaky kitchen faucet",
    "Learning advanced SQL joins and window functions",
  ],
};

export function Sidebar() {
  const isSidebarOpen = useChatStore((state) => state.isSidebarOpen);
  const toggleSidebar = useChatStore((state) => state.toggleSidebar);

  return (
    <aside
      className={cn(
        "bg-[#171717] text-white transition-all duration-300 ease-in-out overflow-hidden",
        isSidebarOpen ? "w-[280px]" : "w-0"
      )}
    >
      <div className="flex h-full w-[280px] flex-col p-4">
        {/* Fixed top section */}
        <div className="flex-shrink-0 mb-4 flex items-center justify-between">
          <div className="flex w-full items-center justify-between">
            <Link href="/">
              <h1
                className={cn(
                  "text-xl font-bold bg-gradient-to-br from-indigo-400 via-sky-400 to-teal-300 bg-clip-text text-transparent",
                  fontLogo.className
                )}
              >
                T3.chat
              </h1>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={toggleSidebar}
            >
              <ChevronsLeft className="h-6 w-6" />
            </Button>
          </div>
        </div>

        <Button className="mb-4 p-5 w-full bg-neutral-700 text-gray-100 border border-neutral-800 hover:bg-neutral-600 cursor-pointer">
          New Chat
        </Button>

        <div className="relative mb-4">
          <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-300" />
          <Input
            placeholder="Search your chats"
            className="bg-[#212121] h-10 pl-8 text-neutral-100 placeholder:text-neutral-500 focus-visible:ring-0 focus-visible:border-neutral-600 hover:border-neutral-600 border-neutral-800"
          />
        </div>

        {/* Scrollable chat history */}
        <div className="flex-1 min-h-0">
          <ScrollArea className="h-full">
            <div className="space-y-4 pr-2">
              {Object.entries(chatHistory).map(([period, threads]) => (
                <div key={period}>
                  <h2 className="mb-2 pl-2 text-xs font-semibold text-gray-400">
                    {period}
                  </h2>
                  <ul className="space-y-0">
                    {threads.map((thread, index) => (
                      <li
                        key={index}
                        className="cursor-pointer truncate overflow-hidden whitespace-nowrap rounded-md px-3 py-3 text-sm text-neutral-100 font-medium hover:bg-[#212121]"
                      >
                        {thread}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>

        {/* Fixed bottom profile section */}
        <div className="flex-shrink-0 mt-4 flex items-center gap-3 border-t border-neutral-700 pt-4">
          <Avatar>
            <AvatarImage
              src="https://github.com/shadcn.png"
              alt="Akhil P Nair"
            />
            <AvatarFallback>AP</AvatarFallback>
          </Avatar>
          <div className="min-w-0 flex-1">
            <p
              className="font-semibold overflow-hidden whitespace-nowrap"
              style={{ textOverflow: "ellipsis" }}
            >
              Akhil P Nair
            </p>
            <p className="text-xs text-gray-400">Pro</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
