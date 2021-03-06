import React, { Component, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Mail from './components/Mail';


import './App.scss';

class App extends Component {
    render() {
        return(
            <Fragment>
                <Switch>
                    <Route exact path="/" component={Dashboard} />
                    <Route path="/mail/:id" component={Mail} />
                    {/*<Route path="/contacts" component={Contacts} />*/}
                    <Route render={() => <p>404 Not Found</p> }/>
                </Switch>
            </Fragment>
        )

    }
}

export default App;

