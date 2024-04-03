import React from 'react'
import logo from '../Assests/logo.png'
import person from '../Assests/person.jpg'
import "../common"
import { HiKey } from "react-icons/hi2";
import { PiCube } from "react-icons/pi";
import { BsPerson } from "react-icons/bs";
import { LiaMoneyBillWaveSolid } from "react-icons/lia";
import { CiDiscount1 } from "react-icons/ci";
import { TbHelpSquareRounded } from "react-icons/tb";
import { BsChevronDown } from "react-icons/bs";

function Sidebar() {
  const items=[
    {
      id: 1,
      name: "Dashboard",
      icon: <HiKey />
    },
    {
      id: 2,
      name: "Product",
      icon: <PiCube />
    },
    {
      id: 3,
      name: "Customer",
      icon: <BsPerson />
    },
    {
      id: 4,
      name: "Income",
      icon: <LiaMoneyBillWaveSolid />
    },
    {
      id: 5,
      name: "Promote",
      icon: <CiDiscount1 />
    },
    {
      id: 6,
      name: "Help",
      icon: <TbHelpSquareRounded />
    }
  ]
  return (
    <div className='sidebar_container'>
      <div>
        <div className='position-relative pt-3 sidebar-heading d-flex align-items-center mb-4 poppins-semibold'>
          <img src={logo} alt='logo' />
          <span>Dashboard</span>
        </div>
        {
          items.map((item)=>(
            <div className='menu-item-box'>{item.icon}<span className='menu-item poppins-medium ps-3'>{item.name}</span></div>
          ))
        }
      </div>
     <div className='user-details-box d-flex align-items-center gap-2 mb-4 position-relative'>
        <img src={person} alt='' />
        <div className='d-flex flex-column'>
          <span className='user_name poppins-semibold'>Evono</span>
          <span className='user_designation'>Project Manager</span>
        </div>
        <BsChevronDown style={{position: "absolute", right: "10px"}} />
     </div>
    </div>
  )
}


export default Sidebar