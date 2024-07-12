import React, { useState } from 'react';
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { logo } from "../../assets/index";
import { navLinksdata } from '../../constants';
import { Drawer } from 'antd';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const showDrawer = () => {
    setShowMenu(true);
  };
  const onClose = () => {
    setShowMenu(false);
  };

  return (
    <div className="w-full h-24 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600 px-4">
      <div className='text-2xl font-semibold text-designColor'>
        Lathish
      </div>
      <div>
        <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-10">
          {navLinksdata.map(({ _id, title, link }) => (
            <li
              className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
              key={_id}
            >
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
        <span
          onClick={showDrawer}
          className="text-xl mdl:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer"
        >
          <FiMenu />
        </span>
        <Drawer
          onClose={onClose}
          open={showMenu}
          width={300}
          className="h-screen overflow-scroll bg-gray-900 p-4 scrollbar-hide"
        >
          <div className="flex flex-col gap-8 py-2 relative px-5">
            <ul className="flex flex-col gap-6">
              {navLinksdata.map((item) => (
                <li
                  key={item._id}
                  className="text-xl font-normal text-black tracking-wide cursor-pointer  hover:text-designColor duration-300"
                >
                  <Link
                    onClick={onClose}
                    activeClass="active"
                    to={item.link}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Drawer>
      </div>
    </div>
  );
};

export default Navbar;
