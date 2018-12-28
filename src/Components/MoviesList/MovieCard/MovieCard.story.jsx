import React from 'react'
import { storiesOf } from '@storybook/react'
import storeDecorator from '../../../../.storybook/storeDecorator'

import MovieCard from './MovieCard'

storiesOf('MovieCard', module)
  .addDecorator(storeDecorator)
  .add('default', () => <MovieCard />)
