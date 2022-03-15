import React, { useState, useEffect } from 'react';
import './test.css';
import useUpdateTitle from '../../customHooks/useUpdateTitle';
import useLocalStorage from '../../customHooks/useLocalStorage';

const Test1 = () => {

    const [val, setVal] = useState(0)
    const [name, setName] = useLocalStorage('name', ()=>'')

    //Custom hook
    useUpdateTitle(val,'Facebook')
    

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
                    <input type="text" value={name} onChange={(e)=> setName(e.target.value)} />
                </div>
            
        </div>
    </div>
  )
}

export default Test1