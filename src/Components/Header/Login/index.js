import Login from './Login'
import { connect } from 'react-redux'
import { logout, login } from '../../../ducks/auth/reducer';
import { getUser } from '../../../ducks/auth/selectors';

export default connect(
  state => ({ user: getUser(state) }),
  { login, logout }
)(Login)
