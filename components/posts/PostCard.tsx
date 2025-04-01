import React, { useState, useRef } from "react";
import {
  Heart,
  MessageCircle,
  Share2,
  Info,
  MoreHorizontal,
  ThumbsUp,
  ThumbsDown,
  Smile,
  Link2,
  Award,
  Star,
  Zap,
  ArrowUpRight,
  Sparkles,
  Lightbulb,
} from "lucide-react";
import { Badge } from "../ui/badge";
import { Card, CardContent } from "../ui/card";
import PostInfoDrawer from "./PostInfoDrawer";

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

interface EmojiReaction {
  id: string;
  icon: string;
  label: string;
  color: string;
}

interface IconReaction {
  icon: React.ElementType;
  label: string;
  color: string;
}

interface PostCardProps {
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

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const [liked, setLiked] = useState(false);
  const [showInfoDrawer, setShowInfoDrawer] = useState(false);
  const [showReactions, setShowReactions] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState<Comment[]>(post.comments || []);
  const [selectedReaction, setSelectedReaction] =
    useState<EmojiReaction | null>(null);
  const commentInputRef = useRef<HTMLInputElement>(null);

  const handleLike = () => {
    if (!liked) {
      setLiked(true);
      setSelectedReaction(emojiReactions[0]);
    } else {
      setLiked(false);
      setSelectedReaction(null);
    }
  };

  const handleInfoClick = () => {
    setShowInfoDrawer(true);
  };

  const handleCommentClick = () => {
    setShowComments(!showComments);
    if (!showComments && commentInputRef.current) {
      setTimeout(() => {
        commentInputRef.current?.focus();
      }, 100);
    }
  };

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

  const handleReactionSelect = (reaction: EmojiReaction) => {
    setSelectedReaction(reaction);
    setLiked(true);
    setShowReactions(false);
  };

  const emojiReactions: EmojiReaction[] = [
    { id: "like", icon: "👍", label: "Like", color: "text-blue-500" },
    { id: "love", icon: "❤️", label: "Love", color: "text-red-500" },
    { id: "haha", icon: "😂", label: "Haha", color: "text-yellow-500" },
    { id: "wow", icon: "😮", label: "Wow", color: "text-yellow-500" },
    { id: "sad", icon: "😢", label: "Sad", color: "text-purple-500" },
  ];

  const reactions: IconReaction[] = [
    { icon: Sparkles, label: "Brilliant", color: "text-amber-500" },
    { icon: Lightbulb, label: "Insightful", color: "text-blue-500" },
    { icon: Star, label: "Important", color: "text-purple-500" },
    { icon: Zap, label: "Innovative", color: "text-emerald-500" },
  ];

  // Determine card variant based on post ID for visual variety
  const cardVariant =
    post.id === "1"
      ? "card-variant-1"
      : post.id === "2"
      ? "card-variant-2"
      : "card-variant-3";

