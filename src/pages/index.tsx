import Link from 'next/link';
import PageLayout from '../components/layouts/PageLayout';

export default function Home() {
  return (
    <PageLayout>
    <div className="flex flex-col justify-start items-center h-full">
      <div className="h-1/6 pt-5">
          <h1 className="font-segoeBold text-3xl md:text-6xl text-customBlue  text-center pl-10 pr-10 ">
        English grammar
      </h1>
       <h1 className="font-segoeBold text-3xl md:text-6xl text-customBlue   text-center pl-10 pr-10 ">
       in tables and charts
      </h1>
        </div>
    
     
      
      <ul className="text-customBlue font-segoeNorm text-2xl md:text-5xl mt-20">
        <Link href="/basic">
          <li className="mt-10 hover:scale-105 transition-all duration-3000 cursor-pointer">
            Basic
          </li>
        </Link>
        <Link href="/intermediate">
          <li className="mt-10 hover:scale-105 transition-all duration-3000 cursor-pointer">
            Intermediate
          </li>
        </Link>
        <Link href="/advanced">
          <li className="mt-10 hover:scale-105 transition-all duration-3000 cursor-pointer">
            Advanced
          </li>
        </Link>
      </ul>
    </div>
      </PageLayout>
  );
}
