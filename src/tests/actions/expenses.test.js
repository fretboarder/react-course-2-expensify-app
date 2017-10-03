import {addExpense,editExpense,removeExpense} from '../../actions/expenses'


test('should set up remove expense action object', () => {
  const action = removeExpense({id: '12345'})
  expect(action).toEqual({type: 'REMOVE_EXPENSE', id: '12345'})
})

test('should set up edit expense action object', () => {
  const action = editExpense('12345', {amount: 100})
  expect(action).toEqual(
    {
      type: 'EDIT_EXPENSE', 
      id: '12345', 
      updates: {
        amount:100
      }
    }
  )
})

test('should setup add expense action object with provided values', () => {
  const expenseData = {
    description: 'Rent',
    amount: 109500,
    createdAt: 1000,
    note: 'This was last months rent'
  }
  const action = addExpense(expenseData)
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  })
})

test('should setup add expense action object with default values', () => {
  const action = addExpense()
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      amount: 0,
      createdAt: 0,
      note: '',
      description: '',
      id: expect.any(String),
    }
  })
})