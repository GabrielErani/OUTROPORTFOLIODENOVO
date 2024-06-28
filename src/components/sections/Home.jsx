import HamburgerMenu from "../HamburguesMenu";
import NavBar from "../Navbar";
import TypeWriter from "../TypeWriterAnimation";

const Home = () => {
    return (
        <>
            <div className='min-h-screen 2xl:max-w-screen-2xl w-screen h-full items-center flex flex-col'>
                <NavBar />
                <HamburgerMenu />
                <section className="min-h-screen max-h-screen 2xl:max-w-screen-2xl w-screen h-full items-center flex flex-col justify-center items-center">
                    <TypeWriter />
                </section>
            </div>
        </>
    );
}

export default Home;