import React, { useState } from 'react';

const sections = ['Home', 'Skills', 'Projects', 'Contact'];

const NavBar = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };

    return (
        <nav className="lg:block hidden w-fit rounded-full text-white p-3 2xl:px-12 fixed bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-60 mt-4">
            <ul className="flex gap-12 justify-center 2xl:text-4xl relative">
                {sections.map((item, index) => (
                    <li
                        key={item}
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                        className="relative group"
                    >
                        <a href={`#${item}`} className="relative z-20 p-2 navbar-hover">
                            {item}
                        </a>
                        {hoveredIndex === index && (
                            <div
                                className="absolute inset-0 bg-white bg-opacity-20 rounded-full transition-all duration-300"
                                style={{
                                    transitionProperty: 'left, right',
                                    left: `${index * 100}%`,
                                    right: `${(sections.length - index - 1) * 100}%`
                                }}
                            ></div>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default NavBar;
