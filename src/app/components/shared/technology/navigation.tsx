import React from 'react';
import { TechnologyType } from '@/app/utils/types';


type Props = {
    technology: TechnologyType;
    isActive: boolean;
    onClick: () => void;
};

const TechnologyItem: React.FC<Props> = ({ technology, isActive, onClick }) => {
    return (
        <li key={technology.id} className={`flex items-center justify-center     `}>
            <button className={`${isActive ? 'bg-white border-black text-[#000000] border' : 'bg-black text-white border-white border'} text-[32px] w-16 h-16 rounded-full hover:bg-white hover:bg-opacity-70 hover:text-black hover:border-black transition-all duration-150 ease-linear`}  
            onClick={onClick}
            >
                {technology.id}
            </button>
        </li>
    );
};

export default TechnologyItem;