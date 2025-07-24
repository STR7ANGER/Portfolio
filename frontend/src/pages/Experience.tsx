import { motion } from "framer-motion";
import {
  Briefcase,
  Star,
  Trophy,
  GraduationCap,
  CalendarDays,
  MapPin,
  Code,
  Zap,
} from "lucide-react";

const experienceEvents = [
  {
    id: "computing-mind-technology",
    year: "JAN 2025 - AUG 2025",
    title: "Fullstack Developer",
    subtitle: "Computing Mind Technology",
    description:
      "Built scalable web apps and led a small dev team. Developed full-stack features, improved code quality, and delivered robust solutions.",
    icon: <Briefcase className="h-5 w-5" />,
    color: "from-emerald-400 to-teal-500",
    glowColor: "shadow-emerald-500/25",
    borderColor: "border-emerald-500/30",
    bgGradient: "from-emerald-500/10 to-teal-500/10",
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
    icon: <Star className="h-5 w-5" />,
    color: "from-blue-400 to-indigo-500",
    glowColor: "shadow-blue-500/25",
    borderColor: "border-blue-500/30",
    bgGradient: "from-blue-500/10 to-indigo-500/10",
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
    icon: <GraduationCap className="h-5 w-5" />,
    color: "from-purple-400 to-violet-500",
    glowColor: "shadow-purple-500/25",
    borderColor: "border-purple-500/30",
    bgGradient: "from-purple-500/10 to-violet-500/10",
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
    icon: <Trophy className="h-5 w-5" />,
    color: "from-green-400 to-emerald-500",
    glowColor: "shadow-green-500/25",
    borderColor: "border-green-500/30",
    bgGradient: "from-green-500/10 to-emerald-500/10",
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
    icon: <Zap className="h-5 w-5" />,
    color: "from-pink-400 to-rose-500",
    glowColor: "shadow-pink-500/25",
    borderColor: "border-pink-500/30",
    bgGradient: "from-pink-500/10 to-rose-500/10",
    status: "ongoing",
    technologies: ["Vue", "Node.js", "SaaS", "Cloud", "Nuxt", "Typescript"],
  },
];

