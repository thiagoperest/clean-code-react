import React from 'react'
import { render } from '@testing-library/react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import PrivateRoute from './private-route'

const history = createMemoryHistory({ initialEntries: ['/login'] })

describe('PrivateRoute', () => {
  test('Should redirect to /login if token is empty', () => {
    render(
      <Router history={history}>
        <PrivateRoute/>
      </Router>
    )
  })
  expect(history.location.pathname).toBe('/login')
})
