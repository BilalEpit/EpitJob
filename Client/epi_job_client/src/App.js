import { Router } from 'express'
import React from 'react'
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Switch>
            <Route exact path='/navbar' component={NavBar} />
            <Route path='/example' component={Exemple} />

            <Route
              path='/admin/product/:id/edit'
              component={ProductEditScreen}
            />
            <Route path='*' component={NotFoundScreen} />
          </Switch>
    </Router>
  )
}

export default App
