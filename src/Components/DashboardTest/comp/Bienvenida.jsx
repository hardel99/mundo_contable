import React from 'react'

function Bienvenida(props) {
    console.log(props)
    const {nombre}= props
    return (
        <div>
            <h2>Bienvenida {nombre} </h2>
        </div>
    )
}

export default Bienvenida
