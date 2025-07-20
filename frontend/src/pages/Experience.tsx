import { motion } from "framer-motion";
import {
  Briefcase,
  Star,
  Trophy,
  GraduationCap,
  CalendarDays,
} from "lucide-react";

// Your original experience data, mapped to the new structure
const experienceEvents = [
  {
    id: "computing-mind-technology",
    year: "JAN 2025 - AUG 2025",
    title: "Fullstack Developer",
    subtitle: "Computing Mind Technology",
    description:
      "Built scalable web apps and led a small dev team. Developed full-stack features, improved code quality, and delivered robust solutions.",
    icon: <Briefcase className="h-4 w-4 mr-2 text-teal-400" />,
    color: "teal",
    status: "completed",
    technologies: ["React", "Node.js", "MongoDB", "TypeScript", "SMTP"],
  },
  {
    id: "sapphire-brokin",
    year: "JAN 2025 - MAR 2025",
    title: "Frontend Developer",
    subtitle: "Sapphire Brokin",
    description:
      "Crafted modern UIs and improved user experience. Collaborated with designers and backend teams to deliver seamless products.",
    icon: <Star className="h-4 w-4 mr-2 text-blue-400" />,
    color: "blue",
    status: "completed",
    technologies: ["React", "JavaScript", "TailwindCSS", "Figma"],
  },
  {
    id: "bhel-intern",
    year: "JUN 2025 - JUL 2025",
    title: "CS/IT Intern",
    subtitle: "BHEL",
    description:
      "Worked on internal tools and automation scripts. Assisted in digital transformation and process automation projects.",
    icon: <GraduationCap className="h-4 w-4 mr-2 text-purple-400" />,
    color: "purple",
    status: "completed",
    technologies: ["DBMS", "Automation", "Server Admin", "Scripting"],
  },
  {
    id: "agro-digital",
    year: "JUN 2025 - AUG 2025",
    title: "Fullstack Developer",
    subtitle: "Agro Digital",
    description:
      "Developed agri-tech solutions for farmers. Built scalable platforms and integrated third-party APIs for agri-data.",
    icon: <Trophy className="h-4 w-4 mr-2 text-green-400" />,
    color: "green",
    status: "completed",
    technologies: ["Node.js", "React", "APIs", "Cloud Functions"],
  },
  {
    id: "spectronovasoft",
    year: "JUL 2025 - Present",
    title: "Fullstack Developer",
    subtitle: "Spectronovasoft",
    description:
      "Delivered SaaS products and cloud integrations. Led backend and frontend development for multiple client projects.",
    icon: <CalendarDays className="h-4 w-4 mr-2 text-pink-400" />,
    color: "pink",
    status: "ongoing",
    technologies: ["Vue", "Node.js", "SaaS", "Cloud", "Nuxt", "Typescript"],
  },
];

// Color mapping for better performance
const colorClasses = {
  teal: {
    dot: "bg-teal-400",
    badge: "bg-teal-400/20 text-teal-400 border-teal-400/30",
    company: "bg-teal-400/30 text-teal-400 border-teal-400/50",
    line: "from-teal-400",
  },
  blue: {
    dot: "bg-blue-400",
    badge: "bg-blue-400/20 text-blue-400 border-blue-400/30",
    company: "bg-blue-400/30 text-blue-400 border-blue-400/50",
    line: "from-blue-400",
  },
  purple: {
    dot: "bg-purple-400",
    badge: "bg-purple-400/20 text-purple-400 border-purple-400/30",
    company: "bg-purple-400/30 text-purple-400 border-purple-400/50",
    line: "from-purple-400",
  },
  green: {
    dot: "bg-green-400",
    badge: "bg-green-400/20 text-green-400 border-green-400/30",
    company: "bg-green-400/30 text-green-400 border-green-400/50",
    line: "from-green-400",
  },
  pink: {
    dot: "bg-pink-400",
    badge: "bg-pink-400/20 text-pink-400 border-pink-400/30",
    company: "bg-pink-400/30 text-pink-400 border-pink-400/50",
    line: "from-pink-400",
  },
};

