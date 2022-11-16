import React from 'react';
import ArticleContainer from '../../../components/article/ArticleContainer';
import ArticleNavigation from '../../../components/article/ArticleNavigation';
import TableContainer from '../../../components/article/TableContainer';
import PageLayout from '../../../components/layouts/PageLayout';

type Props = {};

const PastSimplePage = (props: Props) => {
  return (
    <PageLayout>
      <ArticleContainer>
        <ArticleNavigation href="basic" title="Past Simple" />

        <table className="text-xl mt-20 w-6/6 md:w-4/6 m-auto custom-table  ">
          <tr>
            <td rowSpan={2} className="text-customBlue  ">
              Affirmative
            </td>
            <td>I + V<sub>ed</sub></td>
            <td>I work<span className="text-customBlue">ed</span> yesterday</td>
          </tr>
          <tr>
            <td>I + V<sub>2</sub></td>
            <td>
              I <span className="text-customBlue">ate</span> pizza yesterday
            </td>
          </tr>
          <tr>
            <td rowSpan={2} className="text-customBlue">
              Negative
            </td>
            <td>I didn't + V</td>
            <td>I didn't work<span className="text-customBlue">_</span> yesterday</td>
          </tr>
          <tr>
            <td>I didn't + V</td>
            <td>
              I didn't <span className="text-customBlue">eat</span> pizza yesterday
            </td>
          </tr>
          <tr>
            <td rowSpan={2} className="text-customBlue">
              Interrogative
            </td>
            <td>Did + I + V?</td>
            <td>Did I work yesterday?</td>
          </tr>
          <tr>
            <td>Did + I + V?</td>
            <td>
              Did I <span className="text-customBlue">eat</span> pizza yesterday?
            </td>
          </tr>

          <tr>
            <td className="text-customBlue">Use</td>
            <td >
              action finished in the past, mostly connected with an expression of time (no connection to the present)
            </td>
          </tr>
          <tr>
            <td className="text-customBlue">Signal words</td>
            <td >
            yesterday, last Monday, two day ago, in 1990
            </td>
          </tr>
        </table>
      </ArticleContainer>
    </PageLayout>
  );
};

export default PastSimplePage;
