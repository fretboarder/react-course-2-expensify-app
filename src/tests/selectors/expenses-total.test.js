import getExpensesTotal from '../../selectors/expenses-total'
import expenses from '../fixtures/expenses'

test('should return 0 if expenses', () => {
  const result = getExpensesTotal([])
  expect(result).toBe(0)
})

test('should correctly add up a single expense', () => {
  const result = getExpensesTotal([expenses[1]])
  expect(result).toBe(expenses[1].amount)
})

test('should correctly add up multiple expenses', () => {
  const sum = expenses[1].amount + expenses[2].amount
  const result = getExpensesTotal([expenses[1], expenses[2]])
  expect(result).toBe(sum)
})
