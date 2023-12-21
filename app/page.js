import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import SearchSection from './componenets/Home/SearchSection';
import GoogleMapSection from './componenets/Home/GoogleMapSection';


export default function Home() {
  return (
    <>
      <div className='p-6 grid grid-cols-1 md:grid-cols-3 gap-5'>
        <div>
          <SearchSection/>
        </div>
        <div className='col-span-2'>
          <GoogleMapSection/>
        </div>
      </div>
    </>
  );
}
