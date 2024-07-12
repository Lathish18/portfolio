import React from 'react';
import { AiFillAppstore } from 'react-icons/ai';
import { FaGlobe, FaBookOpen } from 'react-icons/fa';
import { SiAntdesign } from 'react-icons/si';
import Title from '../layouts/Title';
import Card from './Card';

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-10 border-b-[1px] border-b-black px-4"
    >
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Web Design"
          des="Crafting visually appealing and user-friendly web interfaces. Ensuring responsive design and seamless user experience across all devices."
          icon={<FaGlobe />}
        />
        <Card
          title="Web Development"
          des="Building robust and scalable web applications. Writing clean, efficient, and maintainable code using the latest web technologies."
          icon={<AiFillAppstore />}
        />
        <Card
          title="Tech Solutions"
          des="Demonstrating innovative applications of advanced technologies to solve real-world problems, showcasing expertise in development, design, and implementation."
          icon={<SiAntdesign />}
        />
        <Card
          title="Continuous Learning"
          des="Staying updated with the latest technologies and continuously improving skills through courses and self-learning.."
          icon={<FaBookOpen />}
        />
      </div>
    </section>
  );
}

export default Features;
