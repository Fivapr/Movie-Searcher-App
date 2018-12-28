import React, { useState } from 'react'

import InputBase from '@material-ui/core/InputBase'
import SearchIcon from '@material-ui/icons/Search'

import { withStyles } from '@material-ui/core'
import styles from './styles'
import PropTypes from 'prop-types'

const Input = ({ classes, fetchMovies }) => {
  const [value, setValue] = useState('')

  const handleSearchChange = e =>
    setValue(e.target.value, () =>
      fetchMovies({
        path: `search/movie`,
        params: { query: this.props.value }
      })
    )

  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        value={value}
        onChange={handleSearchChange}
        placeholder="Search…"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput
        }}
      />
    </div>
  )
}

Input.defaultProps = {
  fetchMovies: () => {},
  classes: {}
}

Input.propTypes = {
  fetchMovies: PropTypes.func,
  classes: PropTypes.objectOf(PropTypes.string)
}

export default withStyles(styles)(Input)
