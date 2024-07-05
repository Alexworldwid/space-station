import React from 'react';
import { TechnologyType } from '@/app/utils/types';


type Props = {
    technology: TechnologyType;
    isActive: boolean;
    onClick: () => void;
};

const TechnologyItem: React.FC<Props> = ({ technology, isActive, onClick }) => {
    return (
        <li key={technology.id} className={`flex items-center justify-center  text-[32px] cursor-pointer w-16 h-16 text-white bg-black border border-white rounded-full hover:bg-white hover:bg-opacity-70 hover:text-black hover:border-black transition-all duration-150 ease-linear ${isActive ? 'bg-white border-black text-black' : ''}`} 
        onClick={onClick}
        >
            <p>{technology.id}</p>
        </li>
    );
};

export default TechnologyItem;