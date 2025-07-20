import { motion } from "motion/react";
import DarkVeil from "@/blocks/Backgrounds/DarkVeil/DarkVeil";
import { BoxReveal } from "@/components/magicui/box-reveal";
import AdityaCard from "@/components/AdityaCard";

const Hero = () => {
  const handleContactClick = () => {
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Custom items for ChromaGrid - only Aditya's card
  const adityaCard = [
    {
      image: "/adi.svg",
      title: "Aditya Maurya",
      subtitle: "Fullstack Developer",
      handle: "@adityamaurya",
      borderColor: "#004721",
      gradient: "linear-gradient(145deg,#006666,#004c4c)",
    },
  ];

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden">
      {/* Full screen DarkVeil background */}
      <div className="absolute inset-0 z-0 mt-12">
        <DarkVeil 
          hueShift={45}
          noiseIntensity={0.02}
          scanlineIntensity={0.1}
          speed={0.3}
          scanlineFrequency={2}
          warpAmount={0.1}
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
              <BoxReveal width="fit-content" boxColor="#6366f1" duration={0.8}>
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
              <BoxReveal width="fit-content" boxColor="#8b5cf6" duration={0.8}>
                <h2 className="text-2xl md:text-3xl font-semibold text-purple-300 leading-relaxed">
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
                  Hey! I'm Aditya Maurya, a passionate fullstack developer who's always evolving with tech. 
                  I love doing something crazy and innovative every day! 🚀
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
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:from-purple-700 hover:to-blue-700"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.button>
            </motion.div>
          </div>
        </motion.div>

        {/* Right side - Aditya's custom card */}
        <motion.div 
          className="hidden lg:flex items-center justify-end flex-1"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        >
          <div className="relative">
            {/* Aditya's custom card */}
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <AdityaCard
                image={adityaCard[0].image}
                title={adityaCard[0].title}
                subtitle={adityaCard[0].subtitle}
                handle={adityaCard[0].handle}
                borderColor={adityaCard[0].borderColor}
                gradient={adityaCard[0].gradient}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
