import React from 'react'
import { render } from 'react-dom'
import MyApp from './components/MyApp'

render(
  <MyApp />,
  document.getElementById('rootAppNode')
)

//The next line is not 'react' related. please do not delete it 
module.hot.accept();
