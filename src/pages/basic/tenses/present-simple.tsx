import React from 'react';
import ArticleContainer from '../../../components/article/ArticleContainer';
import ArticleNavigation from '../../../components/article/ArticleNavigation';
import TableContainer from '../../../components/article/TableContainer';
import PageLayout from '../../../components/layouts/PageLayout';

type Props = {};

const PresentSimplePage = (props: Props) => {
  return (
    <PageLayout>
      <ArticleContainer>
        <ArticleNavigation href="basic" title="Present Simple" />

        <table className="text-sm md:text-xl mt-20 w-6/6 md:w-4/6 m-auto custom-table  ">
          <tr>
            <td rowSpan={2} className="text-customBlue  ">
              Affirmative
            </td>
            <td>I, you, we, they + V</td>
          
          </tr>
          <tr>
            <td>He, she, it + Vs</td>
         
          </tr>
          <tr>
            <td rowSpan={2} className="text-customBlue">
              Negative
            </td>
            <td>I, you, we, they + don't + V</td>
           
          </tr>
          <tr>
            <td>He, she, it + doesn't + V</td>
          
          </tr>
          <tr>
            <td rowSpan={2} className="text-customBlue">
              Interrogative
            </td>
            <td>Do + I, you, we, they + V?</td>
          
          </tr>
          <tr>
            <td>Does + he, she, it + V?</td>
           
          </tr>

          <tr>
            <td className="text-customBlue">Use</td>
            <td>
              <ul className="ml-5 list-disc">
                <li>something happens repeatedly</li>
                <li>how often something happens</li>
                <li>one action follows another</li>
                <li>things in general</li>
                <li>
                  with verbs like (<i>to love, to hate, to think</i>)
                </li>
                <li>future meaning: timetables, programmes</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td className="text-customBlue">Signal words</td>
            <td>
              every day, sometimes, always, often, usually, seldom, never, first
              ... then
            </td>
          </tr>
            <tr>
            <td className="text-customBlue">Examples</td>
            <td>
              <ul className="ml-5 list-disc">
                <li>I eat pizza everyday</li>
                <li>She play<span className="text-customBlue">s</span> tennis</li>
                <li>We don't work</li>
                <li>Does he play football every weekend?</li>
                <li>
                 The train arrive<span className="text-customBlue">s</span> at 18:30
                </li>
               
              </ul>
            </td>
          </tr>
        </table>
      </ArticleContainer>
    </PageLayout>
  );
};

export default PresentSimplePage;

 
