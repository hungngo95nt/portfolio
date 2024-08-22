import { FunctionComponent } from 'react';

const UnderlineTab: FunctionComponent<{
  message: string;
  icon: React.ReactNode;
}> = ({ message, icon }) => {
  return (
    <div className="flex flex-col gap-4 w-3/4 mt-20 p-4">
      <div className="tab">
        <div className="pt-6">
          <div
            id="root"
            className="w-full rounded-2xl border border-muted bg-background-alt p-3 shadow-sm"
          >
            <div
              id="list"
              className="grid w-full grid-cols-4 gap-1 items-center align-middle rounded-lg bg-blend-darken p-1 text-sm font-semibold leading-[0.01em] shadow-sm border-gray-300 bg-gray-300"
            >
              <div>
                <button>{icon}</button>
              </div>
              <div>
                <button>{icon}</button>
              </div>
              <div>
                <button>{icon}</button>
              </div>
              <div>
                <button>{icon}</button>
              </div>
            </div>
            <div id="content" className="pt-3">
              <div className="grid grid-cols-3 grid-rows-2 gap-0 p-4 pb-1">
                {message}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnderlineTab;
