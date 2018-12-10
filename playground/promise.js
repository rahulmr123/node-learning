// const promise = new Promise((resolve, reject)=>{
//   reject('hey its resolved');
// });
// promise.then((result)=> {
//   console.log(result);
// }, (error) => {
// console.log(error)
// });

// const asynAdd = (a, b) => {
//   return new Promise( (resolve, reject) => {
//     if(typeof(a) && typeof(b) === 'number') {
//       resolve(a+b);
//     } else {
//       reject('error  in types')
//     }
//   })
// }
// asynAdd(3, 7).then((data)=> {
//   console.log('result is ', data);
//   return asynAdd(data, '8');
// })
// .then((data) => {
// console.log(data);
// })
// .catch((error) => {
//   console.log(error);
// })
const myPromise = () => {
  return new Promise((resolve, reject) => {
      resolve('data')
  })
}

myPromise().then((d) => {
  console.log(d)
  return 'a';
}).then((d) => {
  console.log(d)
  return d;

}).then((d) => {
  console.log(d)
}).then((d) => {
  console.log(d)
})
