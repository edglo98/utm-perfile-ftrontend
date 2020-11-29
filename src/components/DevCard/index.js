import React, { useContext } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { ThemeContext } from '../../context/theme';
import PerfileCard from "../../components/PerfileCard"
import "./styles.css"
import { useHistory } from 'react-router-dom';

export default function DevCard( dev ) {
    const { biography, location, proyects, categories } = dev;
    const [ theme ] = useContext(ThemeContext);

    const history = useHistory();

    function handleHhistory() {
        history.push(`/devs/${ dev.username }`);
    }


    return (
        <Card style={{color: theme? "white" : "#2b2f33"}} className="devCard-component" onClick={ handleHhistory }  bg={theme? "dark" : "light"}>
            <Row>
                <Col xs={5}>
                    <PerfileCard {...dev} disablet={true} />
                </Col>
                <Col xs={7}>
                    <p style={{textAlign: "right"}}>{ location }</p>
                    <p>{ biography }</p>
                    <p>
                        Proyectos activos: <b>{ proyects.length}</b>
                    </p>
                    <div style={{display: "flex", flexWrap: "wrap"}}>
                        {
                            categories.map((category)=>{
                                return <p key={category._id} style={{color: category.color, fontWeight: "bold", margin: 5}} > {category.name} </p>
                            })
                        }
                    </div>
                </Col>
            </Row>
        </Card>
    )
}
