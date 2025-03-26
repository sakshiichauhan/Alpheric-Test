import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from "framer-motion";
const Let = () => {
    const nextSectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: nextSectionRef, offset: ["start center", "end start"]
    });
    const translateY = useTransform(scrollYProgress, [0, 1], [300, -300]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.50]);


    return (
        <section ref={nextSectionRef} className='h-screen flex flex-col justify-center items-center font-instrument-sans translate-y-40'>
            <motion.div
                className='flex flex-col items-center'
                initial={{ scale: 0.55, x: 0 }}
                animate={{ y: -100 }}
                transition={{ ease:"easeInOut" }}
                style={{ translateY, scale }}
            >
                    <div className="text-[40px] sm:text-[60px] md:text-[100px] lg:text-[140px] text-center font-semibold leading-tight">
                    Let Alpheric take 
                       
                    </div>
                    <div className="text-[40px] sm:text-[60px] md:text-[100px] lg:text-[140px] text-center font-semibold leading-tight">
                    your project to the 
                       <br/>next level
                    </div>
                    <div className="text-gray-500 text-[18px] sm:text-[22px] md:text-[32px] lg:text-[40px] text-center mt-4">
                    Your success story could be next! 🚀
                    </div>
                    
                   
            </motion.div>
        </section>
    )
}

export default Let
