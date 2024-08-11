import { FunctionComponent, ReactNode } from 'react';

const SquareCheckBox: FunctionComponent<{
    text: string;
    icon?: ReactNode;
    onClick: () => void;
}> = ({ text, icon, onClick }) => {
    return (
        <button
            onClick={onClick}
            className="flex flex-row gap-1.5 items-center bg-white text-blue-500 text-sm px-3 py-2 border rounded-md border-blue-500 border-solid border-1"
        >
            {icon}
            {text}
        </button>
    );
};

export default SquareCheckBox;
