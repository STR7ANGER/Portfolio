import React from "react";

const About = () => {
  // Calculate age dynamically
  const birthDate = new Date("2005-07-28");
  const today = new Date();
  const age =
    today.getFullYear() -
    birthDate.getFullYear() -
    (today.getMonth() < birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() &&
      today.getDate() < birthDate.getDate())
      ? 1
      : 0);

  const cards = [
    {
      id: "me",
      title: "Aditya Maurya",
      subtitle: "Fullstack Developer",
      content:
        "A passionate developer who loves building innovative solutions and exploring cutting-edge technologies. Always ready to take on new challenges! 🚀",
      size: "large",
      gradient: "from-purple-500 via-blue-500 to-cyan-500",
      icon: "👨‍💻",
    },
    {
      id: "birthday",
      title: "Birthday",
      content: (
        <div className="text-center space-y-2">
          <div className="text-3xl font-bold text-white">28th July</div>
          <div className="text-sm text-gray-200">Currently {age} years old</div>
          <div className="text-xs text-gray-300">🎂 Every year!</div>
        </div>
      ),
      size: "medium",
      gradient: "from-pink-500 via-rose-500 to-red-500",
      icon: "🎂",
    },
    {
      id: "startups",
      title: "Startups",
      content: (
        <div className="text-center space-y-2">
          <div className="text-4xl font-bold text-white">3</div>
          <div className="text-sm text-gray-200">Worked in startups</div>
          <div className="text-xs text-gray-300">Building the future! 🚀</div>
        </div>
      ),
      size: "small",
      gradient: "from-green-500 via-emerald-500 to-teal-500",
      icon: "🚀",
    },
    {
      id: "companies",
      title: "Companies",
      content: (
        <div className="text-center space-y-2">
          <div className="text-4xl font-bold text-white">2</div>
          <div className="text-sm text-gray-200">Companies worked</div>
          <div className="text-xs text-gray-300">
            Professional experience 💼
          </div>
        </div>
      ),
      size: "small",
      gradient: "from-blue-500 via-indigo-500 to-purple-500",
      icon: "💼",
    },
    {
      id: "experience",
      title: "Experience",
      content: (
        <div className="text-center space-y-2">
          <div className="text-4xl font-bold text-white">3+</div>
          <div className="text-sm text-gray-200">Years of coding</div>
          <div className="text-xs text-gray-300">Still learning! 📚</div>
        </div>
      ),
      size: "small",
      gradient: "from-orange-500 via-amber-500 to-yellow-500",
      icon: "📚",
    },
    {
      id: "skills",
      title: "Core Skills",
      content: (
        <div className="grid grid-cols-1 gap-3 text-sm">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-cyan-400 rounded-full shadow-lg"></div>
            <span className="text-gray-100 font-medium">React & Next.js</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-green-400 rounded-full shadow-lg"></div>
            <span className="text-gray-100 font-medium">Node.js & Express</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-blue-400 rounded-full shadow-lg"></div>
            <span className="text-gray-100 font-medium">
              TypeScript & JavaScript
            </span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-purple-400 rounded-full shadow-lg"></div>
            <span className="text-gray-100 font-medium">
              MongoDB & PostgreSQL
            </span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-pink-400 rounded-full shadow-lg"></div>
            <span className="text-gray-100 font-medium">AWS & Docker</span>
          </div>
        </div>
      ),
      size: "wide",
      gradient: "from-cyan-500 via-purple-500 to-pink-500",
      icon: "⚡",
    },
    {
      id: "education",
      title: "Education",
      content: (
        <div className="text-center space-y-2">
          <div className="text-lg font-bold text-white">Bennett University</div>
          <div className="text-sm text-gray-200">Computer Science</div>
          <div className="text-xs text-gray-300">🎓 Learning & Growing</div>
        </div>
      ),
      size: "medium",
      gradient: "from-teal-500 via-cyan-500 to-blue-500",
      icon: "🎓",
    },
    {
      id: "location",
      title: "Location",
      content: (
        <div className="text-center space-y-2">
          <div className="text-3xl">📍</div>
          <div className="text-lg font-semibold text-white">India</div>
          <div className="text-xs text-gray-300">Available globally</div>
        </div>
      ),
      size: "small",
      gradient: "from-red-500 via-orange-500 to-yellow-500",
      icon: "📍",
    },
    {
      id: "hobbies",
      title: "Hobbies & Interests",
      content: (
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div className="flex items-center gap-2">
            <span className="text-lg">♟️</span>
            <span className="text-gray-100 font-medium">Chess</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-lg">🎮</span>
            <span className="text-gray-100 font-medium">Gaming</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-lg">⚽</span>
            <span className="text-gray-100 font-medium">Football</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-lg">🏸</span>
            <span className="text-gray-100 font-medium">Badminton</span>
          </div>
          <div className="flex items-center gap-2 col-span-2 justify-center">
            <span className="text-lg">🏓</span>
            <span className="text-gray-100 font-medium">Pickleball</span>
          </div>
        </div>
      ),
      size: "wide",
      gradient: "from-yellow-500 via-green-500 to-emerald-500",
      icon: "🎯",
    },
  ];

  const getGridSpan = (size) => {
    switch (size) {
      case "small":
        return "col-span-1 row-span-1";
      case "medium":
        return "col-span-1 row-span-2";
      case "wide":
        return "col-span-2 row-span-1";
      case "large":
        return "col-span-2 row-span-2";
      default:
        return "col-span-1 row-span-1";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 px-6 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
            About Me
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Welcome to my world! Get to know me through these interactive cards
            showcasing my journey, skills, and passions.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-4 gap-6 auto-rows-[200px] mb-12">
          {cards.map((card, index) => (
            <div
              key={card.id}
              className={`
                ${getGridSpan(card.size)}
                group relative overflow-hidden rounded-2xl
                bg-gradient-to-br ${card.gradient}
                hover:scale-105 transform transition-all duration-300 ease-out
                hover:shadow-2xl hover:shadow-purple-500/25
                before:absolute before:inset-0 before:bg-black/20 before:backdrop-blur-sm
                border border-white/10 hover:border-white/20
              `}
              style={{
                animationDelay: `${index * 100}ms`,
                animation: `fadeInUp 0.6s ease-out forwards`,
              }}
            >
              {/* Animated background overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Floating particles effect */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-white/30 rounded-full animate-pulse" />
              <div className="absolute top-8 right-8 w-1 h-1 bg-white/50 rounded-full animate-ping" />

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-white font-bold text-xl tracking-wide">
                    {card.title}
                  </h3>
                  <span className="text-2xl opacity-80 group-hover:scale-110 transition-transform duration-300">
                    {card.icon}
                  </span>
                </div>

                {card.subtitle && (
                  <p className="text-white/90 text-sm font-medium mb-3 tracking-wide">
                    {card.subtitle}
                  </p>
                )}

                <div className="flex-1 flex items-center justify-center">
                  {typeof card.content === "string" ? (
                    <p className="text-white/90 text-sm text-center leading-relaxed font-medium">
                      {card.content}
                    </p>
                  ) : (
                    card.content
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center">
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 backdrop-blur-sm border border-white/10 rounded-full">
            <span className="text-white font-medium">Ready to connect?</span>
            <span className="text-cyan-400 text-xl animate-bounce">🚀</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default About;
