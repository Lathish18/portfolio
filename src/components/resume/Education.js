import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10"
    >
      <div>
        <div className="py-3 lgl:py-6 font-titleFont flex flex-col gap-4">
          {/* <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p> */}
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[600px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Web Developer"
            subTitle="Mar 2024 - Present"
            result="Freelancing"
            des="Developed and maintained web applications using React, Next.js, and Django. Implemented responsive design and ensured cross-browser compatibility. Engaged in continuous learning to stay updated with the latest web development trends."
          />
          <ResumeCard
            title="Python Intern"
            subTitle="Dec 2023 - Mar 2024"
            result="Chennai"
            des="Worked on backend development with Django, creating APIs and managing databases. Collaborated with a team to develop scalable solutions and implemented various features to enhance application performance."
          />
        </div>
      </div>

      <div>
        <div className="font-titleFont flex flex-col gap-4 py-3 lgl:py-6">
          {/* <p className="text-sm text-designColor tracking-[4px]">2017 - 2022</p> */}
          <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[600px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-8">
          <ResumeCard
            title="BSc in Physics"
            subTitle="Einstein College pf Arts and Sciences (2019 - 2022)"
            result="7.3/10"
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
          <ResumeCard
            title="HSC"
            subTitle="Adarsh Vidyalaya Matric. Hr. Sec. School (2017 - 2019)"
            result="67.34%"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
