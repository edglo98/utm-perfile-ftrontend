import React, { useContext } from 'react'
import { Row, Spinner } from 'react-bootstrap';
import { ThemeContext } from '../../context/theme';

export default function Spineer() {
    const [ theme ] = useContext(ThemeContext);

    return (
        <Row style={{justifyContent: "center", width: "100%"}}>
            <Spinner
                style={{width: 50, height: 50}} 
                animation="border" 
                variant={theme? "light" : "dark"} />
        </Row>
    )
}
