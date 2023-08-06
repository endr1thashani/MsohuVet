import React from 'react'
import Home from '../Pages/Home'
import Ushtrime from '../Pages/Ushtrime'
import Kuize from '../Pages/Kuize'
import LearnHtml from '../Pages/Learning/learnHtml'
import LearnCss from '../Pages/Learning/learnCss'
import LearnJs from '../Pages/Learning/learnJs'
import LearnReact from '../Pages/Learning/learnReact'
import LearnBootstrap from '../Pages/Learning/learnBootstrap'
import LearnTailwind from '../Pages/Learning/learnTailwind'
import HtmlKuiz from '../Pages/Kuizet/htmlKuiz'
import CssKuiz from '../Pages/Kuizet/CssKuiz'
import JsKuiz from '../Pages/Kuizet/JsKuiz'
import ReactKuiz from '../Pages/Kuizet/ReactKuiz'
import BKuiz from '../Pages/Kuizet/BKuiz'
import TKuiz from '../Pages/Kuizet/TKuiz'
import {Routes , Route} from 'react-router-dom'
const Routers = () => {
  return (
    <div>
       <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/ballina' element={<Home/>} />
            <Route path='/ushtrime' element={<Ushtrime/>}/>
            <Route path='/kuize' element={<Kuize/>}/>
            <Route path='/mesoHtml' element={<LearnHtml/>} />
            <Route path='/mesoCss' element={<LearnCss/>} />
            <Route path='/mesoJavaScript' element={<LearnJs/>} />
            <Route path='/mesoReact' element={<LearnReact/>} />
            <Route path='/mesoBootstrap' element={<LearnBootstrap/>} />
            <Route path='/mesoTailwind' element={<LearnTailwind/>} />
            <Route path='/kuizihtml' element={<HtmlKuiz/>} />
            <Route path='/kuizicss' element={<CssKuiz/>} />
            <Route path='/kuizijs' element={<JsKuiz/>} />
            <Route path='/kuizireact' element={<ReactKuiz/>} />
            <Route path='/kuizibootstrap' element={<BKuiz/>} />
            <Route path='/kuizitailwind' element={<TKuiz/>} />
        </Routes>
    </div>
  )
}

export default Routers
