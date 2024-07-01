import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

const Contact = () => {
    return (
        <div className="2xl:max-w-screen-2xl w-screen h-full flex flex-col items-center justify-center p-8" >
            <h1 className="text-5xl font-bold bg-gradient-to-r from-zinc-400 to-zinc-700 bg-clip-text text-transparent m-4 2xl:text-8xl">Contact</h1>
            <div className="flex flex-col md:flex-row gap-8">
                <a href="https://github.com/GabrielErani" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <FaGithub size={32} />
                    <span className="text-xl md:text-2xl">GitHub</span>
                </a>
                <a href="mailto:gabrielciriloerani@gmail.com" className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <FaEnvelope size={32} />
                    <span className="text-xl md:text-2xl">Email</span>
                </a>
                <a href="https://www.linkedin.com/in/gabriel-cirilo-erani-85b6391a9?originalSubdomain=br" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <FaLinkedin size={32} />
                    <span className="text-xl md:text-2xl">LinkedIn</span>
                </a>
               
            </div>
        </div>
    );
}

export default Contact;
