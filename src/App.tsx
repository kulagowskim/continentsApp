import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Continents from "./pages/Continents";
import Home from "./pages/Home";

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/page-1" component={Continents} />
    </Switch>
  </Router>
);

export default App;
