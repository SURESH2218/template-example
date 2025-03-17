"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import { Calendar, ShoppingCart, BriefcaseBusiness } from "lucide-react";

export default function Sidebar() {
  return (
    <>
      {/* Upcoming Conferences */}
      <Card className="border-violet-100 dark:border-violet-800 overflow-hidden">
        <CardHeader className="pb-2 bg-gradient-to-r from-violet-50 to-transparent dark:from-violet-900/20 dark:to-transparent">
          <CardTitle className="text-base flex items-center gap-2 text-violet-800 dark:text-violet-300">
            <Calendar className="h-4 w-4" />
            Upcoming Conferences
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4 pt-0">
          <div className="space-y-3">
            {[1, 2, 3].map((item) => (
              <motion.div
                key={item}
                whileHover={{ x: 3 }}
                className="flex gap-3 items-start pb-3 border-b last:border-0 last:pb-0 border-violet-100 dark:border-violet-800/30"
              >
                <div className="bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300 rounded p-2 text-center min-w-[50px]">
                  <p className="text-xs font-medium">MAY</p>
                  <p className="text-lg font-bold">{item + 14}</p>
                </div>
                <div>
                  <p className="text-sm font-medium">
                    International Symposium on Pharmaceutical Research
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Virtual • 09:00 AM EST
                  </p>
                  <div className="flex gap-2 mt-1">
                    <Badge
                      variant="outline"
                      className="text-xs bg-violet-50 text-violet-700 border-violet-200 dark:bg-violet-900/20 dark:text-violet-300 dark:border-violet-800/50"
                    >
                      Free
                    </Badge>
                    <Badge
                      variant="outline"
                      className="text-xs bg-violet-50 text-violet-700 border-violet-200 dark:bg-violet-900/20 dark:text-violet-300 dark:border-violet-800/50"
                    >
                      Certificate
                    </Badge>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
        <CardFooter className="pt-0">
          <Button
            variant="ghost"
            size="sm"
            className="w-full text-violet-700 hover:text-violet-800 hover:bg-violet-50 dark:text-violet-300 dark:hover:bg-violet-900/20"
            asChild
          >
            <Link href="/conferences">View All Conferences</Link>
          </Button>
        </CardFooter>
      </Card>

      {/* Featured Products */}
      <Card className="border-violet-100 dark:border-violet-800 overflow-hidden">
        <CardHeader className="pb-2 bg-gradient-to-r from-violet-50 to-transparent dark:from-violet-900/20 dark:to-transparent">
          <CardTitle className="text-base flex items-center gap-2 text-violet-800 dark:text-violet-300">
            <ShoppingCart className="h-4 w-4" />
            Featured Lab Products
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4 pt-0">
          <div className="space-y-3">
            {[1, 2].map((item) => (
              <motion.div
                key={item}
                whileHover={{ x: 3 }}
                className="flex gap-3 items-center pb-3 border-b last:border-0 last:pb-0 border-violet-100 dark:border-violet-800/30"
              >
                <div className="relative h-16 w-16 rounded overflow-hidden shadow-sm">
                  <Image
                    src="/placeholder.svg?height=64&width=64"
                    alt="Lab product"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-transparent"></div>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">
                    High-Precision Micropipette Set
                  </p>
                  <p className="text-xs text-muted-foreground">
                    BioTech Solutions Inc.
                  </p>
                  <div className="flex items-center justify-between mt-1">
                    <p className="text-sm font-semibold text-violet-700 dark:text-violet-300">
                      $349.99
                    </p>
                    <Badge
                      variant="outline"
                      className="text-xs bg-violet-50 text-violet-700 border-violet-200"
                    >
                      Best Seller
                    </Badge>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
        <CardFooter className="pt-0">
          <Button
            variant="ghost"
            size="sm"
            className="w-full text-violet-700 hover:text-violet-800 hover:bg-violet-50 dark:text-violet-300 dark:hover:bg-violet-900/20"
            asChild
          >
            <Link href="/marketplace">Browse Marketplace</Link>
          </Button>
        </CardFooter>
      </Card>

      {/* Job Opportunities */}
      <Card className="border-violet-100 dark:border-violet-800 overflow-hidden">
        <CardHeader className="pb-2 bg-gradient-to-r from-violet-50 to-transparent dark:from-violet-900/20 dark:to-transparent">
          <CardTitle className="text-base flex items-center gap-2 text-violet-800 dark:text-violet-300">
            <BriefcaseBusiness className="h-4 w-4" />
            Job Opportunities
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4 pt-0">
          <div className="space-y-3">
            {[1, 2, 3].map((item) => (
              <motion.div
                key={item}
                whileHover={{ x: 3 }}
                className="pb-3 border-b last:border-0 last:pb-0 border-violet-100 dark:border-violet-800/30"
              >
                <p className="text-sm font-medium">
                  Senior Research Scientist - Oncology
                </p>
                <div className="flex items-center gap-2 mt-1">
                  <Avatar className="h-4 w-4">
                    <AvatarImage src="/placeholder.svg?height=16&width=16" />
                    <AvatarFallback className="bg-violet-100 text-violet-700">
                      P
                    </AvatarFallback>
                  </Avatar>
                  <p className="text-xs text-muted-foreground">
                    PharmaTech Inc.
                  </p>
                </div>
                <div className="flex gap-2 mt-1">
                  <Badge
                    variant="outline"
                    className="text-xs bg-violet-50 text-violet-700 border-violet-200"
                  >
                    Full-time
                  </Badge>
                  <Badge
                    variant="outline"
                    className="text-xs bg-violet-50 text-violet-700 border-violet-200"
                  >
                    Remote
                  </Badge>
                  {item === 1 && (
                    <Badge className="text-xs bg-violet-100 text-violet-700">
                      New
                    </Badge>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
        <CardFooter className="pt-0">
          <Button
            variant="ghost"
            size="sm"
            className="w-full text-violet-700 hover:text-violet-800 hover:bg-violet-50 dark:text-violet-300 dark:hover:bg-violet-900/20"
            asChild
          >
            <Link href="/jobs">View All Jobs</Link>
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}
