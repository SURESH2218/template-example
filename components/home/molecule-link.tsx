"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface MoleculeLinkProps {
  isActive: boolean;
  startPosition?: { x: number; y: number };
  endPosition?: { x: number; y: number };
}

export default function MoleculeLink({
  isActive,
  startPosition = { x: 100, y: 100 },
  endPosition = { x: 0, y: 100 },
}: MoleculeLinkProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);
  const timeRef = useRef<number>(0);
  const orbitAnglesRef = useRef<{ [key: string]: number }>({
    oxygen: 0,
    nitrogen: 0,
    carbon: 0,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas dimensions to match the container
    canvas.width = canvas.offsetWidth || 500;
    canvas.height = canvas.offsetHeight || 500;

    // Initialize orbit angles for animation
    orbitAnglesRef.current = {
      oxygen: Math.random() * Math.PI * 2,
      nitrogen: Math.random() * Math.PI * 2,
      carbon: Math.random() * Math.PI * 2,
    };

    // Animation function
    const animate = (timestamp: number) => {
      if (!timeRef.current) timeRef.current = timestamp;
      const elapsed = timestamp - timeRef.current;
      timeRef.current = timestamp;

      // Update orbit angles
      orbitAnglesRef.current.oxygen += 0.001 * elapsed;
      orbitAnglesRef.current.nitrogen += 0.0008 * elapsed;
      orbitAnglesRef.current.carbon += 0.0005 * elapsed;

      // Draw the molecular structure with current animation state
      drawMolecularStructure(elapsed);

      // Continue animation loop
      animationRef.current = requestAnimationFrame(animate);
    };

    // Draw molecular structure
    const drawMolecularStructure = (elapsed: number = 0) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Skip drawing if positions are not valid
      if (
        !startPosition ||
        !endPosition ||
        (startPosition.x === 0 && startPosition.y === 0) ||
        (endPosition.x === 0 && endPosition.y === 0)
      ) {
        return;
      }

      // Calculate distance and angle for proper node placement
      const dx = endPosition.x - startPosition.x;
      const dy = endPosition.y - startPosition.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const angle = Math.atan2(dy, dx);

      // Calculate the start and end points with padding to avoid overlapping with hub elements
      const centerPadding = 40;
      const nodePadding = 35;

      // Calculate direction vector and normalize it
      const dirX = dx / distance;
      const dirY = dy / distance;

      // Apply padding to start and end points
      const paddedStartX = startPosition.x + dirX * centerPadding;
      const paddedStartY = startPosition.y + dirY * centerPadding;
      const paddedEndX = endPosition.x - dirX * nodePadding;
      const paddedEndY = endPosition.y - dirY * nodePadding;

      // Draw double bond effect (parallel lines) with reduced spacing
      const bondSpacing = 1.5;
      const perpX = Math.sin(angle) * bondSpacing;
      const perpY = -Math.cos(angle) * bondSpacing;

      // Calculate bond animation effect - subtle wave motion
      const bondWave = Math.sin(elapsed * 0.002) * 0.3;

      // First bond line with subtle wave
      ctx.beginPath();
      ctx.moveTo(paddedStartX + perpX, paddedStartY + perpY);

      // Create a subtle curve in the bond
      const midX = (paddedStartX + paddedEndX) / 2 + perpX + dirY * bondWave;
      const midY = (paddedStartY + paddedEndY) / 2 + perpY - dirX * bondWave;

      ctx.quadraticCurveTo(midX, midY, paddedEndX + perpX, paddedEndY + perpY);

      // Style for molecular bonds
      const gradient1 = ctx.createLinearGradient(
        paddedStartX,
        paddedStartY,
        paddedEndX,
        paddedEndY
      );
      gradient1.addColorStop(
        0,
        isActive ? "rgba(139, 92, 246, 0.7)" : "rgba(139, 92, 246, 0.5)"
      );
      gradient1.addColorStop(
        1,
        isActive ? "rgba(139, 92, 246, 0.3)" : "rgba(139, 92, 246, 0.2)"
      );

      ctx.strokeStyle = gradient1;
      ctx.lineWidth = isActive ? 1.2 : 0.8;
      ctx.stroke();

      // Second bond line with opposite wave
      ctx.beginPath();
      ctx.moveTo(paddedStartX - perpX, paddedStartY - perpY);

      const midX2 = (paddedStartX + paddedEndX) / 2 - perpX - dirY * bondWave;
      const midY2 = (paddedStartY + paddedEndY) / 2 - perpY + dirX * bondWave;

      ctx.quadraticCurveTo(
        midX2,
        midY2,
        paddedEndX - perpX,
        paddedEndY - perpY
      );

      const gradient2 = ctx.createLinearGradient(
        paddedStartX,
        paddedStartY,
        paddedEndX,
        paddedEndY
      );
      gradient2.addColorStop(
        0,
        isActive ? "rgba(139, 92, 246, 0.7)" : "rgba(139, 92, 246, 0.5)"
      );
      gradient2.addColorStop(
        1,
        isActive ? "rgba(139, 92, 246, 0.3)" : "rgba(139, 92, 246, 0.2)"
      );

      ctx.strokeStyle = gradient2;
      ctx.stroke();

      // Draw molecular nodes along the bonds with varied sizes
      const numNodes = 3;
      const nodeTypes = ["carbon", "oxygen", "nitrogen"];

      for (let i = 1; i <= numNodes; i++) {
        // Calculate position along the line with slight offset for realism
        const ratio = i / (numNodes + 1);

        // Add subtle movement to the nodes
        const time = elapsed * 0.001;
        const nodeMoveFactor = 0.5 + (isActive ? 0.5 : 0);
        const offsetX = Math.sin(time + i * Math.PI * 0.5) * nodeMoveFactor;
        const offsetY = Math.cos(time + i * Math.PI * 0.5) * nodeMoveFactor;

        // Calculate position based on padded start and end points
        const x = paddedStartX + (paddedEndX - paddedStartX) * ratio + offsetX;
        const y = paddedStartY + (paddedEndY - paddedStartY) * ratio + offsetY;

        // Vary node size and color based on "atom type" - with reduced sizes
        const nodeType = nodeTypes[i % nodeTypes.length];
        let nodeSize, nodeColor, glowColor;

        // Add subtle pulsing effect to node size
        const pulseFactor = 1 + Math.sin(time * 2 + i) * 0.1;

        switch (nodeType) {
          case "oxygen":
            nodeSize = (isActive ? 3 : 2.5) * pulseFactor;
            nodeColor = isActive
              ? "rgba(255, 65, 65, 0.8)"
              : "rgba(255, 65, 65, 0.6)";
            glowColor = "rgba(255, 65, 65, 0.25)";
            break;
          case "nitrogen":
            nodeSize = (isActive ? 2.5 : 2) * pulseFactor;
            nodeColor = isActive
              ? "rgba(65, 105, 255, 0.8)"
              : "rgba(65, 105, 255, 0.6)";
            glowColor = "rgba(65, 105, 255, 0.25)";
            break;
          default: // carbon
            nodeSize = (isActive ? 2 : 1.5) * pulseFactor;
            nodeColor = isActive
              ? "rgba(139, 92, 246, 0.8)"
              : "rgba(139, 92, 246, 0.6)";
            glowColor = "rgba(139, 92, 246, 0.25)";
        }

        // Draw glow effect with pulsing
        const glowSize = nodeSize * (2 + Math.sin(time * 1.5) * 0.2);
        const glow = ctx.createRadialGradient(x, y, 0, x, y, glowSize);
        glow.addColorStop(0, glowColor);
        glow.addColorStop(1, "rgba(0, 0, 0, 0)");

        ctx.beginPath();
        ctx.arc(x, y, glowSize, 0, Math.PI * 2);
        ctx.fillStyle = glow;
        ctx.fill();

        // Draw node (atom)
        ctx.beginPath();
        ctx.arc(x, y, nodeSize, 0, Math.PI * 2);
        ctx.fillStyle = nodeColor;
        ctx.fill();

        // Add highlight to give 3D effect
        ctx.beginPath();
        ctx.arc(
          x - nodeSize / 3,
          y - nodeSize / 3,
          nodeSize / 2,
          0,
          Math.PI * 2
        );
        ctx.fillStyle = "rgba(255, 255, 255, 0.3)";
        ctx.fill();

        // Draw electron orbit effects with rotation
        if (nodeType === "oxygen" || (nodeType === "nitrogen" && isActive)) {
          // Get the current orbit angle for this atom type
          const orbitAngle = orbitAnglesRef.current[nodeType];

          // Draw a rotating orbit
          const radiusX = nodeSize * 2.5;
          const radiusY = nodeSize * 1.8;

          ctx.beginPath();
          ctx.ellipse(
            x,
            y,
            radiusX,
            radiusY,
            orbitAngle, // Rotating angle
            0,
            Math.PI * 2
          );
          ctx.strokeStyle = `rgba(${
            nodeType === "oxygen" ? "255, 65, 65" : "65, 105, 255"
          }, ${isActive ? 0.25 : 0.15})`;
          ctx.setLineDash([1, 2]);
          ctx.lineWidth = 0.6;
          ctx.stroke();

          // Draw electron particle moving along the orbit
          const electronAngle =
            (time * (nodeType === "oxygen" ? 3 : 2)) % (Math.PI * 2);
          const electronX =
            x +
            Math.cos(electronAngle) * radiusX * Math.cos(orbitAngle) -
            Math.sin(electronAngle) * radiusY * Math.sin(orbitAngle);
          const electronY =
            y +
            Math.cos(electronAngle) * radiusX * Math.sin(orbitAngle) +
            Math.sin(electronAngle) * radiusY * Math.cos(orbitAngle);

          ctx.beginPath();
          ctx.arc(electronX, electronY, 1, 0, Math.PI * 2);
          ctx.fillStyle =
            nodeType === "oxygen"
              ? "rgba(255, 65, 65, 0.8)"
              : "rgba(65, 105, 255, 0.8)";
          ctx.fill();

          // Reset line dash
          ctx.setLineDash([]);
        }
      }
    };

    // Start animation
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      // Cleanup animation on unmount
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isActive, startPosition, endPosition]);

  return (
    <motion.div
      className="absolute top-0 left-0 w-full h-full pointer-events-none z-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />
    </motion.div>
  );
}
