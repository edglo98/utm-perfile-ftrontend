import React, { useMemo, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { constants } from '../../assets/constants';
import ContactCard from '../../components/ContactCard';
import InputSearch from '../../components/InputSearching';
import Spineer from '../../components/Spinner';
import { useFetch } from '../../hooks/useFetch';
import "./styles.css"


export default function ContactPage({ history }) {
    const URI = constants.uri
    
    const [searching, setSearching] = useState("")
    
    const { data, loading } = useFetch(`${ URI }${!!searching? `/users?username_contains=${searching}`:  "/users" }`);

    const userFind = useMemo(() => {
        if(!!data){
            if(data.length >= 1){
                return data.map((user)=>{
                    return <ContactCard key={user._id} { ...user } />
                })
            }else{
                return <h3>Parece que no hemos encontrado el desarrollador que estas buscando...</h3>
            }
        }
    },[data])

    return (
        <Container>
            <Row >
                <h1 style={{textAlign: "center", width: "100%"}}>
                    ¿Necesitas ayuda con un desarrollo?
                </h1>
                <h1 style={{textAlign: "center", width: "100%"}}>
                    Obten la <b>informacion de cotacto</b> de los desarrolladores
                </h1>
            </Row>
            <Row className="centerSearch" >
                <Col xs={12}>
                    <h5>Por favor busque por nombre de usuario. </h5>
                </Col>
                <Col xs={12}>
                    <InputSearch setSearchValue={setSearching} placeholder="buscar..." history={history}/>
                </Col>
            </Row>
            {
                searching &&
                <Row>
                    Resultados de: {searching}
                </Row>
            }
            <Row>
                {
                    loading? <Spineer />
                    : userFind
                }
            </Row>
        </Container>
    )
}
