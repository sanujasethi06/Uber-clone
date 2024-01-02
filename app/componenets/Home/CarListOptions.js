import React, { useState } from 'react'
import CarListItem from './CarListItem'
import { CarListsData } from '@/app/utils/CarListsData'

const CarListOptions = (  {distance}) => {

  const [activeIndex, setActiveIndex] = useState();
  return (
    <div className="mt-5 p-5 overflow-auto h-[300px] ">
      <h2 className="text-[22px] font-bold">Recommended</h2>
      {CarListsData.map((item, index) => (
        <div
          className={`cursor-pointer p-2 px-4 rounded-md border-black ${
            activeIndex == index ? "border-[3px] " : null
          }`}
          onClick={() => setActiveIndex(index)}
        >
          <CarListItem car={item} distance={distance} />
        </div>
      ))}
      <div className='flex justify-between fixed bottom-5 bg-white p-3 shadow-xl w-full md:w-[30%] border-[1px] items-center rounded-lg'>
        <h2 className="">Make Payment For</h2>
        <button className="p-3 bg-black text-white rounded-lg text-center">Request UberX</button>
      </div>
    </div>
  );
}

export default CarListOptions
