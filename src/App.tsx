import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ChakraProvider, CSSReset, Box } from "@chakra-ui/react";

import Continents from "./pages/Continents";
import Home from "./pages/Home";

const App = () => (
  <ChakraProvider>
    <CSSReset />
    <Box minH='100vh'>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/continents" component={Continents} />
        </Switch>
      </Router>
    </Box>
  </ChakraProvider>
);

export default App;
