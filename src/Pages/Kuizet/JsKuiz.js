import React,{ useState } from 'react'
import {NavLink} from 'react-router-dom'
const JsKuiz = () => {
  const [currentQuestion, setcurrentQuestion] = useState(0);
  // we will toggle the show score
  const [showScore, setshowScore] = useState(false);
  const [score, setscore] = useState(0);

  // lets add some questions

  const allQuestions = [
    {
      text: 'Çfarë është JavaScript?',
      options: [
        { answerText: 'Një gjuhë programimi për zhvillimin e uebfaqeve interaktive.', isCorrect: true },
        { answerText: 'Një motor kërkimi në internet.', isCorrect: false },
        { answerText: 'Një framework për programim të aplikacioneve mobile.', isCorrect: false },
      ],
    },
    {
      text: 'Cili është qëllimi kryesor i përdorimit të JavaScript në uebfaqe?',
      options: [
        { answerText: 'Të shtojë funksionalitet dhe ndryshim të dinamikës së faqes.', isCorrect: true },
        { answerText: 'Të stilizojë elementet në uebfaqe.', isCorrect: false },
        { answerText: 'Të krijojë elemente vizuale të atraktivë.', isCorrect: false },
      ],
    },
    {
      text: 'Si mund të vendosim një skript JavaScript në uebfaqe?',
      options: [
        { answerText: 'Përdorimi i etiketës <script> me atributin src ose me kod.', isCorrect: true },
        { answerText: 'Përdorimi i etiketës <javascript> me atributin source.', isCorrect: false },
        { answerText: 'Përdorimi i etiketës <js> me atributin src.', isCorrect: false },
      ],
    },
    {
      text: 'Si mund të shkruajmë një koment në kodin JavaScript?',
      options: [
        { answerText: '// Komenti këtu', isCorrect: true },
        { answerText: '<!-- Komenti këtu -->', isCorrect: false },
        { answerText: '/* Komenti këtu */', isCorrect: false },
      ],
    },
    {
      text: 'Çfarë do të afishonte komanda "console.log("Përshëndetje, Botë!")" në konsolën e shfletuesit?',
      options: [
        { answerText: 'Përshëndetje, Botë!', isCorrect: true },
        { answerText: 'console.log("Përshëndetje, Botë!")', isCorrect: false },
        { answerText: '"Përshëndetje, Botë!"', isCorrect: false },
      ],
    },
    {
      text: 'Si deklarohet një variabël në JavaScript?',
      options: [
        { answerText: 'var emriVariabël = vlera;', isCorrect: true },
        { answerText: 'variabël emri = vlera;', isCorrect: false },
        { answerText: 'emriVariabël = vlera;', isCorrect: false },
      ],
    },
    {
      text: 'Çfarë është "DOM" në kontekstin e JavaScript?',
      options: [
        { answerText: 'Struktura e elementeve në uebfaqe që manipulohet me JS.', isCorrect: true },
        { answerText: 'Gjuhë e përdorur për shkrimin e kodeve të ndryshëm.', isCorrect: false },
        { answerText: 'Librari për kriptografi dhe siguri në ueb.', isCorrect: false },
      ],
    },
    {
      text: 'Cila është funksioni për të shfaqur një dritare të konfirmimit në JavaScript?',
      options: [
        { answerText: 'confirm()', isCorrect: true },
        { answerText: 'alert()', isCorrect: false },
        { answerText: 'prompt()', isCorrect: false },
      ],
    },
    {
      text: 'Çfarë është një ngjarje (event) në JavaScript?',
      options: [
        { answerText: 'Një veprim që ndodh në uebfaqe dhe mund të kapet me JS.', isCorrect: true },
        { answerText: 'Një lloj animacioni.', isCorrect: false },
        { answerText: 'Një funksion matematikor.', isCorrect: false },
      ],
    },
    {
      text: 'Si mund të ndryshojmë përmbajtjen e një elementi në uebfaqe me JavaScript?',
      options: [
        { answerText: 'Përdorimi i metodes innerHTML.', isCorrect: true },
        { answerText: 'Përdorimi i metodes changeContent.', isCorrect: false },
        { answerText: 'Përdorimi i metodes modifyText.', isCorrect: false },
      ],
    },
    {
      text: 'Si mund të përdorim JavaScript për të kontrolluar stilet e elementeve në uebfaqe?',
      options: [
        { answerText: 'Përdorimi i metodes style për të ndryshuar atributet e stilit.', isCorrect: true },
        { answerText: 'Përdorimi i metodes animate për të krijuar animacione.', isCorrect: false },
        { answerText: 'Përdorimi i metodes changeStyle për të ndryshuar stilet.', isCorrect: false },
      ],
    },
    {
      text: 'Si mund të kontrollojmë nëse një variabël është e tipit numerik në JavaScript?',
      options: [
        { answerText: 'Përdorimi i funksionit isNaN(variabël).', isCorrect: true },
        { answerText: 'Përdorimi i funksionit isNumber(variabël).', isCorrect: false },
        { answerText: 'Përdorimi i funksionit isNumeric(variabël).', isCorrect: false },
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

export default JsKuiz