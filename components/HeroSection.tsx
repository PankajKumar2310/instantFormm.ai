import React from 'react'
import GenerateFormInput from './GenerateFormInput'
import { Button } from './ui/button';


type SuggestionText={
    label:string,
    text:string
}

const suggestionBtnText : SuggestionText[] = [
    {
      label: "Job Application Form",
      text: "Generate the job application form"
    },
    {
      label: "Survey Form",
      text: "Generate a survey form"
    },
    {
      label: "Feedback Form",
      text: "Generate a feedback form to collect opinions"
    },
    {
      label: "Event Registration Form",
      text: "Generate a form for event registrations"
    }
  ];
  
function HeroSection() {
    return (
        <section>
            <div className='relative'>
                <div className='absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 blur-2xl opacity-50'></div>
                <div className='container mx-auto text-center relative'>
                    <h1 className='text-4xl font-bold'>Build AI-Driven Forms Effortlessly</h1>
                    <p className='mt-4 text-lg'>Generate a Survey From Instantly by InstantFrom.ai</p>
                </div>
            </div>
          <GenerateFormInput/>
          <div className='grid grid-cols-4 gap-3'>
          {
            suggestionBtnText.map((item:SuggestionText,index:number) =>(
                <Button variant={"outline"} className='rounded-full h-10'>{item.label}</Button>
            ))
          }
           </div>
        
        </section>
    )
}

export default HeroSection