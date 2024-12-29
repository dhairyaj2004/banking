import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Bankcard from './Bankcard'
const Rightsidebar = ({user,transactions,banks}:RightSidebarProps) => {
  return (
    <div className='right-sidebar'>
        <section className='flex flex-col pb-8'>
            <div className='profile-banner'>
                <div className='profile'>
                    <div className='profile-img'>
                        <span className='text-5xl font-bold text-blue-500'>
                            {user.firstName[0]}
                        </span>
                    </div>
                    <div className='profile-details'>
                        <h1 className='profile-name'>
                            {user.firstName} {user.lastName}
                        </h1>
                        <h3 className='profile-email'>
                            {user.email}
                        </h3>
                    </div>
                </div>
            </div>
        </section>
    <section className='banks'>
        <div className='justify-between flex h-full'>
            <h2 className='header-2'>My Banks</h2>
            <Link href="/" className='flex gap-2'>
            <Image
            src='/icons/plus.svg'
            width={20}
            height={20}
            alt='plus'
            />
            <h2 className='text-14 font-semibold text-gray-600 py-24'>
                Add Bank
            </h2>
            </Link>
        </div>
        {banks?.length>0 && (
            <div className='relative flex flex-1 flex-col items-center justify-center gap-2.5 -top-24'>
                <div className='relative z-10'>
                    <Bankcard 
                    key={banks[0].$id}
                    account={banks[0]}
                    userName={`${user.firstName} ${user.lastName}`}
                    showBalance={false}
                    />
                </div>
                {banks[1] && (
                <div className='absolute top-8 right-0 z-0 w-[90%]'>
                    <Bankcard 
                     key={banks[1].$id}
                     account={banks[1]}
                     userName={`${user.firstName} ${user.lastName}`}
                     showBalance={false}
                    />
                </div>
                )}
                
            </div>
        )}
    </section>
    </div>
  )
}

export default Rightsidebar