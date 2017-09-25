import React from 'react';
import ReactDOM from 'react-dom';
// import './index.scss';
import Main from './react/Main.jsx';


ReactDOM.render(
  <div>
    <div id="action-bar" className="container">
      <h1>GitHub Follower Finder</h1>
    </div>
    <Main />
  </div>,
  document.getElementById('app')
);
