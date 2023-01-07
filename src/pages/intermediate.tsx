import React from 'react';
import Link from 'next/link';
import PageLayout from '../components/layouts/PageLayout';
import PageList from '../components/list/PageList';
import ListContainer from '../components/list/ListContainer';
import UnderConstructionIcon from '../components/icons/UnderConstruction';

type Props = {};

const IntermediatePage = (props: Props) => {
  return (
    <PageLayout>
      <ListContainer>
        <PageList>
          <ul className="  text-3xl pointer-events-none">
            <Link href="intermediate/aaa">
              <li className="list-circle   hover:text-customBlue hover:list-disc transition-all duration-100 cursor-pointer mt-4  ">
                <span className="flex">
                  Conditional clauses <UnderConstructionIcon />
                </span>
              </li>
            </Link>
            <Link href="intermediate/aaa">
              <li className="list-circle  hover:text-customBlue hover:list-disc transition-all duration-100 cursor-pointer mt-4  ">
                <span className="flex">
                  Prepositions of place <UnderConstructionIcon />
                </span>
              </li>
            </Link>
            <Link href="intermediate/aaa">
              <li className="list-circle   hover:text-customBlue hover:list-disc transition-all duration-100 cursor-pointer mt-4">
                <span className="flex">
                  Prepositions of time <UnderConstructionIcon />
                </span>
              </li>
            </Link>
            <Link href="intermediate/aaa">
              <li className="list-circle   hover:text-customBlue hover:list-disc transition-all duration-100 cursor-pointer mt-4">
                <span className="flex">
                  For, since, during & until <UnderConstructionIcon />
                </span>
              </li>
            </Link>
            <Link href="intermediate/aaa">
              <li className="list-circle   hover:text-customBlue hover:list-disc transition-all duration-100 cursor-pointer mt-4">
                <span className="flex">
                  Whether & if <UnderConstructionIcon />
                </span>
              </li>
            </Link>
            <Link href="intermediate/aaa">
              <li className="list-circle  hover:text-customBlue hover:list-disc transition-all duration-100 cursor-pointer mt-4">
                <span className="flex">
                  Phrasal verbs <UnderConstructionIcon />
                </span>
              </li>
            </Link>
          </ul>
        </PageList>
      </ListContainer>
    </PageLayout>
  );
};

export default IntermediatePage;
