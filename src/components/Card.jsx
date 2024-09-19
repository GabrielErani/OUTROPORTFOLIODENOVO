import { useEffect, useRef, useState } from 'react';

export const Card = ({ children }) => {
    const cardRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (window.innerWidth < 768) { // Apenas no mobile
                    if (entry.isIntersecting) {
                        setIsHovered(true);  // Aplica o hover automaticamente
                    } else {
                        setIsHovered(false);
                    }
                }
            },
            { threshold: 1.0 } // O card precisa estar 50% visível para ativar o hover
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => {
            if (cardRef.current) {
                observer.unobserve(cardRef.current);
            }
        };
    }, []);

    return (
        <div
            ref={cardRef}
            className={`bg-[#f5f7fa] shadow-lg p-6 flex flex-col justify-center items-center h-full w-full rounded-xl transition-all duration-300 transform ${isHovered ? 'scale-105 shadow-xl' : ''}`}
        >
            {children}
        </div>
    );
}

export const CardIcon = ({ children }) => {
    return (
        <div className="flex justify-center items-center mb-4">
            {children}
        </div>
    );
}

export const CardTitle = ({ children }) => {
    return (
        <div className="text-lg font-bold text-gray-700">
            {children}
        </div>
    );
}
