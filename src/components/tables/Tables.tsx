import { FunctionComponent } from 'react';
import { Smiley, SmileyAngry, MaskHappy, Bug } from '@phosphor-icons/react';
import TooltipBasic from './CalendarTable';

const Tables: FunctionComponent = () => {
  return (
    <div className="flex flex-col gap-4 w-3/4 mt-20 p-4">
      <div className="justify-center">
        <span>Tooltips Component List</span>
      </div>
      <div className="flex flex-row gap-4">
        <div className="flex flex-row gap-4">
          <TooltipBasic
            message="icon smile"
            children={<Smiley className="w-4 h-4" />}
          />
          <TooltipBasic
            message="icon angry"
            children={<SmileyAngry className="w-4 h-4" />}
          />
          <TooltipBasic
            message="icon happy"
            children={<MaskHappy className="w-4 h-4" />}
          />
          <TooltipBasic
            message="icon bug"
            children={<Bug className="w-4 h-4" />}
          />
        </div>
      </div>
    </div>
  );
};

export default Tables;
