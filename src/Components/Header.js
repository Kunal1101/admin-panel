import React from 'react'
import hand from "../Assests/hand.png"
import { SlMagnifier } from "react-icons/sl";

function Header() {
  const user = "Shahruk";
  return (
    <div className='d-flex justify-content-between mt-3 align-items-center flex-wrap flex-sm-nowrap'>
      <h2 style={{fontSize: "18px"}} className='poppins-semibold'>Hello {user}<img className='ms-sm-2' src={hand} alt='' style={{width: "20px"}}/>,</h2>
      <form className="d-flex position-relative" role="search">
        <input className="search-field" type="search" placeholder="Search" aria-label="Search" />
        <SlMagnifier className='search-icon' />
      </form>
    </div>
  )
}

export default Header