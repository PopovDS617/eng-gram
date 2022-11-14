import React from 'react';

type Props = {
  children: React.ReactNode;
};

const ListContainer = (props: Props) => {
  return <div className="   text-white m-auto mt-10  ">{props.children}</div>;
};

export default ListContainer;
