import React from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'

function GenerateFormInput() {
  return (
    <div className='gap-5 my-5 flex'>
        <Input type="text" placeholder="Generate a Form through One prompt..."/>
        <Button>Generate Form</Button>
    </div>
  )
}

export default GenerateFormInput