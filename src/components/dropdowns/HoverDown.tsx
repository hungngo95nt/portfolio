import { FunctionComponent, useState } from 'react';

interface Option {
  id: string;
  value: string;
}
const HoverDown: FunctionComponent<{
  options: Array<Option>;
}> = ({ options }) => {
  const [selected, SetSelected] = useState('');
  return (
    <div>
      <div>
        <button className="peer px-5 py-2 bg-gray-400 hover:bg-slate-400 rounded-sm">
          {selected ? selected : 'Hover me'}
        </button>
        <div className="hidden peer-hover:flex hover:flex w-[200px] flex-col bg-white drop-shadow-lg">
          {options?.map(({ id, value }) => (
            <a
              id={id}
              onClick={(e) => {
                e.preventDefault();
                SetSelected(value);
              }}
            >
              {value}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HoverDown;
