"use client";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
  Users,
  BookOpen,
  Award,
  Star,
  MessageCircle,
  Edit,
} from "lucide-react";

export default function UserProfile() {
  return (
    <Card className="border-violet-100 dark:border-violet-800 overflow-hidden h-full">
      <CardHeader className="p-0">
        <div className="h-16 bg-gradient-to-r from-violet-500 to-purple-600 relative">
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2 bg-white/20 hover:bg-white/30 text-white rounded-full h-6 w-6"
          >
            <Edit className="h-3 w-3" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-0 relative">
        <div className="flex flex-col items-center -mt-8">
          <Avatar className="h-16 w-16 border-4 border-white dark:border-slate-900 shadow-md">
            <AvatarImage src="/placeholder.svg?height=80&width=80&text=SC" />
            <AvatarFallback className="bg-violet-100 text-violet-700 text-lg">
              SC
            </AvatarFallback>
          </Avatar>
          <h3 className="font-semibold text-base mt-1">Dr. Sarah Chen</h3>
          <p className="text-xs text-muted-foreground">
            Molecular Biologist at Stanford University
          </p>

          <div className="flex gap-1 mt-2">
            <Badge className="bg-violet-100 text-violet-700 hover:bg-violet-200 dark:bg-violet-900/30 dark:text-violet-300 text-xs py-0">
              <Star className="h-2.5 w-2.5 mr-1 fill-amber-400 stroke-amber-400" />
              Top Contributor
            </Badge>
            <Badge
              variant="outline"
              className="border-violet-200 dark:border-violet-800 text-xs py-0"
            >
              <Award className="h-2.5 w-2.5 mr-1" />
              PhD
            </Badge>
          </div>

          <div className="grid grid-cols-3 gap-2 w-full mt-3 text-center">
            <div>
              <p className="font-semibold text-sm">42</p>
              <p className="text-xs text-muted-foreground">Publications</p>
            </div>
            <div>
              <p className="font-semibold text-sm">1.2k</p>
              <p className="text-xs text-muted-foreground">Connections</p>
            </div>
            <div>
              <p className="font-semibold text-sm">3.8k</p>
              <p className="text-xs text-muted-foreground">Citations</p>
            </div>
          </div>

          <div className="flex gap-2 mt-3 w-full">
            <Button
              className="flex-1 bg-violet-600 hover:bg-violet-700 h-7 text-xs"
              size="sm"
              asChild
            >
              <Link href="/profile">
                <Users className="h-3 w-3 mr-1" />
                View Profile
              </Link>
            </Button>
            <Button
              variant="outline"
              className="flex-1 border-violet-200 hover:bg-violet-50 h-7 text-xs"
              size="sm"
            >
              <MessageCircle className="h-3 w-3 mr-1" />
              Message
            </Button>
          </div>

          <div className="w-full mt-3 pt-2 border-t border-violet-100 dark:border-violet-800/30">
            <h4 className="text-xs font-medium mb-1">Recent Activity</h4>
            <div className="space-y-1.5">
              <div className="text-[10px] text-muted-foreground flex items-start gap-1.5">
                <BookOpen className="h-2.5 w-2.5 mt-0.5 text-violet-500 flex-shrink-0" />
                <span>
                  Published a paper in{" "}
                  <span className="font-medium text-foreground">
                    Nature Biotechnology
                  </span>
                </span>
              </div>
              <div className="text-[10px] text-muted-foreground flex items-start gap-1.5">
                <Users className="h-2.5 w-2.5 mt-0.5 text-violet-500 flex-shrink-0" />
                <span>
                  Connected with{" "}
                  <span className="font-medium text-foreground">
                    Dr. James Peterson
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
