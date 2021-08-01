import './App.scss';
import Nav from "./Nav";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LandingPage from "./LandingPage";

function App() {
  return (
    <div className="App">
      <Router>
      <Nav />

        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
