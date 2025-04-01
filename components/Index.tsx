import React, { useEffect, useState, useRef } from "react";
import CreatePost from "@/components/posts/CreatePost";
import PostCard from "@/components/posts/PostCard";
import ResearchHighlights from "@/components/home/ResearchHighlights";
import UpcomingConferences from "@/components/home/UpcomingConferences";
import NetworkSuggestions from "@/components/home/NetworkSuggestions";
import MarketplaceHighlights from "@/components/home/MarketplaceHighlights";
import CollaborationSuggestions from "@/components/home/CollaborationSuggestions";
import AIFeatures from "@/components/home/AIFeatures";
import { useToast } from "@/hooks/use-toast";
import { Badge } from "@/components/ui/badge";
import {
  BrainCircuit,
  Calendar,
  Microscope,
  ShoppingCart,
  UserCircle,
  Users,
  Info,
} from "lucide-react";
import PostInfoDrawer from "@/components/posts/PostInfoDrawer";

const Index = () => {
  const { toast } = useToast();
  const carouselRef = useRef(null);

  useEffect(() => {
    // Welcome toast on first load
    const hasSeenWelcome = localStorage.getItem("hasSeenWelcome");
    if (!hasSeenWelcome) {
      setTimeout(() => {
        toast({
          title: "Welcome to DrugBoard",
          description:
            "Your scientific networking platform is ready to explore.",
        });
        localStorage.setItem("hasSeenWelcome", "true");
      }, 1000);
    }
  }, [toast]);

  // Auto-scroll carousel
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let scrollAmount = 0;
    const scrollStep = 2;
    const scrollDelay = 15;
    let scrollInterval;

    const startScrolling = () => {
      scrollInterval = setInterval(() => {
        carousel.scrollLeft += scrollStep;
        scrollAmount += scrollStep;

        // Reset when we reach the end
        if (scrollAmount >= carousel.scrollWidth / 2) {
          carousel.scrollLeft = 0;
          scrollAmount = 0;
        }
      }, scrollDelay);
    };

    const stopScrolling = () => {
      clearInterval(scrollInterval);
    };

    // Start scrolling
    startScrolling();

    // Pause on hover or touch
    carousel.addEventListener("mouseenter", stopScrolling);
    carousel.addEventListener("mouseleave", startScrolling);
    carousel.addEventListener("touchstart", stopScrolling);
    carousel.addEventListener("touchend", startScrolling);

    return () => {
      stopScrolling();
      carousel.removeEventListener("mouseenter", stopScrolling);
      carousel.removeEventListener("mouseleave", startScrolling);
      carousel.removeEventListener("touchstart", stopScrolling);
      carousel.removeEventListener("touchend", startScrolling);
    };
  }, []);

  const samplePosts = [
    {
      id: "1",
      author: {
        name: "Dr. Emily Chen",
        avatar: "https://i.pravatar.cc/100?img=5",
        role: "Research Scientist",
      },
      content:
        "Just published our latest findings on targeted drug delivery using modified liposomes. The results show a 40% improvement in efficacy compared to conventional methods. Read the full paper in Journal of Controlled Release!",
      image:
        "https://plus.unsplash.com/premium_photo-1670981099497-078707655bd4?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWVkaWNhdGlvbnN8ZW58MHx8MHx8fDA%3D",
      likes: 45,
      comments: [
        {
          id: "1-1",
          author: {
            name: "James Wilson",
            avatar: "https://i.pravatar.cc/100?img=5",
          },
          text: "Fascinating findings! Have you considered the implications for drug delivery systems?",
          timeAgo: "2h",
          likes: 3,
        },
        {
          id: "1-2",
          author: {
            name: "Dr. Sarah Johnson",
            avatar: "https://i.pravatar.cc/100?img=9",
          },
          text: "Great work! Would love to discuss potential collaboration on extending this to neurological applications.",
          timeAgo: "1h",
          likes: 2,
        },
      ],
      timeAgo: "2 hours ago",
    },
    {
      id: "2",
      author: {
        name: "Prof. James Wilson",
        avatar: "https://i.pravatar.cc/100?img=3",
        role: "Professor",
      },
      content:
        "Looking for collaborators on our new project exploring novel antibiotics from marine organisms. We have funding for two postdocs and lab equipment. DM if interested!",
      likes: 32,
      comments: [
        {
          id: "2-1",
          author: {
            name: "Dr. Michael Lee",
            avatar: "https://i.pravatar.cc/100?img=12",
          },
          text: "I have experience with marine bioprospecting. Would love to discuss further!",
          timeAgo: "3h",
          likes: 1,
        },
      ],
      timeAgo: "5 hours ago",
    },
    {
      id: "3",
      author: {
        name: "BioTech Conference",
        avatar: "https://i.pravatar.cc/100?img=8",
        role: "Official",
      },
      content:
        'Registration for the International Biotech Summit 2023 is now open! Early bird tickets available until June 1st. This year\'s theme: "Innovation at the Intersection of Biology and Technology"',
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      likes: 78,
      comments: [
        {
          id: "3-1",
          author: {
            name: "Dr. Emily Chen",
            avatar: "https://i.pravatar.cc/100?img=5",
          },
          text: "Will there be a session on drug delivery systems?",
          timeAgo: "12h",
          likes: 4,
        },
        {
          id: "3-2",
          author: {
            name: "Prof. James Wilson",
            avatar: "https://i.pravatar.cc/100?img=3",
          },
          text: "Looking forward to presenting our research at the conference!",
          timeAgo: "8h",
          likes: 5,
        },
        {
          id: "3-3",
          author: {
            name: "Dr. Lisa Rodriguez",
            avatar: "https://i.pravatar.cc/100?img=10",
          },
          text: "Are there any networking events planned for early career researchers?",
          timeAgo: "4h",
          likes: 2,
        },
      ],
      timeAgo: "1 day ago",
    },
  ];

  return (
    <div className="min-h-screen relative px-2 py-4 md:px-4">
      {/* Main Content Grid */}
      <div className="grid grid-cols-12 gap-4">
        {/* Left Column: Create Post & Feed */}
        <div className="col-span-12 lg:col-span-8 space-y-4">
          {/* Content Creation Card */}
          <div className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-lg rounded-2xl shadow-elevated overflow-hidden border border-white/20 dark:border-gray-800/30">
            <CreatePost />
          </div>

          {/* Content Categories */}
          <div className="flex overflow-x-auto gap-2 pb-2 scrollbar-none">
            {[
              { name: "For You", color: "violet" },
              { name: "Popular", color: "blue" },
              { name: "Following", color: "emerald" },
              { name: "Conferences", color: "amber" },
              { name: "Marketplace", color: "pink" },
            ].map((category, idx) => (
              <Badge
                key={idx}
                variant="secondary"
                className={`
        py-1.5 px-3 text-xs font-medium whitespace-nowrap cursor-pointer transition-all duration-200
        ${
          idx === 0
            ? `
          bg-${category.color}-500 hover:bg-${category.color}-600 text-white
        `
            : `
          bg-${category.color}-50 dark:bg-${category.color}-900/10
          text-${category.color}-700 dark:text-${category.color}-300
          hover:bg-${category.color}-100 dark:hover:bg-${category.color}-900/20
          border border-${category.color}-200/50 dark:border-${category.color}-800/50
        `
        }
      `}
              >
                {category.name}
              </Badge>
            ))}
          </div>

          {/* Featured Content Carousel */}
          <div className="relative rounded-2xl overflow-hidden h-60 bg-gradient-to-r from-brand-100 to-purple-100 dark:from-brand-900/30 dark:to-purple-900/30 p-0.5">
            <div className="absolute inset-0 overflow-hidden rounded-2xl">
              <div ref={carouselRef} className="simple-carousel">
                {samplePosts.map((post, idx) => (
                  <div key={`feature-${idx}`} className="simple-carousel-item">
                    <div className="h-full rounded-xl overflow-hidden bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border border-white/20 dark:border-gray-800/30 shadow-md flex flex-col">
                      {post.image && (
                        <div className="h-1/2 overflow-hidden">
                          <img
                            src={post.image}
                            alt="Post"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                      <div className="p-3 flex-1 flex flex-col">
                        <div className="flex items-center gap-2 mb-2">
                          <img
                            src={post.author.avatar}
                            alt={post.author.name}
                            className="w-7 h-7 rounded-full border-2 border-white"
                          />
                          <div>
                            <p className="text-sm font-semibold line-clamp-1">
                              {post.author.name}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {post.timeAgo}
                            </p>
                          </div>
                        </div>
                        <p className="text-xs line-clamp-3 flex-1">
                          {post.content}
                        </p>
                        <div className="flex justify-between items-center mt-2 text-xs text-muted-foreground">
                          <span>{post.likes} likes</span>
                          <span>{post.comments.length} comments</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Duplicate posts for seamless scrolling */}
                {samplePosts.map((post, idx) => (
                  <div
                    key={`feature-duplicate-${idx}`}
                    className="simple-carousel-item"
                  >
                    <div className="h-full rounded-xl overflow-hidden bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border border-white/20 dark:border-gray-800/30 shadow-md flex flex-col">
                      {post.image && (
                        <div className="h-1/2 overflow-hidden">
                          <img
                            src={post.image}
                            alt="Post"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                      <div className="p-3 flex-1 flex flex-col">
                        <div className="flex items-center gap-2 mb-2">
                          <img
                            src={post.author.avatar}
                            alt={post.author.name}
                            className="w-7 h-7 rounded-full border-2 border-white"
                          />
                          <div>
                            <p className="text-sm font-semibold line-clamp-1">
                              {post.author.name}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {post.timeAgo}
                            </p>
                          </div>
                        </div>
                        <p className="text-xs line-clamp-3 flex-1">
                          {post.content}
                        </p>
                        <div className="flex justify-between items-center mt-2 text-xs text-muted-foreground">
                          <span>{post.likes} likes</span>
                          <span>{post.comments.length} comments</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Post Feed */}
          <div className="space-y-4">
            {samplePosts.map((post) => (
              <PostCardRevamped key={post.id} post={post} />
            ))}
          </div>
        </div>

        {/* Right Column: Widgets Grid */}
        <div className="col-span-12 lg:col-span-4 grid grid-cols-1 gap-4">
          <div className="widget-card bg-gradient-to-br from-brand-50 to-blue-50 dark:from-brand-900/20 dark:to-blue-900/20 rounded-2xl overflow-hidden border border-brand-100/50 dark:border-brand-800/20 shadow-elevated">
            <NetworkSuggestions />
            {/* <NotificationPanel /> */}
            {/* <UserProfile /> */}
          </div>

          <div className="widget-card bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-2xl overflow-hidden border border-blue-100/50 dark:border-blue-800/20 shadow-elevated">
            <ResearchHighlights />
          </div>

          <div className="widget-grid grid grid-cols-1 gap-4">
            <div className="widget-card bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 rounded-2xl overflow-hidden border border-purple-100/50 dark:border-purple-800/20 shadow-elevated">
              <AIFeatures />
            </div>

            <div className="widget-card bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-2xl overflow-hidden border border-emerald-100/50 dark:border-emerald-800/20 shadow-elevated">
              <UpcomingConferences />
            </div>
          </div>

          <div className="widget-card bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-2xl overflow-hidden border border-amber-100/50 dark:border-amber-800/20 shadow-elevated">
            <MarketplaceHighlights />
          </div>

          <div className="widget-card bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20 rounded-2xl overflow-hidden border border-pink-100/50 dark:border-pink-800/20 shadow-elevated">
            <CollaborationSuggestions />
          </div>
        </div>
      </div>
    </div>
  );
};

// Custom PostCard component with a more unique design
const PostCardRevamped = ({ post }) => {
  const [showComments, setShowComments] = useState(false);
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState(post.comments || []);
  const [liked, setLiked] = useState(false);
  const [showReactions, setShowReactions] = useState(false);
  const [selectedReaction, setSelectedReaction] = useState(null);
  const [showInfoDrawer, setShowInfoDrawer] = useState(false);
  const commentInputRef = useRef(null);

  interface Reaction {
    id: string;
    icon: string;
    label: string;
    color: string;
  }

  const reactions: Reaction[] = [
    { id: "like", icon: "👍", label: "Like", color: "text-blue-500" },
    { id: "love", icon: "❤️", label: "Love", color: "text-red-500" },
    { id: "haha", icon: "😂", label: "Haha", color: "text-yellow-500" },
    { id: "wow", icon: "😮", label: "Wow", color: "text-yellow-500" },
    { id: "sad", icon: "😢", label: "Sad", color: "text-purple-500" },
  ];

  const handleAddComment = () => {
    if (commentText.trim()) {
      const newComment = {
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

  const handleCommentClick = () => {
    setShowComments(!showComments);
    if (!showComments && commentInputRef.current) {
      setTimeout(() => {
        commentInputRef.current?.focus();
      }, 100);
    }
  };

  const handleReactionSelect = (reaction: Reaction) => {
    setSelectedReaction(reaction);
    setLiked(true);
    setShowReactions(false);
  };

  const handleInfoClick = () => {
    setShowInfoDrawer(true);
  };

  return (
    <>
      <div
        className={`post-card-revamped bg-white/80 dark:bg-gray-900/80 backdrop-blur-md rounded-2xl shadow-elevated overflow-hidden border ${
          showInfoDrawer
            ? "border-2 border-violet-900"
            : "border-white/30 dark:border-gray-800/30"
        } transform transition-all duration-300 hover:shadow-lg hover:scale-[1.01]`}
      >
        <div className="flex flex-col md:flex-row">
          {post.image && (
            <div className="w-full md:w-2/5 h-48 md:h-auto overflow-hidden relative">
              <div className="md:absolute inset-0">
                <img
                  src={post.image}
                  alt="Post"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
            </div>
          )}

          <div className={`flex-1 p-4 md:p-5 ${!post.image ? "w-full" : ""}`}>
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="rounded-full overflow-hidden ring-2 ring-brand-200 dark:ring-brand-800 w-12 h-12">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">
                    {post.author.name}
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="text-xs px-2 py-0.5 bg-brand-100 dark:bg-brand-900/30 text-brand-700 dark:text-brand-300 rounded-full">
                      {post.author.role}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {post.timeAgo}
                    </span>
                  </div>
                </div>
              </div>

              <div
                className="info-btn p-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer"
                onClick={handleInfoClick}
              >
                <Info
                  size={20}
                  className="text-gray-500 hover:text-brand-500"
                />
              </div>
            </div>

            <div className="post-content mb-4">
              <p className="text-foreground">{post.content}</p>
            </div>

            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div
                    className={`flex items-center gap-1 like-btn group cursor-pointer ${
                      liked
                        ? "text-" + (selectedReaction?.color || "blue-500")
                        : ""
                    }`}
                    onMouseEnter={() => setShowReactions(true)}
                    onMouseLeave={() => setShowReactions(false)}
                    onClick={() => {
                      if (!liked) {
                        setLiked(true);
                        setSelectedReaction(reactions[0]);
                      } else {
                        setLiked(false);
                        setSelectedReaction(null);
                      }
                    }}
                  >
                    <div
                      className={`p-1.5 rounded-full group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20 ${
                        liked
                          ? selectedReaction?.color || "text-blue-500"
                          : "text-gray-500"
                      } group-hover:text-blue-500 transition-colors h-[28px] w-[28px] flex items-center justify-center`}
                    >
                      {selectedReaction ? (
                        <span className="text-lg leading-none">
                          {selectedReaction.icon}
                        </span>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill={liked ? "currentColor" : "none"}
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                        </svg>
                      )}
                    </div>
                    <span className="text-sm text-muted-foreground group-hover:text-blue-500">
                      {liked ? selectedReaction?.label || "Like" : "Like"}
                    </span>
                  </div>

                  {/* Reaction Selector */}
                  {showReactions && (
                    <div
                      className="absolute -top-12 left-0 flex items-center gap-1 p-1.5 bg-white dark:bg-gray-800 rounded-full shadow-lg animate-scale-in z-10 border border-gray-200 dark:border-gray-700"
                      onMouseEnter={() => setShowReactions(true)}
                      onMouseLeave={() => setShowReactions(false)}
                    >
                      {reactions.map((reaction, index) => (
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

                <div
                  className="flex items-center gap-1 comment-btn group"
                  onClick={handleCommentClick}
                >
                  <div className="p-1.5 rounded-full group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20 text-gray-500 group-hover:text-blue-500 transition-colors">
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
                    >
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    </svg>
                  </div>
                  <span className="text-sm text-muted-foreground group-hover:text-blue-500">
                    {comments.length}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-1 share-btn group">
                <div className="p-1.5 rounded-full group-hover:bg-brand-50 dark:group-hover:bg-brand-900/20 text-gray-500 group-hover:text-brand-500 transition-colors">
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
                  >
                    <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
                    <polyline points="16 6 12 2 8 6"></polyline>
                    <line x1="12" y1="2" x2="12" y2="15"></line>
                  </svg>
                </div>
                <span className="text-sm text-muted-foreground">Share</span>
              </div>
            </div>
          </div>
        </div>

        {/* Comments Section - Moved outside the flex container */}
        {showComments && (
          <div className="px-4 py-3 border-t border-gray-200 dark:border-gray-700 animate-slide-up bg-secondary/20">
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
      </div>

      <PostInfoDrawer
        open={showInfoDrawer}
        onOpenChange={setShowInfoDrawer}
        post={post}
      />
    </>
  );
};

export default Index;
