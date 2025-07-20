import React from "react";
import { BoxReveal } from "@/components/magicui/box-reveal";

const AboutCard = ({
  title,
  label,
  children,
  className = "",
}: {
  title: string;
  label?: string;
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={`relative rounded-2xl bg-[#0f172a]/90 border border-teal-600/40 backdrop-blur-md shadow-lg p-6 flex flex-col min-h-[180px] text-white ${className}`}
  >
    {label && (
      <span className="text-xs font-semibold text-teal-300 mb-1 uppercase tracking-wide">
        {label}
      </span>
    )}
    <h3 className="text-xl font-bold mb-2 text-white/90">{title}</h3>
    <div className="flex-1 flex items-center text-base text-gray-100 leading-relaxed">{children}</div>
  </div>
);

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

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-black via-teal-950/50 to-teal-950/10 mt-5">
      <div className="relative z-10 flex flex-col items-center min-h-screen px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Heading with BoxReveal */}
        <div className="mb-8 self-start">
          <BoxReveal width="fit-content" boxColor="#008080" duration={0.8}>
            <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight">About Me</h2>
          </BoxReveal>
        </div>
        {/* Intro text with BoxReveal */}
        <div className="mb-12 max-w-xl self-start">
          <BoxReveal width="100%" boxColor="#06b6d4" duration={0.8}>
            <p className="text-lg text-gray-300 leading-relaxed">
              Welcome to my world! Get to know me through these cards showcasing my journey, skills, and passions.
            </p>
          </BoxReveal>
        </div>
        {/* Custom Card Grid */}
        <div className="w-full flex justify-center">
          <div className="w-full max-w-5xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[200px] gap-6">
              <AboutCard title="Aditya Maurya" label="Fullstack Developer" className="col-span-2 row-span-2">
                <div>
                  <div className="mb-2">A passionate developer who loves building innovative solutions and exploring cutting-edge technologies.</div>
                  <div>Always ready to take on new challenges! 🚀</div>
                </div>
              </AboutCard>
              <AboutCard title="Birthday" label="Personal" className="col-span-1 row-span-1">
                <div className="space-y-1">
                  <div className="font-bold text-lg">28th July</div>
                  <div className="text-sm text-gray-300">Currently {age} years old</div>
                  <div className="text-xs text-gray-400">🎂 Every year!</div>
                </div>
              </AboutCard>
              <AboutCard title="Startups" label="Experience" className="col-span-1 row-span-1">
                <div className="space-y-1">
                  <div className="font-bold text-2xl">3</div>
                  <div className="text-sm text-gray-300">Worked in startups</div>
                  <div className="text-xs text-gray-400">Building the future! 🚀</div>
                </div>
              </AboutCard>
              <AboutCard title="Companies" label="Experience" className="col-span-1 row-span-1">
                <div className="space-y-1">
                  <div className="font-bold text-2xl">2</div>
                  <div className="text-sm text-gray-300">Companies worked</div>
                  <div className="text-xs text-gray-400">Professional experience 💼</div>
                </div>
              </AboutCard>
              <AboutCard title="Experience" label="Journey" className="col-span-1 row-span-1">
                <div className="space-y-1">
                  <div className="font-bold text-2xl">3+ years</div>
                  <div className="text-sm text-gray-300">Years of coding</div>
                  <div className="text-xs text-gray-400">Still learning! 📚</div>
                </div>
              </AboutCard>
              <AboutCard title="Core Skills" label="Skills" className="col-span-1 row-span-2">
                <ul className="list-disc pl-4 text-sm space-y-1 text-gray-100">
                  <li>React & Next.js</li>
                  <li>Vue.js & Nuxt.js</li>
                  <li>Node.js & Express</li>
                  <li>TypeScript & JavaScript</li>
                  <li>MongoDB & PostgreSQL</li>
                  <li>AWS & Docker</li>
                </ul>
              </AboutCard>
              <AboutCard title="700+ LeetCode" label="DSA" className="col-span-1 row-span-1">
                <div className="space-y-1">
                  <div className="font-bold text-2xl">700+</div>
                  <div className="text-sm text-gray-300">LeetCode problems solved</div>
                  <div className="text-xs text-yellow-400">DSA Enthusiast 🧠</div>
                </div>
              </AboutCard>
              <AboutCard title="Education" label="Education" className="col-span-1 row-span-1">
                <div className="space-y-1">
                  <div className="font-bold">Bennett University</div>
                  <div className="text-sm text-gray-300">B.Tech in Computer Science and Engineering</div>
                  <div className="text-xs text-cyan-300">Specialization: Cloud Computing</div>
                </div>
              </AboutCard>
              <AboutCard title="School" label="School" className="col-span-1 row-span-1">
                <div className="space-y-1">
                  <div className="font-bold">St. Montfort</div>
                  <div className="text-xs text-gray-400">PCM + CS</div>
                  <div className="text-xs text-gray-400">Schooling foundation</div>
                </div>
              </AboutCard>
              <AboutCard title="Location" label="Location" className="col-span-1 row-span-1">
                <div className="space-y-1">
                  <div className="font-semibold">India</div>
                  <div className="text-xs text-gray-400">Available globally</div>
                </div>
              </AboutCard>
              <AboutCard title="Hobbies & Interests" label="Hobbies" className="col-span-2 row-span-1">
                <ul className="list-none pl-0 text-sm space-y-1 text-gray-100 flex flex-wrap gap-2">
                  <li>♟️ Chess</li>
                  <li>🎮 Gaming</li>
                  <li>⚽ Football</li>
                  <li>🏸 Badminton</li>
                  <li>🏓 Pickleball</li>
                </ul>
              </AboutCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
