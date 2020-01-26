import React from 'react'
import { Menu } from 'semantic-ui-react'
import { H3 } from './styles'

export default () => (
  <>
    <Menu fixed='top'>
      <Menu.Header style={{ margin: '10px' }}>
        <H3 data-test='appTitle'>Task Application</H3>
      </Menu.Header>
    </Menu>
    <div style={{ height: '60px' }} />
  </>
)
