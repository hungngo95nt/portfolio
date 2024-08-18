import { FunctionComponent, useEffect, useState } from 'react';
import { Mailbox, FileSearch } from '@phosphor-icons/react';
import OutLinedInput from './OutLinedInput';
import SearchInput from './SearchInput';
import DropdownInput from './DropdownInput';

const Inputs: FunctionComponent = () => {
  const dataTelList = [
    { code: '+1', name: 'US' },
    { code: '+84', name: 'VN' },
    // Add more country codes as needed
  ];

  const [message, setMessage] = useState('');

  const handleEnter = (data: string) => {
    setMessage(data);
  };

  const notifications = (message: string) => {
    if (message) {
      alert(`input value: ${message}`);
    }
  };

  useEffect(() => {
    notifications(message);
  }, [message]);

  return (
    <div className="flex flex-row gap-4 w-3/4 mt-20 p-4">
      <div id="1">
        <div className="justify-center">
          <p>Input with Label</p>
        </div>
        <div className="flex flex-row gap-4 border-2 rounded mt-4">
          <div className="m-4">
            <OutLinedInput
              onEnter={handleEnter}
              type="email"
              title="Email"
              icon={<Mailbox className="w-4 h-4" />}
              placeholder="name@e-mail.com"
            />
          </div>
        </div>
      </div>
      <div id="2">
        <div className="justify-center">
          <p>Input with keyboard shortcut search</p>
        </div>
        <div className="flex flex-row gap-4 border-2 rounded mt-4">
          <div className="m-4">
            <SearchInput
              onEnter={handleEnter}
              type="text"
              title="Quick Search"
              icon={<FileSearch className="w-4 h-4" />}
              placeholder="text here"
            />
          </div>
        </div>
      </div>
      <div id="3">
        <div className="justify-center">
          <p>Input with inline leading dropdown</p>
        </div>
        <div className="flex flex-row gap-4 border-2 rounded mt-4">
          <div className="m-4">
            <DropdownInput
              onEnter={handleEnter}
              type="tel"
              title="Phone Number"
              dataList={dataTelList}
              placeholder="+1 1234-5678"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inputs;
