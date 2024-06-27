
const NavBar = () => {
    return(
        <nav className=" md:block hidden w-fit rounded-full  text-white p-3  2xl:px-12 fixed bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-60 ">
            <ul className="flex gap-12 justify-center 2xl:text-4xl">
            <li>
                <a href="#home">Home</a>
            </li>
            <li>
                <a href="#skills">Skills</a>
            </li>
            <li>
                <a href="projects">Projects</a>
            </li>
            <li>
                <a href="contact">Contact</a>
            </li>
            </ul>
        </nav>
    );
}

export default NavBar;