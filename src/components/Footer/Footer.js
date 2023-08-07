import React from 'react'
import {NavLink} from 'react-router-dom'
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';

const navLinks =[
  {
    path:'/ballina',
    display:'Ballina'
  },
  {
    path:'/ushtrime',
    display:'Ushtrime'
  },
  {
    path:'/kuize',
    display:'Kuize'
  },
]

const Footer = () => {
  return (
    <section className='w-full flex flex-col items-center justify-evenly bg-[#40394A] md:flex-row'>
      <div className='flex flex-col p-3 my-[15px] md:p-0 md:my-[40px] max-w-[400px]'>
          <NavLink to="/ballina" className='text-white font-bold text-3xl'>MsohuVet</NavLink>
          <p className='text-[14px] text-white font-medium leading-7 mt-[20px]'>MsohuVet është një platformë e mësimit të programimit në internet, e cila ofron resurse dhe kursa falas për të gjithë ata që dëshirojnë të fillojnë ose përmirësojnë njohuritë e tyre në fushën e programimit.</p>
          <div className='flex justify-between my-6 '>
            <FaFacebookSquare className='icon' size={30} />
            <FaInstagram className='icon' size={30} />
            <FaTwitterSquare className='icon' size={30} />
            <FaGithubSquare className='icon' size={30} />
        </div>
      </div>
        <ul className='flex flex-col decoration-none text-white gap-10 text-base font-bold '>
            {
               navLinks.map((link,index) => <li key={index}>
                  <NavLink 
                     to={link.path} 
                     className='text-[#fff] text-[18px] leading-7 font-[500] hover:text-[#0067FF]'>
                     {link.display}
                  </NavLink>
                </li>)
             }
         </ul>
      <div>
            
      </div>
    </section>
  )
}

export default Footer