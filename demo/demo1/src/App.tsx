import React from 'react'

type Props = {}

export default function App({}: Props) {
  // Typescript (Logic)
  const tmp1 = 10
  const tmp2 = true
  const tmp3 = "CodeMobiles"
  const tmp4 = 1.12
  
  // JSX
  return (
    <div style={{paddingLeft: 40}}>      
      <h1>React</h1>
      <ul>
        <li>Simple Text</li>
        <li>Tmp1: {tmp1}</li>
        <li>TmpS: {tmp1}, {tmp2}, {tmp3}, {tmp4}, </li>
      </ul>
      </div>
  )
}