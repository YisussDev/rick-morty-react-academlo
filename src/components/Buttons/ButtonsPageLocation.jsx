import React from 'react'
import './ButtonsPage.css'


const ButtonsPage = ({changePage, dataInfo, pageActual}) => {
  return (
    <div className='ButtonsPage'>
        <button mode={11} onClick={changePage}>Prev</button>
        <div className='visible'>
        {((pageActual*20)<dataInfo+20)&&<button onClick={changePage} mode={2} option={pageActual}>{pageActual}</button>}
        {((pageActual+1)*20<dataInfo)&&<button onClick={changePage} mode={2} option={pageActual+1}>{pageActual+1}</button>}
        {((pageActual+2)*20<dataInfo)&&<button onClick={changePage} mode={2} option={pageActual+2}>{pageActual+2}</button>}
        {((pageActual+3)*20<dataInfo)&&<button onClick={changePage} mode={2} option={pageActual+3}>{pageActual+3}</button>}
        {((pageActual+4)*20<dataInfo)&&<button onClick={changePage} mode={2} option={pageActual+4}>{pageActual+4}</button>}
        {((pageActual+5)*20<dataInfo)&&<button onClick={changePage} mode={2} option={pageActual+5}>{pageActual+5}</button>}
        {((pageActual+6)*20<dataInfo)&&<button onClick={changePage} mode={2} option={pageActual+6}>{pageActual+6}</button>}
        </div>
        <button mode={33} onClick={changePage}>Next</button>
    </div>
  )
}

export default ButtonsPage