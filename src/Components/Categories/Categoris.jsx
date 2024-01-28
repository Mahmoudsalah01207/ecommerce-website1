import React, { useMemo, useState } from 'react'

export default function Categoris() {
  let [counter1, setCounter1] = useState(0)
  let [counter2, setCounter2] = useState(0)

  function changeCounter1() {
    setCounter1(counter1 + 1)
  }
  function changeCounter2() {
    setCounter2(counter2 + 1)
  }

  //memomization ===> useMemo
  let detectcounter2Even = useMemo(() => {
    console.log('detect')
    return counter2 % 2 == 0
  }, [counter2])

  return (
    <div>Categoris
     <h2>counter1: {counter1}</h2>
      <button className='btn btn-danger' onClick={changeCounter1}>counter1</button>
      <h2>counter2: {counter2}</h2>
      <button className='btn btn-danger' onClick={changeCounter2}>counter2</button>
      <h1>{detectcounter2Even ? 'even' : 'odd'}</h1>
    </div>
  )
}
