import React, { useState, useEffect } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerOverlay,
  DrawerPortal,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { X, Send, Award, MessageCircle, FileText } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

interface Comment {
  id: string;
  author: {
    name: string;
    avatar: string;
  };
  text: string;
  timeAgo: string;
  likes: number;
}

interface Citation {
  id: string;
  title: string;
  authors: string;
  journal: string;
  year: string;
  doi: string;
}

interface PostInfoDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  post: {
    id: string;
    author: {
      name: string;
      avatar: string;
      role: string;
    };
    content: string;
    image?: string;
    likes: number;
    comments: Comment[];
    timeAgo: string;
  };
}

const PostInfoDrawer: React.FC<PostInfoDrawerProps> = ({
  open,
  onOpenChange,
  post,
}) => {
  const [comments, setComments] = useState<Comment[]>(post.comments || []);
  const [commentText, setCommentText] = useState("");
  const [activeTab, setActiveTab] = useState("comments");
  const [animationClass, setAnimationClass] = useState("");

  useEffect(() => {
    if (open) {
      setAnimationClass("drawer-enter");
    } else {
      setAnimationClass("drawer-exit");
    }
  }, [open]);

  // Sample citations for demo purposes - in a real app, these would come from the post data
  const citations: Citation[] = [
    {
      id: "1",
      title: "Advances in Targeted Drug Delivery Systems",
      authors: "Chen E., Wilson J., et al.",
      journal: "Journal of Controlled Release",
      year: "2023",
      doi: "10.1016/j.jconrel.2023.01.001",
    },
    {
      id: "2",
      title: "Liposomal Formulation Techniques for Pharmaceutical Applications",
      authors: "Smith R., Johnson T., Kumar P.",
      journal: "European Journal of Pharmaceutics and Biopharmaceutics",
      year: "2022",
      doi: "10.1016/j.ejpb.2022.05.012",
    },
    {
      id: "3",
      title: "Novel Approaches in Drug Delivery: A Review",
      authors: "Rodriguez L., Kim S., et al.",
      journal: "Advanced Drug Delivery Reviews",
      year: "2021",
      doi: "10.1016/j.addr.2021.02.005",
    },
  ];

  const handleAddComment = () => {
    if (commentText.trim()) {
      const newComment: Comment = {
        id: Date.now().toString(),
        author: {
          name: "You",
          avatar: "https://i.pravatar.cc/100?img=11",
        },
        text: commentText,
        timeAgo: "Just now",
        likes: 0,
      };

      setComments([newComment, ...comments]);
      setCommentText("");
    }
  };

  const handleOverlayClick = () => {
    onOpenChange(false);
  };

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerPortal>
        <DrawerOverlay
          className="fixed inset-0 z-50 bg-violet-500/10 transition-opacity duration-300"
          onClick={handleOverlayClick}
        />
        <div
          className={`fixed inset-y-0 right-0 z-50 h-full w-[510px] max-w-full rounded-l-xl border-l bg-background ${animationClass}`}
        >
          <div className="flex h-full flex-col">
            <DrawerHeader className="flex flex-row items-center justify-between">
              <div>
                <DrawerTitle>Post Information</DrawerTitle>
                <DrawerDescription>
                  Details, comments, and citations
                </DrawerDescription>
              </div>
              <DrawerClose className="rounded-full p-2 hover:bg-secondary">
                <X className="h-4 w-4" />
              </DrawerClose>
            </DrawerHeader>

            <Tabs
              defaultValue="details"
              value={activeTab}
              onValueChange={setActiveTab}
              className="w-full px-4 flex flex-col flex-1"
            >
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger
                  value="details"
                  className="flex items-center gap-1"
                >
                  <FileText className="h-4 w-4" />
                  <span>Details</span>
                </TabsTrigger>
                <TabsTrigger
                  value="comments"
                  className="flex items-center gap-1"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Comments</span>
                </TabsTrigger>
                <TabsTrigger
                  value="citations"
                  className="flex items-center gap-1"
                >
                  <Award className="h-4 w-4" />
                  <span>Citations</span>
                </TabsTrigger>
              </TabsList>

              {/* Post Details Tab */}
              <TabsContent
                value="details"
                className="flex-1 overflow-y-auto"
                style={{ height: "calc(100vh - 180px)" }}
              >
                <div className="space-y-4 py-4">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage
                        src={post.author.avatar}
                        alt={post.author.name}
                      />
                      <AvatarFallback>
                        {post.author.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold text-foreground">
                          {post.author.name}
                        </h3>
                        <Badge
                          variant="outline"
                          className="bg-brand-50 dark:bg-brand-900/20 text-brand-700 dark:text-brand-300 border-brand-100 text-xs"
                        >
                          {post.author.role}
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {post.timeAgo}
                      </p>
                    </div>
                  </div>

                  <div className="rounded-lg bg-secondary/50 p-4">
                    <p className="text-sm text-foreground">{post.content}</p>
                  </div>

                  {post.image && (
                    <div className="overflow-hidden rounded-lg">
                      <img
                        src={post.image}
                        alt="Post content"
                        className="h-40 w-full object-cover"
                      />
                    </div>
                  )}

                  <div className="space-y-2">
                    <h4 className="font-medium">Key Information</h4>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="rounded-md bg-secondary p-3">
                        <p className="text-xs text-muted-foreground">
                          Category
                        </p>
                        <p className="text-sm font-medium">Research Finding</p>
                      </div>
                      <div className="rounded-md bg-secondary p-3">
                        <p className="text-xs text-muted-foreground">
                          Reactions
                        </p>
                        <p className="text-sm font-medium">
                          {post.likes} likes
                        </p>
                      </div>
                      <div className="rounded-md bg-secondary p-3">
                        <p className="text-xs text-muted-foreground">
                          Comments
                        </p>
                        <p className="text-sm font-medium">{comments.length}</p>
                      </div>
                      <div className="rounded-md bg-secondary p-3">
                        <p className="text-xs text-muted-foreground">
                          Citations
                        </p>
                        <p className="text-sm font-medium">
                          {citations.length}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* Comments Tab */}
              <TabsContent
                value="comments"
                className="flex-1 overflow-y-auto"
                style={{ height: "calc(100vh - 180px)" }}
              >
                <div className="space-y-4 py-4 px-2">
                  <div className="flex items-center gap-2">
                    <Input
                      placeholder="Add a comment..."
                      value={commentText}
                      onChange={(e) => setCommentText(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && handleAddComment()}
                      className="flex-1 pl-3"
                    />
                    <Button
                      size="icon"
                      onClick={handleAddComment}
                      disabled={!commentText.trim()}
                    >
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    {comments.length > 0 ? (
                      comments.map((comment) => (
                        <div key={comment.id} className="space-y-2">
                          <div className="flex items-start gap-2">
                            <Avatar className="h-8 w-8">
                              <AvatarImage
                                src={comment.author.avatar}
                                alt={comment.author.name}
                              />
                              <AvatarFallback>
                                {comment.author.name.charAt(0)}
                              </AvatarFallback>
                            </Avatar>
                            <div className="flex-1 space-y-1">
                              <div className="flex items-center justify-between">
                                <p className="text-sm font-medium">
                                  {comment.author.name}
                                </p>
                                <p className="text-xs text-muted-foreground">
                                  {comment.timeAgo}
                                </p>
                              </div>
                              <p className="text-sm">{comment.text}</p>
                            </div>
                          </div>
                          <div className="ml-10 flex items-center gap-3">
                            <button className="text-xs text-muted-foreground hover:text-foreground">
                              Like ({comment.likes})
                            </button>
                            <button className="text-xs text-muted-foreground hover:text-foreground">
                              Reply
                            </button>
                          </div>
                          <Separator className="mt-2" />
                        </div>
                      ))
                    ) : (
                      <div className="py-8 text-center">
                        <p className="text-muted-foreground">
                          No comments yet. Be the first to comment!
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </TabsContent>

              {/* Citations Tab */}
              <TabsContent
                value="citations"
                className="flex-1 overflow-y-auto"
                style={{ height: "calc(100vh - 180px)" }}
              >
                <div className="space-y-4 py-4">
                  <h3 className="font-medium">Cited References</h3>
                  <div className="space-y-3">
                    {citations.map((citation) => (
                      <div
                        key={citation.id}
                        className="rounded-lg border border-border bg-card p-3 hover:border-primary/50 hover:bg-accent transition-colors"
                      >
                        <h4 className="font-medium text-brand-600">
                          {citation.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {citation.authors}
                        </p>
                        <div className="mt-2 flex items-center justify-between">
                          <p className="text-xs text-muted-foreground">
                            {citation.journal}, {citation.year}
                          </p>
                          <Badge variant="secondary" className="text-xs">
                            DOI: {citation.doi}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </DrawerPortal>
    </Drawer>
  );
};

export default PostInfoDrawer;
