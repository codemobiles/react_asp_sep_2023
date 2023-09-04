import React from 'react'

type Props = {}

export default function App({}: Props) {
  // Typescript (Logic)

  // Implicit Declaration
  const tmp1 = 10
  const tmp2 = true
  const tmp3 = "CodeMobiles"
  const tmp4 = 1.12

  // Explicit Declaration
  const tmp5:number = 10
  const tmp6:boolean = true
  const tmp7:string = "CodeMobiles"
  const tmp8:number = 1.12

  let count = 0

  function showAlert() {
    alert("Hey")
  }

  const add = ()=>{
   count++ 
   console.log("Count: " + count)
  }
  
  // JSX
  return (
    <div style={{paddingLeft: 40}}>      
      <h1>React</h1>
      <ul>
        <li>Simple Text</li>
        <li>Tmp1: {tmp1}</li>
        <li>TmpS: {tmp1}, {tmp2}, {tmp3}, {tmp4}, </li>
        <li>TmpS: {tmp5}, {tmp6}, {tmp7}, {tmp8}, </li>
        <li><button onClick={showAlert}>Click Me</button></li>
        <li><button onClick={()=>showAlert()}>Click Me</button></li>
        <li><button onClick={()=>add()}>{count}</button></li>
      </ul>
      </div>
  )
}