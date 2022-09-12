import React from 'react'
import './ButtonsPage.css'


const ButtonsPage = ({changePage, dataInfo, pageActual}) => {
  return (
    <div className='ButtonsPage'>
        <button mode={'1'} onClick={changePage}>Prev</button>
        <div className='visible'>
        {(pageActual<dataInfo?.pages+1)&&<button onClick={changePage} mode={2} option={pageActual}>{pageActual}</button>}
        {(pageActual+1<=dataInfo?.pages)&&<button onClick={changePage} mode={2} option={pageActual+1}>{pageActual+1}</button>}
        {(pageActual+2<=dataInfo?.pages)&&<button onClick={changePage} mode={2} option={pageActual+2}>{pageActual+2}</button>}
        {(pageActual+3<=dataInfo?.pages)&&<button onClick={changePage} mode={2} option={pageActual+3}>{pageActual+3}</button>}
        {(pageActual+4<=dataInfo?.pages)&&<button onClick={changePage} mode={2} option={pageActual+4}>{pageActual+4}</button>}
        {(pageActual+5<=dataInfo?.pages)&&<button onClick={changePage} mode={2} option={pageActual+5}>{pageActual+5}</button>}
        {(pageActual+6<=dataInfo?.pages)&&<button onClick={changePage} mode={2} option={pageActual+6}>{pageActual+6}</button>}
        </div>
        <button mode={3} onClick={changePage}>Next</button>
    </div>
  )
}

export default ButtonsPage