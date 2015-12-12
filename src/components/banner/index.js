import React, { Component } from 'react';
import {path} from './logo-path';
import {} from './style.less';

export default class Banner extends Component {
  render() {
    return (
      <div className='banner'>
        <div className='logo'>
          <svg xmlns="http://www.w3.org/2000/svg"
            width="208.933"
            height="47.795"
            viewBox="0 0 208.933 47.795">
            <path d={path} fill="#fff"/>
          </svg>
        </div>
      </div>
    );
  }
}
