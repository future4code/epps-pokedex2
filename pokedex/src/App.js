import React from 'react';
import Router from './Router/router';
import GlobalState from "./Global/globalState";

function App() {

  return (
    <GlobalState>
        <Router />
    </GlobalState>
  );
}

export default App;