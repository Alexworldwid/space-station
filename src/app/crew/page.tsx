"use client";

import React, { useState } from 'react';
import { CrewType } from '../utils/types';
import crewData from '../../../public/db/crew.json';
import CrewItem from '../components/shared/crew/navigation';
import Image from 'next/image';


const Crew = () => {
    const [selectedCrew, setSelectedCrew] = useState<CrewType>(crewData.crew[0]);

    const handleCrewClick = (crew: CrewType) => {
        setSelectedCrew(crew);
    };

    return (
        <section className='px-6 pt-6 flex flex-col w-full'>
            <div className='mb-6 bg'>
                <p className='text-white font-semibold text-xl text-center'><span className='text-opacity-70 text-white mr-5'>02</span> MEET YOUR CREW</p>
            </div>

            <div className='grid grid-cols-1'>
                <div className='text-white flex flex-col items-center'>
                    <p className='text-[24px] text-white text-opacity-70'>{selectedCrew.role}</p>
                    <h2 className='text-[26px] mb-4'>{selectedCrew.name}</h2>
                    <p className='text-center text-[20px] text-[#D0D6F9]'>{selectedCrew.bio}</p>
                    <ul className='gap-4 flex my-20'>
                        {crewData.crew.map((crew: CrewType) => (
                            <CrewItem key={crew.id} crew={crew} isActive={selectedCrew?.name === crew.name} onClick={() => {handleCrewClick(crew)}} />
                        ))}
                    </ul>
                </div>

                <div className='flex justify-center'>
                    <Image src={selectedCrew.images.png} priority width={315} height={315} alt={`${selectedCrew.name} image`} />
                </div>
            </div>
        </section>
    );
};

export default Crew;