
const NavBar = () => {
    return(
        <nav className=" lg:block hidden w-fit rounded-full  text-white p-3  2xl:px-12 fixed bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-60 mt-4">
            <ul className="flex gap-12 justify-center 2xl:text-4xl">
            <li>
                <a href="#Home">Home</a>
            </li>
            <li>
                <a href="#Skills">Skills</a>
            </li>
            <li>
                <a href="Projects">Projects</a>
            </li>
            <li>
                <a href="Contact">Contact</a>
            </li>
            </ul>
        </nav>
    );
}

export default NavBar;