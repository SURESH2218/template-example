"use client"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Header from "@/components/layout/header"
import { Search, UserPlus, MessageCircle, Filter, Award } from "lucide-react"

export default function NetworkPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 to-slate-100 dark:from-slate-900 dark:to-violet-950">
      <Header />
      <main className="container px-4 py-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold mb-1">Network</h1>
            <p className="text-muted-foreground">Connect with researchers and institutions in your field</p>
          </div>
          <Button className="bg-violet-600 hover:bg-violet-700">
            <UserPlus className="h-4 w-4 mr-2" />
            Find Connections
          </Button>
        </div>

        <Tabs defaultValue="connections" className="w-full">
          <TabsList className="grid grid-cols-3 w-full max-w-md bg-violet-100/50 dark:bg-violet-900/20">
            <TabsTrigger
              value="connections"
              className="data-[state=active]:bg-white dark:data-[state=active]:bg-slate-800 data-[state=active]:text-violet-700 dark:data-[state=active]:text-violet-300"
            >
              Connections
            </TabsTrigger>
            <TabsTrigger
              value="groups"
              className="data-[state=active]:bg-white dark:data-[state=active]:bg-slate-800 data-[state=active]:text-violet-700 dark:data-[state=active]:text-violet-300"
            >
              Research Groups
            </TabsTrigger>
            <TabsTrigger
              value="messages"
              className="data-[state=active]:bg-white dark:data-[state=active]:bg-slate-800 data-[state=active]:text-violet-700 dark:data-[state=active]:text-violet-300"
            >
              Messages
            </TabsTrigger>
          </TabsList>

          <div className="my-4 flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search connections..." className="pl-8" />
            </div>
            <Button variant="outline" className="border-violet-200 hover:bg-violet-50">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
          </div>

          <TabsContent value="connections" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: item * 0.05 }}
                >
                  <Card className="overflow-hidden border-violet-100 dark:border-violet-800 hover:shadow-md transition-shadow">
                    <CardHeader className="p-4 pb-2">
                      <div className="flex items-start gap-3">
                        <Avatar className="h-12 w-12 border border-violet-200">
                          <AvatarImage src={`/placeholder.svg?height=48&width=48&text=P${item}`} />
                          <AvatarFallback className="bg-violet-100 text-violet-700">P{item}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <CardTitle className="text-base">Dr. James Peterson</CardTitle>
                            {item % 3 === 0 && (
                              <Badge className="bg-violet-100 text-violet-700 hover:bg-violet-200">
                                <Award className="h-3 w-3 mr-1" />
                                Top
                              </Badge>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground">Biochemistry, Stanford University</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-4 pt-2">
                      <div className="flex gap-1 mb-3">
                        <Badge variant="outline" className="text-xs bg-violet-50 text-violet-700 border-violet-200">
                          Drug Delivery
                        </Badge>
                        <Badge variant="outline" className="text-xs bg-violet-50 text-violet-700 border-violet-200">
                          Nanomaterials
                        </Badge>
                      </div>
                      <div className="text-xs text-muted-foreground mb-3">
                        <span className="font-medium text-foreground">42</span> mutual connections •{" "}
                        <span className="font-medium text-foreground">18</span> publications
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" className="flex-1 bg-violet-600 hover:bg-violet-700">
                          <MessageCircle className="h-4 w-4 mr-1" />
                          Message
                        </Button>
                        <Button size="sm" variant="outline" className="flex-1 border-violet-200 hover:bg-violet-50">
                          View Profile
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="groups" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((item) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: item * 0.05 }}
                >
                  <Card className="overflow-hidden border-violet-100 dark:border-violet-800 hover:shadow-md transition-shadow">
                    <CardHeader className="p-4 pb-2">
                      <div className="flex items-start gap-3">
                        <div className="h-12 w-12 rounded-md bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center text-white font-bold">
                          NG
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <CardTitle className="text-base">Nanomedicine Research Group</CardTitle>
                            <Badge className="bg-green-100 text-green-700 hover:bg-green-200">
                              {item % 2 === 0 ? "Public" : "Private"}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">128 members • 42 publications</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-4 pt-2">
                      <p className="text-sm mb-3">
                        Collaborative research on nanomaterial applications in targeted drug delivery systems.
                      </p>
                      <div className="flex -space-x-2 mb-3">
                        {[1, 2, 3, 4].map((avatar) => (
                          <Avatar key={avatar} className="h-6 w-6 border-2 border-white dark:border-slate-900">
                            <AvatarImage src={`/placeholder.svg?height=24&width=24&text=${avatar}`} />
                            <AvatarFallback className="bg-violet-100 text-violet-700 text-xs">{avatar}</AvatarFallback>
                          </Avatar>
                        ))}
                        <div className="h-6 w-6 rounded-full bg-violet-100 dark:bg-violet-900/50 text-violet-700 dark:text-violet-300 text-xs flex items-center justify-center border-2 border-white dark:border-slate-900">
                          +24
                        </div>
                      </div>
                      <Button size="sm" className="w-full bg-violet-600 hover:bg-violet-700">
                        {item % 2 === 0 ? "Join Group" : "Request to Join"}
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="messages" className="mt-0">
            <Card className="border-violet-100 dark:border-violet-800">
              <CardContent className="p-6">
                <div className="flex flex-col items-center justify-center py-8">
                  <div className="relative mb-4">
                    <MessageCircle className="h-12 w-12 text-violet-500" />
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
                      className="absolute inset-0 rounded-full bg-violet-200 filter blur-lg z-[-1]"
                    />
                  </div>
                  <h3 className="text-lg font-medium mb-2">Messages Coming Soon</h3>
                  <p className="text-muted-foreground text-center max-w-md mb-4">
                    We're working on bringing you a seamless messaging experience to connect with your scientific
                    network.
                  </p>
                  <Button className="bg-violet-600 hover:bg-violet-700">Get Notified</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}

