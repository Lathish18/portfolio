import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaLinkedinIn, FaReact, FaDownload, FaGoogle } from "react-icons/fa";
import { SiTailwindcss, SiPython, SiNextdotjs, SiDjango } from "react-icons/si";
import { BsGithub } from "react-icons/bs"
import { Tooltip } from 'antd'

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Professional Coder.", "Full Stack Developer.", "Frontend Developer."],
      loop: true,
      typeSpeed: 30,
      deleteSpeed: 20,
      delaySpeed: 4000,
    });

    const handleDownload = () => {
      const resumeUrl = process.env.PUBLIC_URL + '/Lathish-S.pdf';
      window.open(resumeUrl, '_blank');
    };
    

  return (
    <div className="w-full flex flex-col gap-10">
      <div className="flex flex-col gap-2 md:gap-5 text-center">
        <h4 className="text-sm md:text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-4xl md:text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Lathish</span>
        </h1>
        <h2 className="text-2xl md:text-4xl font-semibold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-sm md:text-base font-bodyFont px-0 md:px-4 lg:px-10 mt-5">
        A passionate Web Developer proficient in React, Django, Python, HTML, CSS, JavaScript, Tailwind CSS, and MySQL. Dedicated to developing intricate and robust solutions. I focus on writing maintainable and efficient code to deliver high-quality software that meets user needs and business goals. My persistent desire to learn and adapt to new technologies drives me to excel in full stack development, leveraging my expertise to stay at the forefront of the industry.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-around">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4 items-center flex-wrap">
            <Tooltip title='React'>
              <span className="bannerIcon">
                <FaReact />
              </span>
            </Tooltip>
            <Tooltip title='Node'>
              <span className="bannerIcon">
                <SiNextdotjs />
              </span>
            </Tooltip> 
            <Tooltip title='Tailwind'>
              <span className="bannerIcon">
                <SiTailwindcss />
              </span>
            </Tooltip> 
            <Tooltip title='Python'>
              <span className="bannerIcon">
                <SiPython />
              </span>
            </Tooltip> 
            <Tooltip title='Django'>
              <span className="bannerIcon">
                <SiDjango />
              </span>
            </Tooltip> 
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <a href='https://github.com/Lathish18' className="bannerIcon" target='_blank'>
              <BsGithub />
            </a>
            <a href='https://www.linkedin.com/in/lathish18/' className="bannerIcon" target="_blank">
              <FaLinkedinIn />
            </a>
            {/* <a href='' className="bannerIcon" target="_blank">
              <FaEnvelope />
            </a> */}
            <a href="mailto:lathish1802@gmail.com" className="bannerIcon" target="_blank">
              <FaGoogle />
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            RESUME
          </h2>
          <div className="flex gap-4">
            <button className="bannerIcon" onClick={handleDownload} >
              <FaDownload />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftBanner