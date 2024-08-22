import { FunctionComponent, useState } from 'react';

const BasicTab: FunctionComponent<{
  message: string;
  icon: React.ReactNode;
}> = ({ icon }) => {
  const [activeButton, setActiveButton] = useState('trigger_first');
  return (
    <div className="flex flex-col gap-4 w-3/4 mt-20 p-4">
      <div className="tab">
        <div className="pt-6">
          <div
            id="root"
            className="w-[390px] rounded-2xl border border-muted bg-background-alt p-3 shadow-sm"
          >
            <div
              id="list"
              className="grid w-full grid-cols-2 gap-1 rounded-lg bg-blend-darken p-1 text-sm font-semibold leading-[0.01em] shadow-sm border-gray-300 bg-gray-300"
            >
              <button
                id="trigger_first"
                onClick={() => setActiveButton('trigger_first')}
                className={`h-8 rounded-md p-2 ${activeButton === 'trigger_first' ? 'bg-white opacity-100' : ''} bg-muted`}
              >
                Outbound
              </button>
              <button
                id="trigger_second"
                onClick={() => setActiveButton('trigger_second')}
                className={`h-8 rounded-md py-2 ${activeButton === 'trigger_second' ? 'bg-white opacity-100' : ''} bg-muted`}
              >
                Inbound
              </button>
            </div>
            <div id="content" className="pt-3">
              <div className="grid grid-cols-3 grid-rows-2 gap-0 p-4 pb-1">
                <div className="text-left">
                  <h4 className="mb-2 text-[20px] font-semibold leading-none tracking-[-0.01em]">
                    Prague
                  </h4>
                  <p className="text-sm font-medium text-muted-foreground">
                    06:05
                  </p>
                </div>
                <div className="self-end text-center">
                  <p className="text-sm font-medium text-muted-foreground">
                    3h 30m
                  </p>
                </div>
                <div className="text-right">
                  <h4 className="mb-2 text-[20px] font-semibold leading-none tracking-[-0.01em]">
                    Malaga
                  </h4>
                  <p className="text-sm font-medium text-muted-foreground">
                    06:05
                  </p>
                </div>
                <div className="relative col-span-3">
                  <hr className="border-1 relative top-4 h-px border-dashed border-border-input" />

                  <div className="absolute left-1/2 -translate-x-1/2 bg-background-alt p-1">
                    <div className="size-6 rotate-90 text-muted-foreground" />
                    {icon}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicTab;
