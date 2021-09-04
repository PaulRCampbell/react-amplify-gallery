import logo from "./logo.svg";
import "./App.css";
import Layout from "./Layout/Layout";
import { BrowserRouter as Router } from "react-router-dom";
import Routing from "./Routing.js";

function App() {
  return (
    <Router>
      <Routing />
    </Router>
  );
}

export default App;
