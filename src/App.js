import Router from "./Router"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ThemeProvider from "./context/theme"
import ReactGa from "react-ga"
import { useEffect } from "react";

function App() {

  useEffect(() => {
    ReactGa.initialize('G-V1CC0QNZGE')
    
    //to report page view
    ReactGa.pageview(window.location.pathname + window.location.search)
  },[])

  return (
    <ThemeProvider>
        <Router />
    </ThemeProvider>
  );
}

export default App;
