import React, { useEffect } from 'react'

function Heading( props ){

    useEffect( () => {
        console.log( props.titleText )
    })

    return(
        <h1>{ props.titleText || "escribe algo" }</h1>
    )
}

export default Heading