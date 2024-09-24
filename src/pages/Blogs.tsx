import { FunctionComponent, useEffect, useState } from 'react';
import Content from '../blogs/Content';

const Blogs: FunctionComponent = () => {
  const [test, setTest] = useState<number>(1);

  useEffect(() => {
    if (test === 1) {
      setTest(2);
    }

    console.log(test);
  }, [test]);

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
      <div className="flex h-screen flex-col justify-between">
        <div className="mb-auto">
          <div className="mx-auto max-w-6xl divide-y divide-gray-400">
            <div className="space-y-2 pb-8 pt-6 md:space-y-5">
              <h1 className="md:leading-14 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl mt-12 sm:leading-10 md:text-5xl">
                Blog
              </h1>
              <ul className="grid grid-cols-1 gap-6 py-12 md:grid-cols-2 xl:grid-cols-3">
                <li className="py-2">
                  <Content />
                </li>
                <li className="py-2">
                  <Content />
                </li>
                <li className="py-2">
                  <Content />
                </li>
                <li className="py-2">
                  <Content />
                </li>
                <li className="py-2">
                  <Content />
                </li>
                <li className="py-2">
                  <Content />
                </li>
                <li className="py-2">
                  <Content />
                </li>
                <li className="py-2">
                  <Content />
                </li>
                <li className="py-2">
                  <Content />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
