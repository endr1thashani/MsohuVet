import React from 'react'
import Home from '../Pages/Home'
import Ushtrime from '../Pages/Ushtrime'
import Kuize from '../Pages/Kuize'
import LearnHtml from '../Pages/Learning/learnHtml/learnHtml'
import LearnCss from '../Pages/Learning/learnCSS/learnCss'
import LearnJs from '../Pages/Learning/learnJs/learnJs'
import LearnReact from '../Pages/Learning/learnReact/learnReact'
import LearnBootstrap from '../Pages/Learning/learnBootstrap/learnBootstrap'
import LearnTailwind from '../Pages/Learning/learnTailwind/learnTailwind'
import HtmlKuiz from '../Pages/Kuizet/htmlKuiz'
import CssKuiz from '../Pages/Kuizet/CssKuiz'
import JsKuiz from '../Pages/Kuizet/JsKuiz'
import ReactKuiz from '../Pages/Kuizet/ReactKuiz'
import BKuiz from '../Pages/Kuizet/BKuiz'
import TKuiz from '../Pages/Kuizet/TKuiz'
import UshtrimiHtml from '../Pages/Ushtrimet/UshtrimiHtml/UshtrimiHtml'
import UshtrimiCss from '../Pages/Ushtrimet/UshtrimiCss/UshtrimiCss'
import UshtrimiJs from '../Pages/Ushtrimet/UshtrimiJs/UshtrimiJs'
import UshtrimiReact from '../Pages/Ushtrimet/UshtrimiReact/UshtrimiReact'
import UshtrimiBootstrap from '../Pages/Ushtrimet/UshtrimiBootstrap/UshtrimiBootstrap'
import UshtrimiTailwind from '../Pages/Ushtrimet/UshtrimiTailwind/UshtrimiTailwind'
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
            <Route path='/ushtrimihtml' element={<UshtrimiHtml/>} />
            <Route path='/ushtrimicss' element={<UshtrimiCss/>} />
            <Route path='/ushtrimijs' element={<UshtrimiJs/>} />
            <Route path='/ushtrimireact' element={<UshtrimiReact/>} />
            <Route path='/ushtrimibootstrap' element={<UshtrimiBootstrap/>} />
            <Route path='/ushtrimitailwind' element={<UshtrimiTailwind/>} />
        </Routes>
    </div>
  )
}

export default Routers
