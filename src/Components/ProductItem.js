import React from 'react'
import productOne from "../Assests/product-1.png"
import productTwo from "../Assests/product-2.png"


function ProductItem() {
  const items=[
    {
      id: 1,
      productImage: productOne,
      name: "Abstract 3D",
      description: "lorem ipsum dolar sit omet",
      stock: "32 in stock",
      price: "$ 45.99",
      totalSales: "20"
    },
    {
      id: 2,
      productImage: productTwo,
      name: "Sarphens Illustrations",
      description: "lorem ipsum dolar sit omet",
      stock: "32 in stock",
      price: "$ 45.99",
      totalSales: "20"
    },

  ]
  return (
    <>
        <table className="table">
          <thead>
            <tr>
              {/* <th scope="col" className='poppins-medium'></th> */}
              <th scope="col"  className='poppins-regular' style={{width: "60%"}}>Product Name</th>
              <th scope="col" className='poppins-medium'>Stock</th>
              <th scope="col" className='poppins-medium'>Price</th>
              <th scope="col" className='poppins-medium'>Total Sales</th>
            </tr>
          </thead>
          <tbody>
              {
                items.map((item)=>(
                  <tr>
                    
                  <td className='d-flex align-items-center gap-3'>
                    <span className='d-block'><img src={item.productImage} alt='' style={{width: "80px", borderRadius: "5px"}}/></span>
                    <p  className='d-flex flex-column'>
                    <span className='poppins-bold'>{item.name}</span>
                  <span style={{
                    color: "#a9a8a8"
                  }}>{item.description}</span>
                    </p>
                  </td>
                  <td>{item.stock}</td>
                  <td  className='poppins-bold'>{item.price}</td>
                  <td>{item.totalSales}</td>
                  </tr>
                ))
              }
          </tbody>
        </table>
    </>
  )
}

export default ProductItem