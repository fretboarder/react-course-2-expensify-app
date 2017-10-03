export default (expenses) => expenses
  .map( (e) => e.amount )
  .reduce((acc, cur) => acc + cur, 0)