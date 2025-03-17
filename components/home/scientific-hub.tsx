"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Users,
  Video,
  ShoppingCart,
  Zap,
  BookOpen,
  BriefcaseBusiness,
  Sparkles,
  X,
} from "lucide-react";
import MoleculeLink from "@/components/home/molecule-link";

export default function ScientificHub() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [nodePositions, setNodePositions] = useState<{
    [key: string]: { x: number; y: number };
  }>({});
  const [centerPosition, setCenterPosition] = useState<{
    x: number;
    y: number;
  }>({ x: 0, y: 0 });

  // Calculate actual pixel positions for nodes when component mounts or window resizes
  useEffect(() => {
    const calculatePositions = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const containerRect = container.getBoundingClientRect();
      const containerWidth = containerRect.width;
      const containerHeight = containerRect.height;

      // Set center position
      setCenterPosition({
        x: containerWidth / 2,
        y: containerHeight / 2,
      });

      // Calculate positions for each node
      const positions: { [key: string]: { x: number; y: number } } = {};

      hubNodes.forEach((node) => {
        const position = node.position as any;
        let x = 0,
          y = 0;

        // Convert percentage or position strings to actual pixel values
        if (position.left !== undefined) {
          x = (containerWidth * parseFloat(position.left)) / 100;
        } else if (position.right !== undefined) {
          x =
            containerWidth -
            (containerWidth * parseFloat(position.right)) / 100;
        } else {
          x = containerWidth / 2;
        }

        if (position.top !== undefined) {
          y = (containerHeight * parseFloat(position.top)) / 100;
        } else if (position.bottom !== undefined) {
          y =
            containerHeight -
            (containerHeight * parseFloat(position.bottom)) / 100;
        } else {
          y = containerHeight / 2;
        }

        positions[node.id] = { x, y };
      });

      setNodePositions(positions);
    };

    // Calculate on mount and window resize
    calculatePositions();
    window.addEventListener("resize", calculatePositions);

    return () => {
      window.removeEventListener("resize", calculatePositions);
    };
  }, []);

  // Recalculate positions when the component is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const calculatePositions = () => {
            if (!containerRef.current) return;

            const container = containerRef.current;
            const containerRect = container.getBoundingClientRect();
            const containerWidth = containerRect.width;
            const containerHeight = containerRect.height;

            // Set center position
            setCenterPosition({
              x: containerWidth / 2,
              y: containerHeight / 2,
            });

            // Calculate positions for each node
            const positions: { [key: string]: { x: number; y: number } } = {};

            hubNodes.forEach((node) => {
              const position = node.position as any;
              let x = 0,
                y = 0;

              // Convert percentage or position strings to actual pixel values
              if (position.left !== undefined) {
                x = (containerWidth * parseFloat(position.left)) / 100;
              } else if (position.right !== undefined) {
                x =
                  containerWidth -
                  (containerWidth * parseFloat(position.right)) / 100;
              } else {
                x = containerWidth / 2;
              }

              if (position.top !== undefined) {
                y = (containerHeight * parseFloat(position.top)) / 100;
              } else if (position.bottom !== undefined) {
                y =
                  containerHeight -
                  (containerHeight * parseFloat(position.bottom)) / 100;
              } else {
                y = containerHeight / 2;
              }

              positions[node.id] = { x, y };
            });

            setNodePositions(positions);
          };

          calculatePositions();
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  const toggleSection = (section: string) => {
    setActiveSection(activeSection === section ? null : section);
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

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
  };

  // Hub nodes configuration
  const hubNodes = [
    {
      id: "network",
      label: "Network",
      icon: Users,
      color: "text-violet-500",
      position: { left: "20%", top: "15%" },
    },
    {
      id: "conferences",
      label: "Conferences",
      icon: Video,
      color: "text-purple-500",
      position: { right: "20%", top: "15%" },
    },
    {
      id: "marketplace",
      label: "Marketplace",
      icon: ShoppingCart,
      color: "text-green-500",
      position: { left: "5%", top: "50%" },
    },
    {
      id: "ai-tools",
      label: "AI Tools",
      icon: Zap,
      color: "text-amber-500",
      position: { right: "5%", top: "50%" },
    },
    {
      id: "publications",
      label: "Publications",
      icon: BookOpen,
      color: "text-red-500",
      position: { left: "20%", bottom: "15%" },
    },
    {
      id: "jobs",
      label: "Jobs",
      icon: BriefcaseBusiness,
      color: "text-cyan-500",
      position: { right: "20%", bottom: "15%" },
    },
  ];

  return (
    <>
      {/* Hexagonal Hub Navigation with improved spacing and molecule links */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="flex justify-center mb-8 overflow-hidden"
      >
        <div
          ref={containerRef}
          className="relative w-full max-w-4xl h-[350px] flex items-center justify-center"
        >
          {/* Molecule links between nodes - always visible */}
          {Object.keys(nodePositions).length > 0 &&
            hubNodes.map((node) => (
              <MoleculeLink
                key={`link-${node.id}`}
                isActive={activeSection === node.id}
                startPosition={centerPosition}
                endPosition={nodePositions[node.id]}
              />
            ))}

          {/* Center hub */}
          <motion.div variants={itemVariants} className="absolute z-10">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-br from-violet-600 to-violet-800 text-white rounded-full w-32 h-32 flex flex-col items-center justify-center shadow-lg shadow-violet-200 dark:shadow-violet-900/30 cursor-pointer"
            >
              <Sparkles className="h-8 w-8 mb-1" />
              <span className="text-sm font-medium">Scientific Hub</span>
            </motion.div>
          </motion.div>

          {/* Spokes with improved spacing and reduced size */}
          {hubNodes.map((node) => {
            const NodeIcon = node.icon;
            return (
              <motion.div
                key={node.id}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => toggleSection(node.id)}
                className="absolute cursor-pointer z-20"
                style={node.position as any}
              >
                <Link href={`/${node.id}`}>
                  <div
                    className={`bg-white dark:bg-slate-800 rounded-full h-24 w-24 flex flex-col items-center justify-center shadow-md transition-all ${
                      activeSection === node.id
                        ? "ring-4 ring-violet-400 scale-105"
                        : "border border-violet-100 dark:border-violet-800"
                    }`}
                  >
                    <NodeIcon className={`h-7 w-7 mb-1 ${node.color}`} />
                    <span className="text-xs font-medium">{node.label}</span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Section Content */}
      <AnimatePresence>
        {activeSection && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mb-8 overflow-hidden"
          >
            <Card className="border-violet-200 dark:border-violet-800 overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-violet-100 to-violet-50 dark:from-violet-900/30 dark:to-violet-900/10 flex flex-row items-center justify-between">
                <CardTitle className="text-lg font-medium">
                  {activeSection === "network" && "Your Scientific Network"}
                  {activeSection === "conferences" && "Upcoming Conferences"}
                  {activeSection === "marketplace" && "Research Marketplace"}
                  {activeSection === "ai-tools" && "AI Research Tools"}
                  {activeSection === "publications" && "Recent Publications"}
                  {activeSection === "jobs" && "Career Opportunities"}
                </CardTitle>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setActiveSection(null)}
                  className="h-8 w-8 rounded-full"
                >
                  <X className="h-4 w-4" />
                </Button>
              </CardHeader>
              <CardContent className="p-4">
                {activeSection === "network" && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Card className="border-violet-100 dark:border-violet-800">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">
                          Connect with Peers
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-4">
                          Find and connect with researchers in your field
                        </p>
                        <Button className="w-full bg-violet-600 hover:bg-violet-700">
                          Find Connections
                        </Button>
                      </CardContent>
                    </Card>
                    <Card className="border-violet-100 dark:border-violet-800">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">
                          Research Groups
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-4">
                          Join specialized research groups and collaborations
                        </p>
                        <Button className="w-full bg-violet-600 hover:bg-violet-700">
                          Explore Groups
                        </Button>
                      </CardContent>
                    </Card>
                    <Card className="border-violet-100 dark:border-violet-800">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">Messages</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-4">
                          Connect directly with colleagues and collaborators
                        </p>
                        <Button className="w-full bg-violet-600 hover:bg-violet-700">
                          Open Messages
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                )}

                {activeSection === "conferences" && (
                  <div className="flex flex-col items-center justify-center py-4">
                    <p className="text-center mb-4">
                      View the full conferences page for more details
                    </p>
                    <Button
                      asChild
                      className="bg-violet-600 hover:bg-violet-700"
                    >
                      <Link href="/conferences">Go to Conferences</Link>
                    </Button>
                  </div>
                )}

                {activeSection !== "network" &&
                  activeSection !== "conferences" && (
                    <div className="flex flex-col items-center justify-center py-4">
                      <p className="text-center mb-4">
                        View the full {activeSection} page for more details
                      </p>
                      <Button
                        asChild
                        className="bg-violet-600 hover:bg-violet-700"
                      >
                        <Link href={`/${activeSection}`}>
                          Go to{" "}
                          {activeSection.charAt(0).toUpperCase() +
                            activeSection.slice(1)}
                        </Link>
                      </Button>
                    </div>
                  )}
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
