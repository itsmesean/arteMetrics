import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './styles/styles.css';

import Particles from 'react-particles-js';
import TopNavBar from './components/TopNavBar.jsx';
import MainContainer from './components/containers/MainContainer.jsx';
import MetricsContainer from './components/containers/MetricsContainer.jsx';
import Login from './components/Login.jsx';
import Home from './components/Home.jsx';
import CreateAccount from './components/CreateAccount.jsx';
import QueriesOverview from './components/QueriesOverview.jsx';
import Query from './components/Query.jsx';
import { ApolloProvider } from '@apollo/react-hooks';

const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql'
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.testBackend = this.testBackend.bind(this);
  }

  componentDidMount() {
    console.log('Mounted');
  }

  testBackend(e) {
    console.log('testBackendFunction');
    e.preventDefault();
    fetch('/test')
      .then(res => res.json())
      .then(myJson => console.log('completedGetRequest: ', myJson));
  }

  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <TopNavBar />
          <button onClick={this.testBackend}>
            Test Connection to Server.js
          </button>

          <Router>
            <Route path="/" exact component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/metrics" component={MainContainer} />
            <Route path="/metricsd3" component={MetricsContainer} />
            <Route path="/login" component={Login} />
            <Route path="/createaccount" component={CreateAccount} />
            <Route path="/queriesoverview" component={QueriesOverview} />
            <Route path="/query" component={Query} />
          </Router>
          <div id="particles">
            <Particles
              className="landing-bg"
              params={{
                particles: {
                  number: {
                    value: 100
                  },
                  size: {
                    value: 3
                  }
                },
                interactivity: {
                  detect_on: 'window',
                  events: {
                    onhover: {
                      enable: true,
                      mode: 'repulse'
                    }
                  }
                }
              }}
            />
          </div>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
