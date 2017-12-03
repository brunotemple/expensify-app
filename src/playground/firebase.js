import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDBTS3dCWR5vwLP85QGvOpZ7IoxlsRbnVg",
  authDomain: "expensify-54d17.firebaseapp.com",
  databaseURL: "https://expensify-54d17.firebaseio.com",
  projectId: "expensify-54d17",
  storageBucket: "expensify-54d17.appspot.com",
  messagingSenderId: "225403596345"
};
firebase.initializeApp(config);

const database = firebase.database();

//CHILD ON
// database.ref('expenses').on('value', (snapshot) => {
//   const expenses = [];
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });
//   console.log(expenses);
// });

//CHILD REMOVED
database.ref('expenses').on('child_removed', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

//CHILD CHANGED
database.ref('expenses').on('child_changed', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

//CHILD ADDED
database.ref('expenses').on('child_added', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});



// database.ref('expenses').push({
//   description: 'Water Bill',
//   amount: 15000,
//   note: 'Ta caro',
//   createdAt: 0
// });

// database.ref('expenses').push({
//   description: 'Bill',
//   amount: 2222,
//   note: 'sasdsad',
//   createdAt: -10000
// });

// database.ref('expenses').push({
//   description: 'Billa',
//   amount: 314,
//   note: '',
//   createdAt: 1000
// });


//database.ref('notes/-L-Mx9mcC8mJavSe5xvD').remove();

// database.ref('notes').push({
//   title: 'Course Topics',
//   body: 'React Native'
// })

// const firebaseNotes = {
//   notes: {
//     kajshdakjdasd: {
//       title: 'First Note!',
//       body: 'This is my note'    
//     }, 
//     akkisdgkiadkjasd: {
//       title: 'Another Note!',
//       body: 'This is my note 2'    
//     }
//   }
// };

// const notes = [{
//   id:'12',
//   title: 'First Note!',
//   body: 'This is my note'
// }, {
//   id:'761',
//   title: 'Another Note!',
//   body: 'This is my note'
// }];

// database.ref('notes').set(notes);


// ON CHANGE
// database.ref().on('value', (snapshot) => {
//   const val = snapshot.val();
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`)
// })

// database.ref('location')
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log('Error fetching data', e);
//   });

// database.ref().set({
//   name: 'Bruno Temple', 
//   age: 34,
//   job: {
//     title: 'Software Developer',
//     company: 'Google'
//   },
//   stressLevel: 6,
//   isSingle: false,
//   location: {
//     city: 'Perth',
//     country: 'Australia'
//   }
// }).then(() => {
//   console.log('data is saved');
// }).catch((e) => {
//   console.log('this failed.', e)
// });

// database.ref().update({
//   stressLevel: 9,
//   'location/city': 'Melbourne',
//   'job/company': 'amazon'
// }).then(() => {
//   console.log('data is updated');
// }).catch((e) => {
//   console.log('this failed.', e)
// });


// database.ref()
// .remove()
// .then(() => {
//   console.log('Data was removed');
// }).catch((e) => {
//   console.log('did not remove data:',e);
// });