import React from 'react';
import Link from 'next/link';
import PageLayout from '../components/layouts/PageLayout';
import PageList from '../components/list/PageList';
import ListContainer from '../components/list/ListContainer';

type Props = {};

const AdvancedPage = (props: Props) => {
  return (
    <PageLayout>
      <ListContainer>
        <PageList>
          <ul className="  text-3xl ">
            <Link href="intermediate/aaa">
              <li className="list-circle text-3xl hover:text-customBlue transition-all duration-100 cursor-pointer mt-4">
                Passive voice
              </li>
            </Link>
            <Link href="intermediate/aaa">
              <li className="list-circle  hover:text-customBlue transition-all duration-100 cursor-pointer mt-4">
                Reported speech
              </li>
            </Link>
            <Link href="intermediate/aaa">
              <li className="list-circle   hover:text-customBlue transition-all duration-100 cursor-pointer mt-4">
                Relative clause
              </li>
            </Link>
            <Link href="intermediate/aaa">
              <li className="list-circle   hover:text-customBlue transition-all duration-100 cursor-pointer mt-4">
                Modal verbs
              </li>
            </Link>
            <Link href="intermediate/aaa">
              <li className="list-circle   hover:text-customBlue transition-all duration-100 cursor-pointer mt-4">
                Complex object
              </li>
            </Link>
            <Link href="intermediate/aaa">
              <li className="list-circle  hover:text-customBlue transition-all duration-100 cursor-pointer mt-4">
                Complex subject
              </li>
            </Link>
            <Link href="intermediate/aaa">
              <li className="list-circle  hover:text-customBlue transition-all duration-100 cursor-pointer mt-4">
                Inversion, ellipsis, substitution
              </li>
            </Link>
          </ul>
        </PageList>
      </ListContainer>
    </PageLayout>
  );
};

export default AdvancedPage;
