import { cn } from "@/lib/utils";

interface Certificate {
  id: number;
  title: string;
  description: string;
  img: string;
  url: string;
  issuer: string;
  date: string;
}

const certificatesData: Certificate[] = [
  {
    id: 1,
    title: "AWS Certified Solutions Architect",
    description:
      "Professional level certification for cloud architecture and design patterns",
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=300&h=200&fit=crop",
    url: "#",
    issuer: "Amazon Web Services",
    date: "2024",
  },
  {
    id: 2,
    title: "React Developer Certification",
    description:
      "Advanced React.js development skills and modern frontend practices",
    img: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=300&h=200&fit=crop",
    url: "#",
    issuer: "Meta",
    date: "2024",
  },
  {
    id: 3,
    title: "Google Cloud Professional",
    description: "Cloud infrastructure and platform services expertise",
    img: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=300&h=200&fit=crop",
    url: "#",
    issuer: "Google Cloud",
    date: "2023",
  },
  {
    id: 4,
    title: "Kubernetes Administrator",
    description: "Container orchestration and cluster management certification",
    img: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=300&h=200&fit=crop",
    url: "#",
    issuer: "Cloud Native Computing Foundation",
    date: "2024",
  },
  {
    id: 5,
    title: "MongoDB Developer",
    description: "NoSQL database design and development proficiency",
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=300&h=200&fit=crop",
    url: "#",
    issuer: "MongoDB Inc.",
    date: "2023",
  },
  {
    id: 6,
    title: "Docker Certified Associate",
    description: "Containerization and Docker platform expertise",
    img: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=300&h=200&fit=crop",
    url: "#",
    issuer: "Docker Inc.",
    date: "2024",
  },
  {
    id: 7,
    title: "Azure DevOps Engineer",
    description: "CI/CD pipelines and cloud DevOps practices",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop",
    url: "#",
    issuer: "Microsoft",
    date: "2023",
  },
  {
    id: 8,
    title: "Python Professional",
    description: "Advanced Python programming and software development",
    img: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=300&h=200&fit=crop",
    url: "#",
    issuer: "Python Software Foundation",
    date: "2024",
  },
];

// Create infinite loop of certificates
const infiniteCertificates = Array.from(
  { length: 10 },
  () => certificatesData
).flat();

const CertificateCard = ({
  title,
  description,
  img,
  url,
  issuer,
  date,
}: Certificate) => {
  return (
    <div className="flex-shrink-0 w-80 mx-4 group cursor-pointer">
      <div
        className={cn(
          "relative overflow-hidden rounded-2xl transition-all duration-500 ease-in-out h-[420px]",
          "bg-black backdrop-blur-xl border border-teal-900/50 hover:border-teal-700/80",
          "shadow-lg hover:shadow-2xl transform hover:scale-105",
          "hover:shadow-teal-500/10 flex flex-col"
        )}
        onClick={() => window.open(url, "_blank")}
      >
        {/* Certificate Image */}
        <div className="relative h-48 overflow-hidden flex-shrink-0">
          <img
            src={img}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

          {/* Date Badge */}
          <div className="absolute top-4 right-4">
            <span className="bg-teal-500/20 backdrop-blur-md border border-teal-400/30 text-teal-300 text-xs font-bold px-3 py-1 rounded-full">
              {date}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col">
          {/* Issuer */}
          <div className="flex items-center gap-2 mb-3">
            <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
            <span className="text-teal-400 text-sm font-medium truncate">
              {issuer}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-lg font-bold text-white mb-3 line-clamp-2 group-hover:text-teal-300 transition-colors duration-300 flex-shrink-0">
            {title}
          </h3>

          {/* Description */}
          <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3 flex-1">
            {description}
          </p>

          {/* View Certificate Button */}
          <div className="flex items-center justify-between mt-auto">
            <span className="text-teal-400 text-sm font-medium group-hover:text-teal-300 transition-colors duration-300">
              View Certificate
            </span>
            <div className="w-6 h-6 rounded-full bg-teal-500/20 flex items-center justify-center group-hover:bg-teal-500/30 transition-colors duration-300">
              <svg
                className="w-3 h-3 text-teal-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Hover Glow Effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-teal-500/5 via-transparent to-teal-500/5 rounded-2xl"></div>
        </div>
      </div>
    </div>
  );
};

const Certificates = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-white overflow-hidden relative flex flex-col py-16">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-teal-black to-teal-950/10"></div>
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-teal-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-teal-600/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-teal-400/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 flex flex-col">
        {/* Section Heading */}
        <div className="text-center py-8 px-4 mb-8">
          <h2 className="text-4xl md:text-6xl font-black mb-6 relative">
            <span className="bg-gradient-to-r from-teal-300 via-teal-400 to-teal-500 bg-clip-text text-transparent">
              CERTIFICATIONS
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-teal-400 via-teal-300 to-teal-500 bg-clip-text text-transparent blur-sm opacity-30 -z-10">
              CERTIFICATIONS
            </div>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-teal-400 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Professional certifications and{" "}
            <span className="text-teal-400 font-semibold">
              technical achievements
            </span>
          </p>
        </div>

        {/* Infinite Scrolling Certificates */}
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-950 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-950 to-transparent z-10 pointer-events-none"></div>

          {/* Scrolling Container */}
          <div className="overflow-hidden">
            <div className="flex animate-scroll">
              {infiniteCertificates.map((certificate, index) => (
                <CertificateCard
                  key={`${certificate.id}-${index}`}
                  {...certificate}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 60s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default Certificates;
