import Router from "./Router"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ThemeProvider from "./context/theme"

function App() {
  return (
    <ThemeProvider>
        <Router />
    </ThemeProvider>
  );
}

export default App;
