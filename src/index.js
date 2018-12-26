import React, { Fragment } from 'react'
import { render } from 'react-dom'

render(
  <Fragment>
    <ul>
      <li>This is a test</li>
      <li>This is a test</li>
      <li>This is a test</li>
    </ul>
  </Fragment>,
  document.getElementById('rootAppNode')
)

//The next line is not 'react' related. please do not delete it 
module.hot.accept();
