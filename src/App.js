import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Footer from "./components/Footer/Footer";

import Layout from "./hoc/Layout/Layout";
import Photovoltaics from "./components/Photovoltaics/Photovoltaics";
import Electricity from "./components/Electricity/Electricity";
import Alarms from "./components/Alarms/Alarms";
import Contact from "./components/Contact/Contact";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
            Test<Footer></Footer>
          <Switch>
            <Route path="/instalacje-elektryczne" component={Electricity} />
            <Route path="/instalacje-alarmowe" component={Alarms} />
            <Route path="/kontakt" component={Contact} />
            <Route path="/" exact component={Photovoltaics} />
          </Switch>
        </Layout>
      </div>
    );
      
  }
}

export default App;
