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
          { answerText: 'Një bibliotekë JavaScript për ndërtimin e faqeve të përdoruesit.', isCorrect: true },
          { answerText: 'Një gjuhë programimi për ndërtimin e aplikacioneve mobile.', isCorrect: false },
          { answerText: 'Një teknologji për sigurinë në rrjetat kompjuterike.', isCorrect: false },
        ],
      },
      {
        text: 'Cili është qëllimi kryesor i React?',
        options: [
          { answerText: 'Të lehtësojë krijimin e ndërfaqeve interaktive dhe të përdoruesit.', isCorrect: true },
          { answerText: 'Të përdorë ngjarjet për zhvillimin e aplikacioneve.', isCorrect: false },
          { answerText: 'Të automatizojë proceset e serverit.', isCorrect: false },
        ],
      },
      {
        text: 'Cila është sintaksa e përdorur për të krijuar një komponent në React?',
        options: [
          { answerText: '<Mjeku />', isCorrect: true },
          { answerText: 'Komponenti:Mjeku', isCorrect: false },
          { answerText: 'Mjeku = Komponenti', isCorrect: false },
        ],
      },
      {
        text: 'Si mund të përdorim "props" në një komponent të React?',
        options: [
          { answerText: 'props është një objekt që mban të dhënat nga komponenti prind.', isCorrect: true },
          { answerText: 'props është një funksion që ndihmon në stilizim.', isCorrect: false },
          { answerText: 'props është një metode për të ruajtur gjendjen.', isCorrect: false },
        ],
      },
      {
        text: 'Si e quajmë veprimin kur komponenti përditësohet dhe renditet sërish?',
        options: [
          { answerText: 'Renderim i ri.', isCorrect: true },
          { answerText: 'Renditje e vjetër.', isCorrect: false },
          { answerText: 'Përditësim i vazhdueshëm.', isCorrect: false },
        ],
      },
      {
        text: 'Cila është metoda kryesore e jetës së një komponenti në React?',
        options: [
          { answerText: 'render()', isCorrect: true },
          { answerText: 'update()', isCorrect: false },
          { answerText: 'create()', isCorrect: false },
        ],
      },
      {
        text: 'Çfarë është "JSX" në React?',
        options: [
          { answerText: 'Eshtë sintaksë e ngjashme me HTML për krijimin e elementeve të ndërfaqes në JavaScript..', isCorrect: true },
          { answerText: 'Një lloj ngjarjeje në JavaScript.', isCorrect: false },
          { answerText: 'Një metodë për manipulimin e stilizimeve në komponente.', isCorrect: false },
        ],
      },
      {
        text: 'Si quhet metoda e përdorur për të përditësuar gjendjen e një komponenti?',
        options: [
          { answerText: 'setState()', isCorrect: true },
          { answerText: 'updateState()', isCorrect: false },
          { answerText: 'changeState()', isCorrect: false },
        ],
      },
      {
        text: 'Cila është libraria për menaxhimin e gjendjes së aplikacionit në React?',
        options: [
          { answerText: 'Redux', isCorrect: true },
          { answerText: 'React Router', isCorrect: false },
          { answerText: 'Axios', isCorrect: false },
        ],
      },
      {
        text: 'Si mund të rendisim disa komponente brenda një komponenti prind në React?',
        options: [
          { answerText: '<Prindi> <Fëmija1 /> <Fëmija2 /> </Prindi>', isCorrect: true },
          { answerText: '<Prindi> <Fëmija1> <Fëmija2> </Prindi>', isCorrect: false },
          { answerText: '<Prindi> <Fëmija1, Fëmija2 /> </Prindi>', isCorrect: false },
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
                  <p className='m-2 h-10 w-44 flex items-center justify-center rounded-md bg-slate-200 hover:bg-slate-100 hover:shadow-xl transition-all duration-500'><NavLink to="/kuizireact">Provo përsëri!</NavLink></p>
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

export default ReactKuiz
