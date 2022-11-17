import React from 'react';

type Props = {
  children: React.ReactNode;
};

const ArticleContainer = (props: Props) => {
  return (
    <div className="w-full flex flex-col text-white items-center justify-start mt-10">
      {props.children}
    </div>
  );
};

export default ArticleContainer;
