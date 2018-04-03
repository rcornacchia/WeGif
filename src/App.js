import React from 'react';
import styled from 'styled-components';
import History from './containers/History';
import SearchBar from './containers/SearchBar';
import Gifs from './containers/Gifs';
import './App.css';

const Container = styled.div`
  min-width: 300px;
  display: grid;
  grid-template-columns: 300px 3fr;
`

const App = props => (
  <Container>
    <History />
    <div>
      <SearchBar />
      <Gifs />
    </div>
  </Container>
);

export default App;
