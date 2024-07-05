"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { TechnologyType } from '../utils/types';
import technologyData from '../../../public/db/technology.json';
import TechnologyItem from '../components/shared/technology/navigation';
import { motion, AnimatePresence } from 'framer-motion';


const Technology = () => {
    const [selectedTechnology, setSelectedTechnology] = useState<TechnologyType>(technologyData.technology[0]); // Default to the first destination

    const handleTechnologyClick = (technology: TechnologyType) => {
        setSelectedTechnology(technology);
    };

    return (
        <section className=' w-full'>
            <p className='text-white text-[28px] my-12 ml-10 lg:ml-44'><span className='text-white text-opacity-70 mr-4'>03</span> SPACE LAUNCH 101</p>
            <div className='lg:grid lg:grid-cols-2 mt-10 gap-6'>
                <AnimatePresence  mode='wait'>
                    <motion.div className='lg:hidden'
                    key={selectedTechnology.images.landscape}
                    initial={{ scale: 0 }}   
                    animate={{ scale: 1 }} 
                    exit={{ scale: 0 }}
                    transition={{ duration: 0.3 }}
                    >
                        <Image src={selectedTechnology.images.landscape} alt={`${selectedTechnology.images.landscape} image`} width={1100} height={600} priority />
                    </motion.div>
                </AnimatePresence>

                <div className=' flex place-items-center lg:ml-44 flex-col lg:flex-row mt-6'>
                    <ul className='flex lg:flex-col gap-4 lg:mr-12'>
                        {technologyData.technology.map((technology: TechnologyType) => (
                            <TechnologyItem
                            key={technology.id}
                            technology={technology}
                            isActive={selectedTechnology?.name === technology.name}
                            onClick={() => handleTechnologyClick(technology)}
                            />
                        ))}
                    </ul>
                    
                    <AnimatePresence mode='wait'>
                        <motion.div className='text-white'
                        key={selectedTechnology.images.landscape}
                        initial={{ opacity: 0 }}   
                        animate={{ opacity: 1 }} 
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }} 
                        >
                            <p className=' text-[32px] text-opacity-65 text-white text-center lg:text-left'>THE TERMINOLOGY...</p>
                            <h2 className='text-[56px] mb-2 text-center lg:text-left'>{selectedTechnology.name}</h2>
                            <p className='text-[18px] text-[#D0D6F9] max-w-[600px] text-center lg:text-left px-10 lg:px-0'>{selectedTechnology.description}</p>
                        </motion.div>
                    </AnimatePresence>
                </div>

                <AnimatePresence mode='wait'>
                    <motion.div className='flex justify-end'
                    key={selectedTechnology.images.portrait}
                    initial={{ scale: 0 }}   
                    animate={{ scale: 1 }} 
                    exit={{ scale: 0 }}
                    transition={{ duration: 0.3 }}
                    >
                        <Image src={selectedTechnology.images.portrait} alt={`${selectedTechnology.images.landscape} image`} width={600} height={600} priority className='hidden lg:block' />
                    </motion.div>
                </AnimatePresence>

            </div>
            
        </section>
    );
};

export default Technology;