// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './components/App';
// import { Provider } from 'react-redux'
// import { Component } from 'react'
// // Render the main component into the dom
//
// const targetEl = document.getElementById('app')
//
// ReactDOM.render(
//     <App Source={img}/>,
//   targetEl
// )
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/App'
import Counter from './containers/Counter'
import configureStore from './store/configureStore'

let img = ["key2", "key1" ];
const store = configureStore()

render(
  <Provider store={store}>
    <Counter />
  </Provider>,
  document.getElementById('app')
)
