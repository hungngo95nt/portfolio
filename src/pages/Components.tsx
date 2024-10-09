import { FunctionComponent, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Components: FunctionComponent = () => {
  const [test, setTest] = useState<number>(1);

  useEffect(() => {
    if (test === 1) {
      setTest(2);
    }

    console.log(test);
  }, [test]);

  return (
    <div className='class="hidden lg:block fixed z-20 inset-0 top-[3.8125rem] mt-5 right-auto w-[19rem] pb-10 pl-8 pr-6 overflow-y-auto"'>
      <nav id="nav" className="lg:text-sm lg:leading-6 relative">
        <div className="sticky top-0 -ml-0.5 pointer-events-none">
          <div className="h-10 bg-white dark:bg-slate-900"></div>
          <div className="bg-white dark:bg-slate-900 relative pointer-events-auto">
            <button
              type="button"
              className="hidden w-full lg:flex items-center text-sm leading-6 text-slate-400 rounded-md ring-1 ring-slate-900/10 shadow-sm py-1.5 pl-2 pr-3 hover:ring-slate-300 dark:bg-slate-800 dark:highlight-white/5 dark:hover:bg-slate-700"
            >
              <svg
                width="24"
                height="24"
                fill="none"
                aria-hidden="true"
                className="mr-3 flex-none"
              >
                <path
                  d="m19 19-3.5-3.5"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <circle
                  cx="11"
                  cy="11"
                  r="6"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></circle>
              </svg>
              Quick search...
              <span className="ml-auto pl-3 flex-none text-xs font-semibold">
                Ctrl K
              </span>
            </button>
          </div>
          <div className="h-8 bg-gradient-to-b from-white dark:from-slate-900"></div>
        </div>
        <ul>
          <li>
            <a
              className="group flex items-center lg:text-sm lg:leading-6 mb-4 font-semibold text-sky-500 dark:text-sky-400"
              href="/docs/installation"
            >
              <div className="mr-4 rounded-md ring-1 ring-slate-900/5 shadow-sm group-hover:shadow group-hover:ring-slate-900/10 dark:ring-0 dark:shadow-none dark:group-hover:shadow-none dark:group-hover:highlight-white/10 group-hover:shadow-sky-200 dark:group-hover:bg-sky-500 dark:bg-sky-500 dark:highlight-white/10">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.5 7c1.093 0 2.117.27 3 .743V17a6.345 6.345 0 0 0-3-.743c-1.093 0-2.617.27-3.5.743V7.743C5.883 7.27 7.407 7 8.5 7Z"
                    className="fill-sky-200 group-hover:fill-sky-500 dark:fill-sky-300 dark:group-hover:fill-sky-300"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15.5 7c1.093 0 2.617.27 3.5.743V17c-.883-.473-2.407-.743-3.5-.743s-2.117.27-3 .743V7.743a6.344 6.344 0 0 1 3-.743Z"
                    className="fill-sky-400 group-hover:fill-sky-500 dark:fill-sky-200 dark:group-hover:fill-sky-200"
                  ></path>
                </svg>
              </div>
              Documentation
            </a>
          </li>
          <li>
            <a
              className="group flex items-center lg:text-sm lg:leading-6 mb-4 font-medium text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
              href="https://tailwindui.com/components?ref=sidebar"
            >
              <div className="mr-4 rounded-md ring-1 ring-slate-900/5 shadow-sm group-hover:shadow group-hover:ring-slate-900/10 dark:ring-0 dark:shadow-none dark:group-hover:shadow-none dark:group-hover:highlight-white/10 group-hover:shadow-indigo-200 dark:group-hover:bg-indigo-500 dark:bg-slate-800 dark:highlight-white/5">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
                  <path
                    d="m6 9 6-3 6 3v6l-6 3-6-3V9Z"
                    className="fill-indigo-100 group-hover:fill-indigo-200 dark:fill-slate-400"
                  ></path>
                  <path
                    d="m6 9 6 3v7l-6-3V9Z"
                    className="fill-indigo-300 group-hover:fill-indigo-400 dark:group-hover:fill-indigo-300 dark:fill-slate-500"
                  ></path>
                  <path
                    d="m18 9-6 3v7l6-3V9Z"
                    className="fill-indigo-400 group-hover:fill-indigo-500 dark:group-hover:fill-indigo-400 dark:fill-slate-600"
                  ></path>
                </svg>
              </div>
              Components
            </a>
          </li>
          <li>
            <Link
              to="/components/buttons"
              className="group flex items-center lg:text-sm lg:leading-6 mb-4 font-medium text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
            >
              <div className="mr-4 rounded-md ring-1 ring-slate-900/5 shadow-sm group-hover:shadow group-hover:ring-slate-900/10 dark:ring-0 dark:shadow-none dark:group-hover:shadow-none dark:group-hover:highlight-white/10 group-hover:shadow-indigo-200 dark:group-hover:bg-indigo-500 dark:bg-slate-800 dark:highlight-white/5">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
                  <path
                    d="m6 9 6-3 6 3v6l-6 3-6-3V9Z"
                    className="fill-indigo-100 group-hover:fill-indigo-200 dark:fill-slate-400"
                  ></path>
                  <path
                    d="m6 9 6 3v7l-6-3V9Z"
                    className="fill-indigo-300 group-hover:fill-indigo-400 dark:group-hover:fill-indigo-300 dark:fill-slate-500"
                  ></path>
                  <path
                    d="m18 9-6 3v7l6-3V9Z"
                    className="fill-indigo-400 group-hover:fill-indigo-500 dark:group-hover:fill-indigo-400 dark:fill-slate-600"
                  ></path>
                </svg>
              </div>
              Buttons
            </Link>
          </li>
          <li>
            <Link
              to="/components/inputs"
              className="group flex items-center lg:text-sm lg:leading-6 mb-4 font-medium text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
            >
              <div className="mr-4 rounded-md ring-1 ring-slate-900/5 shadow-sm group-hover:shadow group-hover:ring-slate-900/10 dark:ring-0 dark:shadow-none dark:group-hover:shadow-none dark:group-hover:highlight-white/10 group-hover:shadow-indigo-200 dark:group-hover:bg-indigo-500 dark:bg-slate-800 dark:highlight-white/5">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
                  <path
                    d="m6 9 6-3 6 3v6l-6 3-6-3V9Z"
                    className="fill-indigo-100 group-hover:fill-indigo-200 dark:fill-slate-400"
                  ></path>
                  <path
                    d="m6 9 6 3v7l-6-3V9Z"
                    className="fill-indigo-300 group-hover:fill-indigo-400 dark:group-hover:fill-indigo-300 dark:fill-slate-500"
                  ></path>
                  <path
                    d="m18 9-6 3v7l6-3V9Z"
                    className="fill-indigo-400 group-hover:fill-indigo-500 dark:group-hover:fill-indigo-400 dark:fill-slate-600"
                  ></path>
                </svg>
              </div>
              Inputs
            </Link>
          </li>

          <li>
            <Link
              to="/components/checkboxes"
              className="group flex items-center lg:text-sm lg:leading-6 mb-4 font-medium text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
            >
              <div className="mr-4 rounded-md ring-1 ring-slate-900/5 shadow-sm group-hover:shadow group-hover:ring-slate-900/10 dark:ring-0 dark:shadow-none dark:group-hover:shadow-none dark:group-hover:highlight-white/10 group-hover:shadow-indigo-200 dark:group-hover:bg-indigo-500 dark:bg-slate-800 dark:highlight-white/5">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
                  <path
                    d="m6 9 6-3 6 3v6l-6 3-6-3V9Z"
                    className="fill-indigo-100 group-hover:fill-indigo-200 dark:fill-slate-400"
                  ></path>
                  <path
                    d="m6 9 6 3v7l-6-3V9Z"
                    className="fill-indigo-300 group-hover:fill-indigo-400 dark:group-hover:fill-indigo-300 dark:fill-slate-500"
                  ></path>
                  <path
                    d="m18 9-6 3v7l6-3V9Z"
                    className="fill-indigo-400 group-hover:fill-indigo-500 dark:group-hover:fill-indigo-400 dark:fill-slate-600"
                  ></path>
                </svg>
              </div>
              Checkboxes
            </Link>
          </li>

          <li>
            <Link
              to="/components/dropdowns"
              className="group flex items-center lg:text-sm lg:leading-6 mb-4 font-medium text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
            >
              <div className="mr-4 rounded-md ring-1 ring-slate-900/5 shadow-sm group-hover:shadow group-hover:ring-slate-900/10 dark:ring-0 dark:shadow-none dark:group-hover:shadow-none dark:group-hover:highlight-white/10 group-hover:shadow-indigo-200 dark:group-hover:bg-indigo-500 dark:bg-slate-800 dark:highlight-white/5">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
                  <path
                    d="m6 9 6-3 6 3v6l-6 3-6-3V9Z"
                    className="fill-indigo-100 group-hover:fill-indigo-200 dark:fill-slate-400"
                  ></path>
                  <path
                    d="m6 9 6 3v7l-6-3V9Z"
                    className="fill-indigo-300 group-hover:fill-indigo-400 dark:group-hover:fill-indigo-300 dark:fill-slate-500"
                  ></path>
                  <path
                    d="m18 9-6 3v7l6-3V9Z"
                    className="fill-indigo-400 group-hover:fill-indigo-500 dark:group-hover:fill-indigo-400 dark:fill-slate-600"
                  ></path>
                </svg>
              </div>
              Dropdowns
            </Link>
          </li>
          <li>
            <Link
              to="/components/tooltips"
              className="group flex items-center lg:text-sm lg:leading-6 mb-4 font-medium text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
            >
              <div className="mr-4 rounded-md ring-1 ring-slate-900/5 shadow-sm group-hover:shadow group-hover:ring-slate-900/10 dark:ring-0 dark:shadow-none dark:group-hover:shadow-none dark:group-hover:highlight-white/10 group-hover:shadow-indigo-200 dark:group-hover:bg-indigo-500 dark:bg-slate-800 dark:highlight-white/5">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
                  <path
                    d="m6 9 6-3 6 3v6l-6 3-6-3V9Z"
                    className="fill-indigo-100 group-hover:fill-indigo-200 dark:fill-slate-400"
                  ></path>
                  <path
                    d="m6 9 6 3v7l-6-3V9Z"
                    className="fill-indigo-300 group-hover:fill-indigo-400 dark:group-hover:fill-indigo-300 dark:fill-slate-500"
                  ></path>
                  <path
                    d="m18 9-6 3v7l6-3V9Z"
                    className="fill-indigo-400 group-hover:fill-indigo-500 dark:group-hover:fill-indigo-400 dark:fill-slate-600"
                  ></path>
                </svg>
              </div>
              Tooltips
            </Link>
          </li>
          <li>
            <Link
              to="/components/tabs"
              className="group flex items-center lg:text-sm lg:leading-6 mb-4 font-medium text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
            >
              <div className="mr-4 rounded-md ring-1 ring-slate-900/5 shadow-sm group-hover:shadow group-hover:ring-slate-900/10 dark:ring-0 dark:shadow-none dark:group-hover:shadow-none dark:group-hover:highlight-white/10 group-hover:shadow-indigo-200 dark:group-hover:bg-indigo-500 dark:bg-slate-800 dark:highlight-white/5">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
                  <path
                    d="m6 9 6-3 6 3v6l-6 3-6-3V9Z"
                    className="fill-indigo-100 group-hover:fill-indigo-200 dark:fill-slate-400"
                  ></path>
                  <path
                    d="m6 9 6 3v7l-6-3V9Z"
                    className="fill-indigo-300 group-hover:fill-indigo-400 dark:group-hover:fill-indigo-300 dark:fill-slate-500"
                  ></path>
                  <path
                    d="m18 9-6 3v7l6-3V9Z"
                    className="fill-indigo-400 group-hover:fill-indigo-500 dark:group-hover:fill-indigo-400 dark:fill-slate-600"
                  ></path>
                </svg>
              </div>
              Tabs
            </Link>
          </li>
          <li>
            <Link
              to="/components/split"
              className="group flex items-center lg:text-sm lg:leading-6 mb-4 font-medium text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
            >
              <div className="mr-4 rounded-md ring-1 ring-slate-900/5 shadow-sm group-hover:shadow group-hover:ring-slate-900/10 dark:ring-0 dark:shadow-none dark:group-hover:shadow-none dark:group-hover:highlight-white/10 group-hover:shadow-indigo-200 dark:group-hover:bg-indigo-500 dark:bg-slate-800 dark:highlight-white/5">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
                  <path
                    d="m6 9 6-3 6 3v6l-6 3-6-3V9Z"
                    className="fill-indigo-100 group-hover:fill-indigo-200 dark:fill-slate-400"
                  ></path>
                  <path
                    d="m6 9 6 3v7l-6-3V9Z"
                    className="fill-indigo-300 group-hover:fill-indigo-400 dark:group-hover:fill-indigo-300 dark:fill-slate-500"
                  ></path>
                  <path
                    d="m18 9-6 3v7l6-3V9Z"
                    className="fill-indigo-400 group-hover:fill-indigo-500 dark:group-hover:fill-indigo-400 dark:fill-slate-600"
                  ></path>
                </svg>
              </div>
              Split
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Components;
