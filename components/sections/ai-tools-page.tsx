"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Header from "@/components/layout/header"
import { Zap, Star, Sparkles, Brain, Dna, FlaskRoundIcon as Flask, Database } from "lucide-react"

export default function AIToolsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 to-slate-100 dark:from-slate-900 dark:to-violet-950">
      <Header />
      <main className="container px-4 py-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold mb-1">AI Tools</h1>
            <p className="text-muted-foreground">Cutting-edge AI tools for scientific research</p>
          </div>
          <Button className="bg-violet-600 hover:bg-violet-700">
            <Zap className="h-4 w-4 mr-2" />
            My AI Tools
          </Button>
        </div>

        {/* Hero Section */}
        <Card className="border-violet-100 dark:border-violet-800 overflow-hidden mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-6 md:p-8 flex flex-col justify-center">
              <Badge className="w-fit mb-2 bg-violet-100 text-violet-700 hover:bg-violet-200">Coming Soon</Badge>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">AI-Powered Research Assistant</h2>
              <p className="text-muted-foreground mb-4">
                Accelerate your research with our advanced AI assistant that helps analyze data, generate hypotheses,
                and streamline your workflow.
              </p>
              <div className="flex gap-3">
                <Button className="bg-violet-600 hover:bg-violet-700">
                  <Sparkles className="h-4 w-4 mr-2" />
                  Join Waitlist
                </Button>
                <Button variant="outline" className="border-violet-200 hover:bg-violet-50">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="bg-gradient-to-br from-violet-500 to-purple-600 p-8 flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <Brain className="h-32 w-32 text-white/90" />
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
                  className="absolute inset-0 rounded-full bg-white/30 filter blur-xl z-[-1]"
                />
              </motion.div>
            </div>
          </div>
        </Card>

        {/* AI Tools Grid */}
        <h2 className="text-xl font-semibold mb-4">Featured AI Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {[
            {
              title: "Protein Structure Predictor",
              description: "Predict protein structures with high accuracy using our advanced deep learning models.",
              icon: Dna,
              color: "from-blue-500 to-cyan-600",
            },
            {
              title: "Molecular Dynamics Simulator",
              description: "Simulate molecular interactions and dynamics with our GPU-accelerated AI engine.",
              icon: Flask,
              color: "from-green-500 to-emerald-600",
            },
            {
              title: "Research Literature Analyzer",
              description: "Automatically analyze and summarize scientific literature relevant to your research.",
              icon: Database,
              color: "from-amber-500 to-orange-600",
            },
          ].map((tool, index) => {
            const Icon = tool.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Card className="border-violet-100 dark:border-violet-800 overflow-hidden h-full">
                  <div className={`h-3 bg-gradient-to-r ${tool.color}`}></div>
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <div
                        className={`h-12 w-12 rounded-lg bg-gradient-to-br ${tool.color} flex items-center justify-center`}
                      >
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{tool.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{tool.description}</p>
                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex items-center">
                        <div className="flex items-center">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className={`h-4 w-4 ${star <= 4 ? "fill-amber-400 text-amber-400" : "text-gray-300"}`}
                            />
                          ))}
                        </div>
                        <span className="text-xs text-muted-foreground ml-2">(42)</span>
                      </div>
                      <Badge className="bg-violet-100 text-violet-700">Beta</Badge>
                    </div>
                    <Button className="w-full mt-4 bg-violet-600 hover:bg-violet-700">Try Now</Button>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Coming Soon Section */}
        <Card className="border-violet-100 dark:border-violet-800 overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-violet-50 to-transparent dark:from-violet-900/20 dark:to-transparent">
            <CardTitle className="text-lg">More AI Tools Coming Soon</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="flex flex-col items-center justify-center py-8">
              <div className="relative mb-4">
                <Zap className="h-12 w-12 text-violet-500" />
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
                  className="absolute inset-0 rounded-full bg-violet-200 filter blur-lg z-[-1]"
                />
              </div>
              <h3 className="text-lg font-medium mb-2">We're Expanding Our AI Toolkit</h3>
              <p className="text-muted-foreground text-center max-w-md mb-4">
                Our team is working on bringing you more powerful AI tools to accelerate your scientific research.
              </p>
              <Button className="bg-violet-600 hover:bg-violet-700">Get Early Access</Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}

