"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Header from "@/components/layout/header"
import {
  Users,
  BookOpen,
  Award,
  Star,
  MessageCircle,
  Edit,
  MapPin,
  Mail,
  Globe,
  Briefcase,
  GraduationCap,
  FileText,
  LinkIcon,
} from "lucide-react"

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 to-slate-100 dark:from-slate-900 dark:to-violet-950">
      <Header />
      <main className="container px-4 py-6">
        {/* Profile Header */}
        <Card className="border-violet-100 dark:border-violet-800 overflow-hidden mb-6">
          <div className="h-48 bg-gradient-to-r from-violet-500 to-purple-600 relative">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white rounded-full h-8 w-8"
            >
              <Edit className="h-4 w-4" />
            </Button>
          </div>
          <div className="px-6 pb-6 relative">
            <div className="flex flex-col md:flex-row md:items-end gap-4 -mt-16">
              <Avatar className="h-32 w-32 border-4 border-white dark:border-slate-900 shadow-md">
                <AvatarImage src="/placeholder.svg?height=128&width=128&text=SC" />
                <AvatarFallback className="bg-violet-100 text-violet-700 text-3xl">SC</AvatarFallback>
              </Avatar>
              <div className="flex-1 pt-4 md:pt-0">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h1 className="text-2xl font-bold">Dr. Sarah Chen</h1>
                    <p className="text-muted-foreground">Molecular Biologist at Stanford University</p>
                    <div className="flex gap-2 mt-2">
                      <Badge className="bg-violet-100 text-violet-700 hover:bg-violet-200 dark:bg-violet-900/30 dark:text-violet-300">
                        <Star className="h-3 w-3 mr-1 fill-amber-400 stroke-amber-400" />
                        Top Contributor
                      </Badge>
                      <Badge variant="outline" className="border-violet-200 dark:border-violet-800">
                        <Award className="h-3 w-3 mr-1" />
                        PhD
                      </Badge>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" className="border-violet-200 hover:bg-violet-50">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Message
                    </Button>
                    <Button className="bg-violet-600 hover:bg-violet-700">
                      <Users className="h-4 w-4 mr-2" />
                      Connect
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Sidebar */}
          <div className="space-y-6">
            <Card className="border-violet-100 dark:border-violet-800">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">About</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-4">
                  Molecular biologist specializing in protein folding mechanisms and their implications in
                  neurodegenerative diseases. Currently leading research at Stanford University's Department of
                  Molecular Biology.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="h-4 w-4 text-violet-500" />
                    <span>Stanford, California</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Mail className="h-4 w-4 text-violet-500" />
                    <span>sarah.chen@example.edu</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Globe className="h-4 w-4 text-violet-500" />
                    <span>www.sarahchen-research.com</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Briefcase className="h-4 w-4 text-violet-500" />
                    <span>Stanford University</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-violet-100 dark:border-violet-800">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Education</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <GraduationCap className="h-4 w-4 text-violet-500" />
                      <h3 className="font-medium">PhD in Molecular Biology</h3>
                    </div>
                    <p className="text-sm text-muted-foreground ml-6">Harvard University • 2015-2019</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <GraduationCap className="h-4 w-4 text-violet-500" />
                      <h3 className="font-medium">MSc in Biochemistry</h3>
                    </div>
                    <p className="text-sm text-muted-foreground ml-6">MIT • 2013-2015</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <GraduationCap className="h-4 w-4 text-violet-500" />
                      <h3 className="font-medium">BSc in Biology</h3>
                    </div>
                    <p className="text-sm text-muted-foreground ml-6">UC Berkeley • 2009-2013</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-violet-100 dark:border-violet-800">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Connections</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                    <Avatar key={item} className="h-10 w-10 border border-violet-100">
                      <AvatarImage src={`/placeholder.svg?height=40&width=40&text=${item}`} />
                      <AvatarFallback className="bg-violet-100 text-violet-700">{item}</AvatarFallback>
                    </Avatar>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">1,234 connections</p>
                <Button variant="outline" size="sm" className="w-full mt-2 border-violet-200 hover:bg-violet-50">
                  View All Connections
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="md:col-span-2 space-y-6">
            <Tabs defaultValue="publications" className="w-full">
              <TabsList className="grid grid-cols-3 w-full bg-violet-100/50 dark:bg-violet-900/20">
                <TabsTrigger
                  value="publications"
                  className="data-[state=active]:bg-white dark:data-[state=active]:bg-slate-800 data-[state=active]:text-violet-700 dark:data-[state=active]:text-violet-300"
                >
                  Publications
                </TabsTrigger>
                <TabsTrigger
                  value="research"
                  className="data-[state=active]:bg-white dark:data-[state=active]:bg-slate-800 data-[state=active]:text-violet-700 dark:data-[state=active]:text-violet-300"
                >
                  Research
                </TabsTrigger>
                <TabsTrigger
                  value="activity"
                  className="data-[state=active]:bg-white dark:data-[state=active]:bg-slate-800 data-[state=active]:text-violet-700 dark:data-[state=active]:text-violet-300"
                >
                  Activity
                </TabsTrigger>
              </TabsList>

              <TabsContent value="publications" className="mt-6">
                <div className="space-y-4">
                  {[1, 2, 3, 4].map((item) => (
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
                                Published in <span className="font-medium text-foreground">Nature Biotechnology</span> •
                                March 2024
                              </p>
                              <div className="flex gap-2 mt-2">
                                <Badge
                                  variant="outline"
                                  className="text-xs bg-violet-50 text-violet-700 border-violet-200"
                                >
                                  Protein Folding
                                </Badge>
                                <Badge
                                  variant="outline"
                                  className="text-xs bg-violet-50 text-violet-700 border-violet-200"
                                >
                                  Neuroscience
                                </Badge>
                              </div>
                              <div className="flex items-center gap-4 mt-3">
                                <div className="flex items-center text-sm text-muted-foreground">
                                  <Star className="h-4 w-4 mr-1 fill-amber-400 text-amber-400" />
                                  {42 + item * 10} Citations
                                </div>
                                <Button variant="outline" size="sm" className="border-violet-200 hover:bg-violet-50">
                                  <LinkIcon className="h-4 w-4 mr-1" />
                                  View Paper
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

              <TabsContent value="research" className="mt-6">
                <div className="space-y-4">
                  {[1, 2].map((item) => (
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
                              <Briefcase className="h-6 w-6 text-violet-600 dark:text-violet-300" />
                            </div>
                            <div className="flex-1">
                              <h3 className="font-medium">Protein Folding Mechanisms Research Group</h3>
                              <p className="text-sm text-muted-foreground mt-1">Stanford University • 2020-Present</p>
                              <p className="text-sm mt-2">
                                Leading a team of researchers investigating novel protein folding mechanisms and their
                                implications for neurodegenerative diseases. Our work has led to several breakthrough
                                discoveries in the field.
                              </p>
                              <div className="flex items-center gap-4 mt-3">
                                <div className="flex items-center text-sm text-muted-foreground">
                                  <Users className="h-4 w-4 mr-1" />8 Team Members
                                </div>
                                <Button variant="outline" size="sm" className="border-violet-200 hover:bg-violet-50">
                                  View Research
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

              <TabsContent value="activity" className="mt-6">
                <div className="space-y-4">
                  {[1, 2, 3].map((item) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: item * 0.05 }}
                    >
                      <Card className="border-violet-100 dark:border-violet-800">
                        <CardContent className="p-4">
                          <div className="flex gap-3">
                            <div className="relative">
                              <Avatar className="h-10 w-10 border border-violet-200">
                                <AvatarImage src="/placeholder.svg?height=40&width=40&text=SC" />
                                <AvatarFallback className="bg-violet-100 text-violet-700">SC</AvatarFallback>
                              </Avatar>
                              <div className="absolute -bottom-1 -right-1 bg-white dark:bg-slate-800 rounded-full p-0.5">
                                {item === 1 && <BookOpen className="h-4 w-4 text-violet-500" />}
                                {item === 2 && <Users className="h-4 w-4 text-blue-500" />}
                                {item === 3 && <MessageCircle className="h-4 w-4 text-green-500" />}
                              </div>
                            </div>
                            <div className="flex-1">
                              <p className="text-sm">
                                {item === 1 && (
                                  <span>
                                    Published a new paper in <span className="font-medium">Nature Biotechnology</span>
                                  </span>
                                )}
                                {item === 2 && (
                                  <span>
                                    Connected with <span className="font-medium">Dr. James Peterson</span> and 3 others
                                  </span>
                                )}
                                {item === 3 && (
                                  <span>
                                    Commented on <span className="font-medium">Novel Drug Delivery Methods</span>{" "}
                                    research
                                  </span>
                                )}
                              </p>
                              <p className="text-xs text-muted-foreground mt-1">
                                {item} day{item !== 1 ? "s" : ""} ago
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  )
}

