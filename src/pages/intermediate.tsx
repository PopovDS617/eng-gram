import React from 'react';
import Link from 'next/link';
import PageLayout from '../components/layouts/PageLayout';
import PageList from '../components/list/PageList';
import ListContainer from '../components/list/ListContainer';

type Props = {};

const IntermediatePage = (props: Props) => {
  return (
    <PageLayout>
      <ListContainer>
        <PageList>
          <ul className="  text-3xl">
            <Link href="intermediate/aaa">
              <li className="list-circle text-3xl hover:text-customBlue hover:list-disc transition-all duration-100 cursor-pointer mt-4">
                Conditional clauses
              </li>
            </Link>
            <Link href="intermediate/aaa">
              <li className="list-circle  hover:text-customBlue hover:list-disc transition-all duration-100 cursor-pointer mt-4">
                Prepositions of place
              </li>
            </Link>
            <Link href="intermediate/aaa">
              <li className="list-circle   hover:text-customBlue hover:list-disc transition-all duration-100 cursor-pointer mt-4">
                Prepositions of time
              </li>
            </Link>
            <Link href="intermediate/aaa">
              <li className="list-circle   hover:text-customBlue hover:list-disc transition-all duration-100 cursor-pointer mt-4">
                For, since, during & until
              </li>
            </Link>
            <Link href="intermediate/aaa">
              <li className="list-circle   hover:text-customBlue hover:list-disc transition-all duration-100 cursor-pointer mt-4">
                Whether & if
              </li>
            </Link>
            <Link href="intermediate/aaa">
              <li className="list-circle  hover:text-customBlue hover:list-disc transition-all duration-100 cursor-pointer mt-4">
                Phrasal verbs
              </li>
            </Link>
          </ul>
        </PageList>
      </ListContainer>
    </PageLayout>
  );
};

export default IntermediatePage;
