"use client"

import { motion } from "framer-motion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { X, Clock, MessageCircle, Heart, UserPlus, FileText, Bell } from "lucide-react"

interface NotificationsPanelProps {
  onClose: () => void
}

export default function NotificationsPanel({ onClose }: NotificationsPanelProps) {
  // Dummy data for notifications
  const notifications = [
    {
      id: 1,
      type: "mention",
      user: "Dr. Emily Chen",
      avatar: "/placeholder.svg?height=40&width=40&text=EC",
      content: 'mentioned you in a comment on "Novel Drug Delivery Methods"',
      time: "5 minutes ago",
      unread: true,
    },
    {
      id: 2,
      type: "like",
      user: "Prof. Michael Johnson",
      avatar: "/placeholder.svg?height=40&width=40&text=MJ",
      content: "liked your post about nanomaterial research",
      time: "2 hours ago",
      unread: true,
    },
    {
      id: 3,
      type: "comment",
      user: "Dr. Sarah Williams",
      avatar: "/placeholder.svg?height=40&width=40&text=SW",
      content: "commented on your research findings",
      time: "1 day ago",
      unread: true,
    },
    {
      id: 4,
      type: "connection",
      user: "Dr. Robert Lee",
      avatar: "/placeholder.svg?height=40&width=40&text=RL",
      content: "requested to connect with you",
      time: "2 days ago",
      unread: false,
    },
    {
      id: 5,
      type: "publication",
      user: "Nature Journal",
      avatar: "/placeholder.svg?height=40&width=40&text=NJ",
      content: 'published your article "Advances in Protein Folding"',
      time: "1 week ago",
      unread: false,
    },
  ]

  const notificationVariants = {
    hidden: { opacity: 0, y: -20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 500, damping: 30 },
    },
    exit: {
      opacity: 0,
      y: -20,
      scale: 0.95,
      transition: { duration: 0.2 },
    },
  }

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "mention":
        return <MessageCircle className="h-4 w-4 text-blue-500" />
      case "like":
        return <Heart className="h-4 w-4 text-red-500" />
      case "comment":
        return <MessageCircle className="h-4 w-4 text-green-500" />
      case "connection":
        return <UserPlus className="h-4 w-4 text-violet-500" />
      case "publication":
        return <FileText className="h-4 w-4 text-amber-500" />
      default:
        return <Bell className="h-4 w-4 text-gray-500" />
    }
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={notificationVariants}
      className="absolute right-0 mt-2 w-80 bg-white dark:bg-slate-900 rounded-lg shadow-lg border border-violet-100 dark:border-violet-800 overflow-hidden z-50"
    >
      <div className="flex items-center justify-between p-3 border-b border-violet-100 dark:border-violet-800">
        <h3 className="font-semibold text-violet-800 dark:text-violet-300">Notifications</h3>
        <Button variant="ghost" size="sm" onClick={onClose} className="h-8 w-8 p-0">
          <X className="h-4 w-4" />
        </Button>
      </div>
      <ScrollArea className="h-[350px]">
        <div className="p-2">
          {notifications.map((notification) => (
            <motion.div
              key={notification.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className={`p-3 mb-1 rounded-md hover:bg-violet-50 dark:hover:bg-violet-900/20 transition-colors ${notification.unread ? "bg-violet-50/50 dark:bg-violet-900/10" : ""}`}
            >
              <div className="flex gap-3">
                <div className="relative">
                  <Avatar className="h-10 w-10 border border-violet-200">
                    <AvatarImage src={notification.avatar} />
                    <AvatarFallback className="bg-violet-100 text-violet-700">
                      {notification.user.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="absolute -bottom-1 -right-1 bg-white dark:bg-slate-800 rounded-full p-0.5">
                    {getNotificationIcon(notification.type)}
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-sm">
                    <span className="font-medium">{notification.user}</span> {notification.content}
                  </p>
                  <div className="flex items-center mt-1 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3 mr-1" />
                    {notification.time}
                  </div>
                </div>
                {notification.unread && <div className="h-2 w-2 rounded-full bg-violet-500 self-start mt-2"></div>}
              </div>
            </motion.div>
          ))}
        </div>
      </ScrollArea>
      <div className="p-3 border-t border-violet-100 dark:border-violet-800">
        <Button
          variant="ghost"
          size="sm"
          className="w-full text-violet-600 hover:text-violet-700 hover:bg-violet-50 dark:text-violet-300 dark:hover:bg-violet-900/20"
        >
          View All Notifications
        </Button>
      </div>
    </motion.div>
  )
}

