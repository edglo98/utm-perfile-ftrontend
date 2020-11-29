import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { constants } from '../../assets/constants';
import { useFetch } from '../../hooks/useFetch';
import Spinner from "../../components/Spinner"

export default function AllProyectsPage() {

    const URI = constants.uri
    const { data, loading } = useFetch(`${ URI }/proyects`);

    return (
        <Container>
            <Row>
                {
                    loading?
                        <Spinner />
                        : console.log(data)
                }
            </Row>
        </Container>
    )
}
