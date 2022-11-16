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

        <table className="text-xl mt-20 w-6/6 md:w-4/6 m-auto custom-table  ">
          <tr>
            <td rowSpan={2} className="text-customBlue  ">
              Affirmative
            </td>
            <td>I, you, we, they + V</td>
            <td>I eat pizza everyday</td>
          </tr>
          <tr>
            <td>He, she, it + Vs</td>
            <td>
              He eat<span className="text-customBlue">s</span> pizza everyday
            </td>
          </tr>
          <tr>
            <td rowSpan={2} className="text-customBlue">
              Negative
            </td>
            <td>I, you, we, they + don't + V</td>
            <td>I don't eat pizza</td>
          </tr>
          <tr>
            <td>He, she, it + doesn't + V</td>
            <td>
              He doesn't eat<span className="text-customBlue">_</span> pizza
            </td>
          </tr>
          <tr>
            <td rowSpan={2} className="text-customBlue">
              Interrogative
            </td>
            <td>Do + I, you, we, they + V?</td>
            <td>Do you eat pizza?</td>
          </tr>
          <tr>
            <td>Does + he, she, it + V?</td>
            <td>
              Does he eat<span className="text-customBlue">_</span> pizza?
            </td>
          </tr>

          <tr>
            <td className="text-customBlue">Use</td>
            <td colSpan={2}>
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
            <td colSpan={2}>
              every day, sometimes, always, often, usually, seldom, never, first
              ... then
            </td>
          </tr>
        </table>
      </ArticleContainer>
    </PageLayout>
  );
};

export default PresentSimplePage;
