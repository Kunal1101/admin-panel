import React from 'react'
import { SlMagnifier } from "react-icons/sl";
import ProductItem from './ProductItem';


function ProductList() {
  return (
    <>
      <div className='productList-box'>
      <div className='product-heading mb-3 d-flex flex-wrap justify-content-between'>
          <h2 className='poppins-semobold'>Overview</h2>
        <div className='d-flex gap-4'>
          <form className="d-flex position-relative" role="search">
            <input className="search-field" type="search" placeholder="Search" aria-label="Search" style={{backgroundColor: "#f2efff"}} />
            <SlMagnifier className='search-icon' />
          </form>
          <div className="dropdown">
            <button style={{backgroundColor: "#f9fafe", border: "none", color: "#0a0a0a"}} className="btn btn-sm btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Last 30 Days
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="/">Last 7 Days</a></li>
              <li><a className="dropdown-item" href="/">Last 30 Days</a></li>
              <li><a className="dropdown-item" href="/">Last 60 Days</a></li>
            </ul>
          </div>
        </div>
      </div>
      <ProductItem />
      </div>
    </>
  )
}

export default ProductList