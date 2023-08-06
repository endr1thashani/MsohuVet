import React,{ useState , useEffect} from 'react'
import {NavLink} from 'react-router-dom'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

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

const NavBar = () => {
    const [nav, setNav] = useState(false);
    const [bg, setBg] = useState(false)
  
    useEffect(()=>{
      window.addEventListener('scroll' , ()=>{
        return window.scrollY > 50 ? setBg(true) : setBg(false)
      })
    })

    const handleNav = () => {
      setNav(!nav);
    };

    const closeNav = () => {
      setNav(false);
    };


  
  return <header  className={`${bg ? 'bg-[#40394A] py-4 lg:py-6' : 'bg-[#40394A]'} sticky px-4 md:px-[140px] justify-between m-auto top-0 z-50 flex items-center h-20`}>
      <div className="flex w-full ">
          <div className='flex w-full items-center justify-between'>

                <NavLink to="/home" className='text-[30px] md:text-[40px] font-bold text-white'>MsohuVet</NavLink>

                    <ul className='hidden md:flex decoration-none text-white gap-x-10 text-base font-bold '>
                          {
                            navLinks.map((link,index) => <li key={index}>
                              <NavLink 
                                  to={link.path} 
                                  className={navClass => navClass.isActive ? 
                                  'text-[#0067FF] text-[16px] leading-7 font-[600] ' 
                                  : 'text-[#fff] text-[16px] leading-7 font-[500] hover:text-[#0067FF]'}>
                                    {link.display}
                                </NavLink>
                            </li>)
                          }
                    </ul>

                <div onClick={handleNav} className='block md:hidden'>
                          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
                </div>
                <div    
                  className={
                    nav
                      ? 'fixed left-0 top-0 w-[60%] h-full border-r bg-[#40394A]  ease-in-out duration-500 md:hidden'
                      : 'ease-in-out duration-500 fixed left-[-100%]'
                  }
                  >
                    <ul className='p-4 mt-[20px]'>

                          {
                            navLinks.map((link,index) => <li className='mt-[25px]' key={index}>
                              <NavLink 
                                  onClick={closeNav}
                                  to={link.path} 
                                  className={navClass => navClass.isActive ? 
                                  'text-[#0067FF]  text-[22px] leading-7 font-[600]' 
                                  : 'text-[#fff] text-[22px] leading-7 font-[500] hover:text-[#0067FF]'}>
                                    {link.display}
                                </NavLink>
                            </li>)
                          }
                    </ul>
                </div>
          </div>
      </div>
  </header>
}

export default NavBar
