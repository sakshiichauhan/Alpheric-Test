import React from "react";
import { motion, useTransform, useSpring } from "framer-motion";
import SolutionTag from "./SolutionTag";

const SolutionCard = ({ title, subtitle, description, imageUrl, avatarUrl, tags, scrollYProgress, index, totalCards }) => {

    const smoothScrollYProgress = useSpring(scrollYProgress, {
        stiffness: 50,
        damping: 15,
        restDelta: 0.001,
    });

    // Define how much of the scroll should be allocated to each card
    const chunk = 1 / totalCards;
    const start = index * chunk;
    const end = (index + 1) * chunk;

    // Increase overlap between cards to create a dissolve effect
    // This creates a longer crossfade period
    const overlapFactor = 0.3; // 30% overlap between cards

    // Calculate the adjusted fade points with overlap
    const fadeInStart = Math.max(0, start - (chunk * overlapFactor));
    const fadeInEnd = start + (chunk * 0.2);
    const fadeOutStart = end - (chunk * 0.2);
    const fadeOutEnd = Math.min(1, end + (chunk * overlapFactor));

    // Smooth opacity transition for images with extended overlap
    const imageOpacity = useTransform(
        smoothScrollYProgress,
        [fadeInStart, fadeInEnd, fadeOutStart, fadeOutEnd],
        [0, 1, 1, 0]
    );

    const textFadePortion = 0.4 * chunk;

    const textY = useTransform(
        smoothScrollYProgress,
        [start, start + textFadePortion, end - textFadePortion, end],
        [300, 0, 0, -550] //
    );

    // Adjust text opacity to match the image crossfade
    const textOpacity = useTransform(
        smoothScrollYProgress,
        [fadeInStart, fadeInEnd, fadeOutStart, fadeOutEnd],
        [0, 1, 1, 0]
    );

    const tagsY = useTransform(
        smoothScrollYProgress,
        [start, start + textFadePortion, end - textFadePortion, end],
        [0, 1, 1, 0]
    );

    // Longer and smoother transition
    const baseTransition = {
        duration: 2.5,
        ease: "easeInOut",
        delay: 0.2,
    };

    return (
        <div className="absolute inset-0 flex items-center overflow-visible top-6">
            <div className="w-1/2 flex justify-center">
                <motion.div
                    style={{ opacity: imageOpacity }}
                    transition={baseTransition}
                    className="w-full max-w-[594px]"
                >
                    <img
                        src={imageUrl}
                        alt={title}
                        className="w-[500px] h-[700px] object-cover rounded-[36px] shadow-sm"
                    />
                </motion.div>
            </div>

            <div className="w-1/2 px-12 overflow-visible">
                <motion.div
                    style={{ y: textY, opacity: textOpacity }}
                    transition={baseTransition}
                    className="flex flex-col gap-6"
                >
                    {/* Title Section with Avatar and Subtitle */}
                    <div className="flex items-center gap-4">
                        {avatarUrl && (
                            <img
                                src={avatarUrl}
                                alt={`${title} avatar`}
                                className="w-[80px] h-[80px] object-cover rounded-lg shadow-md flex-shrink-0"
                            />
                        )}
                        <div className="min-w-[600px]">
                            <h2 className="font-instrument-sans font-semibold text-7xl leading-tight whitespace-nowrap">
                                {title}
                            </h2>
                            {subtitle && (
                                <p className="font-instrument-sans text-3xl text-gray-600">
                                    {subtitle}
                                </p>
                            )}
                        </div>
                    </div>

                    <p className="font-instrument-sans text-3xl text-gray-600">
                        {description}
                    </p>

                    {tags && tags.length > 0 && (
                        <motion.div
                            style={{ y: tagsY }}
                            transition={baseTransition}
                            className="flex flex-wrap gap-2 mt-4"
                        >
                            {tags.map((tag, tagIndex) => (
                                <div key={tagIndex}>
                                    <SolutionTag tagName={tag} />
                                </div>
                            ))}
                        </motion.div>
                    )}
                </motion.div>
            </div>
        </div>
    );
};

export default SolutionCard;