import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Container } from 'semantic-ui-react'
import { Tasks } from 'pages/Tasks'
import { AppHeader } from 'components/AppHeader'
import ROUTES from './routes'

const App: React.FC = () => (
  <BrowserRouter>
    <Container>
      <AppHeader />
      <Switch>
        <Route exact path={ROUTES.HOME} component={Tasks} />
      </Switch>
    </Container>
  </BrowserRouter>
)

export default App
