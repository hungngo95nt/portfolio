import { FunctionComponent, ReactNode } from 'react';

const ToggleButton: FunctionComponent<{
  left?: ReactNode;
  right?: ReactNode;
  checked: boolean;
  onChange: (checked: boolean) => void;
}> = ({ left, right, checked, onChange }) => {
  return (
    <div className="slide-toggle">
      <input
        id="guidLater"
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <label htmlFor="guidLater">
        <div> {left}</div>
        <div>{right}</div>
      </label>
    </div>
  );
};

export default ToggleButton;
