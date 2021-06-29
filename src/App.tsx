import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ChakraProvider, CSSReset, Box } from "@chakra-ui/react";

import './styles.css';
import Continents from "./pages/Continents";
import Home from "./pages/Home";
import Country from "./pages/Country";

const App = () => (
  <ChakraProvider>
    <CSSReset />
    <Box minH='100vh'>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/continents" component={Continents} />
          <Route path="/continents/:code" component={Country} />
        </Switch>
      </Router>
    </Box>
  </ChakraProvider>
);

export default App;