const Experience = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-teal-950/10 to-teal-900/10 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Code className="h-5 w-5 text-emerald-400" />
              <span className="text-white/80 font-medium">
                Professional Journey
              </span>
            </motion.div>

            <h1 className="text-6xl md:text-7xl font-black mb-6">
              <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                Experience
              </span>
            </h1>

            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Building scalable systems and delivering impactful solutions
              across multiple organizations
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Main Timeline Line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-white/20 to-transparent transform -translate-x-1/2"></div>

            <div className="space-y-16">
              {experienceEvents.map((exp, index) => {
                const isLeft = index % 2 === 0;
                const isOngoing = exp.status === "ongoing";

                return (
                  <motion.div
                    key={exp.id}
                    className="relative"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.1,
                      ease: "easeOut",
                    }}
                    viewport={{ once: true, margin: "-100px" }}
                  >
                    {/* Desktop Layout */}
                    <div
                      className={`hidden lg:flex ${
                        isLeft ? "justify-start" : "justify-end"
                      }`}
                    >
                      <div className={`w-5/12 ${isLeft ? "pr-12" : "pl-12"}`}>
                        <div
                          className={`relative p-8 rounded-3xl bg-gradient-to-br ${exp.bgGradient} backdrop-blur-sm border ${exp.borderColor} ${exp.glowColor} shadow-2xl group overflow-hidden`}
                        >
                          {/* Card Glow Effect */}
                          <div
                            className={`absolute inset-0 bg-gradient-to-r ${exp.color} opacity-10 transition-opacity duration-500 rounded-3xl`}
                          ></div>

                          {/* Status Indicator */}
                          {isOngoing && (
                            <motion.div
                              className="absolute top-4 right-4 flex items-center gap-2"
                              animate={{ scale: [1, 1.1, 1] }}
                              transition={{ duration: 2, repeat: Infinity }}
                            >
                              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                              <span className="text-xs text-emerald-400 font-semibold">
                                ACTIVE
                              </span>
                            </motion.div>
                          )}

                          {/* Icon and Title */}
                          <div className="flex items-center gap-4 mb-4">
                            <div
                              className={`p-3 rounded-2xl bg-gradient-to-r ${exp.color} shadow-lg`}
                            >
                              <div className="text-white">{exp.icon}</div>
                            </div>
                            <div>
                              <h3 className="text-2xl font-bold text-white mb-1">
                                {exp.title}
                              </h3>
                              <div className="flex items-center gap-2 text-gray-400">
                                <MapPin className="h-4 w-4" />
                                <span className="font-medium">
                                  {exp.subtitle}
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* Time Display */}
                          <div className="flex items-center gap-2 mb-6">
                            <CalendarDays className="h-4 w-4 text-gray-400" />
                            <span className="text-gray-300 font-medium">
                              {exp.year}
                            </span>
                          </div>

                          {/* Description */}
                          <p className="text-gray-300 mb-6 leading-relaxed">
                            {exp.description}
                          </p>

                          {/* Technologies */}
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, techIndex) => (
                              <motion.span
                                key={techIndex}
                                className="px-3 py-1.5 bg-white/5 border border-white/10 text-gray-300 text-sm rounded-full backdrop-blur-sm"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.5 + techIndex * 0.1 }}
                              >
                                {tech}
                              </motion.span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Mobile Layout */}
                    <div className="lg:hidden">
                      <div className="relative">
                        <div
                          className={`p-6 rounded-3xl bg-gradient-to-br ${exp.bgGradient} backdrop-blur-sm border ${exp.borderColor} ${exp.glowColor} shadow-2xl overflow-hidden group`}
                        >
                          {/* Mobile Card Glow */}
                          <div
                            className={`absolute inset-0 bg-gradient-to-r ${exp.color} opacity-10 transition-opacity duration-500 rounded-3xl`}
                          ></div>

                          {/* Status for mobile */}
                          {isOngoing && (
                            <motion.div
                              className="absolute top-4 right-4 flex items-center gap-1"
                              animate={{ scale: [1, 1.1, 1] }}
                              transition={{ duration: 2, repeat: Infinity }}
                            >
                              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                              <span className="text-xs text-emerald-400 font-semibold">
                                ACTIVE
                              </span>
                            </motion.div>
                          )}

                          <div className="flex items-start gap-4 mb-4">
                            <div
                              className={`p-2.5 rounded-xl bg-gradient-to-r ${exp.color} shadow-lg flex-shrink-0`}
                            >
                              <div className="text-white">{exp.icon}</div>
                            </div>
                            <div className="min-w-0 flex-1">
                              <h3 className="text-xl font-bold text-white mb-1">
                                {exp.title}
                              </h3>
                              <div className="flex items-center gap-2 text-gray-400 mb-2">
                                <MapPin className="h-3 w-3" />
                                <span className="text-sm font-medium">
                                  {exp.subtitle}
                                </span>
                              </div>
                              <div className="flex items-center gap-2 text-gray-400">
                                <CalendarDays className="h-3 w-3" />
                                <span className="text-sm">{exp.year}</span>
                              </div>
                            </div>
                          </div>

                          <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                            {exp.description}
                          </p>

                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="px-2.5 py-1 bg-white/5 border border-white/10 text-gray-300 text-xs rounded-full backdrop-blur-sm"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Timeline Dot */}
                    <motion.div
                      className={`hidden lg:block absolute left-1/2 top-8 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r ${exp.color} shadow-lg border-4 border-slate-800 z-10`}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{
                        delay: 0.3,
                        type: "spring",
                        stiffness: 300,
                      }}
                    >
                      {isOngoing && (
                        <motion.div
                          className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-400 to-teal-500"
                          animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                      )}
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;