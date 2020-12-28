import React from 'react'
import { Header } from 'semantic-ui-react'

const App = () => {
  return (
    <Header data-cy='header' as='h2' block textAlign="center" color="green" inverted>
      Rock Paper Scissors
    </Header>
  )
}

export default App

