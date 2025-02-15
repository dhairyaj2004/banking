'use client'
import React from 'react'
import Link from 'next/link'
import { sidebarLinks } from '../constants/index'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'
import Footer from './Footer'
const sidebar = ({user}: SiderbarProps) => {
    const pathname=usePathname()
  return (
    <section className='sidebar'>
        <nav className='flex flex-col gap-4'>
            <Link href="/" className='mb-12 cursor-pointer flex items-center gap-2'>
            <Image 
            src="/icons/logo.svg"
            width={34}
            height={34}
            alt="MetaBanking logo"
            className="size-[24px] max-xl:size-14"
          />
          <h1 className="sidebar-logo">MetaBanking</h1>
            </Link>
            {sidebarLinks.map((item)=>{
                const isActive=pathname === item.route || pathname.startsWith(`${item.route}/`)
                //either pathname and item route are same or we are somewhere in sub component of item route then that pathname will starts with item.route
                return(
                    <Link href={item.route} key={item.label}
              className={cn('sidebar-link', { 'bg-bank-gradient': isActive })}
            >
              <div className="relative size-6">
                <Image 
                  src={item.imgURL}
                  alt={item.label}
                  fill
                  className={cn({
                    'brightness-[3] invert-0': isActive
                  })}
                />
              </div>
              <p className={cn("sidebar-label", { "!text-white": isActive })}>
                {item.label}
              </p>
            </Link>
                )
        
       })}
       USER
        </nav>
       <Footer user={user} type='mobile'/>
    </section>
  )
}

export default sidebar
