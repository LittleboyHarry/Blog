import React from 'react';
import Layout from '@theme/Layout';

import { SolutionsKnowledge } from '../facts/schemas/solutions';
import _solutionsKnowledge from '../facts/solutions.yaml';
const solutionsKnowledge = _solutionsKnowledge as SolutionsKnowledge;

function isValidUrl(str: string) {
  return str.startsWith('http');
}

function Wrapper({ children }: { children: React.ReactElement }) {
  return (
    <div className="container">
      <div style={{ height: '3rem' }}></div>
      <div>{children}</div>
    </div>
  );
}

function Body() {
  return (
    <Layout title="技术问题方案解决汇总">
      <Wrapper>
        <ul>
          {solutionsKnowledge.map((solution, key) => (
            <li {...{ key }}>
              <p>问：{solution.question}</p>
              <p>答：{solution.answer}</p>
              {solution.subjects && (
                <p>主题：{solution.subjects.join(' , ')}</p>
              )}
              {solution.see_also && (
                <>
                  参见：
                  <ul>
                    {solution.see_also.map((ref, key) => (
                      <li {...{ key }}>
                        {isValidUrl(ref) ? <a href={ref}>{ref}</a> : ref}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </li>
          ))}
        </ul>
      </Wrapper>
    </Layout>
  );
}

export default Body;
