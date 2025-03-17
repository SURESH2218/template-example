"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Header from "@/components/layout/header"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { BriefcaseBusiness, Search, Filter, MapPin, Clock, Bookmark, ExternalLink } from "lucide-react"
import { Input } from "@/components/ui/input"

export default function JobsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 to-slate-100 dark:from-slate-900 dark:to-violet-950">
      <Header />
      <main className="container px-4 py-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold mb-1">Jobs</h1>
            <p className="text-muted-foreground">Find research and scientific career opportunities</p>
          </div>
          <Button className="bg-violet-600 hover:bg-violet-700">
            <BriefcaseBusiness className="h-4 w-4 mr-2" />
            My Applications
          </Button>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid grid-cols-4 w-full max-w-md bg-violet-100/50 dark:bg-violet-900/20">
            <TabsTrigger
              value="all"
              className="data-[state=active]:bg-white dark:data-[state=active]:bg-slate-800 data-[state=active]:text-violet-700 dark:data-[state=active]:text-violet-300"
            >
              All Jobs
            </TabsTrigger>
            <TabsTrigger
              value="research"
              className="data-[state=active]:bg-white dark:data-[state=active]:bg-slate-800 data-[state=active]:text-violet-700 dark:data-[state=active]:text-violet-300"
            >
              Research
            </TabsTrigger>
            <TabsTrigger
              value="academic"
              className="data-[state=active]:bg-white dark:data-[state=active]:bg-slate-800 data-[state=active]:text-violet-700 dark:data-[state=active]:text-violet-300"
            >
              Academic
            </TabsTrigger>
            <TabsTrigger
              value="industry"
              className="data-[state=active]:bg-white dark:data-[state=active]:bg-slate-800 data-[state=active]:text-violet-700 dark:data-[state=active]:text-violet-300"
            >
              Industry
            </TabsTrigger>
          </TabsList>

          <div className="my-4 flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search jobs..." className="pl-8" />
            </div>
            <Button variant="outline" className="border-violet-200 hover:bg-violet-50">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
          </div>

          <TabsContent value="all" className="mt-0">
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
                        <Avatar className="h-12 w-12 border border-violet-200">
                          <AvatarImage src={`/placeholder.svg?height=48&width=48&text=P${item}`} />
                          <AvatarFallback className="bg-violet-100 text-violet-700">P{item}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h3 className="font-medium">Senior Research Scientist - Oncology</h3>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <Bookmark className="h-4 w-4" />
                            </Button>
                          </div>
                          <p className="text-sm text-muted-foreground">PharmaTech Inc.</p>
                          <div className="flex flex-wrap gap-2 mt-2">
                            <div className="flex items-center text-xs text-muted-foreground">
                              <MapPin className="h-3 w-3 mr-1" />
                              {item % 2 === 0 ? "Remote" : "Boston, MA"}
                            </div>
                            <div className="flex items-center text-xs text-muted-foreground">
                              <Clock className="h-3 w-3 mr-1" />
                              Posted {item} day{item !== 1 ? "s" : ""} ago
                            </div>
                          </div>
                          <p className="text-sm mt-2 line-clamp-2">
                            Leading research initiatives in oncology drug development, focusing on novel therapeutic
                            approaches for treatment-resistant cancers. PhD in Molecular Biology, Biochemistry, or
                            related field required.
                          </p>
                          <div className="flex gap-2 mt-2">
                            <Badge variant="outline" className="text-xs bg-violet-50 text-violet-700 border-violet-200">
                              Full-time
                            </Badge>
                            <Badge variant="outline" className="text-xs bg-violet-50 text-violet-700 border-violet-200">
                              PhD Required
                            </Badge>
                            <Badge variant="outline" className="text-xs bg-violet-50 text-violet-700 border-violet-200">
                              Oncology
                            </Badge>
                            {item === 1 && <Badge className="text-xs bg-violet-100 text-violet-700">New</Badge>}
                          </div>
                          <div className="flex items-center justify-end mt-3">
                            <Button size="sm" className="bg-violet-600 hover:bg-violet-700">
                              <ExternalLink className="h-4 w-4 mr-1" />
                              Apply Now
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="research" className="mt-0">
            <Card className="border-violet-100 dark:border-violet-800">
              <CardContent className="p-6">
                <div className="flex flex-col items-center justify-center py-8">
                  <div className="relative mb-4">
                    <BriefcaseBusiness className="h-12 w-12 text-violet-500" />
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
                      className="absolute inset-0 rounded-full bg-violet-200 filter blur-lg z-[-1]"
                    />
                  </div>
                  <h3 className="text-lg font-medium mb-2">Research Positions</h3>
                  <p className="text-muted-foreground text-center max-w-md mb-4">
                    Find specialized research positions in academia and industry.
                  </p>
                  <Button className="bg-violet-600 hover:bg-violet-700">Browse Research Jobs</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="academic" className="mt-0">
            <Card className="border-violet-100 dark:border-violet-800">
              <CardContent className="p-6">
                <div className="flex flex-col items-center justify-center py-8">
                  <div className="relative mb-4">
                    <BriefcaseBusiness className="h-12 w-12 text-violet-500" />
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
                      className="absolute inset-0 rounded-full bg-violet-200 filter blur-lg z-[-1]"
                    />
                  </div>
                  <h3 className="text-lg font-medium mb-2">Academic Positions</h3>
                  <p className="text-muted-foreground text-center max-w-md mb-4">
                    Explore opportunities in universities and research institutions.
                  </p>
                  <Button className="bg-violet-600 hover:bg-violet-700">Browse Academic Jobs</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="industry" className="mt-0">
            <Card className="border-violet-100 dark:border-violet-800">
              <CardContent className="p-6">
                <div className="flex flex-col items-center justify-center py-8">
                  <div className="relative mb-4">
                    <BriefcaseBusiness className="h-12 w-12 text-violet-500" />
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
                      className="absolute inset-0 rounded-full bg-violet-200 filter blur-lg z-[-1]"
                    />
                  </div>
                  <h3 className="text-lg font-medium mb-2">Industry Positions</h3>
                  <p className="text-muted-foreground text-center max-w-md mb-4">
                    Discover opportunities in pharmaceutical and biotech companies.
                  </p>
                  <Button className="bg-violet-600 hover:bg-violet-700">Browse Industry Jobs</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}

