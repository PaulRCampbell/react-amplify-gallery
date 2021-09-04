import logo from "./logo.svg";
import "@aws-amplify/ui/dist/style.css";
import "./App.css";
import Layout from "./Layout/Layout";
import { BrowserRouter as Router } from "react-router-dom";
import Routing from "./Routing.js";
import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";
Amplify.configure(awsconfig);

function App() {
  return (
    <Router>
      <Routing />
    </Router>
  );
}

export default App;
