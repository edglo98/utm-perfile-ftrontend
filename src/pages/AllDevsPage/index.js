import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { constants } from '../../assets/constants';
import { useFetch } from '../../hooks/useFetch';
import Spinner from "../../components/Spinner";
import DevCard from '../../components/DevCard';

export default function AllProyectsPage() {

    const URI = constants.uri
    const { data, loading } = useFetch(`${ URI }/users`);

    return (
        <Container>
            <h1>
                Aquí puedes ver todos los <b>desarrolladores</b> con los que contamos.
            </h1>
            <Row>
                {
                    loading?
                        <Spinner />
                        : data.map((dev)=>{
                            return <Col md={6} key={dev._id}><DevCard {...dev} /></Col>
                        })
                }
            </Row>
        </Container>
    )
}
