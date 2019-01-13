import React, { Component, Fragment } from 'react';

import Header from './components/Header'
import Menu from './components/Menu'
import MailList from './components/MailList'

import './App.scss';

class App extends Component {
  render() {
      return (
          <Fragment>
              <Header/>
              <div className="main-region">
                  <Menu/>
                  <MailList/>
              </div>
          </Fragment>
      );
  }
}

export default App;