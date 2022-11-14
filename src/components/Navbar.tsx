import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

type Props = {};

const Navbar = (props: Props) => {
  const router = useRouter();
  const currentPath = router.pathname;

  return (
    <div className="flex w-full justify-center p-2">
      home
      <ul className="    border-transparent p-2 font-segoeNorm text-2xl flex justify-center w-full">
        <Link href="/basic">
          <li
            className={`border-transparent mt-2 mr-7 pb-2 transition-all duration-300 cursor-pointer ${
              currentPath === '/basic'
                ? 'text-customBlue border-customBlue border-b-2'
                : 'hover:border-b-2 hover:border-white text-white'
            }`}
          >
            Basic
          </li>
        </Link>
        <Link href="/intermediate">
          <li
            className={`border-transparent mt-2 mr-7 pb-2 transition-all duration-300 cursor-pointer ${
              currentPath === '/intermediate'
                ? 'text-customBlue border-customBlue border-b-2'
                : 'hover:border-b-2 hover:border-white text-white'
            }`}
          >
            Intermediate
          </li>
        </Link>
        <Link href="/advanced">
          <li
            className={`border-transparent mt-2 mr-7 pb-2 transition-all duration-300 cursor-pointer ${
              currentPath === '/advanced'
                ? 'text-customBlue border-customBlue border-b-2'
                : 'hover:border-b-2 hover:border-white text-white'
            }`}
          >
            Advanced
          </li>
        </Link>
      </ul>
      Source About
    </div>
  );
};

export default Navbar;
