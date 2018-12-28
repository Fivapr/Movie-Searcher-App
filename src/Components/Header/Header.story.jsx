import React from 'react'
import { storiesOf } from '@storybook/react'
import storeDecorator from '../../../.storybook/storeDecorator'

import Header from './Header'

storiesOf('Header', module)
  .addDecorator(storeDecorator)
  .add('default', () => <Header />)
