import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import {
  startAddExpense, 
  addExpense,
  editExpense,
  removeExpense, 
  setExpenses, 
  startSetExpenses,
  startRemoveExpense,
  startEditExpense
} from '../../actions/expenses'
import expenses from '../fixtures/expenses'
import database from '../../firebase/firebase'

const createMockStore = configureMockStore([thunk])

beforeEach((done) => {
  const expensesData = {}
  expenses.forEach(({id, description, note, amount, createdAt}) => {
    expensesData[id] = {
      description, note, amount, createdAt
    }
  })
  database.ref('expenses').set(expensesData).then(() => done())
})


test('should set up remove expense action object', () => {
  const action = removeExpense({id: '12345'})
  expect(action).toEqual({type: 'REMOVE_EXPENSE', id: '12345'})
})

test('should remove expense from firebase', (done) => {
  const store = createMockStore({})
  const id = expenses[2].id
  store.dispatch(startRemoveExpense({id})).then(() => {
    const actions = store.getActions()
    expect(actions[0]).toEqual({
      type: 'REMOVE_EXPENSE',
      id
    })
    return database.ref(`expenses/${id}`).once('value')
  }).then((snapshot) => {
    expect(snapshot.val()).toBeFalsy()
    done()
  })
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

test('should edit expense from firebase', (done) => {
  const store = createMockStore()
  const id = expenses[0].id
  const updates = {
    amount: 9999
  }
  store.dispatch(startEditExpense(id, updates)).then(() => {
    const actions = store.getActions()
    expect(actions[0]).toEqual({
      type: 'EDIT_EXPENSE',
      id,
      updates
    })
    return database.ref(`expenses/${id}`).once('value')
  }).then((snapshot) => {
    expect(snapshot.val().amount).toBe(updates.amount)
    done()
  })
})

test('should setup add expense action object with provided values', () => {
  const action = addExpense(expenses[2])
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: expenses[2]
  })
})

test('should add expense to database and store', (done) => {
  const store = createMockStore({})
  const expenseData = {
    description: 'Mouse',
    amount: 3000,
    note: 'This one is better',
    createdAt: 1000
  }
  store.dispatch(startAddExpense(expenseData)).then(() => {
    const actions = store.getActions()
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...expenseData
      }
    })
    return database.ref(`expenses/${actions[0].expense.id}`).once('value')
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(expenseData)
    done()
  })
})

test('should add expense with defaults to database and store', (done) => {
  const store = createMockStore({})
  const defaultExpenses = {
    description: '',
    amount: 0,
    note: '',
    createdAt: 0
  }
  store.dispatch(startAddExpense({})).then(() => {
    const actions = store.getActions()
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...defaultExpenses
      }
    })
    return database.ref(`expenses/${actions[0].expense.id}`).once('value')
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(defaultExpenses)
    done()
  })
})

test('should setup set expense action object with data', () => {
  const action = setExpenses(expenses)
  expect(action).toEqual({
    type: 'SET_EXPENSES',
    expenses
  })
})

test('should fetch the expenses from database', (done) => {
  const store = createMockStore()
  store.dispatch(startSetExpenses()).then(() => {
    const actions = store.getActions()
    expect(actions[0]).toEqual({
      type: 'SET_EXPENSES',
      expenses
    })
    done()
  })
})


// test('should setup add expense action object with default values', () => {
//   const action = addExpense()
//   expect(action).toEqual({
//     type: 'ADD_EXPENSE',
//     expense: {
//       amount: 0,
//       createdAt: 0,
//       note: '',
//       description: '',
//       id: expect.any(String),
//     }
//   })
// })

