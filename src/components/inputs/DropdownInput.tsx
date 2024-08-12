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
  <div className="w-full max-w-xs">
    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
      {title}
    </label>
    <div className="mt-1 flex rounded-md shadow-sm">
      <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
        <select
          id="country-code"
          className="bg-gray-50 border-none focus:ring-0"
        >
          {dataList
            ?.map(
              ({ code, name }) => `<option value="${code}">${name}</option>`
            )
            .join('')}
          <option value="+1">US</option>
          <option value="+84">VN</option>
        </select>
      </span>
      <input
        type={type}
        id="phone"
        className="flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
        placeholder={placeholder}
      />
    </div>
  </div>
);
export default DropdownInput;
