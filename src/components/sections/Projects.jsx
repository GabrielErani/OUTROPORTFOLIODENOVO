import { ImageCard } from "../ImageCard";

const ProjectSection = () => {
    const images = "src/calculatorIphone.png";
    return (
    <div className=" min-h-screen h-full w-full flex items-center justify-center flex-col 2xl:max-w-screen-2xl">
                <h1 className="text-5xl font-bold  bg-gradient-to-br from-zinc-400 to-stone-100 bg-clip-text text-transparent p-4 2xl:text-8xl m-10">Projects</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 h-fit w-full p-4">
                   <ImageCard image="/calculatorIphone.png" title={"Iphone Calculator"} />
                   <ImageCard image="/panificadora37.png" title={"Site para padaria"} />
                   <div className="flex justify-center items-center h-full w-full">
                   <h2 className="text-slate-200 text-2xl">Coming soon...</h2>
                   </div>
                </div>
            </div>
);
}
export default ProjectSection;