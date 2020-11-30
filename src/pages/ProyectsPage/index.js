import React from 'react'
import { useParams } from 'react-router-dom';
import { constants } from "../../assets/constants";
import { useFetch } from "../../hooks/useFetch";
import Spinner from "../../components/Spinner";
import { Col, Container, Image, Row } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown'
import images from "../../assets/images";
import "./styles.css"

export default function ProyectsPage() {
    const { id } = useParams();
    
    const URI = constants.uri
    const { data, loading } = useFetch(`${ URI }/proyects?_id=${ id }`);

    return (
        <Container>
            {
                loading
                    ? <Spinner />
                    : <Col>
                        <Row style={{ width: "100%", justifyContent: "center" }}>
                            <h1 style={{ fontWeight: "bold" }}>
                                { data[0].name }
                            </h1>
                            <Image style={{ margin:"10px auto", width: "100%", maxWidth:800, height: "100%"}} src={data[0].photo[0]? URI+data[0].photo[0].url : images.bgDefault} fluid />
                        </Row>
                        <Row>
                            <Col >
                                <Row > 
                                    <span className="ProyectsPage-component__stateView" style={{backgroundColor: data[0].publicated? "green" : "red" }}/>
                                    <h5>{ data[0].publicated? "Publicado" : "No publicado" }</h5>
                                    {
                                        data[0].publicated && <a href={data[0].link} target="_blank" rel="noreferrer" style={{color: "#19A8A0", fontWeight: "bold", marginLeft: 5}}>Aqui</a>
                                    }
                                </Row>
                            </Col>
                            <Col>
                                <p style={{textAlign: "right"}}>
                                    Publicado: &nbsp;
                                    <b>{ data[0].publication }</b>
                                </p>
                            </Col>
                        </Row>
                        <Col style={{display: "flex", flexWrap: "wrap", alignItems: "center"}}>
                            Tecnologías: &nbsp;
                            {
                                data[0].categories.map((category)=>{
                                    return <p key={category._id} style={{color: category.color, fontWeight: "bold", margin: 5}} > {category.name} </p>
                                })
                            }
                        </Col>
                        <Row >
                            <Col xs={1} style={{margin: "10px 15px"}}>
                                Colaboradores:
                            </Col>
                            <Col xs={11}>
                                {
                                    data[0].users.map((user)=>{
                                        return <Col key={user._id} xs={4} sm={1}><Image style={{width: "100%"}} src={ URI+user.photo.url } roundedCircle /></Col>
                                    })
                                }
                            </Col>
                        </Row>
                        <Col style={{padding: 10, marginTop: 20}}>
                            <ReactMarkdown linkTarget="_blank">
                                {
                                    data[0].description
                                }
                            </ReactMarkdown>
                        </Col>
                    </Col>
            }
        </Container>
    )
}
