import { ArrowDown } from "lucide-react";
import HamburgerMenu from "../HamburguesMenu";
import NavBar from "../Navbar";
import TypeWriter from "../TypeWriterAnimation";

const Home = () => {
    return (
        <div className='2xl:max-w-screen-2xl w-screen h-full items-center flex flex-col'>
<NavBar />
            
            <HamburgerMenu />
            <section className="min-h-screen max-h-screen 2xl:max-w-screen-2xl w-screen h-full flex flex-col justify-center items-center">
                <div className="h-full justify-center flex items-center">
                    <TypeWriter />
                </div>
                <ArrowDown color="#ffffff" size={50} className="mb-4"/>
            </section>
        </div>
    );
}

export default Home;