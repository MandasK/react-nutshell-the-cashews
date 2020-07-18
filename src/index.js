import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import Nutshell from './components/nutshell';
import * as serviceWorker from './serviceWorker';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

ReactDOM.render(
  <Router>
    <Nutshell />
  </Router>,
  document.getElementById('root')
);


serviceWorker.unregister();
