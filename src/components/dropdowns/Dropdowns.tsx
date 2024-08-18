import { FunctionComponent } from 'react';
import DownOutlined from './DownOutlined ';
import HoverDown from './HoverDown';

const Dropdowns: FunctionComponent = () => {
  const options = [
    { id: '1', value: 'option 1' },
    { id: '2', value: 'option 2' },
    // Add more country codes as needed
  ];

  return (
    <div className="flex flex-col gap-4 w-3/4 mt-20 p-4">
      <div className="justify-center">
        <p>Dropdown list components</p>
      </div>
      <div className="flex flex-row gap-4">
        <div>
          <span>Dropdown Basic</span>
          <DownOutlined options={options} />
        </div>
        <div>
          <span>Dropdown Hover</span>
          <HoverDown options={options} />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Dropdowns;
