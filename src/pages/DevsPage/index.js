import React, { useContext } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { constants } from "../../assets/constants"
import Spineer from '../../components/Spinner';
import { useFetch } from "../../hooks/useFetch";
import PerfileCard from "../../components/PerfileCard";
import Divider from "../../components/Divider"
import ProyectCard from '../../components/ProyectsCard';
import TechIcon from '../../components/TechIcon';
import SocialIcons from '../../components/SocialIcons';
import images from '../../assets/images';
import { ThemeContext } from '../../context/theme';

export default function DevsPage() {
    const [ theme ] = useContext(ThemeContext);
    const URI = constants.uri
    const { username } = useParams();
    const { data, loading } = useFetch(`${ URI }/users?username=${ username }`);

    const user = loading? [] : data[0]

    return (
        <Container>
            {
                loading? <Spineer />
                :<Row>
                    <Col xs={12} sm={4}>
                        <PerfileCard {...user} disablet={true}/>
                        <p style={{textAlign: "center"}}>{user.biography}</p>
                        <Row style={{marginLeft: 10}}>
                            <p>{user.location}</p>
                        </Row>
                        <Row style={{marginLeft: 10}}>
                            <p>{user.company}</p>
                        </Row>
                        <Row style={{justifyContent: "center", margin: 15}}>
                            <a href={user.website} target="_blank" rel="noreferrer">
                                <SocialIcons icon={images.Dominio} color={theme? "white": "#2b2f33"}/>
                            </a>
                            <a href={user.linkedin} target="_blank" rel="noreferrer">
                                <SocialIcons icon={images.Linkedin} color={theme? "white": "#2b2f33"}/>
                            </a>
                            <a href={user.github} target="_blank" rel="noreferrer">
                                <SocialIcons icon={images.Github} color={theme? "white": "#2b2f33"}/>
                            </a>
                        </Row>
                        <Row style={{justifyContent: "center"}}>
                            <Button variant="info">
                                Contactame
                            </Button>
                        </Row>
                    </Col>
                    <Col xs={12} sm={8}>
                        <Row>
                            <Divider title="Proyectos"/>
                            {
                                user.proyects.map((proyect)=>{
                                    return <ProyectCard key={proyect._id} {...proyect} />
                                })
                            }
                        </Row>
                        <Row>
                            <Divider title="Tecnologias"/>
                            {
                                user.categories.map((category)=>{
                                    return <TechIcon key={category._id} {...category}/>
                                })
                            }
                        </Row>
                    </Col>
                </Row>
            }
        </Container>
    )
}
