import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { constants } from '../../assets/constants';
import { useFetch } from '../../hooks/useFetch';
import Spinner from "../../components/Spinner";
import PerfileCard from "../../components/PerfileCard"

export default function AllProyectsPage() {

    const URI = constants.uri
    const { data, loading } = useFetch(`${ URI }/users`);

    return (
        <Container>
            <Row>
                {
                    loading?
                        <Spinner />
                        : data.map((dev)=>{
                            return <Col  xs={12} sm={6} key={dev._id}><PerfileCard  {...dev} /></Col>
                        })
                }
            </Row>
        </Container>
    )
}
