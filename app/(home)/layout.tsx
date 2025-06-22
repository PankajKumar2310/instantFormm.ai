import Logo from '@/components/Logo'
import { Button } from '@/components/ui/button'
import { UserButton } from '@clerk/nextjs'
import React from 'react'

function layout({children}:{children : React.ReactNode}) {
  return (
    <div>
    <div className='border-b'>
    <nav className='flex justify-between ml-3 max-w-7xl mx-auto py-2 px-2'>
      <Logo/>
      <div>
        <Button className='mt-0'   variant={"link"}>Dashbaord</Button>
        <UserButton />
      </div>
    </nav>
    </div>
    {children}
  </div>
  )
}

export default layout