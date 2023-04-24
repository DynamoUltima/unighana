import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Knust from "../assets/images/knust.jpg"
import Ashesi from "../assets/images/ashesi.jpg"
import UG from "../assets/images/ug.jpg"
import Navigationbar from '@/components/nav/navigationBar'
import Excellence from "../assets/images/excellence-image.png"
import Footer from '@/components/foooter/footer'
import UniCards from '@/components/cards/uniCards'
import { AshesiDescription, KnustDescription, UgDescription } from '@/data/data'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'

const inter = Inter({ subsets: ['latin'] })

export default function Home(){

 
  return (
    <div className="relative m-auto  h-screen overflow-x-hidden">

    <div className=' flex  flex-col p-4 '>
      <div className='flex flex-col bg-[#fff5f1] px-6 lg:px-16 py-10 rounded-3xl'>
        <Navigationbar />

        <div className="flex flex-col lg:flex-row justify-center  lg:justify-between items-center gap-5">
          <div className="flex flex-col gap-5 lg:gap-10">
            <p className=" text-2xl sm:text-4xl md:text-5xl lg:text-5xl text-left font-medium">
             
              Enroll in the best instituitions in Ghana
            </p>
            <p className="text-sm sm:text-base lg:text-lg text-left text-gray-500 tracking-wider">
              Unighana gives you all the information you need about these universities
            </p>
          
              <button className="btn btn-sm lg:btn-lg bg-[#2DD4BF] p-2 text-white rounded-full border-none w-36 lg:w-44 capitalize">Coming soon</button>
           
          </div>
          <div className='relative  w-12/12'><Image  alt="home" layout="cover"  src={Excellence} /></div>
        </div>
      </div>

    </div>


    <div className="flex flex-wrap mx-auto py-10">

      <UniCards imageData={UG} description={UgDescription} title={'University of Ghana'}/>
      <UniCards imageData={Knust} description={KnustDescription} title={'KNUST'}/>
      <UniCards imageData={Ashesi} description={AshesiDescription} title={'Ashesi'}/>

      
    </div>

   <Footer/>

  </div>
  )
}
