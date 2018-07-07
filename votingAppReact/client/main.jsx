// Meteor/npm Packages imports
import { Meteor } from 'meteor/meteor'
import { render } from 'react-dom'
import React from 'react'

import App from '../imports/client/App'

Meteor.startup(() => {
  render( <App />, document.getElementById('render-target'))
})
