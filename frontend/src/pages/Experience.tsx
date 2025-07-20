import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Star, Trophy, GraduationCap, CalendarDays } from 'lucide-react';

// Your original experience data, mapped to the new structure
const experienceEvents = [
  {
    id: "computing-mind-technology",
    year: "JAN 2025 - AUG 2025",
    title: "Fullstack Developer",
    subtitle: "Computing Mind Technology",
    description: "Built scalable web apps and led a small dev team. Developed full-stack features, improved code quality, and delivered robust solutions.",
    icon: <Briefcase className="h-4 w-4 mr-2 text-teal-400" />,
    color: "teal-400",
    status: "completed",
    technologies: ["React", "Node.js", "MongoDB", "TypeScript", "SMTP"]
  },
  {
    id: "sapphire-brokin",
    year: "JAN 2025 - MAR 2025",
    title: "Frontend Developer",
    subtitle: "Sapphire Brokin",
    description: "Crafted modern UIs and improved user experience. Collaborated with designers and backend teams to deliver seamless products.",
    icon: <Star className="h-4 w-4 mr-2 text-blue-400" />,
    color: "blue-400",
    status: "completed",
    technologies: ["React", "JavaScript", "TailwindCSS", "Figma"]
  },
  {
    id: "bhel-intern",
    year: "JUN 2025 - JUL 2025",
    title: "CS/IT Intern",
    subtitle: "BHEL",
    description: "Worked on internal tools and automation scripts. Assisted in digital transformation and process automation projects.",
    icon: <GraduationCap className="h-4 w-4 mr-2 text-purple-400" />,
    color: "purple-400",
    status: "completed",
    technologies: ["DBMS", "Automation", "Server Admin", "Scripting"]
  },
  {
    id: "agro-digital",
    year: "JUN 2025 - AUG 2025",
    title: "Fullstack Developer",
    subtitle: "Agro Digital",
    description: "Developed agri-tech solutions for farmers. Built scalable platforms and integrated third-party APIs for agri-data.",
    icon: <Trophy className="h-4 w-4 mr-2 text-green-400" />,
    color: "green-400",
    status: "completed",
    technologies: ["Node.js", "React", "APIs", "Cloud Functions"]
  },
  {
    id: "spectronovasoft",
    year: "JUL 2025 - Present",
    title: "Fullstack Developer",
    subtitle: "Spectronovasoft",
    description: "Delivered SaaS products and cloud integrations. Led backend and frontend development for multiple client projects.",
    icon: <CalendarDays className="h-4 w-4 mr-2 text-pink-400" />,
    color: "pink-400",
    status: "ongoing",
    technologies: ["Vue", "Node.js", "SaaS", "Cloud", "Nuxt" ,"Typescript"]
  }
];

