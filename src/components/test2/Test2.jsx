import React, { useState, useEffect } from 'react';
import './test.css';
import useUpdateTitle from '../../customHooks/useUpdateTitle';
import useTimeout from '../../customHooks/useTimeout';
import useDebounce from '../../customHooks/useDebounce';

const Test2 = () => {

  const [val, setVal] = useState(0)

  //useUpdateTitle
  useUpdateTitle(val, 'Instagram')

  //useTimeout
  const [count, setCount] = useState(0)
  const { reset, clear } = useTimeout(() => setCount(0), 2000)

  //useDebounce
  const [counter, setCounter] = useState(5)
  useDebounce(() => alert(counter), 2000, [counter])



  return (
    <div className='test2'>
      <div className="d-flex flex-column pt-3 text-center">
        <div>
          <p className='font'>{val}</p>
        </div>
        <div className='mt-3'>
          <button className='btn btn-warning ' type='submit' onClick={() => setVal(val + 1)}>Instagram</button>
        </div>

        <div className='mt-3'>
          <div className='toggle'>
            {count}
          </div>
          <div>
            <button onClick={() => setCount(c => c + 1)}>INCREASE</button>
            <button onClick={reset}>RESET</button>
            <button onClick={clear}>CLEAR</button>

          </div>
        </div>
        <div className='mt-3'>
          <div className='toggle'>
            {counter}
          </div>
          <div>
            <button onClick={() => setCounter(c => c + 1)}>INCREASE</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Test2