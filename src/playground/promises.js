const promise = new Promise ((resolve, reject) => {
  setTimeout(() => {
    resolve('This is my resolve data');
    //reject('something went wrong');
  }, 2500);
});

console.log('before');

promise.then((data) => {
  console.log(data);
  return 'some data';
}).then((str) => {
  console.log('does this run?', str);
}).catch((error) => {
  console.log('error:', error);
});

console.log('after');