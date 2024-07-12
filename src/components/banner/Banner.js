import React from 'react'
import LeftBanner from './LeftBanner';
import RightBanner from './RightBanner';
const Banner = () => {
  return (
    <section
      id="home"
      className="w-full pt-10 pb-20 flex gap-10 xl:gap-0 lgl:flex-row items-center border-b-[1px] font-titleFont border-b-black justify-center px-4"
    >
      <LeftBanner />
     {/* <RightBanner /> */}
    </section>
  );
}

export default Banner