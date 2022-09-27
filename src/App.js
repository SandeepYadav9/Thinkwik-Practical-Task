import React, { Fragment } from "react";
import Header from "./components/Header/Header";
import AppNavigator from "./Navigator/AppNavigator";

const App = () => {
  return (
    <Fragment>
      <Header />
      <div>
        <AppNavigator />
      </div>
    </Fragment>
  );
};

export default App;
