import React from 'react';

type Props = {
  children: React.ReactNode;
};

const ArticleContainer = (props: Props) => {
  return (
    <div className="w-4/6 flex text-white m-auto mt-10">{props.children}</div>
  );
};

export default ArticleContainer;
