"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Heart, ThumbsUp, Laugh, Zap, Star } from "lucide-react"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

interface PostReactionsProps {
  postId: number
  isActive: boolean
  isAnimating: boolean
  count: number
  onToggle: () => void
}

export default function PostReactions({ postId, isActive, isAnimating, count, onToggle }: PostReactionsProps) {
  const [selectedReaction, setSelectedReaction] = useState<string>("heart")
  const [showReactions, setShowReactions] = useState(false)

  const handleReactionSelect = (reaction: string) => {
    setSelectedReaction(reaction)
    setShowReactions(false)
    onToggle()
  }

  const getReactionIcon = () => {
    switch (selectedReaction) {
      case "heart":
        return (
          <Heart
            className={`h-5 w-5 transition-all duration-300 ${
              isActive ? "fill-red-500 stroke-red-500 scale-110" : "fill-transparent stroke-current"
            }`}
          />
        )
      case "thumbsUp":
        return (
          <ThumbsUp
            className={`h-5 w-5 transition-all duration-300 ${
              isActive ? "fill-blue-500 stroke-blue-500 scale-110" : "fill-transparent stroke-current"
            }`}
          />
        )
      case "laugh":
        return (
          <Laugh
            className={`h-5 w-5 transition-all duration-300 ${
              isActive ? "fill-amber-500 stroke-amber-500 scale-110" : "fill-transparent stroke-current"
            }`}
          />
        )
      case "zap":
        return (
          <Zap
            className={`h-5 w-5 transition-all duration-300 ${
              isActive ? "fill-violet-500 stroke-violet-500 scale-110" : "fill-transparent stroke-current"
            }`}
          />
        )
      case "star":
        return (
          <Star
            className={`h-5 w-5 transition-all duration-300 ${
              isActive ? "fill-green-500 stroke-green-500 scale-110" : "fill-transparent stroke-current"
            }`}
          />
        )
      default:
        return (
          <Heart
            className={`h-5 w-5 transition-all duration-300 ${
              isActive ? "fill-red-500 stroke-red-500 scale-110" : "fill-transparent stroke-current"
            }`}
          />
        )
    }
  }

  return (
    <Popover open={showReactions} onOpenChange={setShowReactions}>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className={`flex items-center gap-1 transition-all duration-300 ${
            isActive
              ? selectedReaction === "heart"
                ? "text-red-600"
                : selectedReaction === "thumbsUp"
                  ? "text-blue-600"
                  : selectedReaction === "laugh"
                    ? "text-amber-600"
                    : selectedReaction === "zap"
                      ? "text-violet-600"
                      : "text-green-600"
              : "text-slate-600 dark:text-slate-400"
          }`}
          onClick={() => setShowReactions(true)}
        >
          <motion.div
            animate={
              isAnimating
                ? {
                    scale: [1, 1.5, 1],
                    rotate: [0, 15, -15, 0],
                  }
                : {}
            }
            transition={{ duration: 0.5 }}
          >
            {getReactionIcon()}
          </motion.div>
          <span className="font-medium">{count}</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-2 bg-white dark:bg-slate-800 shadow-lg rounded-full border-violet-100 dark:border-violet-800">
        <div className="flex gap-1">
          <motion.button
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded-full hover:bg-red-50 dark:hover:bg-red-900/20"
            onClick={() => handleReactionSelect("heart")}
          >
            <Heart className="h-6 w-6 fill-red-500 stroke-red-500" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded-full hover:bg-blue-50 dark:hover:bg-blue-900/20"
            onClick={() => handleReactionSelect("thumbsUp")}
          >
            <ThumbsUp className="h-6 w-6 fill-blue-500 stroke-blue-500" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded-full hover:bg-amber-50 dark:hover:bg-amber-900/20"
            onClick={() => handleReactionSelect("laugh")}
          >
            <Laugh className="h-6 w-6 fill-amber-500 stroke-amber-500" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded-full hover:bg-violet-50 dark:hover:bg-violet-900/20"
            onClick={() => handleReactionSelect("zap")}
          >
            <Zap className="h-6 w-6 fill-violet-500 stroke-violet-500" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded-full hover:bg-green-50 dark:hover:bg-green-900/20"
            onClick={() => handleReactionSelect("star")}
          >
            <Star className="h-6 w-6 fill-green-500 stroke-green-500" />
          </motion.button>
        </div>
      </PopoverContent>
    </Popover>
  )
}

