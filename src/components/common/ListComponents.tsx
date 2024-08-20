import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

const ListComponents: FunctionComponent = () => {
  return (
    <div className="flex flex-col p-4 gap-2 mt-16 w-1/4">
      <Link
        to="/components/buttons"
        className="text-purple-500 hover:underline hover:text-purple-600"
      >
        Buttons
      </Link>
      <Link
        to="/components/inputs"
        className="text-purple-500 hover:underline hover:text-purple-600"
      >
        Inputs
      </Link>
      <Link
        to="/components/checkboxes"
        className="text-purple-500 hover:underline hover:text-purple-600"
      >
        Checkboxes
      </Link>
      <Link
        to="/components/dropdowns"
        className="text-purple-500 hover:underline hover:text-purple-600"
      >
        Dropdowns
      </Link>
      <Link
        to="/components/tooltips"
        className="text-purple-500 hover:underline hover:text-purple-600"
      >
        Tooltips
      </Link>
    </div>
  );
};

export default ListComponents;
