import React from 'react';
import styled from 'styled-components';
import Router from './Router/router';

export const MainContainer = styled.div`
  margin:0;
  padding:0;
`

function App() {

  return (
    <MainContainer>
        <Router />
    </MainContainer>
  );
}

export default App;