import { useRef, useState, useEffect } from "react"
import { motion, useInView } from "framer-motion";
import { MoveRight, X, VolumeOff, Volume2, ChevronLeft, ChevronRight } from "lucide-react";
import videsectionImage from "../assets/Homepage/design-asset-cropped.png";
import playButton from "../assets/Videos/play.png";
//import asset from "../assets/Homepage/asset.png"
import reelPoster from "../assets/Homepage/reelPoster.png"
import alpheric_animation from "../assets/Homepage/alpheric-gif.gif"
import girl from "../assets/girls.png";

const HomePage = () => {
    const videoRef = useRef(null);
    const mainVideoRef = useRef(null);
    const [isShowingPanel, setIsShowingPanel] = useState(true);
    const [isMuted, setIsMuted] = useState(true);
    const [isPlaying, setIsPlaying] = useState(false);
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.muted = true;
            videoRef.current.autoplay = true;
            videoRef.current.playsInline = true;
            videoRef.current.loop = true;
            videoRef.current.play().catch(error => {
                console.error("Error attempting to play:", error);
            });
        }
    }, []);

    const handleVolumeToggle = () => {
        if (videoRef.current) {
            if (isMuted) {
                videoRef.current.muted = false;
                videoRef.current.volume = 1;
            } else {
                videoRef.current.muted = true;
                videoRef.current.volume = 0;
            }
            setIsMuted(!isMuted);
        }
    };

    const handleMainVideoClick = () => {
        if (mainVideoRef.current.paused) {
            mainVideoRef.current.play();
            setIsPlaying(true);
        } else {
            mainVideoRef.current.pause();
            setIsPlaying(false);
        }
    };

    const textVariants = {
        hidden: {
            x: -200,
            opacity: 0
        },
        visible: (custom) => ({
            x: 0,
            opacity: 1,
            transition: {
                type: "spring",
                damping: 20,
                stiffness: 100,
                delay: custom * 0.2,
                duration: 0.8
            }
        })
    };

    const videoVariants = {
        hidden: {
            x: 200,
            opacity: 0
        },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                type: "spring",
                damping: 20,
                stiffness: 100,
                delay: 0.4,
                duration: 0.8
            }
        }
    };

    return (
        <section id="#" className="min-h-screen w-full bg-[radial-gradient(ellipse_50%_100%_at_top_right,#EDE6FE_10%,#FFFFFF_100%)] overflow-clip">
            <div ref={sectionRef} className="min-h-screen py-10 md:py-20 overflow-hidden">
                <div className="max-w-full flex flex-col px-4 md:px-8 lg:px-18 mt-6 md:mt-10">
                    <div className="flex flex-col space-y-2 font-instrument-sans">
                        <div className="flex flex-row items-center gap-4">
                            <span className="text-[40px] sm:text-[60px] md:text-[100px] lg:text-[140px] font-semibold">
                                Pinpointing
                            </span>
                            <motion.p
                                initial={{ clipPath: "inset(0 100% 0 0)" }}
                                animate={{
                                    clipPath: "inset(0 0 0 0)",
                                    transition: { duration: 1.2, ease: "easeInOut" },
                                }}
                                className="overflow-hidden"
                            >
                                <img
                                    className="h-16 w-20 sm:h-20 sm:w-24 md:h-24 md:w-32 lg:h-32 lg:w-40 bg-[#56c8dc] rounded-full"
                                    src={girl}
                                    alt="Girl"
                                />
                            </motion.p>
                            <div className="flex items-center gap-4">
                                <motion.span
                                    initial={{ x: -100 }}
                                    animate={{
                                        x: 0,
                                        transition: {
                                            delay: 0.4,
                                            duration: 1.2,
                                            type: "spring",
                                            stiffness: 70,
                                            damping: 15,
                                        },
                                    }}
                                     className="text-[40px] sm:text-[60px] md:text-[100px] lg:text-[140px] font-semibold"
                                >
                                    your
                                </motion.span>
                                <div className="w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-full overflow-hidden">
                                    <img src={alpheric_animation} alt="alpheric-logo" className="w-full h-full object-cover" />
                                </div>
                            </div>
                        </div>
                        <div className="text-[40px] sm:text-[60px] md:text-[100px] lg:text-[140px] font-semibold">
                            digital needs
                        </div>
                    </div>

                    <div className="text-gray-500 space-y-2 mt-4">
                        <div className="text-[18px] sm:text-[22px] md:text-[32px] lg:text-[40px]">
                            You’re already heading in the right direction, and we’re here to
                        </div>
                        <div className="text-[18px] sm:text-[22px] md:text-[32px] lg:text-[40px]">
                            take you further. Let’s work together to fine-tune your vision
                        </div>
                        <div className="text-[18px] sm:text-[22px] md:text-[32px] lg:text-[40px]">
                            and achieve the outcomes you’ve been striving for. We’re
                        </div>
                        <div className="text-[18px] sm:text-[22px] md:text-[32px] lg:text-[40px]">
                            excited to help you make it happen!
                        </div>
                    </div>

                    <motion.div
                        variants={videoVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        className="relative px-4 md:px-0 mt-8"
                    >
                        <video
                            className="w-full rounded-xl md:rounded-2xl h-auto"
                            ref={mainVideoRef}
                            src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                            poster={videsectionImage}
                            onClick={handleMainVideoClick}
                        />
                        {!isPlaying && (
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ duration: 0.2 }}
                                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hover:bg-white/10 rounded-full p-2 md:p-4 z-10"
                                onClick={handleMainVideoClick}
                            >
                                <img className="w-20 md:w-35" src={playButton} alt="Play button" />
                            </motion.button>
                        )}
                    </motion.div>
                </div>
            </div>

            <div className="w-full lg:w-1/2 relative h-full flex items-center justify-center lg:justify-end">
                {/* Video panel */}
                {isShowingPanel && (
                    <div className="fixed bottom-12 md:bottom-25 md:right-8 bg-slate-900 text-white rounded-3xl sm:rounded-4xl h-[280px] sm:h-[350px] md:h-[409px] w-[180px] sm:w-[200px] md:w-[230px] z-50">
                        <div className="relative">
                            <video
                                src="https://rondesignlab.com/video/common/intercom.mp4"
                                className="w-full object-cover rounded-3xl sm:rounded-4xl"
                                ref={videoRef}
                                poster={reelPoster}
                                autoPlay
                                playsInline
                                muted
                            />
                            <button
                                onClick={() => setIsShowingPanel(false)}
                                className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-white h-[24px] w-[24px] sm:h-[32px] sm:w-[32px] rounded-lg sm:rounded-xl text-black z-10 hover:bg-black hover:text-white flex justify-center items-center p-1"
                            >
                                <X size={16} className="sm:hidden" />
                                <X size={25} className="hidden sm:block" />
                            </button>

                            <button
                                onClick={handleVolumeToggle}
                                className="absolute top-2 sm:top-4 left-2 sm:left-4 bg-white h-[24px] w-[24px] sm:h-[32px] sm:w-[32px] rounded-lg sm:rounded-xl text-black z-10 hover:bg-black hover:text-white flex justify-center items-center p-1"
                            >
                                {isMuted ? (
                                    <>
                                        <VolumeOff size={16} className="sm:hidden" />
                                        <VolumeOff size={25} className="hidden sm:block" />
                                    </>
                                ) : (
                                    <>
                                        <Volume2 size={16} className="sm:hidden" />
                                        <Volume2 size={25} className="hidden sm:block" />
                                    </>
                                )}
                            </button>
                        </div>
                    </div>
                )}

                {/* Toggle button for panel */}
                <button
                    className="fixed bottom-16 sm:bottom-24 md:bottom-30 right-0 sm:-right-3 md:-right-5 bg-white text-black rounded-l-4xl h-12 w-6 sm:h-16 sm:w-8 md:h-20 md:w-10 z-50 hover:bg-black hover:text-white transition-all duration-300 hover:scale-105 flex items-center"
                    onClick={() => setIsShowingPanel(true)}
                >
                    {isShowingPanel ? (
                        <ChevronRight size={16} className="sm:hidden" />
                    ) : (
                        <ChevronLeft size={16} className="sm:hidden" />
                    )}
                    {isShowingPanel ? (
                        <ChevronRight size={24} className="hidden sm:block" />
                    ) : (
                        <ChevronLeft size={24} className="hidden sm:block" />
                    )}
                </button>
            </div>
        </section>
    );
};

export default HomePage;
