import React from 'react'



export default function StockPage() {

  const products = ["Angular", "VueJS", "Flutter"]

  return (
    <div>StockPage
      <ul>
        {products.map(p=><li>- {p}</li>)}        
      </ul>

    </div>
  )
}