import React from 'react'
import {NavLink} from 'react-router-dom'
const Kuize = () => {
  return (
    <section className='w-full max-w-[1240px] mx-auto flex flex-col items-center mt-[100px] mb-[100px] '>
      <h1 className='font-bold text-4xl mb-[40px] text-[#0067FF]'>Kuize</h1>
      <div className='flex w-full items-center justify-evenly flex-col md:flex-row'>
        <div className='max-w-[450px] flex flex-col items-center bg-gray-100'>
          <div className='flex items-center justify-center bg-[#F16529] w-[330px] h-[200px] mb-[20px] rounded-sm'>
            <h1 className='font-bold text-3xl mb-[20px]'>HTML</h1>
          </div>
            <NavLink className='flex items-center  justify-center text-[#000] w-[150px] h-[50px] font-bold mb-[10px] bg-[#F16529] rounded-sm p-30px' to="/kuizihtml">Provo!</NavLink>
        </div>
        <div className='max-w-[450px] flex flex-col items-center bg-gray-100'>
          <div className='flex items-center justify-center bg-[#4285F4] w-[330px] h-[200px] mb-[20px] rounded-sm'>
            <h1 className='font-bold text-3xl mb-[20px]'>CSS</h1>
          </div>
          <NavLink className='flex items-center  justify-center text-[#000] w-[150px] h-[50px] font-bold mb-[10px] bg-[#4285F4] rounded-sm p-30px' to="/kuizihtml">Provo!</NavLink>
        </div>
        <div className='max-w-[450px] flex flex-col items-center bg-gray-100'>
          <div className='flex items-center justify-center bg-[#F0DB4F] w-[330px] h-[200px] mb-[20px] rounded-sm'>
            <h1 className='font-bold text-3xl mb-[20px]'>JavaScript</h1>
          </div>
          <NavLink className='flex items-center  justify-center text-[#000] w-[150px] h-[50px] font-bold mb-[10px] bg-[#F0DB4F] rounded-sm p-30px' to="/kuizihtml">Provo!</NavLink>
        </div>
      </div>


      <div className='flex w-full items-center justify-evenly flex-col md:flex-row mt-[20px]'>
      <div className='max-w-[450px] flex flex-col items-center bg-gray-100'>
          <div className='flex items-center justify-center bg-[#61dbfb] w-[330px] h-[200px] mb-[20px] rounded-sm'>
            <h1 className='font-bold text-3xl mb-[20px]'>React</h1>
          </div>
          <NavLink className='flex items-center  justify-center text-[#000] w-[150px] h-[50px] font-bold mb-[10px] bg-[#61dbfb] rounded-sm p-30px' to="/kuizihtml">Provo!</NavLink>
        </div>
        <div className='max-w-[450px] flex flex-col items-center bg-gray-100'>
          <div className='flex items-center justify-center bg-[#563d7c] w-[330px] h-[200px] mb-[20px] rounded-sm'>
            <h1 className='font-bold text-3xl mb-[20px]'>Bootstrap</h1>
          </div>
          <NavLink className='flex items-center  justify-center text-[#000] w-[150px] h-[50px] font-bold mb-[10px] bg-[#563d7c] rounded-sm p-30px' to="/kuizihtml">Provo!</NavLink>
        </div>
        <div className='max-w-[450px] flex flex-col items-center bg-gray-100'>
          <div className='flex items-center justify-center bg-[#00b4b6] w-[330px] h-[200px] mb-[20px] rounded-sm'>
            <h1 className='font-bold text-3xl mb-[20px]'>TailwindCSS</h1>
          </div>
          <NavLink className='flex items-center  justify-center text-[#000] w-[150px] h-[50px] font-bold mb-[10px] bg-[#00b4b6] rounded-sm p-30px' to="/kuizihtml">Provo!</NavLink>
        </div>
      </div>
      
    </section>
  )
}

export default Kuize