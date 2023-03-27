import {Fragment} from "react";
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"
import Header from "./components/main/Header";
import Footer from "./components/main/Footer";
import Home from "./components/main/Home";
import capList from "./components/cap/CapList";
import CapList from "./components/cap/CapList";
import CapDetail from "./components/cap/CapDetail";
function App() {
  return (
  <Router>
    <Fragment>
      <Header/>
      <Switch>
        <Route exact path={"/"} component={Home}/>
        <Route path={"/cap/cap_list"} component={CapList}/>
        <Route path={"/cap/cap_detail/:no"} component={CapDetail}/>
      </Switch>
      <Footer/>
    </Fragment>
  </Router>
  );
}

export default App;
