import React from 'react'
import '../components/Test1/test.css'
import useArray from '../customHooks/useArray'
const ArrayDemo = () => {
    const {array, set, add, update, remove, clear, filter } = useArray([1,2,3,4,5,6,7,8,9])

  return (
    <div>
        <div className="toggle mt-5" style={{width:'auto'}}>{array.join(",")}</div><br />
        <button onClick={() => add(45)}>Add 45</button>
        <button onClick={() => update(1,18)}>Change 2nd Element 18</button>
        <button onClick={()=>remove(1)}>Remobe 2nd Elelment</button>
        <button onClick={()=> filter(n => n < 5)}>Keep number Less than 5</button>
        <button onClick={()=> set([23,4])}>set to 23, 4</button>
        <button onClick={clear}>CLEAR</button>
    </div>
  )
}

export default ArrayDemo