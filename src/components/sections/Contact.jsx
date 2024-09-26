// Contact.jsx
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { Acknowledgements } from '../Acknowledgements';

export default function Contact() {
  return (
    <div className="2xl:max-w-screen-2xl w-full min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-8 bg-gradient-to-b from-zinc-100 to-zinc-200">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-zinc-600 to-zinc-800 bg-clip-text text-transparent mb-12 2xl:text-7xl text-center break-words">
        Contact & Acknowledgements
      </h1>
      <div className="w-full max-w-6xl flex flex-col lg:flex-row gap-12 items-stretch">
        {/* Seção "Get in Touch" */}
        <div className="flex-1 space-y-6 w-full lg:w-auto">
          <h2 className="text-3xl font-semibold text-zinc-800 mb-6">Get in Touch</h2>
          <a
            href="https://github.com/GabrielErani"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:bg-zinc-50 break-words"
          >
            <FaGithub size={24} className="text-zinc-700" />
            <span className="text-xl text-zinc-800">GitHub</span>
          </a>
          <a
            href="mailto:gabrielciriloerani@gmail.com"
            className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:bg-zinc-50 break-words"
          >
            <FaEnvelope size={24} className="text-zinc-700" />
            <span className="text-xl text-zinc-800">Email</span>
          </a>
          <a
            href="https://www.linkedin.com/in/gabriel-cirilo-erani-85b6391a9?originalSubdomain=br"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:bg-zinc-50 break-words"
          >
            <FaLinkedin size={24} className="text-zinc-700" />
            <span className="text-xl text-zinc-800">LinkedIn</span>
          </a>
        </div>
        
        {/* Seção "Mentions & Publications" */}
        <Acknowledgements />
      </div>
    </div>
  );
}
