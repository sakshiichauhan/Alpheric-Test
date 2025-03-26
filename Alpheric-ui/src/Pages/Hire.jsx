import React, { useRef, useState } from "react";
import CarouselCard from "../Components/CarouselCard";
import card1 from "../assets/Carousel/1.png"
import card2 from "../assets/Carousel/3.png"
import card3 from "../assets/Carousel/4.png"
import card4 from "../assets/Carousel/asset4.jpeg"
import card5 from "../assets/Carousel/asset5.jpeg"

import { motion } from "framer-motion";

const Hire = () => {
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const sliderRef = useRef(null);

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - sliderRef.current.offsetLeft);
        setScrollLeft(sliderRef.current.scrollLeft);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - sliderRef.current.offsetLeft;
        const walk = (x - startX) * 2;
        sliderRef.current.scrollLeft = scrollLeft - walk;
    };

    return (
        <section className="min-h-screen flex flex-col  justify-evenly px-[116px] py-10">
            <h1 className="font-instrument-sans text-[64px] w-full font-semibold ">From Vision to Reality</h1>
            <div className="text-gray-500 text-[18px] sm:text-[22px] md:text-[32px] lg:text-[40px] mt-4">
            The Four Essential Steps to Success
                    </div>
            <div className="w-full">
                <div
                    className="relative overflow-x-auto no-scrollbar cursor-grab active:cursor-grabbing"
                    ref={sliderRef}
                    onMouseDown={handleMouseDown}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseUp}
                    onMouseMove={handleMouseMove}
                >
                    <motion.div
                        initial={{ x: "-100%", opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{
                            type: "tween",
                            duration: 2,
                            ease: "easeOut",
                            opacity: {
                                duration: 2,
                                ease: "easeIn"
                            }
                        }}
                        className="flex gap-2 px-4 py-20 w-max scroll-smooth snap-x snap-mandatory">

                        <CarouselCard
                            imageUrl={card1}
                            title="Validate Your Idea"
                            description="Stay ahead with the latest in tech trends."
                            visitLink="https://example.com"
                        />
                        <CarouselCard
                            imageUrl={card2}
                            title="Build a Prototype"
                            description="Stay ahead with the latest in tech trends."
                            visitLink="https://example.com"
                        />
                        <CarouselCard
                            imageUrl={card3}
                            title="Create a Strategic Roadmap"
                            description="Stay ahead with the latest in tech trends."
                            visitLink="https://example.com"
                        />
                        <CarouselCard
                            imageUrl={card4}
                            title="Get Expert Mentorship"
                            description="Stay ahead with the latest in tech trends."
                            visitLink="https://example.com"
                        />
                       
                        <CarouselCard
                            imageUrl={card3}
                            title="Developer"
                            description="Stay ahead with the latest in tech trends."
                            visitLink="https://example.com"
                        />
                        <CarouselCard
                            imageUrl={card4}
                            title="Designer"
                            description="Stay ahead with the latest in tech trends."
                            visitLink="https://example.com"
                        />
                       <CarouselCard
                            imageUrl={card3}
                            title="Developer"
                            description="Stay ahead with the latest in tech trends."
                            visitLink="https://example.com"
                        />
                        <CarouselCard
                            imageUrl={card4}
                            title="Designer"
                            description="Stay ahead with the latest in tech trends."
                            visitLink="https://example.com"
                        />
                        <CarouselCard
                            imageUrl={card5}
                            title="Marketer"
                            description="Stay ahead with the latest in tech trends."
                            visitLink="https://example.com"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hire;
