import React from 'react'
import Image from 'next/image'
import study from "@/assets/images/study.jpg"
import whiperOfTheHeart from "@/assets/images/whiper-of-the-heart.png"
import Link from 'next/link'
import tag from '@/assets/icons/tag.svg'
const page = () => {
  return (
    <div className='mx-auto flex my-5 justify-center items-center gap-5 '>
        <Link href="/Category">
          <div className='rounded-3xl w-60 h-80 bg-slate-400 relative cursor-pointer'>
              <Image alt='study section' src={study} className='rounded-3xl object-cover w-[100%] h-[20rem]'/>
              <div className='w-full h-full flex items-center justify-center absolute top-0 left-0 bg-black opacity-0 hover:opacity-[0.5] transition-all duration-500 rounded-3xl'>
                  <p className='w-40 text-2xl text-white text-center'>View All Available Book</p>
              </div>
              <div className='opacity-100'>
                <p className='text-blueCustom absolute z-10 top-2 left-2 px-4 py-1 bg-white rounded-2xl flex gap-2'><Image src={tag} alt="tag-icon" />Book</p>
              </div>
          </div>
        </Link>

        <Link href='/OldSchool'>
          <div className='rounded-3xl w-60 h-80 bg-slate-400 relative cursor-pointer'>
                <Image alt='study section ' src={whiperOfTheHeart} className='rounded-3xl object-cover w-[100%] h-[20rem] object-center'/>
                <div className='w-full h-full flex items-center justify-center absolute top-0 left-0 bg-black opacity-0 hover:opacity-[0.5] transition-all duration-500 rounded-3xl'>
                    <p className='w-40 text-2xl text-white text-center'>View All Available Cartoon</p>
                </div>
                <div className='opacity-100'>
                  <p className='text-blueCustom absolute z-10 top-2 left-2 px-4 py-1 bg-white rounded-2xl flex gap-2'><Image src={tag} alt="tag-icon" />Cartoon</p>
                </div>
            </div>
        </Link>
    </div>
  )
}

export default page
