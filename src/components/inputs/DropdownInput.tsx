import { FunctionComponent } from 'react';

interface Country {
  code: string;
  name: string;
}

const DropdownInput: FunctionComponent<{
  type: string;
  title: string;
  dataList?: Array<Country>;
  placeholder: string;
}> = ({ type, title, dataList, placeholder }) => (
  <div>
    <label
      htmlFor="phone"
      className="block text-sm font-medium leading-6 text-gray-900"
    >
      {title}
    </label>
    <div className="mt-2 flex flex-row rounded-md shadow-sm">
      <div className="inset-y-0 left-0 flex items-center w-1/5">
        <span className="rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm px-3 py-2 w-full">
          <select
            id="country-code"
            className="bg-gray-50 border-none focus:ring-0"
          >
            {dataList?.map(({ code, name }) => (
              <option key={code} value={code}>
                {name}
              </option>
            ))}
          </select>
        </span>
      </div>

      <div className="w-4/5">
        <input
          type={type}
          id="phone"
          className="block w-full text-left rounded-r-md border border-gray-300 py-1.5 p-7
           text-gray-900 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2
            focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder={placeholder}
        />
      </div>
    </div>
  </div>
);
export default DropdownInput;
