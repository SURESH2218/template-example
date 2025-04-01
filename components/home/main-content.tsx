"use client";

import type React from "react";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";
import {
  MessageCircle,
  Share2,
  ChevronRight,
  Send,
  ThumbsUp,
  Bookmark,
  MoreHorizontal,
  Award,
  Star,
} from "lucide-react";
import PostReactions from "@/components/home/post-reactions";

export default function MainContent() {
  const [activePost, setActivePost] = useState<number | null>(null);
  const [expandedComments, setExpandedComments] = useState<number[]>([]);
  const [newComments, setNewComments] = useState<{ [key: number]: string }>({});
  const [likeAnimations, setLikeAnimations] = useState<{
    [key: number]: boolean;
  }>({});

  const toggleLike = (postId: number) => {
    setActivePost(postId === activePost ? null : postId);
    setLikeAnimations({ ...likeAnimations, [postId]: true });

    // Reset animation after it completes
    setTimeout(() => {
      setLikeAnimations({ ...likeAnimations, [postId]: false });
    }, 1000);
  };

  const toggleComments = (postId: number) => {
    if (expandedComments.includes(postId)) {
      setExpandedComments(expandedComments.filter((id) => id !== postId));
    } else {
      setExpandedComments([...expandedComments, postId]);
    }
  };

  const handleCommentSubmit = (postId: number, e: React.FormEvent) => {
    e.preventDefault();
    if (newComments[postId]?.trim()) {
      // In a real app, you would send this to an API
      console.log(`New comment on post ${postId}: ${newComments[postId]}`);
      setNewComments({ ...newComments, [postId]: "" });
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <>
      {/* Research Highlights - Changed from horizontal scroll to responsive grid */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-lg font-semibold">Research Highlights</h2>
          <Button variant="ghost" size="sm" className="flex items-center gap-1">
            View All <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Replace ScrollArea with responsive grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
          {[1, 2, 3].map((item) => (
              <motion.div
                key={item}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.3,
                delay: item * 0.1,
                ease: "easeOut",
              }}
              className="h-full max-w-[180px] w-full"
              whileHover={{
                y: -3,
                transition: {
                  duration: 0.2,
                  ease: "easeOut",
                },
              }}
            >
              <Card className="h-full border-none shadow-sm overflow-hidden bg-white dark:bg-slate-900">
                <CardHeader className="p-3 pb-1">
                    <div className="flex items-center gap-2">
                    <Avatar className="h-6 w-6 border border-violet-200">
                      <AvatarImage
                        src={`/placeholder.svg?height=24&width=24&text=S${item}`}
                      />
                      <AvatarFallback className="bg-violet-100 text-violet-700 text-xs">
                        S{item}
                      </AvatarFallback>
                      </Avatar>
                      <div>
                      <p className="text-xs font-medium">Dr. Sarah Chen</p>
                      <p className="text-xs text-muted-foreground">
                        Stanford University
                      </p>
                    </div>
                    </div>
                  </CardHeader>
                <CardContent className="p-3 pt-1">
                  <p className="text-xs font-medium mb-2">
                    New findings on protein folding mechanisms
                  </p>
                  <div className="flex flex-wrap gap-1 mb-2">
                    <Badge
                      variant="outline"
                      className="text-[10px] px-1 py-0 h-4 bg-violet-50 text-violet-700 border-violet-200"
                    >
                        Protein Research
                      </Badge>
                    <Badge
                      variant="outline"
                      className="text-[10px] px-1 py-0 h-4 bg-violet-50 text-violet-700 border-violet-200"
                    >
                        Neuroscience
                      </Badge>
                    </div>
                  <p className="text-[10px] text-muted-foreground">
                    Published in Nature • 3 days ago
                  </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
        </div>
      </div>

      {/* Interactive Posts */}
      <div className="space-y-8">
        <h2 className="text-lg font-semibold mb-4">Scientific Discussions</h2>

        {/* Text Post - Enhanced Design */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="h-full"
        >
          <Card className="overflow-hidden border-none shadow-md bg-white dark:bg-slate-900">
            <div className="relative">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-violet-400 to-indigo-500"></div>
              <CardHeader className="pt-6 pb-2 px-4">
                <div className="flex items-start">
                  <div className="relative mr-3">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 blur-[1px] scale-[1.04] -z-10"></div>
                    <Avatar className="h-12 w-12 border-2 border-white dark:border-slate-800 ring-2 ring-violet-200 dark:ring-violet-900">
                      <AvatarImage src="/placeholder.svg?height=48&width=48&text=JP" />
                      <AvatarFallback className="bg-gradient-to-br from-violet-500 to-indigo-600 text-white">
                        JP
                      </AvatarFallback>
                  </Avatar>
                    <div className="absolute -bottom-1 -right-1 bg-green-500 h-3 w-3 rounded-full border-2 border-white dark:border-slate-800"></div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-base">
                          Dr. James Peterson
                        </p>
                        <div className="flex items-center gap-1 mt-0.5">
                          <Badge
                            variant="secondary"
                            className="text-xs px-1.5 py-0 h-5 bg-violet-100 text-violet-800 dark:bg-violet-900/40 dark:text-violet-300 border-none"
                          >
                            Biochemistry
                          </Badge>
                          <span className="text-xs text-muted-foreground">
                            • 2h ago
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge className="bg-gradient-to-r from-violet-500 to-indigo-600 text-white border-none shadow-sm">
                          Featured
                        </Badge>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 rounded-full hover:bg-violet-50 dark:hover:bg-violet-900/20"
                        >
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
            </div>
            <CardContent className="p-4 pt-2">
                <p className="mb-4">
                Just published our findings on novel drug delivery mechanisms
                using nanomaterial carriers. We've observed a 43% increase in
                targeted delivery efficiency compared to conventional methods.
                Would love to hear thoughts from colleagues working in similar
                areas!
                </p>
                <div className="flex gap-2 flex-wrap">
                  <Badge
                    variant="outline"
                    className="bg-violet-50 text-violet-700 border-violet-200 hover:bg-violet-100"
                  >
                    Drug Delivery
                  </Badge>
                  <Badge
                    variant="outline"
                    className="bg-violet-50 text-violet-700 border-violet-200 hover:bg-violet-100"
                  >
                    Nanomaterials
                  </Badge>
                  <Badge
                    variant="outline"
                    className="bg-violet-50 text-violet-700 border-violet-200 hover:bg-violet-100"
                  >
                    Pharmaceuticals
                  </Badge>
                </div>
              </CardContent>
            <CardFooter className="p-4 pt-0 flex justify-between">
                <div className="flex gap-4">
                  <PostReactions
                    postId={1}
                    isActive={activePost === 1}
                    isAnimating={likeAnimations[1]}
                    count={activePost === 1 ? 43 : 42}
                    onToggle={() => toggleLike(1)}
                  />
                  <Button
                    variant="ghost"
                    size="sm"
                    className="flex items-center gap-1"
                    onClick={() => toggleComments(1)}
                  >
                    <MessageCircle className="h-5 w-5" />
                    <span>18</span>
                  </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex items-center gap-1"
                >
                    <Share2 className="h-5 w-5" />
                    <span>Share</span>
                  </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex items-center gap-1"
                >
                    <Bookmark className="h-5 w-5" />
                  </Button>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-violet-200 hover:bg-violet-50 hover:text-violet-700"
                >
                  Read Paper
                </Button>
              </CardFooter>

              {/* Comments Section */}
              <AnimatePresence>
                {expandedComments.includes(1) && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  className="bg-violet-50/50 dark:bg-violet-900/10 overflow-hidden"
                  >
                    <div className="p-4 space-y-4">
                      <div className="flex items-start gap-3">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src="/placeholder.svg?height=32&width=32&text=EC" />
                          <AvatarFallback>EC</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 bg-white dark:bg-slate-800 rounded-lg p-3 shadow-sm">
                          <div className="flex justify-between items-start">
                            <p className="text-sm font-medium">Dr. Emily Chen</p>
                          <p className="text-xs text-muted-foreground">
                            1h ago
                          </p>
                        </div>
                        <p className="text-sm mt-1">
                          Fascinating results! Have you considered testing with
                          lipid-based nanocarriers as well? We've seen promising
                          results in our lab with similar targeted delivery
                          approaches.
                          </p>
                          <div className="flex items-center gap-2 mt-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-7 px-2 text-xs"
                          >
                              <ThumbsUp className="h-3 w-3 mr-1" /> 7
                            </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-7 px-2 text-xs"
                          >
                              Reply
                            </Button>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src="/placeholder.svg?height=32&width=32&text=RK" />
                          <AvatarFallback>RK</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 bg-white dark:bg-slate-800 rounded-lg p-3 shadow-sm">
                          <div className="flex justify-between items-start">
                            <p className="text-sm font-medium">Dr. Robert Kim</p>
                          <p className="text-xs text-muted-foreground">
                            45m ago
                          </p>
                        </div>
                        <p className="text-sm mt-1">
                          Great work! What was your control methodology? I'd be
                          interested in replicating some of these findings in
                          our lab.
                          </p>
                          <div className="flex items-center gap-2 mt-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-7 px-2 text-xs"
                          >
                              <ThumbsUp className="h-3 w-3 mr-1" /> 3
                            </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-7 px-2 text-xs"
                          >
                              Reply
                            </Button>
                          </div>
                        </div>
                      </div>

                    <form
                      onSubmit={(e) => handleCommentSubmit(1, e)}
                      className="flex items-start gap-3 pt-2"
                    >
                        <Avatar className="h-8 w-8">
                          <AvatarImage src="/placeholder.svg?height=32&width=32&text=SC" />
                          <AvatarFallback>SC</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 relative">
                          <Input
                            placeholder="Add a comment..."
                            className="pr-10 bg-white dark:bg-slate-800 border-violet-200 dark:border-violet-800 focus-visible:ring-violet-500"
                            value={newComments[1] || ""}
                          onChange={(e) =>
                            setNewComments({
                              ...newComments,
                              1: e.target.value,
                            })
                          }
                          />
                          <Button
                            type="submit"
                            size="icon"
                            className="h-8 w-8 absolute right-1 top-1 text-violet-600 hover:text-violet-700 hover:bg-violet-50"
                            disabled={!newComments[1]?.trim()}
                          >
                            <Send className="h-4 w-4" />
                          </Button>
                        </div>
                      </form>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
          </Card>
        </motion.div>

        {/* Image Post - Enhanced Design */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="h-full"
        >
          <Card className="overflow-hidden border-none shadow-md bg-white dark:bg-slate-900">
            <div className="relative">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-amber-400 to-orange-500"></div>
              <CardHeader className="pt-6 pb-2 px-4">
                <div className="flex items-start">
                  <div className="relative mr-3">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 blur-[1px] scale-[1.04] -z-10"></div>
                    <Avatar className="h-12 w-12 border-2 border-white dark:border-slate-800 ring-2 ring-amber-200 dark:ring-amber-900">
                      <AvatarImage src="/placeholder.svg?height=48&width=48&text=ML" />
                      <AvatarFallback className="bg-gradient-to-br from-amber-500 to-orange-600 text-white">
                        ML
                      </AvatarFallback>
                  </Avatar>
                    <div className="absolute -bottom-1 -right-1 bg-green-500 h-3 w-3 rounded-full border-2 border-white dark:border-slate-800"></div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-base">
                          Dr. Maria Lopez
                        </p>
                        <div className="flex items-center gap-1 mt-0.5">
                          <Badge
                            variant="secondary"
                            className="text-xs px-1.5 py-0 h-5 bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300 border-none"
                          >
                            Medicinal Chemistry
                          </Badge>
                          <span className="text-xs text-muted-foreground">
                            • 5h ago
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge className="bg-gradient-to-r from-amber-500 to-orange-600 text-white border-none shadow-sm">
                          <Star className="h-3 w-3 mr-1 fill-white stroke-none" />
                      Top Post
                    </Badge>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 rounded-full hover:bg-amber-50 dark:hover:bg-amber-900/20"
                        >
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
            </div>
            <CardContent className="p-4 pt-2">
                <p className="mb-3">
                Excited to share images from our latest crystallography analysis
                of the compound XR-27. These structures reveal potential binding
                sites for targeted therapy.
              </p>
              <div className="relative h-[300px] rounded-md overflow-hidden mb-3 shadow-inner border border-amber-100">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Crystallography analysis"
                    fill
                  className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3">
                    <div className="flex items-center justify-between">
                    <Badge className="bg-amber-600">High Resolution</Badge>
                      <Button
                        size="sm"
                        variant="outline"
                        className="bg-white/20 text-white border-white/40 hover:bg-white/30"
                      >
                        <Award className="h-4 w-4 mr-1" /> View in 3D
                      </Button>
                    </div>
                  </div>
              </div>
                <div className="flex gap-2 flex-wrap">
                  <Badge
                    variant="outline"
                  className="bg-amber-50 text-amber-700 border-amber-200 hover:bg-amber-100"
                  >
                    Crystallography
                  </Badge>
                  <Badge
                    variant="outline"
                  className="bg-amber-50 text-amber-700 border-amber-200 hover:bg-amber-100"
                  >
                    Molecular Structure
                  </Badge>
                </div>
              </CardContent>
            <CardFooter className="p-4 pt-0 flex justify-between">
                <div className="flex gap-4">
                  <PostReactions
                    postId={2}
                    isActive={activePost === 2}
                    isAnimating={likeAnimations[2]}
                    count={activePost === 2 ? 77 : 76}
                    onToggle={() => toggleLike(2)}
                  />
                  <Button
                    variant="ghost"
                    size="sm"
                    className="flex items-center gap-1"
                    onClick={() => toggleComments(2)}
                  >
                    <MessageCircle className="h-5 w-5" />
                    <span>24</span>
                  </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex items-center gap-1"
                >
                    <Share2 className="h-5 w-5" />
                    <span>Share</span>
                  </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex items-center gap-1"
                >
                    <Bookmark className="h-5 w-5" />
                  </Button>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                className="border-amber-200 hover:bg-amber-50 hover:text-amber-700"
                >
                  View Details
                </Button>
              </CardFooter>

              {/* Comments Section */}
              <AnimatePresence>
                {expandedComments.includes(2) && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  className="bg-amber-50/50 dark:bg-amber-900/10 overflow-hidden"
                  >
                    <div className="p-4 space-y-4">
                    <div className="flex items-start gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src="/placeholder.svg?height=32&width=32&text=EC" />
                        <AvatarFallback>EC</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 bg-white dark:bg-slate-800 rounded-lg p-3 shadow-sm">
                        <div className="flex justify-between items-start">
                          <p className="text-sm font-medium">Dr. Emily Chen</p>
                          <p className="text-xs text-muted-foreground">
                            1h ago
                          </p>
                        </div>
                        <p className="text-sm mt-1">
                          Fascinating results! Have you considered testing with
                          lipid-based nanocarriers as well? We've seen promising
                          results in our lab with similar targeted delivery
                          approaches.
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-7 px-2 text-xs"
                          >
                            <ThumbsUp className="h-3 w-3 mr-1" /> 7
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-7 px-2 text-xs"
                          >
                            Reply
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src="/placeholder.svg?height=32&width=32&text=RK" />
                        <AvatarFallback>RK</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 bg-white dark:bg-slate-800 rounded-lg p-3 shadow-sm">
                        <div className="flex justify-between items-start">
                          <p className="text-sm font-medium">Dr. Robert Kim</p>
                          <p className="text-xs text-muted-foreground">
                            45m ago
                          </p>
                        </div>
                        <p className="text-sm mt-1">
                          Great work! What was your control methodology? I'd be
                          interested in replicating some of these findings in
                          our lab.
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-7 px-2 text-xs"
                          >
                            <ThumbsUp className="h-3 w-3 mr-1" /> 3
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-7 px-2 text-xs"
                          >
                            Reply
                          </Button>
                        </div>
                      </div>
                    </div>

                    <form
                      onSubmit={(e) => handleCommentSubmit(2, e)}
                      className="flex items-start gap-3 pt-2"
                    >
                      <Avatar className="h-8 w-8">
                        <AvatarImage src="/placeholder.svg?height=32&width=32&text=SC" />
                        <AvatarFallback>SC</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 relative">
                        <Input
                          placeholder="Add a comment..."
                          className="pr-10 bg-white dark:bg-slate-800 border-violet-200 dark:border-violet-800 focus-visible:ring-violet-500"
                          value={newComments[2] || ""}
                          onChange={(e) =>
                            setNewComments({
                              ...newComments,
                              2: e.target.value,
                            })
                          }
                        />
                        <Button
                          type="submit"
                          size="icon"
                          className="h-8 w-8 absolute right-1 top-1 text-violet-600 hover:text-violet-700 hover:bg-violet-50"
                          disabled={!newComments[2]?.trim()}
                        >
                          <Send className="h-4 w-4" />
                        </Button>
                      </div>
                    </form>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
          </Card>
        </motion.div>
      </div>
    </>
  );
}
