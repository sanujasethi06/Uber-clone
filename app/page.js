"use client"

import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import SearchSection from './componenets/Home/SearchSection';
import GoogleMapSection from './componenets/Home/GoogleMapSection';
import { SourceContext } from './context/SourceContext';
import { useState } from 'react';
import { DestinationContext } from './context/DestinationContext';


export default function Home() {

  const [source, setSource] = useState([]);
  const [destination, setDestination] = useState([]);
  
  return (
    <>
      <SourceContext.Provider value={{ source, setSource }} >
        <DestinationContext.Provider value={ {destination,setDestination}}>

      <div className='p-6 grid grid-cols-1 md:grid-cols-3 gap-5'>
        <div>
          <SearchSection/>
        </div>
        <div className='col-span-2'>
          <GoogleMapSection/>
        </div>
      </div>
        </DestinationContext.Provider>
      </SourceContext.Provider>
    </>
  );
}
