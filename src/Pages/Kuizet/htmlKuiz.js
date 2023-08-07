import React,{ useState } from 'react'
import {NavLink} from 'react-router-dom'
const HtmlKuiz = () => {
  const [currentQuestion, setcurrentQuestion] = useState(0);
  // we will toggle the show score
  const [showScore, setshowScore] = useState(false);
  const [score, setscore] = useState(0);

  // lets add some questions

  const allQuestions = [
    {
      text: 'Çfarë është HTML?',
      options: [
        { answerText: 'Një gjuhë e përdorur për ndërtimin e uebfaqeve.', isCorrect: true },
        { answerText: 'Një motor kërkimi në internet.', isCorrect: false },
        { answerText: 'Një framework për programim të aplikacioneve desktop.', isCorrect: false },
      ],
    },
    {
      text: 'Cilat janë elementet themelore të një dokumenti HTML?',
      options: [
        { answerText: 'Koka (head) dhe Trupi (body)', isCorrect: true },
        { answerText: 'Këmba (footer) dhe Pjesa e Mesme (main)', isCorrect: false },
        { answerText: 'Varg (array) dhe Listë (ul)', isCorrect: false },
      ],
    },
    {
      text: 'Si mund të krijojmë një hiperlidhje (link) në HTML?',
      options: [
        { answerText: 'Përdorim etiketën <a> me atributin href.', isCorrect: true },
        { answerText: 'Përdorim etiketën <link> me atributin href.', isCorrect: false },
        { answerText: 'Përdorim etiketën <hyperlink> me atributin url.', isCorrect: false },
      ],
    },
    {
      text: 'Si mund të vendosim një imazh në uebfaqe duke përdorur HTML?',
      options: [
        { answerText: 'Përdorim etiketën <img> me atributin src.', isCorrect: true },
        { answerText: 'Përdorim etiketën <image> me atributin source.', isCorrect: false },
        { answerText: 'Përdorim etiketën <picture> me atributin source.', isCorrect: false },
      ],
    },
    {
      text: 'Si mund të krijoni një paragraf në HTML?',
      options: [
        { answerText: 'Përdorim etiketën <p>', isCorrect: true },
        { answerText: 'Përdorim etiketën <paragraph>', isCorrect: false },
        { answerText: 'Përdorim etiketën <para>', isCorrect: false },
      ],
    },
    {
      text: 'Çfarë është një etiketë (tag) në HTML?',
      options: [
        { answerText: 'Një komandë që përcakton veprimet e një uebfaqe.', isCorrect: false },
        { answerText: 'Një etiketë që tregon kohën e krijuar të uebfaqes.', isCorrect: false },
        { answerText: 'Një element thelbësor i strukturës së një dokumenti HTML.', isCorrect: true },
      ],
    },
    {
      text: 'Si mund të krijojmë një listë të renditur (ordered list) në HTML?',
      options: [
        { answerText: 'Përdorim etiketën <ol>', isCorrect: true },
        { answerText: 'Përdorim etiketën <ul>', isCorrect: false },
        { answerText: 'Përdorim etiketën <li>', isCorrect: false },
      ],
    },
    {
      text: 'Si mund të shtojmë komente në kodin HTML?',
      options: [
        { answerText: '<!-- Komenti këtu -->', isCorrect: true },
        { answerText: '// Komenti këtu', isCorrect: false },
        { answerText: '** Komenti këtu **', isCorrect: false },
      ],
    },
    {
      text: 'Si mund të vendosim një video në uebfaqe duke përdorur HTML?',
      options: [
        { answerText: 'Përdorim etiketën <video> me atributin src.', isCorrect: true },
        { answerText: 'Përdorim etiketën <vid> me atributin source.', isCorrect: false },
        { answerText: 'Përdorim etiketën <media> me atributin src.', isCorrect: false },
      ],
    },
    {
      text: 'Çfarë është atributi "alt" i imazheve në HTML?',
      options: [
        { answerText: 'Teksti shpjegues për imazhin në rast se nuk ngarkohet.', isCorrect: true },
        { answerText: 'Atribut që tregon madhësinë e imazhit.', isCorrect: false },
        { answerText: 'Atribut që ndryshon ngjyrën e imazhit.', isCorrect: false },
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
    <div className='flex w-full h-screen justify-center p-1 items-center bg-gradient-to-r from-blue-500 to-violet-300 md:p-0'>
      <div className='bg-slate-100 p-12 rounded-lg shadow-2xl w-full max-w-xl text-center'>

        {
          showScore ? (
            <>
              <div className='text-slate-700 text-xl font-semibold'>
                You scored {score} out of {allQuestions.length}
              </div>
              <br></br>
              <div className='flex flex- items-center justify-center md:flex-row'>
              <p className='m-2 h-10 w-44 flex items-center justify-center rounded-md bg-slate-200 hover:bg-slate-100 hover:shadow-xl transition-all duration-500'><NavLink to="/kuizihtml">Provo përsëri!</NavLink></p>
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

export default HtmlKuiz
