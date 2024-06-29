export const ImageCard = ({ image, title }) => {
    return (
        <div className="w-full h-full flex justify-center items-center">
        <div className="bg-[#0f0f0f] rounded-lg shadow-lg w-72 h-72 flex flex-col justify-center items-center">
            <img src={image} alt={title} className="w-full h-auto p-2 rounded-2xl" />
            <h1 className="text-2xl  text-slate-200">{title}</h1>
        </div>
        </div>
    );
}