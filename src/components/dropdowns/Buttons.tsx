import { FunctionComponent, useState } from 'react';
import SolidButton from './SolidButton';
import { Smiley, Paperclip } from '@phosphor-icons/react';
import OutlinedButton from './OutlinedButton';

const Buttons: FunctionComponent = () => {
    const [counter, setCounter] = useState(0);
    return (
        <div className="flex flex-col gap-4 w-3/4 mt-20 p-4">
            <div className="justify-center">
                <p>{counter}</p>
            </div>
            <div className="flex flex-row gap-4">
                <div>
                    <SolidButton
                        text="Solid button"
                        icon={<Smiley className="w-4 h-4" />}
                        onClick={() => {
                            setCounter((counter) => counter + 1);
                        }}
                    />
                </div>
                <div>
                    <OutlinedButton
                        text="Outlined button"
                        icon={<Paperclip className="w-4 h-4" />}
                        onClick={() => {
                            setCounter((counter) => counter + 1);
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Buttons;
