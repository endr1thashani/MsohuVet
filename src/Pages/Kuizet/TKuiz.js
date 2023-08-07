import React,{ useState } from 'react'
import {NavLink} from 'react-router-dom'
const TKuiz = () => {
    const [currentQuestion, setcurrentQuestion] = useState(0);
    // we will toggle the show score
    const [showScore, setshowScore] = useState(false);
    const [score, setscore] = useState(0);
  
    // lets add some questions
  
    const allQuestions = [
      {
        text: 'Çfarë është Tailwind CSS?',
        options: [
          { answerText: 'Një framework CSS për zhvillimin e shpejtë të uebfaqeve.', isCorrect: true },
          { answerText: 'Një motor kërkimi në internet.', isCorrect: false },
          { answerText: 'Një gjuhë programimi për aplikacione mobile.', isCorrect: false },
        ],
      },
      {
        text: 'Cilat janë avantazhet kryesore të përdorimit të Tailwind CSS?',
        options: [
          { answerText: 'Lehtëson shkrimin e stilit CSS duke përdorur klasa funksionale.', isCorrect: true },
          { answerText: 'Shkatërron të gjitha strukturat HTML.', isCorrect: false },
          { answerText: 'Bën faqen të ngadalshme.', isCorrect: false },
        ],
      },
      {
        text: 'Si mund të përdoret Tailwind CSS në projektet e tua?',
        options: [
          { answerText: 'Përfshihet si një librari CSS dhe përdoren klasat e stilit në HTML.', isCorrect: true },
          { answerText: 'Instalohet si një program kompjuteri.', isCorrect: false },
          { answerText: 'Përdoret vetëm për aplikacione mobile.', isCorrect: false },
        ],
      },
      {
        text: 'Çfarë është një klasë funksionale në kontekstin e Tailwind CSS?',
        options: [
          { answerText: 'Një klasë që aplikohet në elemente për të stilitizuar faqen.', isCorrect: true },
          { answerText: 'Një funksion matematik për llogaritjet komplekse.', isCorrect: false },
          { answerText: 'Një ndërfaqe grafike për krijimin e animacioneve.', isCorrect: false },
        ],
      },
      {
        text: 'Si mund të personalizohen stilet nëpërmjet Tailwind CSS?',
        options: [
          { answerText: 'Përmes konfigurimeve të dokumentit dhe përdorimit të klasave.', isCorrect: true },
          { answerText: 'Duhet të ndryshohen direkt burimet e kodit të Tailwind CSS.', isCorrect: false },
          { answerText: 'Personalizimi nuk është i mundur me Tailwind CSS.', isCorrect: false },
        ],
      },
      {
        text: 'Cilat janë disa komponentë të gatshëm të ofruara nga Tailwind CSS?',
        options: [
          { answerText: 'Navbar, Karta, Butona, Formularet, Shiriti i përparuar.', isCorrect: true },
          { answerText: 'Lëkurë, Pemë, Gjeth, Lule.', isCorrect: false },
          { answerText: 'Kuzhinier, Piktor, Muzikant, Sportist.', isCorrect: false },
        ],
      },
      {
        text: 'Si ndihmon utility "flex" në Tailwind CSS?',
        options: [
          { answerText: 'Lehtëson ndërveprimin me shtrirjen dhe ngushtim të elementeve.', isCorrect: true },
          { answerText: 'Ndihmon në krijimin e efekteve të animacionit.', isCorrect: false },
          { answerText: 'Ndikon në ngjyrat dhe theme të uebfaqes.', isCorrect: false },
        ],
      },
      {
        text: 'Cila është sintaksa bazë e një klase funksionale në Tailwind CSS?',
        options: [
          { answerText: 'class="klasa-funksionale"', isCorrect: false },
          { answerText: 'className="klasa-funksionale"', isCorrect: false },
          { answerText: 'class="klasa-funksionale"', isCorrect: true },
        ],
      },
      {
        text: 'Si mund të instalohet Tailwind CSS në një projekt të ri?',
        options: [
          { answerText: 'Përmes npm ose yarn, duke konfiguruar pastaj një deklarimi CSS.', isCorrect: true },
          { answerText: 'Duke shkarkuar një skedë ekzekutive dhe duke e ekzekutuar atë.', isCorrect: false },
          { answerText: 'Duke kopjuar dhe ngjitur kodin e Tailwind CSS direkt në HTML.', isCorrect: false },
        ],
      },
      {
        text: 'Cilat janë tre komponentë që ndihmojnë në përdorimin e grideve (grid) në Tailwind CSS?',
        options: [
          { answerText: 'grid-cols, gap, place-items', isCorrect: true },
          { answerText: 'header, footer, sidebar', isCorrect: false },
          { answerText: 'flexbox, block, inline', isCorrect: false },
        ],
      },
    ];
  
    const handleAnswerOptions = (isCorrect) => {
      if (isCorrect) {
        setscore(score + 1);
      }
  
      const handleNextQuestion = currentQuestion + 1;
      if (handleNextQuestion < allQuestions.length) {
        setcurrentQuestion(handleNextQuestion);
      } else {
        setshowScore(true);
      }
    }
  
    return (
      <div className='flex w-full h-screen justify-center items-center bg-gradient-to-r from-blue-500 to-violet-300'>
        <div className='bg-slate-100 p-12 rounded-lg shadow-2xl w-full max-w-xl text-center'>
  
          {
            showScore ? (
              <>
                <div className='text-slate-700 text-xl font-semibold'>
                  You scored {score} out of {allQuestions.length}
                </div>
                <br></br>
                <div className='flex flex- items-center justify-center md:flex-row'>
                  <button className='m-2 h-10 w-44 rounded-md bg-slate-200 hover:bg-slate-100 hover:shadow-xl transition-all duration-500' onClick={()=> {window.location.reload()}}>Provo përsëri!</button>
                  <p className='m-2 h-10 w-44 flex items-center justify-center rounded-md bg-slate-200 hover:bg-slate-100 hover:shadow-xl transition-all duration-500'><NavLink to="/kuize">Kthehu!</NavLink></p>
              </div>
              </>
            ) : (
              <>
              <div className='text-slate-700 text-[12px] md:text-[16px] font-semibold'>
                  <div className='m-4'>
                    <span>Pytjet {currentQuestion + 1}</span>/{allQuestions.length}
                  </div>
                  <div className='m-4'>
                    {allQuestions[currentQuestion].text}
                  </div>
  
                  <div className='w-full flex flex-col'>
                    {
                      allQuestions[currentQuestion].options.map((options) => (
                        <button className='m-2 h-10 w-full rounded-md bg-slate-200 hover:bg-slate-100 hover:shadow-xl transition-all duration-500 ease-in-out' onClick={()=>handleAnswerOptions(options.isCorrect)}>{options.answerText}</button>
                      ))
                    }
  
                  </div>
  
                </div>
              </>
            )
          }
  
  
        </div>
      </div>
    )
}

export default TKuiz
