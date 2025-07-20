import { motion } from "motion/react";
import DarkVeil from "@/blocks/Backgrounds/DarkVeil/DarkVeil";
import { BoxReveal } from "@/components/magicui/box-reveal";

const Hero = () => {
  const handleContactClick = () => {
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden">
      {/* Full screen DarkVeil background */}
      <div className="absolute inset-0 z-0 mt-16">
        <DarkVeil
          hueShift={45}
          noiseIntensity={0}
          scanlineIntensity={0}
          speed={0.8}
          scanlineFrequency={5}
          warpAmount={5}
        />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 flex items-center justify-between min-h-screen px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Left side - Name and description */}
        <motion.div
          className="flex-1 max-w-2xl"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="space-y-6">
            {/* Name with BoxReveal */}
            <div className="space-y-2">
              <BoxReveal width="fit-content" boxColor="#008080" duration={0.8}>
                <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                  Aditya Maurya
                </h1>
              </BoxReveal>
            </div>

            {/* Title with BoxReveal */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <BoxReveal width="fit-content" boxColor="#008080" duration={0.8}>
                <h2 className="text-2xl md:text-3xl font-semibold text-teal-200 leading-relaxed">
                  Fullstack Developer
                </h2>
              </BoxReveal>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="max-w-lg"
            >
              <BoxReveal width="100%" boxColor="#06b6d4" duration={0.8}>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Hey! I'm Aditya Maurya, a passionate fullstack developer who's
                  always evolving with tech. I love doing something crazy and
                  innovative every day! 🚀
                </p>
              </BoxReveal>
            </motion.div>

            {/* Contact Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              <motion.button
                onClick={handleContactClick}
                className="px-8 py-4 bg-gradient-to-r from-teal-600 to-teal-900 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:from-purple-700 hover:to-blue-700"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.button>
            </motion.div>
          </div>
        </motion.div>

        {/* Right side - SIMPLE CARD LIKE JORDAN CHEN */}
        <motion.div
          className="hidden lg:flex items-center justify-end flex-1"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        >
          <div className="bg-teal-900/30 backdrop-blur-sm border border-teal-600/40 rounded-2xl p-6 w-80">
            {/* Large Profile Image */}
            <div className="w-full h-64 rounded-xl overflow-hidden mb-4">
              <img
                src="/adi.svg"
                alt="Aditya Maurya"
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Name and Handle Row */}
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-semibold text-white">
                Aditya Maurya
              </h3>
              <span className="text-teal-300 text-sm">@adityamaurya</span>
            </div>

            {/* Job Title */}
            <p className="text-teal-200 text-base mb-4">Fullstack Developer</p>

            {/* Open to Work Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal-600 text-white text-sm rounded-full">
              <div className="w-2 h-2 bg-teal-200 rounded-full"></div>
              Open to Work
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
