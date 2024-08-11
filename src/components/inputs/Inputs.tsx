import { FunctionComponent } from 'react';
import { Mailbox } from '@phosphor-icons/react';
import OutLinedInput from './OutLinedInput';

const Inputs: FunctionComponent = () => {
    return (
        <div className="flex flex-col gap-4 w-3/4 mt-20 p-4">
            <div className="justify-center">
                <p></p>
            </div>
            <div className="flex flex-row gap-4">
                <div>
                    <OutLinedInput
                        type="email"
                        icon={<Mailbox className="w-4 h-4" />}
                        placeholder="enter email format"
                    />
                </div>
            </div>
        </div>
    );
};

export default Inputs;
