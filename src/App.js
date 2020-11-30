import Routs from "./Router"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ThemeProvider from "./context/theme"
import ReactGa from "react-ga";
import {
  BrowserRouter as Router,
} from "react-router-dom";

ReactGa.initialize('UA-164742055-2')

function App() {

  return (
    <ThemeProvider>
        <Router>
          <Routs />
        </Router>
    </ThemeProvider>
  );
}

export default App;
