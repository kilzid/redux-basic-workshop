import React from 'react'
import { Provider } from 'react-redux'
import { render } from 'react-dom'
import store from './store';
import MyApp from './components/MyApp'
import './style.scss'

render(
  <Provider store={store}>
    <MyApp />
  </Provider>,
  document.getElementById('rootAppNode')
)

//The next line is not 'react' related. please do not delete it 
module.hot.accept();
