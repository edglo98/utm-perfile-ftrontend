import React, { useContext } from 'react'
import { Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { constants } from '../../assets/constants'
import images from '../../assets/images';
import { ThemeContext } from '../../context/theme';
import { useFetch } from '../../hooks/useFetch';
import Spineer from '../Spinner';
import "./styles.css"

export default function ProyectCard({ _id, photo, name }) {
    
    const URI = constants.uri;
    const history = useHistory();
    const [ theme ] = useContext(ThemeContext);

    const { data, loading } = useFetch(`${ URI }/proyects?_id=${ _id }`);
    
    function handleHhistory() {
        history.push(`/proyectos/${ _id }`);
    }

    return (
        <Col xs={6} lg={3} className="proyectsCard-component" onClick={ handleHhistory }>
            <Card style={{color: theme? "white" : "#2b2f33", padding: 5 }}  bg={theme? "dark" : "light"}>
                <Card.Img variant="top" src={ photo[0]? URI+photo[0].url : images.bgDefault } />
                <Card.Body>
                    <Card.Title>{ name }</Card.Title>
                    <Card.Text>
                        Tecnologias:<br/>
                        {
                            loading? <Spineer/> : data[0].categories.map((category)=>{
                                return category.name+" "
                            })
                        }
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}
