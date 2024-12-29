import React from 'react'
import AuthForm from '@/components/AuthForm'
function signin() {
  return (
    <section className='flex-center size-full max-sm:px-6'>
      <AuthForm type='sign-in'/>
    </section>
  )
}

export default signin