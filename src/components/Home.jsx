import HamburgerMenu from "./HamburguesMenu";
import NavBar from "./Navbar";
import TypeWriter from "./TypeWriterAnimation";

const Home = () => {
    return(
        <>
        <NavBar />
        <HamburgerMenu />
        <div className="min-h-screen 2xl:max-w-screen-2xl w-screen h-full items-center flex flex-col justify-center items-center">
            <TypeWriter />
        </div>
        </>
    );
}

export default Home;