/* This example requires Tailwind CSS v3.0+ */
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

import { NavLink } from 'react-router-dom'

export default function Landing() {
 

  return (




    <div class="relative h-screen w-full flex items-center justify-start text-left bg-cover bg-center" style={{backgroundImage:"url(https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80)"}}>
      <div class="absolute top-0 right-0 bottom-0 left-0 bg-gray-900 opacity-75"></div>
      
      <main class="px-10 lg:px-24 z-10">
            <div class="text-left">
              <h2 class="text-4xl tracking-tight leading-10 font-extrabold sm:text-5xl text-indigo-600 sm:leading-none md:text-6xl">
              Welcome To <span>   </span>
                <span class="text-white">LLOGICAL</span>
              </h2>
              <p class="mt-3 text-white sm:mt-5 sm:max-w-xl md:mt-5 text-lg font-light">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
              </p>
              <div class="mt-5 sm:mt-8 sm:flex justify-start">
               
                <div class="mt-3 sm:mt-0 sm:ml-3">
                <NavLink>
                <button 
                type="submit"
                class="inline-block px-6 py-2.5 text-white font-medium text-s leading-tight uppercase rounded shadow-md text-white bg-gradient-to-r from-blue-400 to-blue-800 hover:from-pink-500 hover:to-yellow-500  border-0 transition duration-150 ease-in-out w-full mb-3 rounded"
                
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                >
                
                  Book a Demo Class
                        </button>
                    </NavLink>
                </div>
              </div>
            </div>
          </main>
      
    </div>
    
   
    
    

  )
}
