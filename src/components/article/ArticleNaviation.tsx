import React from 'react';
import Link from 'next/link';

type Props = {
  href: string;
  title: string;
};

const ArticleNaviation = (props: Props) => {
  return (
    <div className="flex">
      <Link href={`/${props.href}`}>
        <div className="text-customBlue mr-2 text-3xl">{`${props.href}`}</div>
      </Link>
      <span className="mr-2 text-4xl">/</span>
      <div className="text-4xl">{props.title}</div>
    </div>
  );
};

export default ArticleNaviation;
