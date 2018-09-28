import React from 'react';
import { Route } from 'react-router-dom';

import Amp from './components/amp';
import Schema from './components/schema';
import Sidebar from './components/common/sidebar';
import StartPage from './components/startPage';
import './style';

const App = () => (
  <div className={'app'}>
    <Sidebar className={'app__sidebar'}/>
    <div className={'app__body'}>
      <Route
        path='/'
        component={StartPage}
        exact/>
      <Route path='/amp' component={Amp} />
      <Route path='/schema' component={Schema} />
    </div>
  </div>
);

export default App;
