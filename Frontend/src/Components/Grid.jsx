import { useState } from "react";

export default function Grid({ children }) {
  const [pos, setPos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      style={{
        position: "relative",
        minHeight: "100vh",
        overflow: "hidden",
      }}
    >
      {/* GRID BACKGROUND */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          backgroundImage: `
            linear-gradient(to right, rgba(0,0,0,0.25) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,0,0,0.25) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
          WebkitMaskImage: `radial-gradient(
            circle 200px at ${pos.x}% ${pos.y}%,
            black 0%,
            transparent 70%
          )`,
          maskImage: `radial-gradient(
            circle 200px at ${pos.x}% ${pos.y}%,
            black 0%,
            transparent 70%
          )`,
          zIndex: 0,
        }}
      />

      {/* CONTENT */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
        }}
      >
        {children}
      </div>
    </div>
  );
}
