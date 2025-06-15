// app/page.tsx
import { ChatArea } from "@/components/ChatArea";
import { Sidebar } from "@/components/Sidebar";

// This can now be a clean Server Component again
export default function Home() {
  return (
    <main className="flex h-screen bg-[#212121]">
      <Sidebar />
      <ChatArea />
    </main>
  );
}
