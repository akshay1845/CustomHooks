import React, { useState, useEffect } from 'react';
import './test.css';
import useUpdateTitle from '../../customHooks/useUpdateTitle';
import useLocalStorage from '../../customHooks/useLocalStorage';
import useToggle from '../../customHooks/useToggle';
import useUpdateEffect from '../../customHooks/useUpdateEffect';
import ArrayDemo from '../ArrayDemo'
const Test1 = () => {

    const [val, setVal] = useState(0)

    //useLocalStorage
    const [name, setName] = useLocalStorage('name', () => '')

    //useToggle
    const [val1, toggleVal1] = useToggle(false)

    //useUpdate
    useUpdateTitle(val, 'Facebook')

    //useUpdateEffect
    const [count, setCount] = useState(18)
    useUpdateEffect(() => alert(`Total clicked ${count}`), [count])




    // useEffect(()=>{
    //     console.log(document.title)
    //     console.log("val = " +val)
    // },[val])


    return (
        <div className='test1'>
            <div className="d-flex flex-column pt-3 text-center">
                <div>
                    <p className='font'>{val}</p>
                </div>
                <div className='mt-3'>
                    <button className='btn btn-warning ' type='submit' onClick={() => setVal(val + 1)}>Facebook</button>
                </div>

                <div className="mt-5">
                    <input type="text" value={name} placeholder="Enter Your Name" onChange={(e) => setName(e.target.value)} />
                </div>

                <div className="mt-5">
                    <div className='toggle'>{val1.toString()}</div>
                    <div>
                        <button className='mr-3' onClick={toggleVal1}>Toggle</button>
                        <button className='mr-3' onClick={() => toggleVal1(true)}>Make True</button>
                        <button onClick={() => toggleVal1(false)}>Make False</button>
                    </div>
                </div>

                <div className='mt-3'>
                    <div className='toggle'>
                        {count}
                    </div>
                    <div>
                        <button onClick={() => setCount(c => c + 1)}>INCREASE</button>
                    </div>
                </div>
                <ArrayDemo />

            </div>
            
        </div >
    )
}

export default Test1