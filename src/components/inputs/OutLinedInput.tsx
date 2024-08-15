import { FunctionComponent, ReactNode, useState } from 'react';

const OutLinedInput: FunctionComponent<{
  onEnter: (value: string) => void;
  type: string;
  title: string;
  icon?: ReactNode;
  placeholder: string;
}> = ({ onEnter, type, title, icon, placeholder }) => {
  const [inputValue, setInputValue] = useState('');

  const handleKeyDown = (event: {
    key: string;
    preventDefault: () => void;
  }) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      onEnter(inputValue); // Pass the input value to the parent
    }
  };
  return (
    <div>
      <label
        htmlFor="price"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {title}
      </label>
      <div className="relative mt-2 rounded-md shadow-sm justify-between">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <span className="text-gray-500 sm:text-sm">{icon}</span>
        </div>
        <div className="mx-1">
          <input
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            value={inputValue}
            id="price"
            name="price"
            type={type}
            placeholder={placeholder}
            className="block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
    </div>
  );
};
export default OutLinedInput;
