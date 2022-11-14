import React from 'react';

type Props = {
  children: React.ReactNode;
};

const TableContainer = (props: Props) => {
  return (
    <div className="w-full flex justify-center items-center text-white m-auto mt-10">
      {props.children}
    </div>
  );
};

export default TableContainer;
