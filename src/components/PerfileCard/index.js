import React from 'react'
import { Image } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { constants } from '../../assets/constants'
import "./styles.css"

export default function PerfileCard({disablet, name, lastname, photo, username }) {
    const URI = constants.uri
    const history = useHistory();

    function handleHhistory() {
        history.push(`/devs/${ username }`);
    }

    return (
        <div onClick={ handleHhistory }>
            <div className={`PerfileCard-component ${disablet && "disablet"}`}>
                <Image style={{width: "100%"}} src={ URI+photo.url } roundedCircle />
            </div>
            <h4 style={{textAlign: "center", fontWeight: "bold"}}>{ name+" "+lastname }</h4>
            <h4 style={{textAlign: "center"}}>{ "@"+username }</h4>
        </div>
    )
}
