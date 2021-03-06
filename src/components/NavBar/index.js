import React, { useContext, useState } from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import { ThemeContext } from '../../context/theme'
import HamburguerMenu from '../HamburguerMenu';
import SwitchTheme from '../SwitchTheme';
import "./styles.css"

export default function NavBar() {

    const [ theme ] = useContext(ThemeContext);
    const [ menu, setMenu ] = useState(false)

    return (
        <Navbar collapseOnSelect expand="lg" bg={theme? "dark" : "light"} variant="dark" style={{ color: theme? "white" : "#2b2f33", transition: "background-color 0.5s, color 0.5s"}}>

                <NavLink to="/" style={{ color: theme? "white" : "#2b2f33"}} className="navbar-brand__edit">
                    UTM Perfiles
                </NavLink>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" color="dark">
                <div style={{width: 30, height:30}} onClick={()=>setMenu(!menu)}>
                    <HamburguerMenu state={ menu } color={theme? "white" : "#212529"}/>
                </div>
            </Navbar.Toggle>
            <Navbar.Collapse id="responsive-navbar-nav" style={{color: "#000"}}>
                <Nav className="mr-auto">
                        <NavLink to="/devs" style={{ color: theme? "white" : "#2b2f33", display: "block", padding: ".5rem 1rem"}}>
                            Desarolladores
                        </NavLink>
                        <NavLink to="/proyectos" style={{ color: theme? "white" : "#2b2f33", display: "block", padding: ".5rem 1rem"}}>
                            Proyectos
                        </NavLink>
                        <NavLink to="/contacto" style={{ color: theme? "white" : "#2b2f33", display: "block", padding: ".5rem 1rem"}}>
                            Contacto
                        </NavLink>
                </Nav>
                <Nav>
                    <SwitchTheme/>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
