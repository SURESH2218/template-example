"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Header from "@/components/layout/header"
import Image from "next/image"
import { Calendar, MapPin, Users, Clock, Filter, Search } from "lucide-react"
import { Input } from "@/components/ui/input"

export default function ConferencesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 to-slate-100 dark:from-slate-900 dark:to-violet-950">
      <Header />
      <main className="container px-4 py-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold mb-1">Conferences</h1>
            <p className="text-muted-foreground">Discover upcoming scientific conferences and events</p>
          </div>
          <Button className="bg-violet-600 hover:bg-violet-700">
            <Calendar className="h-4 w-4 mr-2" />
            View Calendar
          </Button>
        </div>

        <Tabs defaultValue="upcoming" className="w-full">
          <TabsList className="grid grid-cols-3 w-full max-w-md bg-violet-100/50 dark:bg-violet-900/20">
            <TabsTrigger
              value="upcoming"
              className="data-[state=active]:bg-white dark:data-[state=active]:bg-slate-800 data-[state=active]:text-violet-700 dark:data-[state=active]:text-violet-300"
            >
              Upcoming
            </TabsTrigger>
            <TabsTrigger
              value="registered"
              className="data-[state=active]:bg-white dark:data-[state=active]:bg-slate-800 data-[state=active]:text-violet-700 dark:data-[state=active]:text-violet-300"
            >
              Registered
            </TabsTrigger>
            <TabsTrigger
              value="past"
              className="data-[state=active]:bg-white dark:data-[state=active]:bg-slate-800 data-[state=active]:text-violet-700 dark:data-[state=active]:text-violet-300"
            >
              Past
            </TabsTrigger>
          </TabsList>

          <div className="my-4 flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search conferences..." className="pl-8" />
            </div>
            <Button variant="outline" className="border-violet-200 hover:bg-violet-50">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
          </div>

          <TabsContent value="upcoming" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[1, 2, 3, 4].map((item) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: item * 0.05 }}
                >
                  <Card className="overflow-hidden border-violet-100 dark:border-violet-800 hover:shadow-md transition-shadow">
                    <div className="relative h-48">
                      <Image
                        src={`/placeholder.svg?height=200&width=400&text=Conference ${item}`}
                        alt={`Conference ${item}`}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                        <Badge className="bg-violet-600">May {15 + item}, 2025</Badge>
                      </div>
                    </div>
                    <CardHeader className="p-4 pb-2">
                      <CardTitle className="text-lg">International Symposium on Pharmaceutical Research</CardTitle>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {item % 2 === 0 ? "Virtual" : "Boston, MA"}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          09:00 AM EST
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <p className="text-sm mb-3">
                        Join leading researchers to discuss the latest advancements in pharmaceutical sciences and drug
                        development.
                      </p>
                      <div className="flex gap-2 mb-4">
                        <Badge variant="outline" className="bg-violet-50 text-violet-700 border-violet-200">
                          Pharmaceuticals
                        </Badge>
                        <Badge variant="outline" className="bg-violet-50 text-violet-700 border-violet-200">
                          Research
                        </Badge>
                        {item % 2 === 0 && (
                          <Badge variant="outline" className="bg-violet-50 text-violet-700 border-violet-200">
                            Free
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Users className="h-4 w-4 mr-1" />
                          {120 + item * 10} Registered
                        </div>
                        <Button size="sm" className="bg-violet-600 hover:bg-violet-700">
                          Register Now
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="registered" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[1, 2].map((item) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: item * 0.05 }}
                >
                  <Card className="overflow-hidden border-violet-100 dark:border-violet-800 hover:shadow-md transition-shadow">
                    <div className="relative h-48">
                      <Image
                        src={`/placeholder.svg?height=200&width=400&text=Registered ${item}`}
                        alt={`Registered Conference ${item}`}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                        <Badge className="bg-green-600">Registered</Badge>
                      </div>
                    </div>
                    <CardHeader className="p-4 pb-2">
                      <CardTitle className="text-lg">Global Biotech Summit</CardTitle>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          June {5 + item}, 2025
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {item % 2 === 0 ? "Virtual" : "San Francisco, CA"}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <p className="text-sm mb-3">
                        Explore cutting-edge biotechnology innovations and network with industry leaders.
                      </p>
                      <div className="flex gap-2 mb-4">
                        <Badge variant="outline" className="bg-violet-50 text-violet-700 border-violet-200">
                          Biotechnology
                        </Badge>
                        <Badge variant="outline" className="bg-violet-50 text-violet-700 border-violet-200">
                          Innovation
                        </Badge>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" className="flex-1 bg-violet-600 hover:bg-violet-700">
                          View Details
                        </Button>
                        <Button size="sm" variant="outline" className="flex-1 border-violet-200 hover:bg-violet-50">
                          Add to Calendar
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="past" className="mt-0">
            <Card className="border-violet-100 dark:border-violet-800">
              <CardContent className="p-6">
                <div className="flex flex-col items-center justify-center py-8">
                  <div className="relative mb-4">
                    <Calendar className="h-12 w-12 text-violet-500" />
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
                      className="absolute inset-0 rounded-full bg-violet-200 filter blur-lg z-[-1]"
                    />
                  </div>
                  <h3 className="text-lg font-medium mb-2">Past Conferences</h3>
                  <p className="text-muted-foreground text-center max-w-md mb-4">
                    View your attendance history and access materials from past conferences.
                  </p>
                  <Button className="bg-violet-600 hover:bg-violet-700">View History</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}

