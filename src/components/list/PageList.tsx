import React from 'react';

type Props = { children: React.ReactNode };

const PageList = (props: Props) => {
  return (
    <div className="flex flex-col justify-center items-center  ">
      {props.children}
    </div>
  );
};

export default PageList;
