import React, { useContext } from 'react'
import { Card, Col, Image, Row } from 'react-bootstrap'
import { constants } from '../../assets/constants'
import images from '../../assets/images'
import { ThemeContext } from '../../context/theme'
import SocialIcons from '../SocialIcons'

export default function ContactCard({ name, photo, lastname, username, email, location, website, linkedin, github }) {
    
    const [ theme ] = useContext(ThemeContext);
    const URI = constants.uri

    return (
        <Row style={{width: "100%", margin: "10px 0px"}}>
            <Card style={{color: theme? "white" : "#2b2f33", width: "90%", padding: 10, margin: "0px auto"}} bg={theme? "dark" : "light"}>
                <Row style={{alignItems: "center", flexWrap: "wrap"}}>
                    <Col xs={12} md={3} style={{justifyContent: "center",display: "flex"}}>
                        <Image style={{width: "100%", minWidth: 100, maxWidth: 135}} src={ URI+photo.url } roundedCircle />
                    </Col>
                    <Col xs={12} md={4}>
                        <h3 style={{textAlign: "center"}}>
                            {name+" "+ lastname}
                        </h3>
                        <h4 style={{textAlign: "center"}}>
                            { "@"+username }
                        </h4>
                    </Col>
                    <Col>
                        <p style={{textAlign: "center"}}>
                            { location }
                        </p>
                        <h5 style={{textAlign: "center"}}>
                            { email }
                        </h5>
                        <Row style={{justifyContent: "center", margin: 15}}>
                            <a href={ website } target="_blank" rel="noreferrer">
                                <SocialIcons icon={images.Dominio} color={theme? "white": "#2b2f33"}/>
                            </a>
                            <a href={ linkedin } target="_blank" rel="noreferrer">
                                <SocialIcons icon={images.Linkedin} color={theme? "white": "#2b2f33"}/>
                            </a>
                            <a href={ github } target="_blank" rel="noreferrer">
                                <SocialIcons icon={images.Github} color={theme? "white": "#2b2f33"}/>
                            </a>
                        </Row>
                    </Col>
                </Row>
            </Card>
        </Row>
    )
}
