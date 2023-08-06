import React from 'react'
import {NavLink} from 'react-router-dom'
import Meso from '../assets/learncoding.png'
import LogoCss from '../assets/csslogo.png'
import LogoHtml from '../assets/htmlLogo.png'
import LogoJs from '../assets/jslogo.png'
import LogoR from '../assets/reactlogo.png'
import LogoB from '../assets/bootstrap.png'
import LogoT from '../assets/tailwindlogo.png'
const Home = () => {
  return (
    <main>
    <section className='w-full max-w-[1240px] mx-auto flex flex-col items-center justify-between mt-[30px] md:flex-row'>
        <div className='flex flex-col items-start p-5 md:p-0'>
            <h1 className='font-bold text-2xl md:text-4xl'>Dëshironi të mësoni programim</h1>
            <p className='text-[#9a9a9a] font-semibold  mt-[15px]'>Programimi është arti dhe shkencë që ju lejon të krijoni aplikacione dhe sisteme të ndryshme kompjuterike, të cilat kanë për qëllim të automatizojnë detyrat, të përmirësojnë efikasitetin dhe të ofrojnë zgjidhje inovative për shumë sfidat.</p>
            <button className='w-[140px] h-[40px] font-bold bg-[#0067FF] mt-[40px] rounded-[3px] mb-[25px] md:mb-0 hover:bg-[#054cff]'>Fillo tani</button>
        </div>
        <img src={Meso} className='w-full max-h-[400px] max-w-[700px]' alt='Meso kodim' />
    </section>
    <section className='w-full flex flex-col items-center justify-evenly  mt-[100px] md:flex-row'>
      <div className='flex flex-col items-center'>
          <h1 className='font-bold text-6xl'>HTML</h1>
          <p className='font-medium mt-[15px]'>Mësoni strukturimin për ndërtimin e një faqe</p>
          <button  className="w-[140px] h-[40px] font-bold bg-[#0067FF] mt-[40px] rounded-[3px] mb-[25px] md:mb-0 hover:bg-[#054cff]">
              <NavLink 
                    to="/mesoHtml"
              >
                   Mëso HTML
              </NavLink>
          </button>
      </div>
      <div className='flex flex-col items-center p-5 text-wrap max-w-[400px] md:max-w-[550px]'>
          <img className='max-w-[100px] max-h-[80px]' src={LogoHtml} alt='HTML' />
          <p className='font-bold my-3'>Çfarë është HTML?</p>
          <p className='text-[14px] font-[400]'>The HyperText Markup Language ose HTML është gjuha standard për dokumentet e krijuara për t'u shfaqur në një shfletues ueb.</p>
      </div>
    </section>
    <section className='w-full mx-auto max-w-[1240px] flex flex-col items-center justify-around mt-[60px] md:flex-row'>
    <div className='flex flex-col items-center md:ml-[60px] '>
          <h1 className='font-bold text-6xl'>CSS</h1>
          <p className='font-medium mt-[15px]'>Mësoni si të stilizoni një faqe</p>
          <button  className="w-[140px] h-[40px] font-bold bg-[#0067FF] mt-[40px] rounded-[3px] mb-[25px] md:mb-0 hover:bg-[#054cff]">
              <NavLink 
                    to="/mesoCss"
              >
                   Mëso CSS
              </NavLink>
          </button>
      </div>
      <div className='flex flex-col items-center p-5 max-w-[400px] md:max-w-[550px] md:ml-[140px]'>
           <img className='max-w-[100px] max-h-[100px]' src={LogoCss} alt='Css' />
           <p className='font-bold my-3'>Çfarë është CSS?</p>
           <p className='text-[14px] font-[400]'>CSS është gjuha që përdorim për stilimin e një dokumenti HTML. CSS përshkruan se si elementët HTML duhet të shfaqen.</p>
      </div>
    </section>
    <section className='w-full flex flex-col items-center justify-evenly mt-[60px] md:flex-row '>
    <div className='flex flex-col items-center md:mr-[-70px] md:ml-[30px]'>
          <h1 className='font-bold text-6xl'>JavaScript</h1>
          <p className='font-medium mt-[15px]'>Mësoni si të funksionalizoni një faqe</p>
          <button  className="w-[140px] h-[40px] font-bold bg-[#0067FF] mt-[40px] rounded-[3px] mb-[25px] md:mb-0 hover:bg-[#054cff]">
              <NavLink 
                    to="/mesoJavaScript"
              >
                   Mëso JavaScript
              </NavLink>
          </button>
      </div>
      <div className='flex flex-col items-center p-5  max-w-[400px] md:max-w-[550px] md:ml-[100px]'>
          <img className='max-w-[100px] max-h-[70px]' src={LogoJs} alt='JavaScript' />
          <p className='font-bold my-3'>Çfarë është JavaScript?</p>
          <p className='text-[14px] font-[400]'>JavaScript (JS) është një gjuhë programimi, e orientuar nga objekti e përdorur nga zhvilluesit për t'i bërë faqet e internetit interaktive.</p>
      </div>
    </section>
    <section className='w-full flex flex-col items-center justify-evenly mt-[60px] md:flex-row'>
    <div className='flex flex-col items-center md:ml-[20px] md:mr-[-20px] '>
          <h1 className='font-bold text-6xl'>React</h1>
          <p className='font-medium mt-[15px]'>Mësoni librarin më të famshme të JavaScript</p>
          <button  className="w-[140px] h-[40px] font-bold bg-[#0067FF] mt-[40px] rounded-[3px] mb-[25px] md:mb-0 hover:bg-[#054cff]">
              <NavLink 
                    to="/mesoReact"
              >
                   Mëso React
              </NavLink>
          </button>
      </div>
      <div className='flex flex-col items-center p-5 max-w-[400px] md:max-w-[550px] md:ml-[20px]'>
          <img className='max-w-[100px]' src={LogoR} alt='React' />
          <p className='font-bold my-3'>Çfarë është React?</p>
          <p className='text-[14px] font-[400]'>React është një bibliotekë JavaScript me burim të hapur për ndërtimin e ndërfaqeve të përdoruesit bazuar në komponentë.</p>
      </div>
    </section>
    <section className='w-full flex flex-col items-center justify-evenly mt-[60px] md:flex-row'>
    <div className='flex flex-col items-center md:ml-[20px] md:mr-[-20px] '>
          <h1 className='font-bold text-6xl'>Bootstrap</h1>
          <p className='font-medium mt-[15px]'>Mësoni Bootstrap</p>
          <button  className="w-[140px] h-[40px] font-bold bg-[#0067FF] mt-[40px] rounded-[3px] mb-[25px] md:mb-0 hover:bg-[#054cff]">
              <NavLink 
                    to="/mesoBootstrap"
              >
                   Mëso Bootstrap
              </NavLink>
          </button>
      </div>
      <div className='flex flex-col items-center p-5 max-w-[400px] md:max-w-[550px] md:ml-[20px] mb-[30px]'>
          <img className='max-w-[120px]' src={LogoB} alt='Bootstrap' />
          <p className='font-bold my-3'>Çfarë është Bootstrap?</p>
          <p className='text-[14px] font-[400]'>Bootstrap është një kornizë CSS, e drejtuar në zhvillimin e faqes së përparme të internetit të përgjegjshëm, të parë në celular.</p>
      </div>
    </section>
    <section className='w-full flex flex-col items-center justify-evenly mt-[60px] md:flex-row'>
    <div className='flex flex-col items-center md:ml-[20px] md:mr-[-20px] '>
          <h1 className='font-bold text-6xl'>Tailwind CSS</h1>
          <p className='font-medium mt-[15px]'>Mësoni Tailwind CSS</p>
          <button  className="w-[140px] h-[40px] font-bold bg-[#0067FF] mt-[40px] rounded-[3px] mb-[25px] md:mb-0 hover:bg-[#054cff]">
              <NavLink 
                    to="/mesoTailwind"
              >
                   Mëso Tailwind
              </NavLink>
          </button>
      </div>
      <div className='flex flex-col items-center p-5 max-w-[400px] md:max-w-[550px] md:ml-[20px] mb-[30px]'>
          <img className='max-w-[120px]' src={LogoT} alt='Tailwind CSS' />
          <p className='font-bold my-3'>Çfarë është Tailwind CSS?</p>
          <p className='text-[14px] font-[400]'>Tailwind CSS është një kornizë CSS e parë e dobishme për ndërtimin e shpejtë të faqeve moderne të internetit pa e larguar kurrë nga HTML tuaj.</p>
      </div>
    </section>
    </main>
  )
}

export default Home
