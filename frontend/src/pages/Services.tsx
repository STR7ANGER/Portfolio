import { cn } from "@/lib/utils";
import { AnimatedList } from "@/components/magicui/animated-list";

interface ServiceItem {
  name: string;
  description: string;
  icon: string;
  color: string;
  time: string;
}

const webDevServices = [
  {
    name: "React Development",
    description: "Modern web applications",
    time: "Latest",
    icon: "⚛️",
    color: "#14b8a6",
  },
  {
    name: "Full-Stack Solutions",
    description: "End-to-end development",
    time: "Popular",
    icon: "🔧",
    color: "#0d9488",
  },
  {
    name: "E-commerce Platforms",
    description: "Online store development",
    time: "Trending",
    icon: "🛒",
    color: "#0f766e",
  },
  {
    name: "Progressive Web Apps",
    description: "Mobile-first experiences",
    time: "Advanced",
    icon: "📱",
    color: "#115e59",
  },
  {
    name: "API Integration",
    description: "Third-party services",
    time: "Essential",
    icon: "🔗",
    color: "#134e4a",
  },
];

const softwareDevServices = [
  {
    name: "Custom Software",
    description: "Tailored solutions",
    time: "Bespoke",
    icon: "💻",
    color: "#14b8a6",
  },
  {
    name: "Mobile Applications",
    description: "iOS & Android apps",
    time: "Cross-platform",
    icon: "📲",
    color: "#0d9488",
  },
  {
    name: "Desktop Applications",
    description: "Native desktop software",
    time: "Performance",
    icon: "🖥️",
    color: "#0f766e",
  },
  {
    name: "System Integration",
    description: "Enterprise connectivity",
    time: "Enterprise",
    icon: "⚙️",
    color: "#115e59",
  },
  {
    name: "Legacy Modernization",
    description: "System upgrades",
    time: "Migration",
    icon: "🔄",
    color: "#134e4a",
  },
];

const databaseServices = [
  {
    name: "Database Design",
    description: "Optimized architecture",
    time: "Scalable",
    icon: "🗄️",
    color: "#14b8a6",
  },
  {
    name: "Data Migration",
    description: "Seamless transfers",
    time: "Reliable",
    icon: "📊",
    color: "#0d9488",
  },
  {
    name: "Performance Tuning",
    description: "Query optimization",
    time: "Fast",
    icon: "⚡",
    color: "#0f766e",
  },
  {
    name: "Backup & Recovery",
    description: "Data protection",
    time: "Secure",
    icon: "🔒",
    color: "#115e59",
  },
];

const cloudAIServices = [
  {
    name: "Cloud Architecture",
    description: "Scalable infrastructure",
    time: "AWS/Azure",
    icon: "☁️",
    color: "#14b8a6",
  },
  {
    name: "AI/ML Solutions",
    description: "Intelligent automation",
    time: "Smart",
    icon: "🤖",
    color: "#0d9488",
  },
  {
    name: "Microservices",
    description: "Distributed systems",
    time: "Modular",
    icon: "🔧",
    color: "#0f766e",
  },
  {
    name: "DevOps Automation",
    description: "CI/CD pipelines",
    time: "Automated",
    icon: "🚀",
    color: "#115e59",
  },
  {
    name: "Container Orchestration",
    description: "Docker & Kubernetes",
    time: "Scalable",
    icon: "🐳",
    color: "#134e4a",
  },
];

// Create infinite loops of services
const webDevInfinite = Array.from({ length: 15 }, () => webDevServices).flat();
const softwareDevInfinite = Array.from(
  { length: 15 },
  () => softwareDevServices
).flat();
const databaseInfinite = Array.from(
  { length: 15 },
  () => databaseServices
).flat();
const cloudAIInfinite = Array.from(
  { length: 15 },
  () => cloudAIServices
).flat();