const Experience = () => {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-black min-h-screen">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-teal-400 to-blue-400 mx-auto mb-4"></div>
          <p className="text-gray-300 text-lg">
            Building scalable systems and delivering impactful solutions across multiple organizations
          </p>
        </motion.div>

        <div className="relative">
          {/* Animated Timeline line (desktop only) */}
          <motion.div
            className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-teal-400/30 to-blue-400/30 rounded-full origin-top"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            viewport={{ once: true }}
          />

          <div className="space-y-12">
            {experienceEvents.map((exp, index) => (
              <motion.div 
                key={exp.id} 
                className="relative"
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.2,
                  ease: "easeOut"
                }}
                viewport={{ once: true, margin: "-100px" }}
              >
                {/* Desktop timeline card: alternate left/right, but content always left-aligned */}
                <div className={`hidden md:flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-5/12 pl-8 text-left relative z-10`}>
                    <motion.div 
                      className="bg-black/30 backdrop-blur-md border border-gray-600/30 rounded-2xl p-7 hover:border-gray-500/40 transition-all duration-300 transform hover:scale-105 group shadow-2xl"
                      whileHover={{ 
                        scale: 1.02,
                        boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-xl font-bold text-white flex items-center">{exp.icon}{exp.title}</h3>
                        <motion.div 
                          className={`w-4 h-4 bg-gradient-to-r from-${exp.color} to-${exp.color} rounded-full`}
                          whileHover={{ scale: 1.2 }}
                          transition={{ duration: 0.2 }}
                        />
                      </div>
                      {/* Status badge */}
                      <div className="mb-3 flex items-center gap-2">
                        <span className={`inline-block text-sm px-3 py-1 bg-gradient-to-r from-${exp.color}/30 to-${exp.color}/20 text-${exp.color} border border-${exp.color}/50 font-semibold tracking-wide rounded-full`}>
                          {exp.subtitle}
                        </span>
                      </div>
                      {/* Time Display */}
                      <div className="flex items-center space-x-2 mb-3">
                        <div className="flex items-center space-x-1 text-gray-400">
                          <CalendarDays className="h-4 w-4" />
                          <span className="text-sm font-medium">{exp.year}</span>
                        </div>
                        <span className={`inline-block text-xs px-2 py-1 bg-gradient-to-r from-${exp.color}/20 to-${exp.color}/20 text-${exp.color} border border-${exp.color}/30 rounded-full`}>
                          {exp.year.includes('Present') ? 'Current' : 'Completed'}
                        </span>
                      </div>
                      <p className="text-gray-300 mb-4 text-sm leading-relaxed">{exp.description}</p>
                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <motion.div
                            key={techIndex}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ 
                              duration: 0.3, 
                              delay: techIndex * 0.1,
                              ease: "easeOut"
                            }}
                            viewport={{ once: true }}
                          >
                            <span className="inline-block px-2 py-1 bg-gradient-to-r from-gray-600/20 to-gray-500/20 text-gray-300 text-xs border border-gray-600/30 hover:border-gray-500/50 transition-colors rounded-full">
                              {tech}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>
                {/* Mobile: simple stacked card */}
                <div className="md:hidden w-full">
                  <div className="bg-black/30 backdrop-blur-md border border-gray-600/30 rounded-2xl p-6 mb-2 shadow-xl">
                    <div className="flex items-center gap-2 mb-2">
                      {exp.icon}
                      <h3 className="text-lg font-bold text-white">{exp.title}</h3>
                    </div>
                    <div className="mb-2">
                      <span className={`inline-block text-xs px-2 py-1 bg-gradient-to-r from-${exp.color}/30 to-${exp.color}/20 text-${exp.color} border border-${exp.color}/50 font-semibold tracking-wide rounded-full`}>
                        {exp.subtitle}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2 mb-2">
                      <CalendarDays className="h-4 w-4 text-gray-400" />
                      <span className="text-xs font-medium text-gray-400">{exp.year}</span>
                    </div>
                    <p className="text-gray-300 mb-3 text-xs leading-relaxed">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="inline-block px-2 py-1 bg-gradient-to-r from-gray-600/20 to-gray-500/20 text-gray-300 text-xs border border-gray-600/30 hover:border-gray-500/50 transition-colors rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                {/* Timeline dot and line: desktop only */}
                <motion.div
                  className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-gradient-to-r from-teal-400 to-blue-400 rounded-full border-4 border-slate-900 z-10 shadow-lg"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.2 + 0.3,
                    ease: "easeOut"
                  }}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.3,
                    boxShadow: "0 0 20px rgba(20, 184, 166, 0.5)"
                  }}
                  animate={{
                    boxShadow: [
                      "0 0 0px rgba(20, 184, 166, 0)",
                      "0 0 10px rgba(20, 184, 166, 0.3)",
                      "0 0 0px rgba(20, 184, 166, 0)"
                    ]
                  }}
                />
                <motion.div 
                  className={`hidden md:block absolute top-1/2 transform -translate-y-1/2 h-0.5 ${index % 2 === 0 ? 'right-1/2 left-0 bg-gradient-to-l from-teal-400 to-transparent' : 'left-1/2 right-0 bg-gradient-to-r from-blue-400 to-transparent'} z-0`}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: index * 0.2 + 0.5,
                    ease: "easeOut"
                  }}
                  viewport={{ once: true }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;