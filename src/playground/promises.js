const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve({
    //   name: 'Pistooools',
    //   age: '14'
    // })
    reject('Something went wrong')
  }, 2000)
  
});

console.log('before')

promise.then( (data) => {
  console.log('1', data)
}).catch( (error) => {
  console.log('error: ', error)
})

console.log('after')




