import { FunctionComponent } from 'react';

const CircleCheckBox: FunctionComponent = () => {
  return (
    <>
      {' '}
      <input
        type="checkbox"
        className="w-3 h-3  bg-[white] rounded-[50%] align-middle border-[1px] border-[solid] border-gray-500 appearance-none outline-[none] cursor-pointer"
      />
    </>
  );
};

export default CircleCheckBox;
