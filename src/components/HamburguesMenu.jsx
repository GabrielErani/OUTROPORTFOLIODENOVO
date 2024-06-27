import React, { useState } from 'react';
import { MenuIcon, XCircleIcon } from 'lucide-react';

const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className=" md:hidden block w-full flex justify-start items-center fixed">
            <button
                className="p-2 focus:outline-none md:hidden"
                onClick={toggleSidebar}
            >
                {isOpen ? (
                    <XCircleIcon className="hidden" />
                ) : (
                    <MenuIcon color="#ffffff" className="w-6 h-6 text-gray-800" />
                )}
            </button>
            <div
                className={`fixed inset-0 bg-gray-800 bg-opacity-75 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'
                    } transition-transform duration-300 ease-in-out md:hidden`}
            >
                <div className="flex w-full justify-end p-4">
                    <button onClick={toggleSidebar} >
                        <XCircleIcon className="w-6 h-6 text-white" />
                    </button>
                </div>
                <nav className="mt-10 p-4">
                    <ul className= "text-white text-2xl divide-y divide-slate-200 grid grid-cols-1 place-content-center gap-4">
                        <li><a href="#home" onClick={toggleSidebar}>Home</a></li>
                        <li><a href="#about" onClick={toggleSidebar}>Skills</a></li>
                        <li><a href="#projects" onClick={toggleSidebar}>Projects</a></li>
                        <li><a href="#contacts" onClick={toggleSidebar}>Contacts</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default HamburgerMenu;