const ServiceCard = ({ name, description, icon, color, time }: ServiceItem) => {
  return (
    <figure
      className={cn(
        "relative mx-auto w-full max-w-[400px] h-20 cursor-pointer overflow-hidden rounded-xl p-3 mb-2",
        "transition-all duration-300 ease-in-out hover:scale-[102%]",
        "bg-gray-900/80 backdrop-blur-md border border-teal-900/50 hover:border-teal-700/80",
        "shadow-lg hover:shadow-xl"
      )}
      style={{
        boxShadow: `0 0 10px ${color}10, inset 0 1px 0 rgba(20, 184, 166, 0.1)`,
      }}
    >
      <div className="flex flex-row items-center gap-3 h-full">
        <div
          className="flex size-10 items-center justify-center rounded-lg shadow-md flex-shrink-0"
          style={{
            backgroundColor: `${color}15`,
            border: `1px solid ${color}30`,
            boxShadow: `0 0 8px ${color}20`,
          }}
        >
          <span className="text-lg">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden flex-1 min-w-0">
          <figcaption className="flex flex-row items-center gap-2 whitespace-nowrap">
            <span
              className="text-sm font-bold truncate"
              style={{
                color: color,
              }}
            >
              {name}
            </span>
            <span
              className="text-xs font-medium px-2 py-0.5 rounded-md flex-shrink-0"
              style={{
                backgroundColor: `${color}15`,
                color: color,
                border: `1px solid ${color}30`,
              }}
            >
              {time}
            </span>
          </figcaption>
          <p className="text-xs font-normal text-gray-300 mt-0.5 truncate">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};

const ServiceSection = ({
  services,
  className,
}: {
  services: ServiceItem[];
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative flex h-[420px] w-full flex-col overflow-hidden p-2",
        className
      )}
    >
      <AnimatedList>
        {services.map((item, idx) => (
          <ServiceCard {...item} key={idx} />
        ))}
      </AnimatedList>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/6 bg-gradient-to-b from-black to-transparent z-10"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black to-transparent z-10"></div>
    </div>
  );
};

const Services = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative flex flex-col py-8">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-black"></div>
      

      <div className="relative z-10 flex flex-col">
        {/* Main Heading */}
        <div className="text-center py-8 px-4">
          <h2 className="text-4xl md:text-6xl font-black mb-6 relative">
            <span className="bg-gradient-to-r from-teal-300 via-teal-400 to-teal-500 bg-clip-text text-transparent">
              SERVICES
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-teal-400 via-teal-300 to-teal-500 bg-clip-text text-transparent blur-sm opacity-30 -z-10">
              SERVICES
            </div>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-teal-400 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Next-generation technology solutions with{" "}
            <span className="text-teal-400 font-semibold">
              infinite possibilities
            </span>
          </p>
        </div>

        {/* Services 2x2 Grid */}
        <div className="px-6 pb-8">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Web Development */}
            <div className="relative group">
              <div className="absolute inset-0 bg-black rounded-2xl blur-lg group-hover:blur-xl transition-all duration-500"></div>
              <div className="relative bg-black backdrop-blur-xl rounded-2xl p-6 border border-teal-900/50 hover:border-teal-700/60 transition-all duration-500 h-[540px] flex flex-col">
                <h2 className="text-2xl font-bold text-center mb-6 bg-gradient-to-r from-teal-400 to-teal-300 bg-clip-text text-transparent">
                  WEB DEVELOPMENT
                </h2>
                <div className="flex-1">
                  <ServiceSection services={webDevInfinite} />
                </div>
              </div>
            </div>

            {/* Software Development */}
            <div className="relative group">
              <div className="absolute inset-0 bg-black rounded-2xl blur-lg group-hover:blur-xl transition-all duration-500"></div>
              <div className="relative bg-black backdrop-blur-xl rounded-2xl p-6 border border-teal-900/50 hover:border-teal-700/60 transition-all duration-500 h-[540px] flex flex-col">
                <h2 className="text-2xl font-bold text-center mb-6 bg-gradient-to-r from-teal-400 to-teal-300 bg-clip-text text-transparent">
                  SOFTWARE DEVELOPMENT
                </h2>
                <div className="flex-1">
                  <ServiceSection services={softwareDevInfinite} />
                </div>
              </div>
            </div>

            {/* Database */}
            <div className="relative group">
              <div className="absolute inset-0 bg-black rounded-2xl blur-lg group-hover:blur-xl transition-all duration-500"></div>
              <div className="relative bg-black backdrop-blur-xl rounded-2xl p-6 border border-teal-900/50 hover:border-teal-700/60 transition-all duration-500 h-[540px] flex flex-col">
                <h2 className="text-2xl font-bold text-center mb-6 bg-gradient-to-r from-teal-400 to-teal-300 bg-clip-text text-transparent">
                  DATABASE
                </h2>
                <div className="flex-1">
                  <ServiceSection services={databaseInfinite} />
                </div>
              </div>
            </div>

            {/* Cloud AI & Tools */}
            <div className="relative group">
              <div className="absolute inset-0 bg-black rounded-2xl blur-lg group-hover:blur-xl transition-all duration-500"></div>
              <div className="relative bg-black backdrop-blur-xl rounded-2xl p-6 border border-teal-900/50 hover:border-teal-700/60 transition-all duration-500 h-[540px] flex flex-col">
                <h2 className="text-2xl font-bold text-center mb-6 bg-gradient-to-r from-teal-400 to-teal-300 bg-clip-text text-transparent">
                  CLOUD AI & TOOLS
                </h2>
                <div className="flex-1">
                  <ServiceSection services={cloudAIInfinite} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
