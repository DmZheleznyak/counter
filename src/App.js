import React, { Component } from 'react';

import Layout from './components/Layout/Layout'
import CounterBuilder from './containers/CounterBuilder/CounterBuilder'

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
					<CounterBuilder />
				</Layout>
      </div>
    );
  }
}

export default App;
