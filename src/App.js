import React from "react";

//Framer Motion
import { AnimatePresence } from "framer-motion";
//Global Style
import GlobalStyle from "./components/GlobalStyle";

//Pages
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import MovieDetail from "./pages/MovieDetail";
import OurWork from "./pages/OurWork";

//Components
import Nav from "./components/Nav";

//Routing
import { Switch, Route, useLocation } from "react-router-dom";

const App = () => {
  const location = useLocation();

  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <AboutUs />
          </Route>

          <Route path="/contact">
            <Contact />
          </Route>

          <Route path="/our-work" exact>
            <OurWork />
          </Route>

          <Route path="/our-work/:id">
            <MovieDetail />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
};

export default App;
