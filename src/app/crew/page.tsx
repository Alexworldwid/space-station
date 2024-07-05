"use client";

import React, { useState } from 'react';
import { CrewType } from '../utils/types';
import crewData from '../../../public/db/crew.json';
import CrewItem from '../components/shared/crew/navigation';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { Bellefair } from 'next/font/google';


const bellefair = Bellefair({weight: ["400"], subsets: ["hebrew"]})

const Crew = () => {
    const [selectedCrew, setSelectedCrew] = useState<CrewType>(crewData.crew[0]);

    const handleCrewClick = (crew: CrewType) => {
        setSelectedCrew(crew);
    };

    return (
        <section className='px-6 md:px-10 pt-6 flex flex-col w-full h-[900px] lg:justify-center lg:items-center'>
            <div className='mb-6 w-full max-w-[1200px]'>
                <p className='text-white font-semibold text-xl text-center md:text-left'><span className='text-opacity-70 text-white mr-5'>02</span> MEET YOUR CREW</p>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 max-w-[1200px] place-items-center h-screen'>
                <AnimatePresence mode='wait'>
                    <motion.div className='text-white flex flex-col items-center lg:items-start'
                    key={selectedCrew.images.png}
                    initial={{ opacity: 0 }}   
                    animate={{ opacity: 1 }} 
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    >
                        <p className={`text-[24px] text-white text-opacity-70 ${bellefair.className}`}>{selectedCrew.role}</p>
                        <h2 className={`text-[26px] md:text-[40px] mb-4 ${bellefair.className}`}>{selectedCrew.name}</h2>
                        <p className='text-center lg:text-left text-[20px] max-w-[400px] md:text-[24px]  md:max-w-[500px] lg:max-w-[700px] text-[#D0D6F9]'>{selectedCrew.bio}</p>
                        <ul className='gap-4 flex my-20'>
                            {crewData.crew.map((crew: CrewType) => (
                                <CrewItem key={crew.id} crew={crew} isActive={selectedCrew?.name === crew.name} onClick={() => {handleCrewClick(crew)}} />
                            ))}
                        </ul>
                    </motion.div>
                </AnimatePresence>


                <AnimatePresence mode='wait'>
                    <motion.div className='flex justify-center'
                    key={selectedCrew.images.png}
                    initial={{ scale: 0 }}   
                    animate={{ scale: 1 }} 
                    exit={{ scale: 0 }}
                    transition={{ duration: 0.3 }} 
                    >
                        <Image src={selectedCrew.images.png} priority width={415} height={415} alt={`${selectedCrew.name} image`} className='hidden lg:block' />
                        <Image src={selectedCrew.images.png} priority width={310} height={310} alt={`${selectedCrew.name} image`} className='lg:hidden' />
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Crew;