import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Feelings from '../Feelings/Feelings';
import Comments from '../Comments/Comments';
import Support from '../Support/Support';
import Understanding from '../Understanding/Understanding';

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <div>
        <Router>
          {/* <Header /> */}
          <div>
            <Route exact path='/'>
              <Feelings />
            </Route>
            <Route exact path='/page/one'>
              <Understanding />
            </Route>
            <Route exact path='/page/two'>
              <Support />
            </Route>
            <Route exact path='/page/three'>
              <Comments />
            </Route>
          </div>
        </Router>
        {/* <Comments />
        <Support />
        <Understanding /> */}
      </div>
    </div>
  );
}

export default App;
