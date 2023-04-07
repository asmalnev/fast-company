import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import './index.scss';
import Users from './components/Users';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className="wrapper">
    <Users/>
  </div>
);