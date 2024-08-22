import { FunctionComponent } from 'react';
import { Bug, Airplane } from '@phosphor-icons/react';
import BasicTab from './BasicTab';
import UnderlineTab from './UnderlineTab';

const Tabs: FunctionComponent = () => {
  return (
    <div className="flex flex-rows gap-4 w-3/4 mt-20 p-4">
      <div className=" align-middle justify-center">
        <span>Tabs Component List</span>
      </div>
      <div className="flex flex-row gap-4">
        <div className="flex flex-row gap-4">
          <BasicTab message="Bug" icon={<Airplane className="w-4 h-4" />} />
        </div>
      </div>
      <div className="flex flex-row gap-4">
        <div className="flex flex-row gap-4">
          <UnderlineTab message="Bug" icon={<Bug className="w-4 h-4" />} />
        </div>
      </div>
    </div>
  );
};

export default Tabs;
