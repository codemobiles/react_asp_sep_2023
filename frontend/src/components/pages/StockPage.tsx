import { getProducts, stockSelector } from '@/store/slices/stockSlice'
import { useAppDispatch } from '@/store/store'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'



export default function StockPage() {
  const dispatch = useAppDispatch()
  const stockReducer = useSelector(stockSelector)

  useEffect(()=>{
    dispatch(getProducts())
  },[dispatch])


  return (
    <div>StockPage
      <ul>
        {stockReducer.stockAllResult.map(p=><li key={p.product_id}>- {p.name}</li>)}        
      </ul>

    </div>
  )
}