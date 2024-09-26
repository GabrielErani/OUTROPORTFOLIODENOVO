// Contact.js
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { Acknowledgements } from '../Acknowledgements';

export default function Contact() {
  return (
    <div className="2xl:max-w-screen-2xl w-full min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-b from-zinc-100 to-zinc-200">
      <h1 className="text-5xl font-bold bg-gradient-to-r from-zinc-600 to-zinc-800 bg-clip-text text-transparent mb-12 2xl:text-7xl">
        Contact & Acknowledgements
      </h1>
      <div className="w-full max-w-6xl flex flex-col lg:flex-row gap-12 items-stretch">
        {/* Get in Touch Section */}
        <div className="flex-1 space-y-6 w-full lg:w-auto">
          <h2 className="text-3xl font-semibold text-zinc-800 mb-6">Get in Touch</h2>
          <a
            href="https://github.com/GabrielErani"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:bg-zinc-50"
          >
            <FaGithub size={24} className="text-zinc-700" />
            <span className="text-xl text-zinc-800">GitHub</span>
          </a>
          <a
            href="mailto:gabrielciriloerani@gmail.com"
            className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:bg-zinc-50"
          >
            <FaEnvelope size={24} className="text-zinc-700" />
            <span className="text-xl text-zinc-800">Email</span>
          </a>
          <a
            href="https://www.linkedin.com/in/gabriel-cirilo-erani-85b6391a9?originalSubdomain=br"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:bg-zinc-50"
          >
            <FaLinkedin size={24} className="text-zinc-700" />
            <span className="text-xl text-zinc-800">LinkedIn</span>
          </a>
        </div>
        
        {/* Mentions & Publications Section */}
        <Acknowledgements />
      </div>
    </div>
  );
}
