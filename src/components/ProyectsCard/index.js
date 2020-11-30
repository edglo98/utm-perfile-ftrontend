import React, { useContext } from 'react'
import { Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { constants } from '../../assets/constants'
import images from '../../assets/images';
import { ThemeContext } from '../../context/theme';
import { useFetch } from '../../hooks/useFetch';
import Spineer from '../Spinner';
import "./styles.css"
import ReactGa from "react-ga"

export default function ProyectCard({ _id, photo, name, publicated }) {
    
    const URI = constants.uri;
    const history = useHistory();
    const [ theme ] = useContext(ThemeContext);

    const { data, loading } = useFetch(`${ URI }/proyects?_id=${ _id }`);
    
    function handleHhistory() {
        ReactGa.event({
            category: `CardClick`,
            action: `Click the '${ name }' protyect  from proyects or perfile page`
        })
        history.push(`/proyectos/${ _id }`);
    }

    return (
        <Col xs={6} lg={3} className="proyectsCard-component" onClick={ handleHhistory }>
            <Card style={{color: theme? "white" : "#2b2f33", padding: 5 }}  bg={theme? "dark" : "light"}>
                <Card.Img variant="top" src={ photo[0]? URI+photo[0].url : images.bgDefault } />
                <Card.Body>
                    <Card.Title>{ name }</Card.Title>
                    Tecnologias:
                    <div style={{display: "flex", flexWrap: "wrap"}}>
                        {
                            loading? <Spineer/> : data[0].categories.map((category)=>{
                                return <p key={category._id} style={{color: category.color, fontWeight: "bold", margin: 5}} > {category.name} </p>
                            })
                        }
                    </div>
                </Card.Body>
                <span className="ProyectsCard-component__state" style={{backgroundColor: publicated? "green" : "red" }}/>
            </Card>
        </Col>
    )
}
