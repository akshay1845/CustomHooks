import React, {useState} from 'react'

const useArray = (defaultValue) => {
    const [array, setArray] = useState(defaultValue)

    function add(element){
        setArray(e => [...e,element])
    }
  

    function filter(callback){
        setArray(e => e.filter(callback))
    }

    function update(index, newElement){
        setArray(e => [...e.slice(0,index),newElement, e.slice(index+1,e.length-1)])
    }

    function remove(index){
        setArray(e => [...e.slice(0,index), ...e.slice(index+1, e.length-1)])
    }

    function clear(){
        setArray([])
    }

  return {array, set : add, setArray, filter, update, remove, clear}
}

export default useArray