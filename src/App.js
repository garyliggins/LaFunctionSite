import React from 'react';
import './App.css';


import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import SigninPage from './pages/signin';


function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/signin' component={SigninPage} exact />
       

        <Route path='/lafunctiongallery' component={() => {
          window.location.replace("https://heroic-kitten-8f3154.netlify.app");
          return null;
        }}/>;

        <Route path='/lafunctiontix' component={() => {
          window.location.replace("https://www.eventbrite.com/e/la-function-summer-kick-off-tickets-1234299917279?aff=oddtdtcreator");
          return null;
        }}/>;

<Route path='/BETFanFest' component={() => {
          window.location.replace("https://www.bet.com/topic/betexperience");
          return null;
        }}/>;
        

      </Switch>
    </Router>
  );
}
// 
export default App;
