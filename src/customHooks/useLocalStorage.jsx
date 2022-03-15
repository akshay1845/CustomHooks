import React, { useState, useEffect } from 'react'

const getSavedValue = (key, intialValue) =>{

    const savedValue = JSON.parse(localStorage.getItem(key))

    if(savedValue) return savedValue 

    if(intialValue instanceof Function) return intialValue()

    return intialValue

}

const useLocalStorage = (key, intialValue) => {
    const [value, setValue] = useState(() => {return getSavedValue(key, intialValue)})

    useEffect(() =>{
        localStorage.setItem(key,JSON.stringify(value) )
    },[value])

    return [value, setValue]
}

export default useLocalStorage