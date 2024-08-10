import { FunctionComponent, useState } from 'react';
import SolidButton from './SolidButton';
import { Smiley } from '@phosphor-icons/react';

const Buttons: FunctionComponent = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div className="flex flex-row gap-4 w-full mt-20">
      <p>{counter}</p>
      <SolidButton
        text="Solid button"
        icon={<Smiley className="w-4 h-4" />}
        onClick={() => {
          setCounter((counter) => counter + 1);
        }}
      />
    </div>
  );
};

export default Buttons;
