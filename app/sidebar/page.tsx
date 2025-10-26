"use client";
import { LayoutProvider } from "@/contexts/layout-context";
import { Navbar } from "@/components/navbar";
import { Sidebar } from "@/components/sidebar";
import { BottomNav } from "@/components/bottom-nav";
import { MainContent } from "@/components/main-content";

export default function Page() {
  return (
    <LayoutProvider>
      <div className="min-h-screen">
        <Navbar />
        <Sidebar />
        <MainContent />
        <BottomNav />
      </div>
    </LayoutProvider>
  );
}
