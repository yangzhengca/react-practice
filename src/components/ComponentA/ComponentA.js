import React from 'react'
import useCustomHook from '../useCustomHook/useCustomHook'

const ComponentA = () => {
    const isMobile = useCustomHook()
    console.log(isMobile)
    return (
        <div>
            <h2>Show custom hooks in console</h2>
        </div>
    )
}

export default ComponentA
