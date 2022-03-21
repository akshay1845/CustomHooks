import React, { useState } from 'react'

function useToggle(defaultVal) {
    const [val, setVal] = useState(defaultVal)

    function toggleVal(val) {
        setVal(currentVal =>
            typeof val === 'boolean' ? val : !currentVal
        )
    }
    return (
        [val, toggleVal]
    )
}

export default useToggle