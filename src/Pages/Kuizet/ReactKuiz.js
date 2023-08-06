import React,{ useState } from 'react'
import {NavLink} from 'react-router-dom'
const ReactKuiz = () => {
    const [currentQuestion, setcurrentQuestion] = useState(0);
    // we will toggle the show score
    const [showScore, setshowScore] = useState(false);
    const [score, setscore] = useState(0);
  
    // lets add some questions
  
    const allQuestions = [
      {
        text: 'Çfarë është React?',
        options: [
          { answerText: 'HTML', isCorrect: true },
          { answerText: 'HTML', isCorrect: false },
          { answerText: 'HTML', isCorrect: false },
        ],
      },
      {
        text: 'Çfarë është HTML?',
        options: [
          { answerText: 'HTML', isCorrect: true },
          { answerText: 'HTML', isCorrect: false },
          { answerText: 'HTML', isCorrect: false },
        ],
      },
      {
        text: 'Çfarë është HTML?',
        options: [
          { answerText: 'HTML', isCorrect: true },
          { answerText: 'HTML', isCorrect: false },
          { answerText: 'HTML', isCorrect: false },
        ],
      },
      {
        text: 'Çfarë është HTML?',
        options: [
          { answerText: 'HTML', isCorrect: true },
          { answerText: 'HTML', isCorrect: false },
          { answerText: 'HTML', isCorrect: false },
        ],
      },
      {
        text: 'Çfarë është HTML?',
        options: [
          { answerText: 'HTML', isCorrect: true },
          { answerText: 'HTML', isCorrect: false },
          { answerText: 'HTML', isCorrect: false },
        ],
      },
    ]
  
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
                <button className='m-2 h-10 w-44 rounded-md bg-slate-200 hover:bg-slate-100 hover:shadow-xl transition-all duration-500' onClick={()=> {window.location.reload()}}>Provo përsëri!</button>
                <button className='m-2 h-10 w-44 rounded-md bg-slate-200 hover:bg-slate-100 hover:shadow-xl transition-all duration-500'><NavLink className='p-30px' to="/kuize">Kthehu!</NavLink></button>
              </>
            ) : (
              <>
                <div className='text-slate-700 text-xl font-semibold'>
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

export default ReactKuiz