import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import bill from 'reducers';
import Bill from 'components/bill';
import Banner from 'components/banner';
import {} from './style.less';

const store = applyMiddleware(thunk)(createStore)(bill);

ReactDOM.render(
  <div>
    <Banner />
    <Provider store={store}>
      <Bill />
    </Provider>
  </div>
, document.getElementById('my-bill'));
