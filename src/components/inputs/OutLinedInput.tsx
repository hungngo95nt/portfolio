import { FunctionComponent, ReactNode } from 'react';

const OutLinedInput: FunctionComponent<{
    type: string;
    icon?: ReactNode;
    placeholder?: string;
}> = ({ type, icon, placeholder }) => {
    return (
        <div>
            {icon}
            <input
                className="flex flex-row gap-1.5 items-center bg-white-500 text-black text-sm px-3 py-2 rounded"
                placeholder={placeholder}
                typeof={type}
            >
                Inputs
            </input>
        </div>
    );
};
export default OutLinedInput;
