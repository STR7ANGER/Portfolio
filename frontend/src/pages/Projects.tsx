import React, { useState } from "react";
import CardSwap, { Card } from "@/blocks/Components/CardSwap/CardSwap";
import { AnimatePresence, motion } from "framer-motion";

const placeholderProjects = [
  {
    title: "Learning Habits",
    description: "A modern Pay as your learn Platform.",
    tags: ["React", "Node", "Typescript","MongoDB"],
    image: "/learning_habits.png"
  },
  {
    title: "Bloomify",
    description: "A full-stack e-commerce platform for flowers.",
    tags: ["Node.js", "Typescript", "MongoDB","React"],
    image: "/bloomify.png",
  },
  {
    title: "Virtual Venture",
    description: "A learning trading platform",
    tags: ["React", "MongoDB", "Yahoo Finance"],
    image: "/virtual_venture.png",
  },
  {
    title: "Task Morpher",
    description: "A task management application.",
    tags: ["Next.js", "Typescript", "Supabase"],
    image: "/taskmorpher.png",
  },
  {
    title: "Quantum Sync",
    description: "A real time chat , thread , social media platform.",
    tags: ["Next.js", "Socket.io", "MongoDB","Clerk"],
    image: "/sync.png",
  },
  {
    title: "Ai Email",
    description: "An ai tool to reply email with help of ai.",
    tags: ["React", "Node.js", "Gmail","Gemini"],
    image: "/ai_email.png",
  },
  {
    title: "Wheel-o-Rent",
    description: "A car selling and renting platform",
    tags: ["React", "Node.js", "MongoDB","Typescript"],
    image: "/wheel.png",
  },
  {
    title: "Tech UI",
    description: "An ui liberary with icon pack",
    tags: ["Next.js"],
    image: "/tech_ui.png",
  },
  {
    title: "Fabric-Vouge",
    description: "An E-commerce clothing platform.",
    tags: ["React", "Node.js", "MongoDB"],
    image: "/fabric.png",
  },
];

const rollUpFlipVariants = {
  initial: { rotateX: 90, y: 40, opacity: 0 },
  animate: { rotateX: 0, y: 0, opacity: 1, transition: { duration: 0.5 } },
  exit: { rotateX: -90, y: -40, opacity: 0, transition: { duration: 0.5 } },
};

const Projects = () => {
  const [current, setCurrent] = useState(0);
  const project = placeholderProjects[current];

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-black via-teal-950/50 to-teal-950/10">
      <div className="relative z-10 flex flex-col items-center justify-start min-h-screen px-4 py-12 max-w-7xl mx-auto">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold mb-2 tracking-tight drop-shadow-lg bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent text-center">
          My Projects
        </h1>
        <p className="text-neutral-300 mb-8 text-lg max-w-xl text-center drop-shadow">
          A showcase of my work, skills, and favorite technologies.
        </p>
        {/* Main Card/Box */}
        <div className="w-full max-w-7xl flex flex-col md:flex-row items-center justify-center rounded-3xl border border-teal-900/40 bg-teal-950/10 backdrop-blur-xl shadow-2xl p-8 md:p-20 mb-8 min-h-[520px] md:min-h-[520px] overflow-hidden">
          {/* Left: Project Info */}
          <div className="flex-1 flex flex-col items-start justify-center max-w-2xl mb-10 md:mb-0 min-h-[320px]">
            <AnimatePresence mode="wait">
              <motion.h2
                key={project.title}
                className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-lg"
                variants={rollUpFlipVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                style={{ perspective: 1000, transformStyle: 'preserve-3d' }}
              >
                {project.title}
              </motion.h2>
            </AnimatePresence>
            <AnimatePresence mode="wait">
              <motion.p
                key={project.description}
                className="text-lg md:text-xl text-teal-200 mb-6 drop-shadow"
                variants={rollUpFlipVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                style={{ perspective: 1000, transformStyle: 'preserve-3d' }}
              >
                {project.description}
              </motion.p>
            </AnimatePresence>
            <div className="flex flex-wrap gap-3 mb-2">
              {project.tags.map((tag, i) => (
                <span key={i} className="px-4 py-1 rounded-full bg-teal-800/60 text-teal-200 text-sm font-medium border border-teal-500/40 shadow">{tag}</span>
              ))}
            </div>
          </div>
          {/* Right: Project Image with CardSwap */}
          <div className="flex-1 flex items-center justify-center w-full h-[380px] md:h-[440px] relative">
            <CardSwap
              width={520}
              height={360}
              cardDistance={90}
              verticalDistance={80}
              delay={500}
              onSwap={setCurrent}
            >
              {placeholderProjects.map((project, idx) => {
                const prevImage = placeholderProjects[(idx - 1 + placeholderProjects.length) % placeholderProjects.length].image;
                return (
                  <Card
                    key={idx}
                    customClass="flex items-center justify-center w-full h-full bg-[#191622] rounded-2xl border-2 border-dashed border-teal-600/40 text-teal-300 text-xl shadow-lg"
                  >
                    {prevImage ? (
                      <img
                        src={prevImage}
                        alt={project.title}
                        className="object-contain w-full h-full rounded-2xl"
                      />
                    ) : (
                      <span>Image Placeholder</span>
                    )}
                  </Card>
                );
              })}
            </CardSwap>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
