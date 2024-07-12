import React from 'react'
import LeftBanner from './LeftBanner';
const Banner = () => {
  return (
    <section
      id="home"
      className="w-full py-10 flex gap-10 xl:gap-0 lgl:flex-row items-center border-b-[1px] font-titleFont border-b-black justify-center px-4"
    >
      <LeftBanner />
    </section>
  );
}

export default Banner