import React from 'react'
import "./styles.css"

export default function HamburguerMenu( { state, color } ) {
    return (
        <span className="hamburguer-menu">
            <i style={{backgroundColor: color}} className={` hamburguer-menu__line ${ state && "hamburguer-menu__cancel" } `}/>
            <i style={{backgroundColor: color}}  className={` hamburguer-menu__line ${ state && "hamburguer-menu__cancel" } `}/>    
            <i style={{backgroundColor: state? "transparent" : color }}  className={` hamburguer-menu__line ${ state && "hamburguer-menu__cancel" } `}/>
        </span>
    )
}