// Simplified animation variants for better performance
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Experience = () => {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-t from-teal-950/10 via-teal-950/30 to-teal-950/10 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-teal-400 to-blue-400 mx-auto mb-4"></div>
          <p className="text-gray-300 text-lg">
            Building scalable systems and delivering impactful solutions across
            multiple organizations
          </p>
        </motion.div>

        <div className="relative">
          {/* Static Timeline line (desktop only) - removed animation for performance */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-teal-400/30 to-blue-400/30 rounded-full" />

          <div className="space-y-12">
            {experienceEvents.map((exp, index) => {
              const colors = colorClasses[exp.color];
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={exp.id}
                  className="relative"
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  viewport={{ once: true, margin: "-50px" }}
                >
                  {/* Desktop timeline card */}
                  <div
                    className={`hidden md:flex items-center ${
                      isLeft ? "justify-start" : "justify-end"
                    }`}
                  >
                    <div className="w-5/12 pl-8 text-left relative z-10">
                      <div className="bg-black/30 backdrop-blur-sm border border-gray-600/30 rounded-2xl p-7 hover:border-gray-500/40 transition-colors duration-200 group shadow-xl">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="text-xl font-bold text-white flex items-center">
                            {exp.icon}
                            {exp.title}
                          </h3>
                          <div
                            className={`w-4 h-4 ${colors.dot} rounded-full`}
                          />
                        </div>

                        {/* Company badge */}
                        <div className="mb-3">
                          <span
                            className={`inline-block text-sm px-3 py-1 ${colors.company} font-semibold tracking-wide rounded-full border`}
                          >
                            {exp.subtitle}
                          </span>
                        </div>

                        {/* Time Display */}
                        <div className="flex items-center space-x-2 mb-3">
                          <div className="flex items-center space-x-1 text-gray-400">
                            <CalendarDays className="h-4 w-4" />
                            <span className="text-sm font-medium">
                              {exp.year}
                            </span>
                          </div>
                          <span
                            className={`inline-block text-xs px-2 py-1 ${colors.badge} border rounded-full`}
                          >
                            {exp.year.includes("Present")
                              ? "Current"
                              : "Completed"}
                          </span>
                        </div>

                        <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                          {exp.description}
                        </p>

                        {/* Technologies - simplified without individual animations */}
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="inline-block px-2 py-1 bg-gray-600/20 text-gray-300 text-xs border border-gray-600/30 hover:border-gray-500/50 transition-colors duration-200 rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Mobile: simple stacked card */}
                  <div className="md:hidden w-full">
                    <div className="bg-black/30 backdrop-blur-sm border border-gray-600/30 rounded-2xl p-6 mb-2 shadow-xl">
                      <div className="flex items-center gap-2 mb-2">
                        {exp.icon}
                        <h3 className="text-lg font-bold text-white">
                          {exp.title}
                        </h3>
                      </div>
                      <div className="mb-2">
                        <span
                          className={`inline-block text-xs px-2 py-1 ${colors.company} font-semibold tracking-wide rounded-full border`}
                        >
                          {exp.subtitle}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2 mb-2">
                        <CalendarDays className="h-4 w-4 text-gray-400" />
                        <span className="text-xs font-medium text-gray-400">
                          {exp.year}
                        </span>
                      </div>
                      <p className="text-gray-300 mb-3 text-xs leading-relaxed">
                        {exp.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="inline-block px-2 py-1 bg-gray-600/20 text-gray-300 text-xs border border-gray-600/30 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Timeline dot - simplified without complex animations */}
                  <div
                    className={`hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 ${colors.dot} rounded-full border-4 border-slate-900 z-10 shadow-lg`}
                  />

                  {/* Connecting line - static for performance */}
                  <div
                    className={`hidden md:block absolute top-1/2 transform -translate-y-1/2 h-0.5 ${
                      isLeft
                        ? "right-1/2 left-0 bg-gradient-to-l"
                        : "left-1/2 right-0 bg-gradient-to-r"
                    } ${colors.line} to-transparent z-0`}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
