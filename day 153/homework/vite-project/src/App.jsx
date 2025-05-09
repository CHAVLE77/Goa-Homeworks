import React from "react"
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function App() {

  return (
    <>
      <header className="w-full h-20 bg-black">
        <h1 className="text-white text-4xl text-center p-5">Portfolio</h1>
      </header>
      <main>
        <div className="w-140 h-90 mt-20 border-2 m-auto bg-[#f5f5f5]">
          <h1 className="text-4xl text-center p-4">About Me</h1>
          <p className="text-lg leading-relaxed px-6 mt-8">Hi! My name is Nika. I live in Batumi, Georgia, and I work remotely as a software developer at a tech startup. In my free time, I enjoy learning new technologies, reading about AI, and helping people solve problems online. I'm especially passionate about programming and website development—just like you!</p>
        </div>
        <footer className="w-full  h-20 bg-gray-800 absolute bottom-0 flex justify-center gap-5 p-8">
          <FaGithub size={25} className="cursor-pointer"></FaGithub>
          <FaLinkedin size={25} className="cursor-pointer"></FaLinkedin>
          <FaInstagramSquare size={25} className="cursor-pointer"></FaInstagramSquare>
          <MdEmail size={25} className="cursor-pointer"></MdEmail>
        </footer>
      </main>
    </>
  )
}

export default App
