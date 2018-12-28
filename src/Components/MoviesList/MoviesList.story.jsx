import React from 'react'
import { storiesOf } from '@storybook/react'
import storeDecorator from '../../../.storybook/storeDecorator'

import MoviesList from './MoviesList'

storiesOf('MoivesList', module)
  .addDecorator(storeDecorator)
  .add('default', () => <MoviesList />)
