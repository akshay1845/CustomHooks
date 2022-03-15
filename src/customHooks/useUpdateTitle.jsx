import React from 'react'
import { useEffect } from 'react'

const useUpdateTitle = (val, title) => {

    useEffect(()=>{

        val >= 1 ? 
        document.title =  `${title}-${val}`
        :
        document.title = document.title;

    },[val])

}

export default useUpdateTitle