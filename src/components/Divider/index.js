import React from 'react'
import "./styles.css"

export default function Divider({ title }) {
    return (
        <div className="component-divider__container">
            <p className="component-divider__title">{ title }</p>
            <hr className="component-divider"/>
        </div>
    )
}
