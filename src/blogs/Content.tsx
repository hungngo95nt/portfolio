import { FunctionComponent, useEffect, useState } from 'react';

const Content: FunctionComponent = () => {
  const [test, setTest] = useState<number>(1);

  useEffect(() => {
    if (test === 1) {
      setTest(2);
    }

    console.log(test);
  }, [test]);

  return (
    <div className="h-full bg-opacity-20 px-2 transition duration-100 hover:scale-105 hover:rounded-xl">
      <div className="h-full w-full overflow-hidden">
        <div className="md:flex md:flex-col">
          <div className="md:shrink-0">
            <a href="/blog/2023-09-19-performant-django">
              <img
                alt="Performant Django - How to optimize your Django application?"
                width="640"
                height="360"
                decoding="async"
                data-nimg="1"
                className="h-[180px] w-full rounded-lg border-[1px] border-gray-300 object-cover md:h-48"
                src="https://www.vietanh.dev/posts-data/2023-09-19-high-performant-django/optimized-images/highPerformanceDjango-opt-1920.WEBP"
              />
            </a>
          </div>
          <div className="p-1">
            <h2 className="mt-1 block text-lg font-medium leading-tight text-gray-900 transition duration-500 ease-in-out hover:text-primary-600">
              <a href="/blog/2023-09-19-performant-django">
                Performant Django - How to optimize your Django application?
              </a>
            </h2>
            <div className="text-xs font-normal leading-6 text-gray-500"></div>
            <div className="text-xs font-semibold uppercase tracking-wide text-indigo-500">
              <div className="flex flex-wrap">
                <a href="/tags/backend">
                  <div className="mr-2 mt-1 rounded-lg border border-gray-300 hover:border-gray-700 px-2 py-1 text-xs font-semibold uppercase text-gray-600 transition duration-500 ease-in-out hover:bg-gray-600 hover:text-gray-100 bg-white">
                    Backend{' '}
                  </div>
                </a>
                <a href="/tags/django">
                  <div className="mr-2 mt-1 rounded-lg border border-gray-300 hover:border-gray-700 px-2 py-1 text-xs font-semibold uppercase text-gray-600 transition duration-500 ease-in-out hover:bg-gray-600 hover:text-gray-100 bg-white">
                    Django{' '}
                  </div>
                </a>
              </div>
            </div>
            <p className="mt-2 text-slate-800">
              Experiences and tips for optimizing Django applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
