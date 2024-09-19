export const Card = ({ children }) => {
    return (
        <div className="bg-[#f5f7fa] shadow-lg p-6 flex flex-col justify-center items-center h-full w-full rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
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
