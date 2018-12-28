import React from 'react'
import { storiesOf } from '@storybook/react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router/immutable'
import { MuiThemeProvider } from 'material-ui'
import theme from '../src/muiTheme'
import { store, history } from '../src/store'

const storeDecorator = story => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <MuiThemeProvider theme={theme}>{story()}</MuiThemeProvider>
    </ConnectedRouter>
  </Provider>
)

export default storeDecorator
