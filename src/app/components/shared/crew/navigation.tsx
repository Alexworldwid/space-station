import React from 'react';
import { CrewType } from '@/app/utils/types'; 

type Props = {
  crew: CrewType;
  isActive: boolean;
  onClick: () => void;
};

const CrewItem: React.FC<Props> = ({ crew, isActive, onClick }) => {
  return (
    <li key={crew.id} className={`text-white rounded-full w-4 h-4 cursor-pointer ${isActive ? 'bg-white' : 'bg-white bg-opacity-30' } hover:bg-opacity-60`} 
    onClick={onClick}>
    </li>
  );
};

export default CrewItem;