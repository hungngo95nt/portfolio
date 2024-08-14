import { FunctionComponent } from 'react';
import CircleCheckBox from './CircleCheckBox';
import SquareCheckBox from './SquareCheckBox';

const Checkboxes: FunctionComponent = () => {
  return (
    <div className="flex flex-col gap-4 w-3/4 mt-20 p-4">
      <div className="justify-center">
        <p>Checkboxes</p>
      </div>
      <div className="flex flex-row gap-4">
        <div id="1" className="border-2 rounded-md p-2">
          <div className="justify-center">
            <p>Circle CheckBox</p>
          </div>
          <div className="gap-4 mt-4">
            <div className="m-4">
              <CircleCheckBox />
            </div>
          </div>
        </div>
        <div id="2" className="border-2 rounded-md p-2">
          <div className="justify-center">
            <p>Square CheckBox</p>
          </div>
          <div className="gap-4 mt-4">
            <div className="m-4">
              <SquareCheckBox />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkboxes;
