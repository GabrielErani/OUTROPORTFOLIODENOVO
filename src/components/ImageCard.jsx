export const ImageCard = ({ image, title, description, link }) => {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer" className="w-full h-full flex justify-center items-center transform transition duration-300 hover:scale-105">
            <div className="bg-gradient-to-br from-[#1c1c1c] to-[#2a2a2a] rounded-xl shadow-lg w-80 h-96 flex flex-col justify-start items-center hover:shadow-2xl transition-all duration-300 ease-in-out cursor-pointer group relative overflow-hidden">
                <div className="w-full h-2/3 bg-cover bg-center rounded-t-xl overflow-hidden">
                    <img src={image} alt={title} className="w-full h-full object-cover group-hover:opacity-90 transition-opacity duration-300" loading="lazy"/>
                </div>
                <div className="w-full h-1/3 p-4 flex flex-col justify-between items-center text-center">
                    <h1 className="text-2xl text-slate-200 group-hover:text-slate-100 transition-colors duration-300">{title}</h1>
                    <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300 mt-2">{description}</p>
                    <div className="mt-4">
                        <button className="bg-[#3a3a3a] text-gray-200 py-2 px-4 rounded-lg text-sm hover:bg-[#4a4a4a] transition-colors duration-300">
                            View Project
                        </button>
                    </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none"></div>
            </div>
        </a>
    );
};
