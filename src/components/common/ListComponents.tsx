import { FunctionComponent } from 'react';

const ListComponents: FunctionComponent = () => {
  return (
    <div className="flex flex-col p-4 gap-2 mt-16 w-1/4">
      <a
        href="/components/buttons"
        className="text-purple-500 hover:underline hover:text-purple-600"
      >
        Buttons
      </a>
      <a
        href="/components/inputs"
        className="text-purple-500 hover:underline hover:text-purple-600"
      >
        Inputs
      </a>
      <a
        href="/components/checkboxes"
        className="text-purple-500 hover:underline hover:text-purple-600"
      >
        Checkboxes
      </a>
      <a
        href="/components/radios"
        className="text-purple-500 hover:underline hover:text-purple-600"
      >
        Radios
      </a>
      <a
        href="/components/dropdowns"
        className="text-purple-500 hover:underline hover:text-purple-600"
      >
        Dropdowns
      </a>
      <a
        href="/components/tooltips"
        className="text-purple-500 hover:underline hover:text-purple-600"
      >
        Tooltips
      </a>
    </div>
  );
};

export default ListComponents;
