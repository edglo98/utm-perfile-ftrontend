import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { constants } from '../../assets/constants';
import { useFetch } from '../../hooks/useFetch';
import Spinner from "../../components/Spinner"
import ProyectsCard from "../../components/ProyectsCard"

export default function AllProyectsPage() {

    const URI = constants.uri
    const { data, loading } = useFetch(`${ URI }/proyects`);

    return (
        <Container>
            <Row>
                <h1>Proyectos realizados por diferentes desarrolladores</h1>
                {
                    loading?
                        <Spinner />
                        : data.map((proyect)=>{
                            return <ProyectsCard key={proyect._id} {...proyect}/>
                        })
                }
            </Row>
        </Container>
    )
}
