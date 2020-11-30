import React from 'react'
import { Container, Col, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import images from '../../assets/images'
import Divider from '../../components/Divider'
import { useFetch } from '../../hooks/useFetch'
import "./styles.css"
import Spinner from "../../components/Spinner"
import PerfileCard from '../../components/PerfileCard'
import { constants } from '../../assets/constants'
import ProyectCard from '../../components/ProyectsCard'

export default function HomaPage() {
    const URI = constants.uri

    const { data, loading } = useFetch(`${ URI }/users?_limit=2`);
    const { data: dataProyects, loading: loadingProyects } = useFetch(`${ URI }/proyects?_start=0&_limit=4`);


    return (
        <Container>
            <Col>
                <h1 style={{textAlign: "center"}}>
                    <b>Bienvenido</b> a la plataforma de estudiantes <b>UTM</b>
                </h1>
                <Row >
                    <Image src={images.UTM} fluid style={{width: "70%", margin: "40px auto", height: "100%"}} />
                </Row>
                <Row>
                    <h4>
                        Esta es una plataforma para dar visibilidad a los estudiantes egresados de la <b>Universidad Tecnológica Metropolitana</b> del estado de Yucatán <br/><br/>
                        En este sitio podrán encontrar el <b><Link style={{color: "#19A8A0"}} to="/devs">perfil</Link></b> de cada estudiante, así como los <b><Link style={{color: "#19A8A0"}} to="/proyectos">proyectos</Link></b> realizados por los estudiantes a lo largo de su carrera profesional.<br/><br/>
                        Puedes ponerte en comunicación con los alumnos a través de la sección de <b><Link style={{color: "#19A8A0"}} to="/contacto">contacto</Link></b>.<br/><br/>
                    </h4>
                </Row>
                <Divider title="Alumnos destacados"/>
                <Row xs>
                    {
                        loading
                            ?   <Spinner />
                            :   data.map((user)=>{
                                    return <Col key={user._id} xs={6} sm={3}><PerfileCard  {...user} /></Col>
                                })
                    }
                </Row>
                <Divider title="Ultimos proyectos"/>
                <Row>
                    {
                        loadingProyects
                            ? <Spinner /> 
                            : dataProyects.map((proyect)=>{
                                return <ProyectCard key={proyect._id} {...proyect} />
                            })
                    }
                </Row>
            </Col>
        </Container>
    )
}