  return (
    <>
      <Card
        className={`overflow-visible card-3d ${cardVariant} backdrop-blur-sm bg-white/90 dark:bg-gray-900/90 shadow-elevated border-border/50`}
      >
        <CardContent className="p-0">
          {/* Author Bar */}
          <div className="p-4 flex justify-between items-start">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-brand-200 dark:border-brand-800">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-white dark:border-gray-900"></span>
              </div>
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
                <p className="text-xs text-muted-foreground">{post.timeAgo}</p>
              </div>
            </div>
            <button className="text-muted-foreground hover:text-foreground transition-colors p-1.5 rounded-full hover:bg-secondary">
              <MoreHorizontal size={18} />
            </button>
          </div>

          {/* Content Section */}
          <div className="px-4 pb-4">
            <p className="text-foreground leading-relaxed">{post.content}</p>
          </div>

          {/* Image Section with Gradient Overlay */}
          {post.image && (
            <div className="relative overflow-hidden mb-4">
              <div className="aspect-[16/9]">
                <img
                  src={post.image}
                  alt="Post content"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
              <div className="absolute bottom-3 right-3">
                <Badge className="bg-black/50 hover:bg-black/70 text-white backdrop-blur-sm">
                  <ArrowUpRight className="mr-1 h-3 w-3" />
                  View Research
                </Badge>
              </div>
            </div>
          )}

          {/* Engagement Metrics */}
          <div className="px-4 py-2 flex items-center justify-between border-t border-border">
            <div className="flex items-center gap-3">
              <div className="flex items-center -space-x-1">
                <div className="w-5 h-5 rounded-full border border-white dark:border-gray-900 bg-brand-500 flex items-center justify-center text-[10px] text-white">
                  <Heart size={10} fill="currentColor" />
                </div>
                <div className="w-5 h-5 rounded-full border border-white dark:border-gray-900 bg-blue-500 flex items-center justify-center text-[10px] text-white">
                  <ThumbsUp size={10} fill="currentColor" />
                </div>
                <div className="w-5 h-5 rounded-full border border-white dark:border-gray-900 bg-purple-500 flex items-center justify-center text-[10px] text-white">
                  <Star size={10} fill="currentColor" />
                </div>
              </div>
              <span className="text-xs text-muted-foreground">
                {post.likes} reactions
              </span>
            </div>
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <span>{comments.length} comments</span>
              <span>3 shares</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-4 px-1 py-1 border-t border-border bg-secondary/30">
            <div className="relative">
              <button
                className={`flex items-center justify-center gap-1.5 py-2 rounded-lg transition-colors w-full ${
                  liked
                    ? selectedReaction?.color || "text-brand-600"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
                onMouseEnter={() => setShowReactions(true)}
                onMouseLeave={() => setShowReactions(false)}
                onClick={handleLike}
              >
                {selectedReaction ? (
                  <span className="text-lg leading-none mr-1">
                    {selectedReaction.icon}
                  </span>
                ) : (
                  <Heart size={16} className={liked ? "fill-brand-600" : ""} />
                )}
                <span className="text-xs font-medium">
                  {selectedReaction?.label || "Like"}
                </span>
              </button>

              {/* Emoji Reactions */}
              {showReactions && (
                <div
                  className="absolute -top-12 left-1/2 transform -translate-x-1/2 flex items-center gap-1 p-1.5 bg-white dark:bg-gray-800 rounded-full shadow-lg animate-scale-in z-10 border border-gray-200 dark:border-gray-700"
                  onMouseEnter={() => setShowReactions(true)}
                  onMouseLeave={() => setShowReactions(false)}
                >
                  {emojiReactions.map((reaction, index) => (
                    <button
                      key={reaction.id}
                      className="reaction-btn p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-all h-9 w-9 flex items-center justify-center"
                      onClick={() => handleReactionSelect(reaction)}
                      title={reaction.label}
                      style={{
                        animationDelay: `${index * 0.05}s`,
                        animation: "scale-in 0.2s ease-out forwards",
                        opacity: 0,
                      }}
                    >
                      <span className="text-lg leading-none">
                        {reaction.icon}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              className="flex items-center justify-center gap-1.5 py-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
              onClick={handleCommentClick}
            >
              <MessageCircle size={16} />
              <span className="text-xs font-medium">Comment</span>
            </button>

            {/* <button className="flex items-center justify-center gap-1.5 py-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors">
              <Share2 size={16} />
              <span className="text-xs font-medium">Share</span>
            </button> */}

            <button
              className="flex items-center justify-center gap-1.5 py-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
              onClick={handleInfoClick}
            >
              <Info size={16} />
              <span className="text-xs font-medium">Info</span>
            </button>
          </div>

          {/* Comments Section - Moved outside the main content flow */}
          {showComments && (
            <div className="px-4 py-3 border-t border-border animate-slide-up bg-secondary/20">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-8 h-8 rounded-full overflow-hidden">
                  <img
                    src="https://i.pravatar.cc/100?img=11"
                    alt="Your avatar"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 relative">
                  <input
                    ref={commentInputRef}
                    type="text"
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                    placeholder="Share your thoughts..."
                    className="w-full px-3 py-2 bg-secondary dark:bg-gray-800 rounded-full border-0 focus:ring-1 focus:ring-brand-400 text-sm"
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        handleAddComment();
                      }
                    }}
                  />
                  {commentText && (
                    <button
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-brand-600 hover:text-brand-700"
                      onClick={handleAddComment}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-send"
                      >
                        <path d="m22 2-7 20-4-9-9-4Z" />
                        <path d="M22 2 11 13" />
                      </svg>
                    </button>
                  )}
                </div>
              </div>

              {/* Comment List */}
              <div className="space-y-3 pl-11">
                {comments.map((comment) => (
                  <div key={comment.id} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full overflow-hidden">
                      <img
                        src={comment.author.avatar}
                        alt={comment.author.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="bg-white dark:bg-gray-800 px-3 py-2 rounded-xl inline-block shadow-sm border border-border/40">
                        <p className="text-sm font-medium">
                          {comment.author.name}
                        </p>
                        <p className="text-sm">{comment.text}</p>
                      </div>
                      <div className="flex items-center gap-3 mt-1 text-xs text-muted-foreground">
                        <button className="hover:text-foreground">Like</button>
                        <button className="hover:text-foreground">Reply</button>
                        <span>{comment.timeAgo}</span>
                      </div>
                    </div>
                  </div>
                ))}

                {comments.length === 0 && (
                  <div className="text-center py-2 text-sm text-muted-foreground">
                    Be the first to comment on this post!
                  </div>
                )}
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      <PostInfoDrawer
        open={showInfoDrawer}
        onOpenChange={setShowInfoDrawer}
        post={post}
      />
    </>
  );
};

export default PostCard;
