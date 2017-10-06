import authReducer from '../../reducers/auth'

test('should login an uid', () => {
  const uid = '123123123'
  const action = { type: 'LOGIN', uid}
  const state = authReducer({}, action)
  expect(state.uid).toBe(uid)
})

test('should logout', () => {
  const action = { type: 'LOGOUT' }
  const state = authReducer({uid: 'anything'}, action)
  expect(state).toEqual({})
})