"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import MainContent from "@/components/home/main-content";
import Sidebar from "@/components/home/sidebar";
import { Users, Zap, Sparkles } from "lucide-react";

export default function ContentTabs() {
  return (
    <Tabs defaultValue="discover" className="w-full">
      <div className="flex justify-between items-center mb-4">
        <TabsList className="grid grid-cols-4 w-full max-w-md bg-violet-100/50 dark:bg-violet-900/20">
          <TabsTrigger
            value="discover"
            className="data-[state=active]:bg-white dark:data-[state=active]:bg-slate-800 data-[state=active]:text-violet-700 dark:data-[state=active]:text-violet-300"
          >
            Discover
          </TabsTrigger>
          <TabsTrigger
            value="following"
            className="data-[state=active]:bg-white dark:data-[state=active]:bg-slate-800 data-[state=active]:text-violet-700 dark:data-[state=active]:text-violet-300"
          >
            Following
          </TabsTrigger>
          <TabsTrigger
            value="trending"
            className="data-[state=active]:bg-white dark:data-[state=active]:bg-slate-800 data-[state=active]:text-violet-700 dark:data-[state=active]:text-violet-300"
          >
            Trending
          </TabsTrigger>
          <TabsTrigger
            value="recommended"
            className="data-[state=active]:bg-white dark:data-[state=active]:bg-slate-800 data-[state=active]:text-violet-700 dark:data-[state=active]:text-violet-300"
          >
            For You
          </TabsTrigger>
        </TabsList>
        <Button
          variant="outline"
          size="sm"
          className="border-violet-200 hover:bg-violet-50 hover:text-violet-700 dark:border-violet-800 dark:hover:bg-violet-900/20 dark:hover:text-violet-300"
        >
          Customize Feed
        </Button>
      </div>

      <TabsContent value="discover" className="mt-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Main Content - 8 columns */}
          <div className="col-span-1 lg:col-span-8">
            <MainContent />
          </div>

          {/* Sidebar - 4 columns */}
          <div className="col-span-1 lg:col-span-4 space-y-6">
            <Sidebar />
          </div>
        </div>
      </TabsContent>

      <TabsContent value="following" className="mt-0">
        <div className="flex flex-col items-center justify-center h-[300px] bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-violet-100 dark:border-violet-800">
          <div className="relative mb-4">
            <Users className="h-12 w-12 text-violet-500" />
          </div>
          <h3 className="text-lg font-medium mb-2">Your Following Feed</h3>
          <p className="text-muted-foreground text-center max-w-md mb-4">
            Connect with researchers and institutions to see their latest
            updates here.
          </p>
          <Button className="bg-violet-600 hover:bg-violet-700">
            Discover People to Follow
          </Button>
        </div>
      </TabsContent>

      <TabsContent value="trending" className="mt-0">
        <div className="flex flex-col items-center justify-center h-[300px] bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-violet-100 dark:border-violet-800">
          <div className="relative mb-4">
            <Zap className="h-12 w-12 text-violet-500" />
          </div>
          <h3 className="text-lg font-medium mb-2">Trending Research</h3>
          <p className="text-muted-foreground text-center max-w-md mb-4">
            Discover the hottest topics and breakthroughs in the scientific
            community.
          </p>
          <Button className="bg-violet-600 hover:bg-violet-700">
            Explore Trending Topics
          </Button>
        </div>
      </TabsContent>

      <TabsContent value="recommended" className="mt-0">
        <div className="flex flex-col items-center justify-center h-[300px] bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-violet-100 dark:border-violet-800">
          <div className="relative mb-4">
            <Sparkles className="h-12 w-12 text-violet-500" />
          </div>
          <h3 className="text-lg font-medium mb-2">
            Personalized Recommendations
          </h3>
          <p className="text-muted-foreground text-center max-w-md mb-4">
            Content tailored to your research interests and academic background.
          </p>
          <Button className="bg-violet-600 hover:bg-violet-700">
            Update Research Interests
          </Button>
        </div>
      </TabsContent>
    </Tabs>
  );
}
