import React from 'react'
import { AiOutlineArrowUp,AiOutlineArrowDown } from "react-icons/ai";
import { AiOutlineDollar } from "react-icons/ai";
import { IoDocumentTextOutline } from "react-icons/io5";
import { PiHandCoinsLight } from "react-icons/pi";
import { BsHandbag } from "react-icons/bs";

function Analytics() {
  return (
    <div className='mt-4'>
      <div className='d-flex gap-4 flex-wrap flex-xl-nowrap'>
        <div className='analytics-box d-flex align-items-center gap-2'>
          <div className='analytics-icon' style={{backgroundColor: "#e2ffee"}}>
            <AiOutlineDollar style={{color: "#01a440"}} />
          </div>
          <div className='analytics-content d-flex flex-column'>
            <span className='analytics-title'>Earning</span>
            <span className='analytics-amount poppins-semibold'>$198k</span>
            <span className='analytics-month'><span className='poppins-semibold' style={{color: "#39bd75"}}><AiOutlineArrowUp /> 37.8%</span> this month</span>
          </div>
        </div>
        <div className='analytics-box d-flex align-items-center gap-2'>
          <div className='analytics-icon' style={{backgroundColor: "#e6dafd"}}>
            <IoDocumentTextOutline style={{color: "#a715fe"}} />
          </div>
          <div className='analytics-content d-flex flex-column'>
            <span className='analytics-title'>Earning</span>
            <span className='analytics-amount poppins-semibold'>$2.4k</span>
            <span className='analytics-month'><span className='poppins-semibold' style={{color: "#d11956"}}><AiOutlineArrowDown /> 2%</span> this month</span>
          </div>
        </div>
        <div className='analytics-box d-flex align-items-center gap-2'>
          <div className='analytics-icon' style={{backgroundColor: "#caf2fd"}}>
            <PiHandCoinsLight style={{color: "#0c57be"}} />
          </div>
          <div className='analytics-content d-flex flex-column gap-2'>
            <span className='analytics-title'>Earning</span>
            <span className='analytics-amount poppins-semibold'>$2.4k</span>
            <span className='analytics-month'><span className='poppins-semibold' style={{color: "#d11956"}}><AiOutlineArrowDown /> 2%</span> this month</span>
          </div>
        </div>
        <div className='analytics-box d-flex align-items-center gap-2'>
          <div className='analytics-icon' style={{backgroundColor: "#febce0"}}>
            <BsHandbag style={{color: "#d50006"}} />
          </div>
          <div className='analytics-content d-flex flex-column'>
            <span className='analytics-title'>Earning</span>
            <span className='analytics-amount poppins-semibold'>$89k</span>
            <span className='analytics-month'><span className='poppins-semibold' style={{color: "#39bd75"}}><AiOutlineArrowUp /> 11%</span> this week</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Analytics