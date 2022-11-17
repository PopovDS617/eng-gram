import React from 'react';
import Link from 'next/link';
import { useState } from 'react';
import ArrowBack from '../icons/ArrowBack';

type Props = {
  href: string;
  title: string;
};

const ArticleNavigation = (props: Props) => {
  const [isArrowIcon, setIsArrowIcon] = useState(false);

  const hoverHandler = () => {
    setIsArrowIcon(!isArrowIcon);
  };

  return (
    <div className="flex justify-start items-center w-4/6 ml-10 ">
      <Link href={`/${props.href}`}>
        <div
          className="text-white mr-2 text-xl md:text-3xl cursor-pointer hover:text-customBlue w-20 flex justify-center"
          onMouseEnter={hoverHandler}
          onMouseLeave={hoverHandler}
        >
          {isArrowIcon ? <ArrowBack color="currentColor" /> : props.href}
        </div>
      </Link>
      <span className="mr-2 text-xl md:text-3xl">/</span>
      <div className="text-xl md:text-5xl text-customBlue">{props.title}</div>
    </div>
  );
};

export default ArticleNavigation;
