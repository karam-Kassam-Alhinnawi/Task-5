import { faBars, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import logo from '../assets/logo.png';
import flora from '../assets/flora.png';

const links = [
    {name: 'Home'},
    {name: 'About'},
    {name: 'Services'},
    {name: 'New Property'},
    {name: 'Contact'},
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-transparent w-full relative">
      <div className="container mx-auto my-[10px] px-4 sm:px-6 lg:px-32 flex justify-between items-center h-16 absolute top-0 right-0 z-10">
    
        {/* logo  */}
        <div className='flex justify-center items-center flex-col'>
          <img src={logo} alt="" />
          <img className='mt-2' src={flora} alt="" />
        </div>

        {/* Links  */}
        <div className="hidden md:flex space-x-6">
          {links.map((link) => (
              <a href="#" className="text-[#222222] font-medium ">{link.name}</a>
          ))}
        </div>

        {/* Login Button */}
        <div className="hidden md:flex">
          <button className="bg-[#025595] text-white px-5 py-[10px] w-[135px] rounded">
            Login
          </button>
        </div>

        {/* Hamburger menu  */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800 focus:outline-none">
            {isOpen ? <FontAwesomeIcon icon={faX} /> : <FontAwesomeIcon icon={faBars} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md w-full">
          <div className="flex flex-col space-y-4 py-4">
            {links.map((link) => (
                <a href="#" className="text-[#222222] font-medium text-xl border-2 border-black h-16 pl-4 py-4">{link.name}</a>
            ))}
            <button className="bg-[#025595] text-white px-5 py-[10px] w-[175px] rounded m-auto">
            Login
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
