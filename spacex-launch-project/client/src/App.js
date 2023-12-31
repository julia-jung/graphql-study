import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Launches from './components/Launches';
import Launch from './components/Launch';
import './App.css';
import logo from './spacex.png';

const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql',
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className='Container'>
          <img
            src={logo}
            alt='SpaceX'
            style={{ width: 300, display: 'block', margin: 'auto' }}
          ></img>
          <Route exact path='/' component={Launches} />
          <Route exact path='/launch/:flight_number' component={Launch} />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
