import React,{useEffect,useState} from 'react'
import Modal from 'react-modal';
import { courseData } from '../../data/course';
import Slider from '../Hero/Slider';
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

export default function Courses() {

    const [open, setOpen]= useState(false);
    const [item, setItem]=useState(courseData)
  const [toggle, setToggle]= useState();
  const toggleTab=(i)=>{
    setToggle(i)
  }
    const filterCourse =(type)=>{
      const updated = courseData.filter((curr)=>{
        return curr.type===type || curr.class===type
      })
      setItem(updated);
    }

  return (
    <div>
<Slider/>

<section class="text-gray-600 body-font overflow-hidden">
  <div class="container px-5 py-16 mx-auto">
    <div class="flex flex-col text-center w-full mb-20">
      <h1 class="sm:text-4xl text-4xl font-medium title-font mb-2 text-gray-900" style={{fontSize:"60px"}}>Our Courses</h1>
      {/* <div class="flex mx-auto border-2 border-indigo-500 rounded overflow-hidden mt-6">
        <button class="py-1 px-4 bg-indigo-500 text-white focus:outline-none">Class 10</button>
        <button class="py-1 px-4 focus:outline-none">Class 12 </button>
      </div> */}
    </div>
    <div class="flex items-center justify-center m-3">
  <div class="inline-flex  focus:shadow-lg m-4" role="group">
    <button type="button" class="rounded-l m-1    rounded-r
        px-6
        py-2
        border-2 border-blue-600
        text-blue-600
        font-medium
        text-xs
        bg-white
        leading-tight
        uppercase
        hover:bg-black hover:bg-opacity-5
        focus:outline-none focus:ring-0
        transition
        duration-150
        ease-in-out
      "
      onClick={()=>{
        filterCourse("BOARD")
        toggleTab(1)
      }}
      
      
      >BOARD</button>
    <button type="button" class="    rounded-r
        px-6
        py-2
        border-2 border-blue-600
        bg-white
        text-blue-600
        font-medium
        text-xs
        leading-tight
        uppercase
        hover:bg-black hover:bg-opacity-5
        focus:outline-none focus:ring-0
        transition
        duration-150
        ease-in-out
      m-1"
      onClick={()=>{
        filterCourse("WBJEE")
        toggleTab(2)
      }}>WBJEE</button>
    <button type="button" class=" rounded-r m-1    rounded-r
        px-6
        py-2
        border-2 border-blue-600
        text-blue-600
        bg-white
        font-medium
        text-xs
        leading-tight
        uppercase
        hover:bg-black hover:bg-opacity-5
        focus:outline-none focus:ring-0
        transition
        duration-150
        ease-in-out
      "
      onClick={()=>{
        filterCourse("JEE")
        toggleTab(3)
      }}>JEE MAINS</button>
    <button type="button" class=" rounded-r m-1    rounded-r
        px-6
        py-2
        border-2 border-blue-600
        text-blue-600
        font-medium
        bg-white
        text-xs
        leading-tight
        uppercase
        hover:bg-black hover:bg-opacity-5
        focus:outline-none focus:ring-0
        transition
        duration-150
        ease-in-out
      "onClick={()=>{
        filterCourse("NEET")
        toggleTab(4)
      }}>NEET</button>
  </div>
  </div>
  <div class="flex items-center justify-center m-3">
  <div class="inline-flex  focus:shadow-lg" role="group">
    <button type="button" class="rounded-l m-1 inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out"onClick={()=>{
        filterCourse("9")
        toggleTab(5)
      }}>CLASS 9</button>
    <button type="button" class=" inline-block m-1 px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out" onClick={()=>{
        filterCourse("10")
        toggleTab(6)
      }}>CLASS 10</button>
    <button type="button" class=" rounded-r m-1 inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out" onClick={()=>{
        filterCourse("11")
        toggleTab(7)
      }}>CLASS 11</button>
    <button type="button" class=" rounded-r m-1 inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out" onClick={()=>{
        filterCourse("12")
        toggleTab(8)
      }}>CLASS 12</button>
  </div>
  </div>
  <div class="flex items-center justify-center my-3">
  <div class="inline-flex  focus:shadow-lg" role="group">
    <button type="button" class="rounded-l m-1 inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out "onClick={()=>{
        setItem(courseData)
        toggleTab(9)
      }}>ALL COURSES</button>
   </div>
  </div>

    <div class="row justify-content-center text-center">
{
  item.map((data)=>{
return(

      <div class="p-4 col-lg-3 col-md-6 col-sm-12 bg-white shadow-lg rounded-lg m-3">
        <div class="h-full p-6 rounded-lg border-2 border-indigo-500 flex flex-col relative overflow-hidden ">
          <h2 class="text-sm tracking-widest title-font mb-1 font-medium">Prepare for</h2>
          <h1 class="text-3xl text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none">CLASS {data.class} {data.type}</h1>
          <p class="flex items-center text-gray-600 mb-2">
            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Online Live Classes
          </p>
          <p class="flex items-center text-gray-600 mb-2">
            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Test Series
          </p>
          <p class="flex items-center text-gray-600 mb-6">
            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Sample Questions
          </p>
          <p class="flex items-center text-gray-600 mb-6">
            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Doubt Clearing
          </p>
          <button
                      type="submit"
                      class="inline-block px-6 py-2.5 text-white font-medium text-s leading-tight uppercase rounded shadow-md text-white bg-gradient-to-r from-blue-400 to-blue-800 hover:from-pink-500 hover:to-yellow-500  border-0 transition duration-150 ease-in-out w-full mb-3 rounded"
               
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                  onClick={()=>{
                    setOpen(true)
                  }}
                    >
                  Book a Demo Class
                    </button>
          {/* <p class="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p> */}
        </div>
      </div>
)

  })
}


    </div>
  </div>
</section>

{/* modal div */}
<div>
{open ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Modal Title
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setOpen(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
        
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setOpen(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setOpen(false)}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
</div>




 




    </div>
  )
}
