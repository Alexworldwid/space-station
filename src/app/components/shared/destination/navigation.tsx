import React from 'react';
import { DestinationType } from '@/app/utils/types'; 

type Props = {
  destination: DestinationType;
  isActive: boolean;
  onClick: () => void;
};

const DestinationItem: React.FC<Props> = ({ destination, isActive, onClick }) => {
  return (
    <li className="text-white">
      <button
        onClick={onClick}
        className={`${isActive ? 'border-b-2 border-b-white' : ''} text-xl hover:border-b-2 hover:border-b-white hover:border-opacity-60`}
      >
        {destination.name}
      </button>
    </li>
  );
};

export default DestinationItem;