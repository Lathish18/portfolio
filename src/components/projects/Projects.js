import React from 'react'
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";
import {orbit, movietos, projectThree } from "../../assets/index";


const Projects = ({ title, des, src }) => {
  const projectData = [
    {
      title: "ORBIT",
      des: "Developed a modern, responsive web application using Next.js, Tailwind CSS. The project aimed to create a Token Exchange platform.",
      src: {orbit}, 
    },
    {
      title: "MovieTos Website",
      des: "As part of my web development endeavors, I conceptualized and implemented a responsive streaming platform called MovieTos. This project showcases my proficiency in front-end development using HTML, CSS and JavaScript.",
      src: {movietos}, 
    },
    {
      title: "Task Management",
      des: "Implemented a task management system with user registration, login, task management functionalities using Django.",
      src: {projectThree}, 
    },
  ];

  return (
    <section
      id="projects"
      className="w-full py-10 border-b-[1px] border-b-black px-4"
    >
      <div className="flex justify-center items-center text-center">
        <h2 className="text-3xl font-bold text-designColor mb-10">My Projects</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <div
          className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000"
        >
          <div className="w-full h-[80%] overflow-hidden rounded-lg">
            <img
              className="w-full h-60 object-cover group-hover:scale-110 duration-300 cursor-pointer"
              src={orbit}
              alt={orbit}
            />
          </div>
          <div className="w-full mt-5 flex flex-col gap-6">
            <div>
              <div className="flex items-center justify-between">
                <h3 className="text-base uppercase text-designColor font-normal">
                  Orbit
                </h3>
                <div className="flex gap-2">
                  <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                    <BsGithub />
                  </span>
                  <a href='https://orbit-topaz-five.vercel.app/dashboard/swap' target='_blank' className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                    <FaGlobe />
                  </a>
                </div>
              </div>
              <p className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300">
                Developed a modern, responsive web application using Next.js, Tailwind CSS. The project aimed to create a Token Exchange platform.
              </p>
            </div>
          </div>
        </div>
        <div
          className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000"
        >
          <div className="w-full h-[80%] overflow-hidden rounded-lg">
            <img
              className="w-full h-60 object-cover group-hover:scale-110 duration-300 cursor-pointer"
              src={movietos}
              alt={movietos}
            />
          </div>
          <div className="w-full mt-5 flex flex-col gap-6">
            <div>
              <div className="flex items-center justify-between">
                <h3 className="text-base uppercase text-designColor font-normal">
                  MovieTos Website
                </h3>
                <div className="flex gap-2">
                  <a href='https://github.com/Lathish18/movietos' target='_blank' className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                    <BsGithub />
                  </a>
                  <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                    <FaGlobe />
                  </span>
                </div>
              </div>
              <p className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300">
                As part of my web development endeavors, I conceptualized and implemented a responsive streaming platform called MovieTos. This project showcases my proficiency in front-end development using HTML, CSS and JavaScript.
              </p>
            </div>
          </div>
        </div>
        <div
          className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000"
        >
          <div className="w-full h-[80%] overflow-hidden rounded-lg">
            <img
              className="w-full h-60 object-cover group-hover:scale-110 duration-300 cursor-pointer"
              src={projectThree}
              alt={orbit}
            />
          </div>
          <div className="w-full mt-5 flex flex-col gap-6">
            <div>
              <div className="flex items-center justify-between">
                <h3 className="text-base uppercase text-designColor font-normal">
                  Task Management
                </h3>
                <div className="flex gap-2">
                  <a href='https://github.com/Lathish18/taskmanagement' target='_blank' className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                    <BsGithub />
                  </a>
                  <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                    <FaGlobe />
                  </span>
                </div>
              </div>
              <p className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300">
                Implemented a task management system with user registration, login, task management functionalities using Django.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


export default Projects