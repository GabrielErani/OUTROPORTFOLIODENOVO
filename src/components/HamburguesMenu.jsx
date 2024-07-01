import React, { useState } from 'react';
import { MenuIcon, XCircleIcon, HomeIcon, UserIcon, FolderIcon, MailIcon } from 'lucide-react';

const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="lg:hidden w-full flex justify-start items-center fixed z-50">
            <button
                className="p-2 focus:outline-none lg:hidden"
                onClick={toggleSidebar}
            >
                {isOpen ? (
                    <XCircleIcon className="w-8 h-8 text-white transition-transform duration-200 ease-in-out transform hover:rotate-180" />
                ) : (
                    <MenuIcon className="w-8 h-8 text-white transition-transform duration-200 ease-in-out transform hover:rotate-180" />
                )}
            </button>
            <div
                className={`fixed inset-0 bg-gray-900  transform ${isOpen ? 'translate-x-0' : '-translate-x-full'
                    } transition-transform duration-300 ease-in-out lg:hidden flex flex-col`}
            >
                <div className="flex w-full justify-end p-4">
                    <button onClick={toggleSidebar}>
                        <XCircleIcon className="w-8 h-8 text-white transition-transform duration-200 ease-in-out transform hover:rotate-180" />
                    </button>
                </div>
                <nav className="mt-10 p-4 w-full">
                    <ul className="text-white text-lg flex flex-col gap-6">
                        <li className="w-full">
                            <a href="#Home" onClick={toggleSidebar} className="flex items-center gap-4 px-4 py-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all duration-200 ease-in-out">
                                <HomeIcon className="w-6 h-6" />
                                Home
                            </a>
                        </li>
                        <li className="w-full">
                            <a href="#Skills" onClick={toggleSidebar} className="flex items-center gap-4 px-4 py-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all duration-200 ease-in-out">
                                <UserIcon className="w-6 h-6" />
                                Skills
                            </a>
                        </li>
                        <li className="w-full">
                            <a href="#Projects" onClick={toggleSidebar} className="flex items-center gap-4 px-4 py-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all duration-200 ease-in-out">
                                <FolderIcon className="w-6 h-6" />
                                Projects
                            </a>
                        </li>
                        <li className="w-full">
                            <a href="#Contact" onClick={toggleSidebar} className="flex items-center gap-4 px-4 py-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all duration-200 ease-in-out">
                                <MailIcon className="w-6 h-6" />
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>
                <div className="mt-auto mb-4 p-4 flex flex-col items-center">
                    <img
                        src="/GabrielErani.JPG"
                        alt="User Avatar"
                        className="w-10 h-10 rounded-full"
                    />
                    <p className="text-white mt-2">Gabriel Erani</p>
                </div>
            </div>
        </div>
    );
};

export default HamburgerMenu;
