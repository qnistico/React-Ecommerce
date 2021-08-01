import './App.scss';
import Nav from "./Nav";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LandingPage from "./LandingPage";
import AllProducts from './AllProducts';

function App() {
  return (
    <div className="App">
      <Router>
      <Nav />

        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route exact path="/AllProducts">
            <AllProducts />
          </Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
