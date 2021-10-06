import React from 'react';
import './App.css';
import {BroweserRouter as Router, Route, Switch} from 'react-router-dom';

import SignInPage from './pages/sign-in/sign-in.component';
import SignUpPage from './pages/sign-up/sign-up.component';
import OnboardingPage from './pages/onboarding/onboarding.component';
import Loader from './components/loader/loader.component';
import { Homepage } from './pages/homepage/homepage.component';

class App extends React.Component{
  render() {
    return (
      <div>
      <Router>
        <Homepage/>
        <Switch>
          <Route exact path="/signin" component={SignInPage} />
          <Route exact path="/signup" component={SignUpPage} />
          <Route path="/onboard" component = {OnboardingPage} />
          <Route exact path="/loader" component={Loader}/>
        </Switch>
      </Router>
      </div>
    )
  }
}

export default App;
