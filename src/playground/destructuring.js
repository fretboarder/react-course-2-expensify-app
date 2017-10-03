// Object desctructuring
console.log('destructuring')

const person = {
  name: 'Pistoooools',
  age: 14,
  location: {
    city: 'Vienna',
    temp: 15
  }
}

// const name = person.name
// const age = person.age

const {name: firstname = 'Anonymous', age} = person
console.log(`${firstname} is ${age}.`)

// if (person.location.city && person.location.temp) {
//   console.log(`It's ${person.location.temp} in ${person.location.city}`)
// }

const { temp: temperature, town } = person.location
console.log(`It's ${temperature} in ${town}`)


// Array destructuring


const address = [ 'Schiff 104', 'Vienna', 'Austria', '1220']
const [, city, state = 'Steiermark'] = address
console.log(`Your are in ${city} ${state}.`)

