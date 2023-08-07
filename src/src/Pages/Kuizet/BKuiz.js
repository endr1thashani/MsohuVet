import React,{ useState } from 'react'
import {NavLink} from 'react-router-dom'

const BKuiz = () => {
    const [currentQuestion, setcurrentQuestion] = useState(0);
    // we will toggle the show score
    const [showScore, setshowScore] = useState(false);
    const [score, setscore] = useState(0);
  
    // lets add some questions
  
    const allQuestions = [
      {
        text: 'Çfarë është Bootstrap?',
        options: [
          { answerText: 'Një framework CSS për zhvillimin e uebfaqeve për mobil.', isCorrect: true },
          { answerText: 'Një gjuhë programimi për krijimin e aplikacioneve desktop.', isCorrect: false },
          { answerText: 'Një librari JavaScript për animacione.', isCorrect: false },
        ],
      },
      {
        text: 'Cili është qëllimi kryesor i përdorimit të Bootstrap?',
        options: [
          { answerText: 'Të lehtësojë dhe të shpejtojë stilizimin dhe ndërtimin e faqeve.', isCorrect: true },
          { answerText: 'Të krijojë efekte vizuale komplekse.', isCorrect: false },
          { answerText: 'Të ndërtojë aplikacione mobile.', isCorrect: false },
        ],
      },
      {
        text: 'Si mund të përdorim klaset e kolonave në Bootstrap?',
        options: [
          { answerText: 'Përdorimi i "col" me ndarje të ndryshme të kolonave.', isCorrect: true },
          { answerText: 'Përdorimi i "column" për kolona.', isCorrect: false },
          { answerText: 'Përdorimi i "grid" për renditjen.', isCorrect: false },
        ],
      },
      {
        text: 'Cili klase përdoret për të krijuar një menyrë e navigimit (navbar) në Bootstrap?',
        options: [
          { answerText: 'navbar', isCorrect: true },
          { answerText: 'menu', isCorrect: false },
          { answerText: 'nav', isCorrect: false },
        ],
      },
      {
        text: 'Si mund të krijojmë një buton në Bootstrap?',
        options: [
          { answerText: 'Përdorimi i klases "btn" dhe varianteve të tjera të klases.', isCorrect: true },
          { answerText: 'Përdorimi i klases "button".', isCorrect: false },
          { answerText: 'Përdorimi i klases "link".', isCorrect: false },
        ],
      },
      {
        text: 'Cila është funksioni i klases "container" në Bootstrap?',
        options: [
          { answerText: 'Krijon një kontenier me zgjatje fikse për ndarjen e kolonave.', isCorrect: true },
          { answerText: 'Krijon një kontenier me zgjatje të plotë me ngjyra të ndryshme.', isCorrect: false },
          { answerText: 'Krijon një kontenier për kodin HTML.', isCorrect: false },
        ],
      },
      {
        text: 'Si mund të përdorim klase për të krijuar një tabelë me Bootstrap?',
        options: [
          { answerText: 'Përdorimi i klases "table" dhe klaseve të tjera për stilizim.', isCorrect: true },
          { answerText: 'Përdorimi i klases "tabular".', isCorrect: false },
          { answerText: 'Përdorimi i klases "grid" për renditjen.', isCorrect: false },
        ],
      },
      {
        text: 'Cila klase përdoret për të krijuar një modal (dritare modale) në Bootstrap?',
        options: [
          { answerText: 'modal', isCorrect: true },
          { answerText: 'popup', isCorrect: false },
          { answerText: 'dialog', isCorrect: false },
        ],
      },
      {
        text: 'Si mund të përdorim klase për të shtuar ikona në Bootstrap?',
        options: [
          { answerText: 'Përdorimi i klases "glyphicon" ose "bi" për ikona.', isCorrect: true },
          { answerText: 'Përdorimi i klases "icon".', isCorrect: false },
          { answerText: 'Përdorimi i klases "img" për të ngarkuar ikona.', isCorrect: false },
        ],
      },
      {
        text: 'Cila klase përdoret për të krijuar një karusel (carousel) në Bootstrap?',
        options: [
          { answerText: 'carousel', isCorrect: true },
          { answerText: 'slider', isCorrect: false },
          { answerText: 'slideshow', isCorrect: false },
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
              <div className='text-slate-700 text-[16px] font-semibold'>
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

export default BKuiz