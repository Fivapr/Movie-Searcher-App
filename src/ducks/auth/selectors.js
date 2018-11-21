export const getUser = state => state.getIn(['auth', 'user'])
export const getUserId = state => state.getIn(['auth', 'user', 'uid'])
