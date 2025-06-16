"use client";
import { useChatStore } from "@/lib/store";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useTheme } from "next-themes";
import {
  ArrowUp,
  ChevronDown,
  Paperclip,
  Sun,
  Moon,
  Settings,
  ChevronsRight,
  Brain,
} from "lucide-react";
import Link from "next/link"; // <-- Import Link
import { fontLogo } from "@/lib/fonts"; // <-- Import our new font
import { cn } from "@/lib/utils";

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
          className="absolute left-4 top-4 z-10"
        >
          <ChevronsRight className="h-6 w-6" />
        </Button>
      )}

      {/* --- This section is only visible when the sidebar is closed --- */}
      {!isSidebarOpen && (
        <>
          <Button
            onClick={toggleSidebar}
            variant="ghost"
            size="icon"
            className="absolute left-4 top-4 z-10"
          >
            <ChevronsRight className="h-6 w-6" />
          </Button>
          {/* THE NEW TITLE: Centered and visible only when sidebar is closed */}
          <Link href="/">
            <h1
              className={cn(
                "absolute top-4 left-1/2 -translate-x-1/2 text-2xl font-bold bg-gradient-to-br from-indigo-400 via-sky-400 to-teal-300 bg-clip-text text-transparent",
                fontLogo.className
              )}
            >
              T3.chat
            </h1>
          </Link>
        </>
      )}
      {/* --- End of section --- */}

      {/* Top right icons */}
      <div className="flex justify-end gap-2 p-2">
        <Button
          variant="ghost"
          size="icon"
          // onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <Settings className="h-5 w-5 cursor-pointer" />
        </Button>

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
          <h1 className="mb-6 text-4xl text-center font-bold text-gray-300">
            Ask me anything!
          </h1>

          <p className="text-md text-center text-gray-400">
            Talk to all Ai with the help of T3.clone! Type your message below to
            get started.
            <br />
            Switch Ai model as per your liking.
          </p>
        </div>
      </div>

      {/* Chat Input Section */}
      <div className="px-4 pb-0">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-t-xl border border-neutral-600 bg-[#2a2a2a] p-2">
            <Textarea
              placeholder="Type your message here..."
              className="border-0 bg-transparent text-lg text-white placeholder:text-gray-400 focus-visible:ring-0"
            />
            <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  className="flex items-center gap-1 hover:bg-neutral-700 hover:text-neutral-200  border-neutral-600 px-2 py-1 text-neutral-400"
                >
                  o4-mini <ChevronDown className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  className="flex text-xs items-center gap-1 hover:bg-neutral-700 hover:text-neutral-300 rounded-3xl border border-neutral-600 px-1 text-neutral-400"
                >
                  <Brain className="h-4 w-4" /> High
                </Button>
                <Button
                  variant="ghost"
                  className="flex text-xs items-center gap-1 hover:bg-neutral-700 hover:text-neutral-300 rounded-3xl border border-neutral-600 px-1 text-neutral-400"
                >
                  <Paperclip className="h-4 w-4" /> Attach
                </Button>
              </div>
              <Button className="bg-neutral-700 border border-neutral-600 hover:bg-neutral-600">
                <ArrowUp className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
