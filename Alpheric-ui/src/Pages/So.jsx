import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from "framer-motion";
const So = () => {
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
                    So, are you ready to
                    </div>
                    <div className="text-[40px] sm:text-[60px] md:text-[100px] lg:text-[140px] text-center font-semibold leading-tight">
                    take your business to
                       
                    </div>
                    <div className="text-[40px] sm:text-[60px] md:text-[100px] lg:text-[140px] text-center font-semibold leading-tight">
                    new heights?
                       
                    </div>
                    
                   
            </motion.div>
        </section>
    )
}

export default So
