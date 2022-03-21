import React, {useEffect} from 'react'
import useTimeout from '../customHooks/useTimeout'

const useDebounce = (callback, delay, dependencies) => {
const {reset, clear} = useTimeout(callback, delay)

useEffect(reset, [...dependencies, reset])
useEffect(clear,[])

}

export default useDebounce