"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { Search, Users, Calendar, ShoppingCart, Bell, Beaker } from "lucide-react"
import Link from "next/link"
import NotificationsPanel from "@/components/layout/notifications-panel"

export default function Header() {
  const [showNotifications, setShowNotifications] = useState(false)
  const [notificationCount, setNotificationCount] = useState(3)

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications)
    if (showNotifications === false) {
      setNotificationCount(0)
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 dark:bg-slate-950/80 backdrop-blur-sm border-b border-violet-100 dark:border-violet-900/20">
      <div className="container flex items-center justify-between h-16 px-4">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <Beaker className="h-6 w-6 text-violet-600" />
            <h1 className="text-xl font-bold bg-gradient-to-r from-violet-700 to-violet-500 text-transparent bg-clip-text">
              DrugBoard
            </h1>
          </Link>
        </div>

        <div className="relative w-1/3">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search research, scientists, or products..."
            className="w-full rounded-full bg-slate-100 dark:bg-slate-800 pl-8 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
        </div>

        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="hover:bg-violet-50 hover:text-violet-700 dark:hover:bg-violet-900/20 dark:hover:text-violet-300"
            asChild
          >
            <Link href="/network">
              <Users className="h-5 w-5" />
            </Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="hover:bg-violet-50 hover:text-violet-700 dark:hover:bg-violet-900/20 dark:hover:text-violet-300"
            asChild
          >
            <Link href="/conferences">
              <Calendar className="h-5 w-5" />
            </Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="hover:bg-violet-50 hover:text-violet-700 dark:hover:bg-violet-900/20 dark:hover:text-violet-300"
            asChild
          >
            <Link href="/marketplace">
              <ShoppingCart className="h-5 w-5" />
            </Link>
          </Button>

          {/* Notification Button */}
          <div className="relative">
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-violet-50 hover:text-violet-700 dark:hover:bg-violet-900/20 dark:hover:text-violet-300"
              onClick={toggleNotifications}
            >
              <Bell className="h-5 w-5" />
              {notificationCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute top-0 right-0 h-4 w-4 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center"
                >
                  {notificationCount}
                </motion.span>
              )}
            </Button>

            {/* Notifications Panel */}
            <AnimatePresence>
              {showNotifications && <NotificationsPanel onClose={toggleNotifications} />}
            </AnimatePresence>
          </div>

          <Link href="/profile">
            <Avatar>
              <AvatarImage src="/placeholder.svg?height=40&width=40" />
              <AvatarFallback className="bg-violet-100 text-violet-700 dark:bg-violet-900 dark:text-violet-300">
                SC
              </AvatarFallback>
            </Avatar>
          </Link>
        </div>
      </div>
    </header>
  )
}

