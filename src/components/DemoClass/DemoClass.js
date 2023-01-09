import React from 'react'
import Container from 'react-bootstrap/esm/Container'

import { LockClosedIcon } from '@heroicons/react/20/solid'
import { courseData } from '../../data/course'
export default function DemoClass() {
  return (
    <div>
        <Container>
            <div className='row'>
          
                    
                <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Submit Your Details
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              And{' '}
              <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                start your free trial class
              </a>
            </p>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Email address" 
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Class
                </label>
                <input
      
                  type="text"
                  autoComplete="current-password"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Class" 
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                Mobile No
                </label>
                <input
        
                  type="text"
                  autoComplete="current-password"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Mobile" 
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Schhol Name
                </label>
                <input
                
                  type="text"
                  autoComplete="current-password"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="School name" 
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Address
                </label>
                <input
               
                  type="text"
                  autoComplete="current-password"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Address"
                  
                />
              </div>
            </div>
            <div>
            <select class="form-select appearance-none
            block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example"
      required>
        <option selected>Open this select menu</option>
      {
        courseData.map((item)=>{
            return(

                <option key={item.id} value={item.name}>{item.name}</option>
                );
        })
      }
    </select>
            </div>
            <div>
            <select class="form-select appearance-none
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example" required>
        <option selected value="0">Select Board</option>
        <option value="CBSE">CBSE</option>
        <option value="ICSE">ICSE</option>
        <option value="ICSE">ISE</option>
        <option value="WBCHSE">WBCHSE</option>
        <option value="WBCHSE">WBBSE</option>
        <option value="OTHERS">OTHERS</option>
    </select>
            </div>
         

            <div className="flex items-center justify-between">
              <div className="flex items-center">
               
             
              </div>
              <div className="flex items-center justify-between">
            
              </div>

            
            </div>

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
               
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

                </div>
               
         
        </Container>



    </div>
  )
}
