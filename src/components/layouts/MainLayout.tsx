import React from 'react';
import Navbar from '../Navbar';
import { useRouter } from 'next/router';

type Props = {
  children: React.ReactNode;
};

const MainLayout = (props: Props) => {
  const router = useRouter();
  const currentPath = router.pathname;

  return (
    <div className="h-screen bg-customGray">
      {currentPath !== '/' && <Navbar />}
      {props.children}
    </div>
  );
};

export default MainLayout;
