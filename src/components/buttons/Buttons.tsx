import { FunctionComponent, useState } from 'react';
import ToggleButton from './ToggleButton';
import { Moon, Sun, Paperclip } from '@phosphor-icons/react';
import OutlinedButton from './OutlinedButton';

const Buttons: FunctionComponent = () => {
  const [counter, setCounter] = useState(0);
  const [isChecked, setIsChecked] = useState(true);
  const toggleTheme = (checked: boolean) => {
    setIsChecked(checked);
    // Add your theme toggling logic here
  };
  return (
    <div className="flex flex-col gap-4 w-3/4 mt-20 p-4">
      <div className="flex justify-around">
        <div className="flex flex-row gap-4">
          <ToggleButton
            left={<Moon className="w-4 h-4" />}
            right={<Sun className="w-4 h-4" />}
            checked={isChecked}
            onChange={toggleTheme}
          />
        </div>
        <div className="flex flex-col">
          <div>
            <OutlinedButton
              text="Click Me"
              icon={<Paperclip className="w-4 h-4" />}
              onClick={() => {
                setCounter((counter) => counter + 1);
              }}
            />
          </div>

          <div className="flex justify-center">
            <p>{counter}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Buttons;
