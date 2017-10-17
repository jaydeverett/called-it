import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './css/style.css';

import App from './components/App';
import ProfileCreator from './components/ProfileCreator';

const Root = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ProfileCreator}/>
        <Route path="/profile/:profileId" component={App}/>
      </Switch>
    </BrowserRouter>
  )
}

ReactDOM.render(<Root />, document.getElementById('root'));
