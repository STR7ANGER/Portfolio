import { FaReact, FaVuejs, FaNodeJs, FaPython, FaJava, FaGithub, FaDocker, FaAws, FaDatabase, FaJs, FaHtml5, FaCss3Alt, FaGitAlt, FaLinux, FaCloud, FaCogs } from 'react-icons/fa';
import { SiNextdotjs, SiNuxtdotjs, SiFlask, SiGo, SiMongodb, SiPostgresql, SiMysql, SiTypescript, SiRedux, SiFirebase, SiSupabase, SiPrisma, SiVercel, SiNetlify, SiExpress, SiRedis, SiCplusplus, SiJest, SiMongoose, SiRecoil, SiAwsamplify, SiTailwindcss } from 'react-icons/si';
import { useState } from 'react';
import type { ReactNode } from 'react';
import GlareHover from '@/blocks/Animations/GlareHover/GlareHover';

// Types
interface Skill {
  name: string;
  icon: ReactNode;
}
interface SkillCategory {
  name: string;
  icon: ReactNode;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    name: 'Frontend',
    icon: <FaReact className="text-sky-400" size={36} />,
    skills: [
      { name: 'React', icon: <FaReact className="text-sky-400" /> },
      { name: 'Vue', icon: <FaVuejs className="text-green-400" /> },
      { name: 'Next.js', icon: <SiNextdotjs className="text-white" /> },
      { name: 'Nuxt.js', icon: <SiNuxtdotjs className="text-green-300" /> },
      { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" /> },
      { name: 'CSS3', icon: <FaCss3Alt className="text-blue-400" /> },
      { name: 'Tailwind', icon: <SiTailwindcss className="text-cyan-400" /> },
    ],
  },
  {
    name: 'Backend',
    icon: <FaNodeJs className="text-green-500" size={36} />,
    skills: [
      { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
      { name: 'Express', icon: <SiExpress className="text-white" /> },
      { name: 'Flask', icon: <SiFlask className="text-gray-300" /> },
      { name: 'Go', icon: <SiGo className="text-cyan-400" /> },
      { name: 'NestJS', icon: <SiNextdotjs className="text-red-400" /> },
    ],
  },
  {
    name: 'Databases',
    icon: <FaDatabase className="text-purple-400" size={36} />,
    skills: [
      { name: 'MongoDB', icon: <SiMongodb className="text-green-400" /> },
      { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-400" /> },
      { name: 'MySQL', icon: <SiMysql className="text-blue-300" /> },
      { name: 'Redis', icon: <SiRedis className="text-red-400" /> },
    ],
  },
  {
    name: 'Programming Languages',
    icon: <FaCogs className="text-yellow-400" size={36} />,
    skills: [
      { name: 'Java', icon: <FaJava className="text-orange-400" /> },
      { name: 'Python', icon: <FaPython className="text-blue-400" /> },
      { name: 'C++', icon: <SiCplusplus className="text-blue-300" /> },
      { name: 'Go', icon: <SiGo className="text-cyan-400" /> },
      { name: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
      { name: 'TypeScript', icon: <SiTypescript className="text-blue-400" /> },
    ],
  },
  {
    name: 'Tools',
    icon: <FaGithub className="text-white" size={36} />,
    skills: [
      { name: 'GitHub', icon: <FaGithub className="text-white" /> },
      { name: 'Git', icon: <FaGitAlt className="text-orange-400" /> },
      { name: 'Docker', icon: <FaDocker className="text-blue-400" /> },
      { name: 'Linux', icon: <FaLinux className="text-yellow-200" /> },
      { name: 'Vercel', icon: <SiVercel className="text-white" /> },
      { name: 'Netlify', icon: <SiNetlify className="text-green-400" /> },
      { name: 'Jest', icon: <SiJest className="text-red-400" /> },
    ],
  },
  {
    name: 'Cloud & BaaS',
    icon: <FaCloud className="text-blue-300" size={36} />,
    skills: [
      { name: 'AWS', icon: <FaAws className="text-yellow-400" /> },
      { name: 'AWS Amplify', icon: <SiAwsamplify className="text-yellow-400" /> },
      { name: 'Firebase', icon: <SiFirebase className="text-yellow-400" /> },
      { name: 'Supabase', icon: <SiSupabase className="text-green-400" /> },
    ],
  },
  {
    name: 'State Management',
    icon: <SiRedux className="text-purple-400" size={36} />,
    skills: [
      { name: 'Redux', icon: <SiRedux className="text-purple-400" /> },
      { name: 'Context API', icon: <FaReact className="text-sky-400" /> },
      { name: 'Recoil', icon: <SiRecoil className="text-blue-400" /> },
    ],
  },
  {
    name: 'ORMs & Caching',
    icon: <SiPrisma className="text-indigo-400" size={36} />,
    skills: [
      { name: 'Prisma', icon: <SiPrisma className="text-indigo-400" /> },
      { name: 'Mongoose', icon: <SiMongoose className="text-green-400" /> },
      { name: 'TypeORM', icon: <FaDatabase className="text-purple-400" /> },
      { name: 'Redis', icon: <SiRedis className="text-red-400" /> },
    ],
  },
];

interface SkillCardProps {
  category: SkillCategory;
}

const SkillCard = ({ category }: SkillCardProps) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="w-full h-full"
    >
      <GlareHover
        width="100%"
        height="100%"
        background="rgba(20, 31, 41, 0.7)"
        borderRadius="1rem"
        borderColor="#14b8a6"
        glareColor="#14b8a6"
        glareOpacity={0.25}
        glareAngle={-45}
        glareSize={180}
        transitionDuration={400}
        className="bg-teal-900/30 backdrop-blur-md border border-teal-600/40 rounded-2xl shadow-xl w-full h-full min-h-[180px] flex items-center justify-center transition-all duration-300 hover:border-teal-400 hover:shadow-2xl"
        style={{ minHeight: 180 }}
      >
        {!hovered ? (
          <div className="flex flex-col items-center justify-center h-full w-full">
            <div className="mb-2 flex flex-col items-center">
              {category.icon}
              <span className="mt-2 text-lg font-semibold text-white tracking-wide drop-shadow">{category.name}</span>
            </div>
            <span className="mt-4 text-xs text-teal-300 animate-pulse">Hover me</span>
          </div>
        ) : (
          <div className="flex flex-wrap items-center justify-center gap-4 w-full h-full p-2">
            {category.skills.map((skill: Skill, idx: number) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <span className="text-2xl mb-1 drop-shadow-lg">{skill.icon}</span>
                <span className="text-xs text-neutral-100 font-medium drop-shadow">{skill.name}</span>
              </div>
            ))}
          </div>
        )}
      </GlareHover>
    </div>
  );
};

const Skills = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-black via-teal-950/50 to-teal-950/10">
      {/* Content overlay */}
      <div className="relative z-10 flex flex-col items-center justify-start min-h-screen px-4 py-12 max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight drop-shadow-lg bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">My Skills</h1>
        <p className="text-neutral-300 mb-8 text-lg max-w-xl text-center drop-shadow">A showcase of the technologies, languages, and tools I use to build modern, scalable, and beautiful digital experiences.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full max-w-6xl">
          {skillCategories.map((cat) => (
            <SkillCard key={cat.name} category={cat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
