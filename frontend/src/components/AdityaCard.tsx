import React from "react";
import { motion } from "motion/react";

interface AdityaCardProps {
  image: string;
  title: string;
  subtitle: string;
  handle: string;
  borderColor: string;
  gradient: string;
}

const AdityaCard: React.FC<AdityaCardProps> = ({
  image,
  title,
  subtitle,
  handle,
  borderColor,
  gradient,
}) => {
  const handleCardMove: React.MouseEventHandler<HTMLElement> = (e) => {
    const c = e.currentTarget as HTMLElement;
    const rect = c.getBoundingClientRect();
    c.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    c.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  };

  return (
    <motion.article
      onMouseMove={handleCardMove}
      className="group relative flex flex-col w-[300px] rounded-[20px] overflow-hidden border-2 border-transparent transition-all duration-300 cursor-pointer hover:scale-105"
      style={
        {
          "--card-border": borderColor || "transparent",
          background: gradient,
          "--spotlight-color": "rgba(255,255,255,0)",
        } as React.CSSProperties
      }
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Spotlight effect */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-500 z-20 opacity-0 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(circle at var(--mouse-x) var(--mouse-y), var(--spotlight-color), transparent 70%)",
        }}
      />
      
      {/* Image container */}
      <div className="relative z-10 flex-1 p-[10px] box-border">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover rounded-[10px]"
        />
      </div>
      
      {/* Footer with text */}
      <footer className="relative z-10 p-3 text-white font-sans grid grid-cols-[1fr_auto] gap-x-3 gap-y-1">
        <h3 className="m-0 text-[1.05rem] font-semibold">{title}</h3>
        <span className="text-[0.95rem] opacity-80 text-right">
          {handle}
        </span>
        <p className="m-0 text-[0.85rem] opacity-85">{subtitle}</p>
      </footer>
    </motion.article>
  );
};

export default AdityaCard; 