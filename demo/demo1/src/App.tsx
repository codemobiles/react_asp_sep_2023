import React from 'react'

type Props = {}

export default function App({}: Props) {
  // Typescript (Logic)
  const tmp1 = 10
  
  // JSX
  return (
    <div style={{paddingLeft: 40}}>      
      <h1>React</h1>
      <ul>
        <li>Simple Text</li>
        <li>Tmp1: {tmp1}</li>
      </ul>
      </div>
  )
}