import { BoxReveal } from "@/components/magicui/box-reveal"
import AboutCard from "@/components/AboutCard"
import { useEffect } from "react"

const aboutCards = [
  {
    color: "#060010",
    title: "Startups",
    description: "Worked in 3 startups",
    label: "Experience",
    className: "col-span-2 row-span-1"
  },
  {
    color: "#060010",
    title: "Companies",
    description: "Worked in 2 companies",
    label: "Experience",
    className: "col-span-1 row-span-1"
  },
  {
    color: "#060010",
    title: "Years",
    description: "3+ years of experience",
    label: "Experience",
    className: "col-span-1 row-span-2"
  },
  {
    color: "#060010",
    title: "Who I Am",
    description: "Cloud enthusiast, builder, lifelong learner",
    label: "Profile",
    className: "col-span-2 row-span-1"
  },
  {
    color: "#060010",
    title: "Core Skills",
    description: "Cloud, Fullstack, DevOps, Leadership",
    label: "Skills",
    className: "col-span-1 row-span-1"
  },
  {
    color: "#060010",
    title: "Education",
    description: "St. Montfort (School), Bennett University (BTech CSE, Cloud Computing)",
    label: "Education",
    className: "col-span-2 row-span-1"
  },
  {
    color: "#060010",
    title: "Location",
    description: "India",
    label: "Location",
    className: "col-span-1 row-span-1"
  },
  {
    color: "#060010",
    title: "Hobbies",
    description: "Gaming, Football, Pickleball, Badminton, Chess",
    label: "Hobbies",
    className: "col-span-2 row-span-1"
  },
]

const About = () => {
  return (
    <div className="flex flex-col items-start gap-6 p-6">
      <BoxReveal width="fit-content">
        <h1 className="text-3xl font-bold">About Me</h1>
      </BoxReveal>
      <BoxReveal width="fit-content" boxColor="#392e4e" duration={0.7}>
        <p className="text-lg max-w-xl">Hi! I’m Aditya, a passionate developer with a love for building impactful products and learning new technologies. Here’s a quick snapshot of my journey so far:</p>
      </BoxReveal>
      <div className="w-full mt-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[minmax(120px,_1fr)] gap-4">
          {aboutCards.map((card, idx) => (
            <AboutCard
              key={idx}
              title={card.title}
              description={card.description}
              label={card.label}
              className={card.className}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default About
