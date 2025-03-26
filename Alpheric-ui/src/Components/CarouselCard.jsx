import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const CarouselCard = ({ title, imageUrl, description, visitLink }) => {
    return (
        <div className="flex flex-col gap-6">
            {/* Image Card Section */}
            <div className="relative w-[849px] h-[492px] rounded-[20px] overflow-hidden shadow-lg">
                <img
                    src={imageUrl}
                    alt={title}
                    className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-4">
                    <h3 className="text-white text-[64px] font-semibold">{title}</h3>
                    <button
                        onClick={() => window.open(visitLink, "_blank")}
                        className="absolute bottom-4 right-4 w-30 h-15 bg-white/54 p-3 rounded-[60px] hover:bg-white/70 transition-color flex items-center justify-center shadow-md"
                    >
                        <span className="text-black text-3xl font-bold">→</span>
                    </button>
                </div>
            </div>

            {/* Description Section */}
            <div className="w-[849px] bg-white/10 backdrop-blur-sm p-6 rounded-[20px]">
                <p className="text-black font-bold text-[40px] leading-relaxed">{description}</p>
            </div>
        </div>
    );
};

export default CarouselCard;