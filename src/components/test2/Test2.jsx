import React, { useState, useEffect } from 'react';
import './test.css';
import useUpdateTitle from '../../customHooks/useUpdateTitle';

const Test2 = () => {

    const [val, setVal] = useState(0)

    //Custom hook
    useUpdateTitle(val, 'Instagram')

    
  return (
    <div className='test2'>
            <div className="d-flex flex-column pt-3 text-center">
                <div>
                    <p className='font'>{val}</p>
                </div>
                <div className='mt-3'>
                    <button className='btn btn-warning ' type='submit' onClick={() => setVal(val + 1)}>Instagram</button>
                </div>
            
        </div>
    </div>
  )
}

export default Test2