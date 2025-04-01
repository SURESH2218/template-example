import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Users, BookOpen, Award, Star, MessageCircle } from "lucide-react";

export function UserProfile() {
  return (
    <Card className="frosted-card overflow-hidden animate-blur-in border-0">
      <div className="relative p-6">
        <div className="absolute inset-0 gradient-purple opacity-10 rounded-lg"></div>
        
        <div className="flex flex-col items-center relative">
          <div className="flex items-center mb-5 w-full">
            <Avatar className="h-16 w-16 border-2 border-white shadow-lg animate-float">
              <AvatarImage src="/placeholder.svg?height=80&width=80&text=SC" alt="Sarah Chen" />
              <AvatarFallback className="bg-purple-100 text-purple-700 text-lg">
                SC
              </AvatarFallback>
            </Avatar>
            <div className="ml-4">
              <h3 className="font-semibold text-lg animate-fade-in">Dr. Sarah Chen</h3>
              <p className="text-xs text-muted-foreground animate-slide-in" style={{ animationDelay: "0.1s" }}>
                Molecular Biologist
              </p>
              <div className="flex items-center mt-1 animate-slide-in" style={{ animationDelay: "0.2s" }}>
                <Star className="h-3 w-3 mr-1 fill-amber-400 stroke-amber-400" />
                <span className="text-xs font-medium text-purple-700 dark:text-purple-300">Top Contributor</span>
                <span className="mx-2 text-slate-300">•</span>
                <Award className="h-3 w-3 mr-1 text-purple-600" />
                <span className="text-xs font-medium">PhD</span>
              </div>
            </div>
          </div>

          <div className="w-full bg-white/50 dark:bg-black/10 backdrop-blur-md rounded-xl p-4 shadow-sm animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <div className="grid grid-cols-3 gap-4 w-full text-center mb-4">
              <div className="hover:bg-white/50 dark:hover:bg-white/10 p-2 rounded-lg transition-all duration-300 transform hover:scale-105">
                <p className="font-semibold text-lg text-purple-700 dark:text-purple-300">42</p>
                <p className="text-[11px] text-muted-foreground">Publications</p>
              </div>
              <div className="hover:bg-white/50 dark:hover:bg-white/10 p-2 rounded-lg transition-all duration-300 transform hover:scale-105">
                <p className="font-semibold text-lg text-purple-700 dark:text-purple-300">1.2k</p>
                <p className="text-[11px] text-muted-foreground">Connections</p>
              </div>
              <div className="hover:bg-white/50 dark:hover:bg-white/10 p-2 rounded-lg transition-all duration-300 transform hover:scale-105">
                <p className="font-semibold text-lg text-purple-700 dark:text-purple-300">3.8k</p>
                <p className="text-[11px] text-muted-foreground">Citations</p>
              </div>
            </div>

            <div className="space-y-2.5 mb-4">
              <div className="text-[11px] text-muted-foreground flex items-start gap-2 p-2 hover:bg-white/50 dark:hover:bg-white/10 rounded-lg transition-colors">
                <BookOpen className="h-3.5 w-3.5 mt-0.5 text-purple-500 flex-shrink-0" />
                <span>
                  Published a paper in{" "}
                  <span className="font-medium text-foreground">
                    Nature Biotechnology
                  </span>
                </span>
              </div>
              <div className="text-[11px] text-muted-foreground flex items-start gap-2 p-2 hover:bg-white/50 dark:hover:bg-white/10 rounded-lg transition-colors">
                <Users className="h-3.5 w-3.5 mt-0.5 text-purple-500 flex-shrink-0" />
                <span>
                  Connected with{" "}
                  <span className="font-medium text-foreground">
                    Dr. James Peterson
                  </span>
                </span>
              </div>
            </div>

            <div className="flex gap-2 w-full">
              <Button
                className="flex-1 bg-purple-600 hover:bg-purple-700 h-8 text-xs transition-all duration-300"
                size="sm"
              >
                <Users className="h-3 w-3 mr-1" />
                View Profile
              </Button>
              <Button
                variant="outline"
                className="flex-1 border-purple-200 h-8 text-xs bg-white/50 hover:bg-white/80 dark:bg-black/10 dark:hover:bg-black/20 dark:border-purple-800 transition-all duration-300"
                size="sm"
              >
                <MessageCircle className="h-3 w-3 mr-1" />
                Message
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}