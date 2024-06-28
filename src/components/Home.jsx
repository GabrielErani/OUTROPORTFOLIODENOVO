import HamburgerMenu from "./HamburguesMenu";
import NavBar from "./Navbar";
import TypeWriter from "./TypeWriterAnimation";

const Home = () => {
    return(
        <>
        <NavBar />
        <HamburgerMenu />
        <section className="min-h-screen 2xl:max-w-screen-2xl w-screen h-full items-center flex flex-col justify-center items-center">
            <TypeWriter />
        </section>
        </>
    );
}

export default Home;