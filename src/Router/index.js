import React from 'react'
import {
    Switch,
    Route,
    useHistory,
} from "react-router-dom";
import NavBar from '../components/NavBar';
import Cuatro from '../pages/Cuatro';
import DevsPage from '../pages/DevsPage';
import HomePage from "../pages/HomePage"
import ProyectsPage from '../pages/ProyectsPage';
import AllDevsPage from "../pages/AllDevsPage"
import AllProyectsPage from '../pages/AllProyectsPage';
import ContactPage from '../pages/ContactPage';
import ReactGa from "react-ga";


export default function AppRouter() {

    const history = useHistory();
    history.listen(location => ReactGa.pageview(location.pathname+location.search))

    return (
        <>
            <NavBar />
            <div style={{width: "100%", maxWidth: 1100, margin: "30px auto"}}>
                <Switch>
                    <Route exact path="/" component={ HomePage } />
                    <Route exact path="/devs" component={ AllDevsPage } />
                    <Route exact path="/devs/:username" component={ DevsPage } />
                    <Route exact path="/proyectos" component={ AllProyectsPage } />
                    <Route exact path="/proyectos/:id" component={ ProyectsPage } />
                    <Route exact path="/contacto" component={ ContactPage } />

                    <Route path="*" component={ Cuatro } />
                    
                </Switch>
            </div>
            {/* footer */}
        </>
    )
}