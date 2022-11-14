import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col justify-start items-center h-full">
      <h1 className="font-segoeBold text-8xl text-customBlue h-1/6 pt-5 ">
        English grammar
      </h1>
      <ul className="text-customBlue font-segoeNorm text-6xl">
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
  );
}
