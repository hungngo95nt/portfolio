import { FunctionComponent } from 'react';

const ListComponents: FunctionComponent = () => {
  return (
    <div className="flex flex-col p-4 gap-2 mt-16">
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
        Input
      </a>
      <a
        href="/components/checkboxes"
        className="text-purple-500 hover:underline hover:text-purple-600"
      >
        Checkbox
      </a>
      <a
        href="/components/radios"
        className="text-purple-500 hover:underline hover:text-purple-600"
      >
        Radio
      </a>
      <a
        href="/components/dropdowns"
        className="text-purple-500 hover:underline hover:text-purple-600"
      >
        Dropdown
      </a>
      <a
        href="/components/tooltips"
        className="text-purple-500 hover:underline hover:text-purple-600"
      >
        Tooltip
      </a>
    </div>
  );
};

export default ListComponents;
