"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Header from "@/components/layout/header"
import Image from "next/image"
import { ShoppingCart, Star, Search, Filter } from "lucide-react"
import { Input } from "@/components/ui/input"

export default function MarketplacePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 to-slate-100 dark:from-slate-900 dark:to-violet-950">
      <Header />
      <main className="container px-4 py-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold mb-1">Marketplace</h1>
            <p className="text-muted-foreground">Browse lab equipment, reagents, and scientific products</p>
          </div>
          <Button className="bg-violet-600 hover:bg-violet-700">
            <ShoppingCart className="h-4 w-4 mr-2" />
            View Cart
          </Button>
        </div>

        <Tabs defaultValue="popular" className="w-full">
          <TabsList className="grid grid-cols-4 w-full max-w-md bg-violet-100/50 dark:bg-violet-900/20">
            <TabsTrigger
              value="popular"
              className="data-[state=active]:bg-white dark:data-[state=active]:bg-slate-800 data-[state=active]:text-violet-700 dark:data-[state=active]:text-violet-300"
            >
              Popular
            </TabsTrigger>
            <TabsTrigger
              value="equipment"
              className="data-[state=active]:bg-white dark:data-[state=active]:bg-slate-800 data-[state=active]:text-violet-700 dark:data-[state=active]:text-violet-300"
            >
              Equipment
            </TabsTrigger>
            <TabsTrigger
              value="reagents"
              className="data-[state=active]:bg-white dark:data-[state=active]:bg-slate-800 data-[state=active]:text-violet-700 dark:data-[state=active]:text-violet-300"
            >
              Reagents
            </TabsTrigger>
            <TabsTrigger
              value="software"
              className="data-[state=active]:bg-white dark:data-[state=active]:bg-slate-800 data-[state=active]:text-violet-700 dark:data-[state=active]:text-violet-300"
            >
              Software
            </TabsTrigger>
          </TabsList>

          <div className="my-4 flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search products..." className="pl-8" />
            </div>
            <Button variant="outline" className="border-violet-200 hover:bg-violet-50">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
          </div>

          <TabsContent value="popular" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: item * 0.05 }}
                >
                  <Card className="overflow-hidden border-violet-100 dark:border-violet-800 hover:shadow-md transition-shadow">
                    <div className="relative h-48 bg-violet-50 dark:bg-violet-900/20 flex items-center justify-center">
                      <Image
                        src={`/placeholder.svg?height=150&width=150&text=Product ${item}`}
                        alt={`Product ${item}`}
                        width={150}
                        height={150}
                        className="object-contain"
                      />
                      {item % 3 === 0 && <Badge className="absolute top-2 right-2 bg-violet-600">Best Seller</Badge>}
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-medium mb-1">High-Precision Micropipette Set</h3>
                      <p className="text-sm text-muted-foreground mb-2">BioTech Solutions Inc.</p>
                      <div className="flex items-center gap-1 mb-2">
                        {Array(5)
                          .fill(0)
                          .map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${i < 4 ? "fill-amber-400 text-amber-400" : "text-gray-300 dark:text-gray-600"}`}
                            />
                          ))}
                        <span className="text-xs text-muted-foreground ml-1">(42)</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="font-semibold text-violet-700 dark:text-violet-300">
                          ${(349.99 + item * 10).toFixed(2)}
                        </p>
                        <Button size="sm" className="bg-violet-600 hover:bg-violet-700">
                          <ShoppingCart className="h-4 w-4 mr-1" />
                          Add
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="equipment" className="mt-0">
            <Card className="border-violet-100 dark:border-violet-800">
              <CardContent className="p-6">
                <div className="flex flex-col items-center justify-center py-8">
                  <div className="relative mb-4">
                    <ShoppingCart className="h-12 w-12 text-violet-500" />
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
                      className="absolute inset-0 rounded-full bg-violet-200 filter blur-lg z-[-1]"
                    />
                  </div>
                  <h3 className="text-lg font-medium mb-2">Lab Equipment</h3>
                  <p className="text-muted-foreground text-center max-w-md mb-4">
                    Browse our selection of high-quality laboratory equipment from trusted manufacturers.
                  </p>
                  <Button className="bg-violet-600 hover:bg-violet-700">View Equipment</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reagents" className="mt-0">
            <Card className="border-violet-100 dark:border-violet-800">
              <CardContent className="p-6">
                <div className="flex flex-col items-center justify-center py-8">
                  <div className="relative mb-4">
                    <ShoppingCart className="h-12 w-12 text-violet-500" />
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
                      className="absolute inset-0 rounded-full bg-violet-200 filter blur-lg z-[-1]"
                    />
                  </div>
                  <h3 className="text-lg font-medium mb-2">Reagents</h3>
                  <p className="text-muted-foreground text-center max-w-md mb-4">
                    Explore our comprehensive selection of reagents for your research needs.
                  </p>
                  <Button className="bg-violet-600 hover:bg-violet-700">View Reagents</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="software" className="mt-0">
            <Card className="border-violet-100 dark:border-violet-800">
              <CardContent className="p-6">
                <div className="flex flex-col items-center justify-center py-8">
                  <div className="relative mb-4">
                    <ShoppingCart className="h-12 w-12 text-violet-500" />
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
                      className="absolute inset-0 rounded-full bg-violet-200 filter blur-lg z-[-1]"
                    />
                  </div>
                  <h3 className="text-lg font-medium mb-2">Software</h3>
                  <p className="text-muted-foreground text-center max-w-md mb-4">
                    Discover specialized software solutions for data analysis and research management.
                  </p>
                  <Button className="bg-violet-600 hover:bg-violet-700">View Software</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}

