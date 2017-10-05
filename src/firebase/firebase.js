import * as firebase from 'firebase'

// Initialize Firebase
const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);
const database = firebase.database()

export { firebase, database as default }

// const onValueChange = database.ref('notes').on('value', (snapshot) => {
//   const notes=[]
//   snapshot.forEach((v) => {
//     notes.push({
//       id: v.key,
//       ...v.val()
//     })
//   })
//   console.log(notes)
// }, (e) => {
//   console.log('Error with data fetching', e)
// })

// database.ref('notes').on('child_removed', (snapshot => {
//   console.log('removed', snapshot.key, snapshot.val())
// }))

// database.ref('notes').on('child_changed', (snapshot => {
//   console.log('changed', snapshot.key, snapshot.val())
// }))

// database.ref('notes').on('child_added', (snapshot => {
//   console.log('added', snapshot.key, snapshot.val())
// }))

// database.ref('notes').once('value')
//   .then((snapshot) => {
//     const notes=[]
//     snapshot.forEach((v) => {
//       notes.push({
//         id: v.key,
//         ...v.val()
//       })
//     })
//     console.log(notes)
//   })

// database.ref('notes').push({
//   title: 'Course Topics',
//   body: 'React Native'
// })

// database.ref('notes').push({
//   title: 'Todo',
//   body: 'Whatsoever'
// })

// database.ref('notes').push({
//   title: 'Sports',
//   body: 'Road Biking'
// })

// database.ref('notes/-KvchOywSv7K87qvwrbB').remove()

// const firebaseNotes = {
//   notes: {
//     asdfsadf: {
//       title: 'First note',
//       body: 'This is my note'      
//     },
//     asdfasdfasdf: {
//       title: 'Another note',
//       body: 'This is my note'      
//     }
//   }
// }

// const notes = [
//   {
//     id: '12',
//     title: 'First note',
//     body: 'This is my note'
//   }, {
//     id: '761ase',
//     title: 'Another note',
//     body: 'This is my note'
//   }
// ]

// database.ref('notes').set(notes)
// database.ref('notes')

// const onValueChange = database.ref().on('value', (snapshot) => {
//   const p = snapshot.val()
//   console.log(`${p.name} is a ${p.job.title} at ${p.job.company}`)
// }, (e) => {
//   console.log('Error with data fetching', e)
// })

// database.ref('location/city').once('value')
//   .then((snapshot) => {
//     const val = snapshot.val()
//     console.log(val)
//   })
//   .catch((e) => {
//     console.log('Error fetching data', e)
//   })


// database.ref().set({
//   name: 'Pistools',
//   age: 14,
//   stressLevel: 6,
//   job: {
//     title: 'Software Developer',
//     company: 'Google'
//   },
//   location: {
//     city: 'Gigritzpotschn',
//     country: 'anywhere'
//   }
// }).then(() => {
//   console.log('data is saved')
// }).catch((e) => {
//   console.log('This failed: ', e)
// })


// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle'
  
// }).then(() => {
//   console.log('data is saved')
// }).catch((e) => {
//   console.log('This failed: ', e)
// })


// database.ref('isSingle').remove().then(() => {
//   console.log('isSingle removed')
// }).catch((error) => {
//   console.log('removal failed', error)
// })
