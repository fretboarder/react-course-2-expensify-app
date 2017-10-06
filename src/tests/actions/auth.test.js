
import {login,logout} from '../../actions/auth'

test('should call login with uid', () => {
  const uid = '1231231231'
  const action = login(uid)
  expect(action).toEqual({
    type: 'LOGIN',
    uid
  })
})

test('should call logout', () => {
  const action = logout()
  expect(action).toEqual({
    type: 'LOGOUT'
  })
})