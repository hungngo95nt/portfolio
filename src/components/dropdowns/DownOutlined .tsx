import { FunctionComponent } from 'react';

interface Option {
  id: string;
  value: string;
}
const DownOutlined: FunctionComponent<{
  options: Array<Option>;
}> = ({ options }) => {
  return (
    <div>
      <select id="dropdown" className="bg-gray-50 border-none focus:ring-0">
        {options?.map(({ id, value }) => (
          <option key={id} value={value}>
            {value}
          </option>
        ))}
      </select>{' '}
    </div>
  );
};

export default DownOutlined;
