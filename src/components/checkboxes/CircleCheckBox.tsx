import { FunctionComponent, useState } from 'react';

const CircleCheckBox: FunctionComponent = () => {
  const [ischeck, SetIscheck] = useState(false);
  return (
    <div className="checkbox-wrapper">
      {' '}
      <input
        type="radio"
        checked={ischeck}
        onClick={() => SetIscheck(!ischeck)}
      />
    </div>
  );
};

export default CircleCheckBox;
