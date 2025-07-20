import React from "react";

interface AboutCardProps {
  title: string;
  description: string;
  label?: string;
  className?: string;
  children?: React.ReactNode;
}

const AboutCard: React.FC<AboutCardProps> = ({
  title,
  description,
  label,
  className = "",
  children,
}) => {
  return (
    <div
      className={`bg-[#060010] border border-[#392e4e] rounded-2xl p-5 shadow-md text-white flex flex-col gap-2 relative overflow-hidden ${className}`}
    >
      {label && (
        <span className="text-xs font-semibold text-purple-300 mb-1 uppercase tracking-wide">
          {label}
        </span>
      )}
      <h3 className="text-lg font-bold mb-1">{title}</h3>
      <p className="text-sm opacity-90 mb-1">{description}</p>
      {children}
    </div>
  );
};

export default AboutCard; 