import React from 'react';
import { Route } from 'react-router-dom';

import Header from './components/header';
import Sidebar from './components/common/sidebar';
import Amp from './components/amp';
import Schema from './components/schema';
import StartPage from './components/startPage';
import './index.styl';

const App = () => (
  <div className={'app'}>
    <div className={'app__wrapper'}>
      <Header />
      <div className={'app__body'}>
        <Sidebar className={'app__sidebar'}/>
        <div className={'app__main'}>
          <Route
            path='/amp'
            component={StartPage}
            exact/>
          <Route path='/' component={Amp} />
          <Route path='/schema' component={Schema} />
        </div>
      </div>
    </div>
  </div>
);

export default App;
