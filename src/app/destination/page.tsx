"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import destinationData from '../../../public/db/destination.json';
import { DestinationType } from '../utils/types';
import DestinationItem from '../components/shared/destination/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { Bellefair } from "next/font/google";


const bellefair = Bellefair({weight: ["400"], subsets: ["hebrew"]})

const Destination = () => {
    const [selectedDestination, setSelectedDestination] = useState<DestinationType>(destinationData.destinations[0]); // Default to the first destination

    const handleDestinationClick = (destination: DestinationType) => {
        setSelectedDestination(destination);
    };

    return (
        <section className='w-full lg:px-44 flex flex-col items-center mt-5 md:mt-10 '>
            <div className='flex md:justify-start justify-center items-start w-full lg:max-w-[1200px] md:pl-10 lg:pl-0'>
                <h2 className='text-white text-2xl text-left'><span className='text-opacity-75 text-white mr-5 md:mr-3 '>01</span>PICK YOUR DESTINATION</h2>
            </div>

            <div className='lg:grid lg:grid-cols-2 mt-24 grid grid-cols-1 gap-10 lg:max-w-[1200px] md:max-w-[600px]'>
                {/* Planet images */}
                <AnimatePresence mode='wait'>
                    <motion.div className='flex items-center justify-center lg:justify-start'
                    key={selectedDestination.images.png}
                    initial={{ scale: 0 }}   
                    animate={{ scale: 1 }} 
                    exit={{ scale: 0 }}
                    transition={{ duration: 0.3 }} 
                    >
                        <Image src={selectedDestination.images.webp} alt={`${selectedDestination.name} image`} priority width={480} height={480} className='hidden lg:block' />
                        <Image src={selectedDestination.images.webp} alt={`${selectedDestination.name} image`} priority width={300} height={300} className='lg:hidden' />
                    </motion.div>
                </AnimatePresence>

                <div className='lg:px-10 px-6'>
                    {/* planet navigation */}
                    <ul className='flex gap-6 justify-center lg:justify-start'>
                        {destinationData.destinations.map((destination: DestinationType) => (
                            <DestinationItem
                            key={destination.name}
                            destination={destination}
                            isActive={selectedDestination?.name === destination.name}
                            onClick={() => handleDestinationClick(destination)}
                            />
                        ))}
                    </ul>

                    {/* planet details */}
                    <AnimatePresence mode='wait'>
                        <motion.div className='mb-6 md:max-w-[512px]'
                        key={selectedDestination.images.png}
                        initial={{ opacity: 0 }}   
                        animate={{ opacity: 1 }} 
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }} 
                        >
                            <h2 className={`text-white text-[56px] md:text-[80px]  lg:text-[96px] lg:text-left text-center ${bellefair.className} `}>{selectedDestination.name}</h2>
                            <p className='text-[#D0D6F9] lg:text-xl text-[18px] tracking-wider text-center md:px-6 lg:text-left lg:px-0'>{selectedDestination.description}</p>
                        </motion.div>
                    </AnimatePresence>
                    
                    <hr className='text-[#]' />
                    
                    {/* planet details */}
                    <AnimatePresence mode='wait'>
                        <motion.div className='mt-6'
                        key={selectedDestination.images.png}
                        initial={{ opacity: 0 }}   
                        animate={{ opacity: 1 }} 
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        >
                            <div className='text-white flex justify-between md:px-6 lg:px-0 flex-col md:flex-row gap-4'>
                                <div className='flex flex-col items-center lg:items-start'>
                                    <p className='text-[#D0D6F9] text-[14px]'>AVG. DISTANCE</p>
                                    <p className={`${bellefair.className} text-3xl`}>{selectedDestination.distance}</p>
                                </div> 
                                <div className='flex flex-col items-center lg:items-start'>
                                    <p className='text-[#D0D6F9] text-[14px]'>EST. TRAVEL TIME</p>
                                    <p className={`${bellefair.className} text-3xl`}>{selectedDestination.travel}</p>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                </div>
            </div>
        </section>
    );
};

export default Destination;