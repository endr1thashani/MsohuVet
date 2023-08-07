import React,{ useState } from 'react'
import {NavLink} from 'react-router-dom'
const CssKuiz = () => {
  const [currentQuestion, setcurrentQuestion] = useState(0);
  // we will toggle the show score
  const [showScore, setshowScore] = useState(false);
  const [score, setscore] = useState(0);

  // lets add some questions

  const allQuestions = [
    {
      text: 'Çfarë është CSS?',
      options: [
        { answerText: 'Një gjuhë e përdorur për stilizimin e uebfaqeve.', isCorrect: true },
        { answerText: 'Një gjuhë e përdorur për programim të aplikacioneve.', isCorrect: false },
        { answerText: 'Një motor kërkimi në internet.', isCorrect: false },
      ],
    },
    {
      text: 'Cila është roli kryesor i CSS?',
      options: [
        { answerText: 'Të përcaktojë stilet dhe prezantimin e uebfaqes.', isCorrect: true },
        { answerText: 'Të krijojë funksione matematikore.', isCorrect: false },
        { answerText: 'Të ndërtojë databaza.', isCorrect: false },
      ],
    },
    {
      text: 'Si mund të vendosim stilizime CSS direkt në HTML?',
      options: [
        { answerText: 'Përdorimi i atributit "style" në element.', isCorrect: true },
        { answerText: 'Përdorimi i etiketës <css> në dokumentin HTML.', isCorrect: false },
        { answerText: 'Përdorimi i etiketës <style> në fund të dokumentit HTML.', isCorrect: false },
      ],
    },
    {
      text: 'Cili është avantazhi i përdorimit të selektorëve në CSS?',
      options: [
        { answerText: 'Lehtësojnë zgjedhjen e elementeve për të aplikuar stilet.', isCorrect: true },
        { answerText: 'Shkaktojnë ngadalësim të ngarkimit të uebfaqes.', isCorrect: false },
        { answerText: 'Ndihmojnë në krijimin e elementeve grafike.', isCorrect: false },
      ],
    },
    {
      text: 'Si mund të selektojmë elementet me ID në CSS?',
      options: [
        { answerText: 'Përdorimi i # përpara emrit të ID-së.', isCorrect: true },
        { answerText: 'Përdorimi i . përpara emrit të ID-së.', isCorrect: false },
        { answerText: 'Përdorimi i @ përpara emrit të ID-së.', isCorrect: false },
      ],
    },
    {
      text: 'Cili është sintaksa e përdorimit të selektorit të klasës në CSS?',
      options: [
        { answerText: '.emri-klasës', isCorrect: true },
        { answerText: '#emri-klasës', isCorrect: false },
        { answerText: '@emri-klasës', isCorrect: false },
      ],
    },
    {
      text: 'Si mund të përdorim komente në kodin CSS?',
      options: [
        { answerText: '/* Komenti këtu */', isCorrect: true },
        { answerText: '// Komenti këtu', isCorrect: false },
        { answerText: '<!-- Komenti këtu -->', isCorrect: false },
      ],
    },
    {
      text: 'Cili selektor do të aplikonte stilet për të gjitha elementet <p> në CSS?',
      options: [
        { answerText: 'p', isCorrect: true },
        { answerText: '.paragraph', isCorrect: false },
        { answerText: '#p', isCorrect: false },
      ],
    },
    {
      text: 'Si mund të përcaktojmë ngjyrën e sfondit në CSS?',
      options: [
        { answerText: 'background-color', isCorrect: true },
        { answerText: 'color', isCorrect: false },
        { answerText: 'text-color', isCorrect: false },
      ],
    },
    {
      text: 'Cili atribut tregon përmasat e kornizës së një elementi në CSS?',
      options: [
        { answerText: 'border', isCorrect: false },
        { answerText: 'margin', isCorrect: false },
        { answerText: 'padding', isCorrect: true },
      ],
    },
    {
      text: 'Si mund të krijojmë një veti përkatëse të stilizimit në CSS?',
      options: [
        { answerText: ':hover', isCorrect: true },
        { answerText: '::before', isCorrect: false },
        { answerText: '::after', isCorrect: false },
      ],
    },
    {
      text: 'Çfarë është "box model" në CSS?',
      options: [
        { answerText: 'Një model që përshkruan strukturën e elementeve.', isCorrect: true },
        { answerText: 'Një metodë për krijimin e animacioneve.', isCorrect: false },
        { answerText: 'Një lloj elementi të formës sferike.', isCorrect: false },
      ],
    },
    {
      text: 'Cili selector do të aplikonte stilet për elementin e parë <h1> në CSS?',
      options: [
        { answerText: 'h1:first-child', isCorrect: true },
        { answerText: 'h1:first-of-type', isCorrect: false },
        { answerText: 'h1:first', isCorrect: false },
      ],
    },
    {
      text: 'Si mund të ndryshojmë madhësinë e fontit në CSS?',
      options: [
        { answerText: 'font-size', isCorrect: true },
        { answerText: 'text-size', isCorrect: false },
        { answerText: 'font-style', isCorrect: false },
      ],
    },
    {
      text: 'Cili atribut do të ndryshonte lartësinë e tekstit në një div në CSS?',
      options: [
        { answerText: 'height', isCorrect: false },
        { answerText: 'line-height', isCorrect: true },
        { answerText: 'text-height', isCorrect: false },
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

export default CssKuiz
