import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const CarouselCard = ({ title, imageUrl, description, visitLink }) => {
    return (
        <div className="relative w-[300px] h-[400px] rounded-[20px] overflow-hidden shadow-lg">
            {/* Background Image */}
            <img
                src={imageUrl}
                alt={title}
                className="w-full h-full object-cover"
            />

            {/* Overlay Content */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-4">
                <h3 className="text-white text-xl font-semibold">{title}</h3>
                <button
                    onClick={() => window.open(visitLink, "_blank")}
                    className="absolute bottom-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md"
                >
                    <span className="text-black text-lg">→</span>
                </button>
            </div>

            {/* Description */}
            <div className="p-4 bg-white">
                <p className="text-gray-700 text-sm">{description}</p>
            </div>
        </div>
    );
};

export default CarouselCard;