"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Header from "@/components/layout/header"
import { BookOpen, Search, Filter, Star, FileText, Download, ExternalLink } from "lucide-react"
import { Input } from "@/components/ui/input"

export default function PublicationsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 to-slate-100 dark:from-slate-900 dark:to-violet-950">
      <Header />
      <main className="container px-4 py-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold mb-1">Publications</h1>
            <p className="text-muted-foreground">Discover and share scientific research</p>
          </div>
          <Button className="bg-violet-600 hover:bg-violet-700">
            <FileText className="h-4 w-4 mr-2" />
            My Publications
          </Button>
        </div>

        <Tabs defaultValue="recent" className="w-full">
          <TabsList className="grid grid-cols-4 w-full max-w-md bg-violet-100/50 dark:bg-violet-900/20">
            <TabsTrigger
              value="recent"
              className="data-[state=active]:bg-white dark:data-[state=active]:bg-slate-800 data-[state=active]:text-violet-700 dark:data-[state=active]:text-violet-300"
            >
              Recent
            </TabsTrigger>
            <TabsTrigger
              value="trending"
              className="data-[state=active]:bg-white dark:data-[state=active]:bg-slate-800 data-[state=active]:text-violet-700 dark:data-[state=active]:text-violet-300"
            >
              Trending
            </TabsTrigger>
            <TabsTrigger
              value="journals"
              className="data-[state=active]:bg-white dark:data-[state=active]:bg-slate-800 data-[state=active]:text-violet-700 dark:data-[state=active]:text-violet-300"
            >
              Journals
            </TabsTrigger>
            <TabsTrigger
              value="saved"
              className="data-[state=active]:bg-white dark:data-[state=active]:bg-slate-800 data-[state=active]:text-violet-700 dark:data-[state=active]:text-violet-300"
            >
              Saved
            </TabsTrigger>
          </TabsList>

          <div className="my-4 flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search publications..." className="pl-8" />
            </div>
            <Button variant="outline" className="border-violet-200 hover:bg-violet-50">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
          </div>

          <TabsContent value="recent" className="mt-0">
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((item) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: item * 0.05 }}
                >
                  <Card className="border-violet-100 dark:border-violet-800 hover:shadow-sm transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <div className="h-12 w-12 rounded-md bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center">
                          <FileText className="h-6 w-6 text-violet-600 dark:text-violet-300" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-medium">
                            Novel Mechanisms of Protein Folding in Neurodegenerative Diseases
                          </h3>
                          <p className="text-sm text-muted-foreground mt-1">
                            By <span className="font-medium">Dr. Sarah Chen, Dr. James Peterson</span> et al. •
                            Published in <span className="font-medium">Nature Biotechnology</span> • March 2024
                          </p>
                          <p className="text-sm mt-2 line-clamp-2">
                            This study investigates the role of protein misfolding in the pathogenesis of
                            neurodegenerative diseases, revealing novel mechanisms that could lead to therapeutic
                            interventions.
                          </p>
                          <div className="flex gap-2 mt-2">
                            <Badge variant="outline" className="text-xs bg-violet-50 text-violet-700 border-violet-200">
                              Protein Folding
                            </Badge>
                            <Badge variant="outline" className="text-xs bg-violet-50 text-violet-700 border-violet-200">
                              Neuroscience
                            </Badge>
                            <Badge variant="outline" className="text-xs bg-violet-50 text-violet-700 border-violet-200">
                              Molecular Biology
                            </Badge>
                          </div>
                          <div className="flex items-center justify-between mt-3">
                            <div className="flex items-center gap-4">
                              <div className="flex items-center text-sm text-muted-foreground">
                                <Star className="h-4 w-4 mr-1 fill-amber-400 text-amber-400" />
                                {42 + item * 10} Citations
                              </div>
                              <div className="text-sm text-muted-foreground">{1200 + item * 100} Views</div>
                            </div>
                            <div className="flex gap-2">
                              <Button variant="outline" size="sm" className="border-violet-200 hover:bg-violet-50">
                                <Download className="h-4 w-4 mr-1" />
                                PDF
                              </Button>
                              <Button size="sm" className="bg-violet-600 hover:bg-violet-700">
                                <ExternalLink className="h-4 w-4 mr-1" />
                                Read Paper
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="trending" className="mt-0">
            <Card className="border-violet-100 dark:border-violet-800">
              <CardContent className="p-6">
                <div className="flex flex-col items-center justify-center py-8">
                  <div className="relative mb-4">
                    <BookOpen className="h-12 w-12 text-violet-500" />
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
                      className="absolute inset-0 rounded-full bg-violet-200 filter blur-lg z-[-1]"
                    />
                  </div>
                  <h3 className="text-lg font-medium mb-2">Trending Publications</h3>
                  <p className="text-muted-foreground text-center max-w-md mb-4">
                    Discover the most impactful and discussed research papers in your field.
                  </p>
                  <Button className="bg-violet-600 hover:bg-violet-700">Explore Trending</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="journals" className="mt-0">
            <Card className="border-violet-100 dark:border-violet-800">
              <CardContent className="p-6">
                <div className="flex flex-col items-center justify-center py-8">
                  <div className="relative mb-4">
                    <BookOpen className="h-12 w-12 text-violet-500" />
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
                      className="absolute inset-0 rounded-full bg-violet-200 filter blur-lg z-[-1]"
                    />
                  </div>
                  <h3 className="text-lg font-medium mb-2">Scientific Journals</h3>
                  <p className="text-muted-foreground text-center max-w-md mb-4">
                    Browse publications from top scientific journals in your field.
                  </p>
                  <Button className="bg-violet-600 hover:bg-violet-700">Browse Journals</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="saved" className="mt-0">
            <Card className="border-violet-100 dark:border-violet-800">
              <CardContent className="p-6">
                <div className="flex flex-col items-center justify-center py-8">
                  <div className="relative mb-4">
                    <BookOpen className="h-12 w-12 text-violet-500" />
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
                      className="absolute inset-0 rounded-full bg-violet-200 filter blur-lg z-[-1]"
                    />
                  </div>
                  <h3 className="text-lg font-medium mb-2">Saved Publications</h3>
                  <p className="text-muted-foreground text-center max-w-md mb-4">
                    Access your saved papers and research materials.
                  </p>
                  <Button className="bg-violet-600 hover:bg-violet-700">View Saved</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}

