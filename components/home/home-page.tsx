"use client";

import { useState, useEffect } from "react";
import Header from "@/components/layout/header";
import ScientificHub from "@/components/home/scientific-hub";
import ContentTabs from "@/components/home/content-tabs";
import UserProfile from "@/components/home/user-profile";
import { Loader2, Beaker } from "lucide-react";
import { motion } from "framer-motion";

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-violet-50 to-slate-100 dark:from-slate-900 dark:to-violet-950">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center"
        >
          <div className="relative mb-6">
            <Beaker className="h-16 w-16 text-violet-600" />
          </div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-violet-700 to-violet-500 text-transparent bg-clip-text mb-4">
            DrugBoard
          </h1>
          <div className="flex items-center gap-2">
            <Loader2 className="h-5 w-5 text-violet-600 animate-spin" />
            <p className="text-violet-800 dark:text-violet-300">
              Loading your scientific hub...
            </p>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 to-slate-100 dark:from-slate-900 dark:to-violet-950">
      <Header />
      <main className="container px-4 py-6">
        {/* Scientific Hub Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
          {/* User Profile Section - Takes 4 columns on large screens */}
          <div className="lg:col-span-4">
            <UserProfile />
          </div>

          {/* Scientific Hub - Takes 8 columns on large screens */}
          <div className="lg:col-span-8">
            <ScientificHub />
          </div>
        </div>

        {/* Content Tabs Section */}
        <div className="mt-6">
          <ContentTabs />
        </div>
      </main>
    </div>
  );
}
