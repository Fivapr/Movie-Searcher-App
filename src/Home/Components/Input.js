import React from 'react'
import TextField from '@material-ui/core/TextField'

export default ({ value, onChange }) => (
  <TextField
    label="Search for the movie!"
    placeholder="La la land"
    fullWidth
    style={{ margin: 8 }}
    margin="normal"
    InputLabelProps={{
      shrink: true
    }}
    value={value}
    onChange={onChange}
  />
)
