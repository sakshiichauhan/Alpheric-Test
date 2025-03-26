import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SolutionCard from "../Components/SolutionCard";

// Images imports
import images4 from "../assets/Solutions/image4.png";
import images5 from "../assets/Solutions/image5.png";
import images6 from "../assets/Solutions/image6.png";
import images7 from "../assets/Solutions/image7.png";
import images8 from "../assets/Solutions/image8.png";
import images9 from "../assets/Solutions/image9.png";

const cardsData = [
  {
    title: "Emily Davis",
    subtitle: "Head of Smart Farming Solutions - UX",
    description:
      "“We needed a user experience that could handle the complexity of AgriTech solutions while staying intuitive and user-friendly. Alpheric nailed it—turning our ideas into a design that resonates with our users and stakeholders alike.”",
    imageUrl: images4,
    avatarUrl: images7, 
    tags: ["🚜 AgriTech"],
  },
  {
    title: "Lucas Adams",
    subtitle: "CEO of an Online Language School - UX Product Design",
    description:
      "In a competitive EdTech landscape, standing out is crucial. Alpheric’s expertise in UX design helped us create a unique, standout product that sets us apart from the competition.",
    imageUrl: images5,
    avatarUrl: images8,
    tags: ["📚 EdTech"],
  },
  {
    title: "Evelyn Walker",
    subtitle: "Chief Technology Officer - Landing Page",
    description:
      "We needed a high-impact landing page to launch our product and capture early adopters. Alpheric created a page that not only introduces the product perfectly but also simplifies pre-registration, ensuring a strong start.",
    imageUrl: images6,
    avatarUrl: images9,
    tags: ["☁️ Cloud Computing"],
  },
];

const SolutionPage = () => {
  const containerRef = useRef(null);
  const heroSectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const { scrollYProgress: heroScrollProgress } = useScroll({
    target: heroSectionRef,
    offset: ["start center", "end start"],
  });

  const translateY = useTransform(heroScrollProgress, [0, 1], [0, -300]);
  const scale = useTransform(heroScrollProgress, [0, 1], [1, 0.5]);

  const totalCards = cardsData.length;

  return (
    <div>
      <section
        ref={heroSectionRef}
        className="h-[50vh] flex flex-col font-instrument-sans px-[116px] mb-[-120px]" // Reduced height and added negative margin
      >
        <div className="text-[40px] sm:text-[60px] md:text-[100px] lg:text-[140px] font-semibold leading-tight">
          For Dreamers
        </div>
        <div className="text-gray-500 text-[18px] sm:text-[22px] md:text-[32px] lg:text-[40px] mt-4">
          Dream big, and let us help you make it real. Your vision is
        </div>
        <div className="text-gray-500 text-[16px] sm:text-[20px] md:text-[30px] lg:text-[38px] mt-2">
          our mission, crafted with love and creativity. 💡✨
        </div>
      </section>

      <div
        ref={containerRef}
        className="relative h-[600vh] font-instrument-sans"
      >
        <div className="container hidden">
          {cardsData.map((_, i) => (
            <div key={i} className="flex flex-col gap-2 m-4">
              <div className="text-4xl ">{_.title}</div>
              <div className="text-xl">{_.description}</div>
              <div className="">{_.tags}</div>
              <img className="rounded-4xl m-2 w-70 h-auto" src={_.imageUrl} />
            </div>
          ))}
        </div>
        <div className="flex sticky top-5 h-screen items-center overflow-hidden">
          <div className="relative w-full max-w-7xl mx-auto">
            {cardsData.map((card, index) => (
              <SolutionCard
                key={index}
                title={card.title}
                subtitle={card.subtitle}
                description={card.description}
                imageUrl={card.imageUrl}
                avatarUrl={card.avatarUrl}
                tags={card.tags}
                scrollYProgress={scrollYProgress}
                index={index}
                totalCards={totalCards}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionPage ;