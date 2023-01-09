/* This example requires Tailwind CSS v3.0+ */
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import "./Hero.css"
import { NavLink } from 'react-router-dom'

export default function Landing() {
 

  return (




    <div class="relative img h-screen w-full flex items-center justify-center text-left bg-cover bg-center mb-16" style={{backgroundImage:"url(https://firebasestorage.googleapis.com/v0/b/sansaptak-b8665.appspot.com/o/Course%2Fimages%20(4)%20(6).jpeg?alt=media&token=9e1d6f8d-d5bb-4b72-99c4-ed8891984230) no-repeat"}}>
      <div class="absolute top-0 right-0 bottom-0 left-0 bg-gray-900 opacity-75"></div>
      
      <main class="px-10 lg:px-24 z-10 text-center">
            <div class="text-center">
              <h2 class="text-4xl tracking-tight leading-10 font-extrabold sm:text-5xl text-indigo-600 sm:leading-none md:text-6xl">
              Welcome To <span>   </span>
                <span class="text-white">LLOGICAL</span>
              </h2>
              <p class="mt-3 text-white sm:mt-5 sm:max-w-xl md:mt-5 text-lg font-light">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
              </p>
              <div class="mt-5 sm:mt-8 sm:flex justify-center">
               
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
