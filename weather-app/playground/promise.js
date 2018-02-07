var asyncAdd = (a,b) =>{
  return new Promise((resolve, reject) => {
    setTimeout(() =>{
        if(typeof a === 'number' && typeof b === 'number'){
          resolve(a+b);
        } else {
          reject(`Both arguments must be numbers`);
        }
    },1500);
  });
};

asyncAdd(5, 7).then((result) =>{
  console.log('Result: ',result);
  return asyncAdd(result,33);
}).then((result)=>{
  console.log('Should be 45 ', result);
}).catch((errorMsg)=> {
  console.log(errorMsg);
});
// var somePromise = new Promise((resolve, reject) => {
//   setTimeout(() =>{
//     resolve('Hey. it worked');
//     //reject('Unable to fulfill prmoise');
//   },2500);
// });
//
// somePromise.then((message) =>{
//   console.log('Succeds: ', message);
// },(errorMsg) =>{
//   console.log(`Error: `,errorMsg);
// });
