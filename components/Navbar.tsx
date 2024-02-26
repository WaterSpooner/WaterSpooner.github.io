import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image'
export const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <nav className='flex items-center flex-wrap bg-custom-blue p-1 font-yanone-kaffeesatz'>
        <Link href='/'>
          <div className='inline-flex items-center p-1 mr-3 '>
          <Image src="/wave.svg" alt="WaterSpooner Logo" width={50} height={50} />
            <span className='text-xl text-white font-bold uppercase tracking-wide  px-4'>
              Max Spooner
            </span>
          </div>
        </Link>
        <button
          className=' inline-flex p-3 rounded lg:hidden text-white ml-auto hover:text-gray-600 outline-none'
          onClick={handleClick}
        >
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
        {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
        <div
          className={`${
            active ? '' : 'hidden'
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto animate-fade-down`}
        >
          <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
            <Link href='/'>
              <p className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center  hover:text-gray-600 '>
                Home
              </p>
            </Link>
            <Link href='/Projects'>
              <p className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center  hover:text-gray-600'>
                Projects
              </p>
            </Link>
            <Link href='/contact'>
              <p className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center  hover:text-gray-600'>
                CV
              </p>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};