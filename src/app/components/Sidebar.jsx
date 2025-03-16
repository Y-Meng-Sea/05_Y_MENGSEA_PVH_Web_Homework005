import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import profile from '@/assets/profile.jpg'
import navLinks from '@/data/navLink/navLink.js'
import {settingIcon} from '@/assets/icons/icons.js'
const Sidebar = () => {
  return (
    <div className='flex flex-col items-center py-5'>
        <Image src={profile} alt="profile-image" className='w-[7rem] h-[7rem] rounded-full' />
            <p>Y Meng Sea</p>
            <p className='text-blueCustom'>ymengsea@gmail.com</p>
            <nav className='pt-7'>
                <ul className='list-none'>
                    {navLinks.map((link,index)=>{
                        return(
                            <li key={index}>
                                <Link href={link.path} className='flex items-center gap-3 py-1 text-sm'>{<Image src={link.icon} alt={link.category} width={17}  />} {link.category}</Link>
                            </li>
                        );
                        
                    })}
                    <li className='pt-7'>
                        <Link href="#" className='flex items-center gap-3 py-1 text-sm'>{<Image src={settingIcon} alt='Setting icon' width={17} />} Settings</Link>
                    </li>
                </ul>
            </nav>
            
    </div>
    
  )
}

export default Sidebar
