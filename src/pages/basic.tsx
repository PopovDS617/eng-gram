import React from 'react';
import PageLayout from '../components/layouts/PageLayout';
import ListContainer from '../components/list/ListContainer';
import PageList from '../components/list/PageList';
import Link from 'next/link';

type Props = {};

const BasicPage = (props: Props) => {
  return (
    <PageLayout>
      <ListContainer>
        <PageList>
          <div className="text-4xl">Tenses</div>
          <div className="flex flex-col sm:flex-row   sm:w-full justify-center mt-5 mr-10 w-4/6 ">
            <div className="border-2 border-customBlue rounded-lg p-4 mr-5 mt-5 sm:mt-0">
              <Link href="/basic/tenses/past-simple">
                <div className=" text-2xl cursor-pointer hover:text-customBlue transition-all duration-100">
                  Past simple
                </div>
              </Link>
              <Link href="/basic/tenses/present-simple">
                <div className=" text-2xl cursor-pointer hover:text-customBlue transition-all duration-100">
                  Present simple
                </div>
              </Link>
              <Link href="/basic/past-simple">
                <div className=" text-2xl cursor-pointer hover:text-customBlue transition-all duration-100">
                  Future simple
                </div>
              </Link>
              <div> </div>
              <div> </div>
            </div>
            <div className="border-2 border-customBlue rounded-lg p-4  mt-5 sm:mt-0  ">
              <Link href="/basic/past-simple">
                <div className=" text-2xl cursor-pointer hover:text-customBlue transition-all duration-100">
                  Past continuous
                </div>
              </Link>
              <Link href="/basic/past-simple">
                <div className=" text-2xl cursor-pointer hover:text-customBlue transition-all duration-100">
                  Present continuous
                </div>
              </Link>
              <Link href="/basic/past-simple">
                <div className=" text-2xl cursor-pointer hover:text-customBlue transition-all duration-100">
                  Future continuous
                </div>
              </Link>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row sm:w-full justify-center mt-5 mr-10 w-4/6">
            <div className="border-2 border-customBlue rounded-lg p-4 mr-5  mt-5 sm:mt-0">
              <Link href="/basic/past-simple">
                <div className=" text-2xl cursor-pointer hover:text-customBlue transition-all duration-100">
                  Past perfect
                </div>
              </Link>
              <Link href="/basic/past-simple">
                <div className=" text-2xl cursor-pointer hover:text-customBlue transition-all duration-100">
                  Present perfect
                </div>
              </Link>
              <Link href="/basic/past-simple">
                <div className=" text-2xl cursor-pointer hover:text-customBlue transition-all duration-100">
                  Future perfect
                </div>
              </Link>
              <div> </div>
              <div> </div>
            </div>
            <div className="border-2 border-customBlue rounded-lg p-4  mt-5 sm:mt-0  ">
              <Link href="/basic/past-simple">
                <div className=" text-2xl cursor-pointer hover:text-customBlue transition-all duration-100">
                  Past perfect continuous
                </div>
              </Link>
              <Link href="/basic/past-simple">
                <div className=" text-2xl cursor-pointer hover:text-customBlue transition-all duration-100">
                  Present perfect continuous
                </div>
              </Link>
              <Link href="/basic/past-simple">
                <div className=" text-2xl cursor-pointer hover:text-customBlue transition-all duration-100">
                  Future perfect continuous
                </div>
              </Link>
            </div>
          </div>

          <div className="mt-10 text-4xl cursor-pointer hover:text-customBlue transition-all duration-100">
            <Link href="/basic/irregular-verbs">Irregular verbs</Link>
          </div>
        </PageList>
      </ListContainer>
    </PageLayout>
  );
};

export default BasicPage;
