// fetch('https://jsonplaceholder.typicode.com/users')
// .then((response) =>  (response.json())
// ).then((body) => {
//     const lis = body.map((data) =>{
//         const li = document.createElement('li');
//         const text = `Name: ${data.name} Email:${data.email} Id:${data.id}`;
//         const textNode = document.createTextNode(text);
//         li.appendChild(textNode);
//         return li;
//     })
    
//     lis.forEach((li) =>{
//        document.getElementById("mySelf").appendChild(li);
//     })
// })
// .catch((err) => console.log(err));

// // Practice promise;
// fetch('https://jsonplaceholder.typicode.com/users')
// .then((response) => response.json())
// .then((body) =>{
//    const lis = body.map((data) =>{
//     const li = document.createElement('li');
//     const text = `id: ${data.id} Name:${data.name} Email:${data.email} Address${data.address}`;
//     const textNode = document.createTextNode(text);
//     li.appendChild(textNode);

//     return li;
    
//  })
//  lis.forEach((li) =>{

//   document.getElementById('mySelf').appendChild(li);

//  })



// })
// .catch((err) => console.log(err));

// fetch('https://jsonplaceholder.typicode.com/users')

// .then((response) => response.json())

// .then((body) =>{

//     const lis = body.map((data) =>{

//         const li = document.createElement('li');
//         const text = `Name${data.name} Email: ${data.email} id: ${data.id}`; //  
//        const textNode = document.createTextNode(text);
//        li.appendChild(textNode);

//        return li;


//     });

//     lis.forEach((li) =>{

//         document.getElementById('mySelf').appendChild(li);
//     })

// })
// .catch((err) =>{
//     console.log(err);

// })

// fetch('https://jsonplaceholder.typicode.com/users')
// .then((response) => response.json())
// .then((body) => {
//     const lis = body.map((data) => {
//         const li = document.createElement('li');
//         const text = `Name ${data.name} Email ${data.email} `;
//         const texNode = document.createTextNode(text);

//         li.appendChild(texNode);

//         return li;
//     })

//     lis.forEach((li) => {
//         document.getElementById('mySelf').appendChild(li);
//     })
// })


// fetch('https://jsonplaceholder.typicode.com/users')
// .then((response) => response.json())
// .then((body) => {
//     const lis = body.map((data) => {
//         const li = document.createElement('li');
//         const text = `Name${data.name} Email: ${data.email} id: ${data.id}`;
//         const textNode = document.createTextNode(text);
//         li.appendChild(textNode);

//         return li;

//     })
//     lis.forEach((li) => {

//         document.getElementById('mySelf').appendChild(li);

//     })
// })
// .catch((err) => console.log(err));


// const time = new Date().getTime();
// console.log(time);
// const hello = time + 3000;
// console.log(hello);


// function count(){
//     if(hello >= new Date().getTime){
//         console.log('Then while loop running');

//     }else{
//         console.log('While loop is not running');
//     }
// }
// count();


// async function number(){

// };
// console.log(number);



// const processOrder = () => {
//       console.log('Please serve customer 1');

//       let currentTime = new Date().getTime();
//       while(currentTime + 3000 >= new Date().getTime());
//       console.log('Please  reserve this order');


// };
// console.log('Please provide order customer 2 ');
// processOrder();
// console.log('Please Provide order customer 3')

// const processOrder = (customer) => {
//     console.log("process order for  customer 1");

//     const late = new Date().getTime();
//     while(late  + 2000 >= new Date().getTime())
//     console.log('Order processed');
// }

// console.log('Hello Jobayer');
// processOrder();
// console.log('Hello Joban'); 


// const processOrder = () => {  // function defination ;
//     console.log(' First  Order recived');

//     setTimeout(() => {
//         console.log('Order cooking');


//     }, 3000);
//     console.log('Parcel customer');

// };
// console.log('Order recived customer');
// processOrder();
// console.log('customer review');


// const customer = (cus) => {
//     console.log('hello  how are you?');

//     const time = new Date().getTime();
//     while(time + 3000 >= new Date().getTime);

//     console.log('I am fine thanks you?');

// };

// console.log('please order ');
// customer();
// console.log('ok, thanks');


// what is callback ?

//  call back function very  helpful function and 

// const myWork = () => {
    
//     console.log('Hello Jobayer');

//     setTimeout(() => {
//         console.log('Hello how are you?');

//     }, 2000)
// };
// myWork();

// function callBack(a, b, hello) {

//     setTimeout(() => {
//         console.log('I am learn async and await' + a + b);
//         print();

//     }, 3000)
    
// }
// function print() {

//     console.log('hello world');

// };
// callBack('Jobayer', 'Joban', print);
// console.log('hello Jobayer');




// const takeOrder = (customer, callBack) => {

//    console.log('take order'  + customer)
//    callBack();

// };
// const processOrder = (customer, callBack) => {
//     console.log('order done')
   
//     setTimeout(() => {
//         console.log('order processed' + customer);

//         console.log('cooking order' + customer);

//         callBack();

//     }, 3000)
// };
// const complete = () => {

//     console.log('order parcel for customer');

// };

// processOrder('customer 1' , (customer) => {
//     processOrder(customer, (customer) => {
//         complete(customer, (customer) => {
            
//         });
//     });
// });


// const number = (sum, callBack) => {

//     console.log('number 1' + sum);
//     callBack();
// };

// const number1 = (sum, callBack) => {

//     console.log('number 2 ' + sum);

//     setTimeout((sum) => {

//         console.log('number 3' + sum);
//         console.log('number 4' + sum);
//         callBack();

//     }, 3000)

// };

// const number2 = (sum) => {

//     console.log('number 5' + sum);


// };

// number('hello', (sum) => {   // this is callBack hell ;
//     number1(sum, (sum) =>{
//         number2(sum, (sum) => {
            
//         });
//     });
// });
// console.log('hello Jobayer');

// const meetingDetails = false;

// const createPromise = new Promise((resolve, reject) =>{
//     if(meetingDetails) {
//         const obj = {
//           name: 'Jobayer',
//           location: 'Google meet',
//           time: '10 P.M',
//         }
//         resolve(obj);
//     }else{

//         reject(new Error('Meeting has been scheduled'));

//     }
// });
// createPromise
//    .then((res) => {
//      console.log(JSON.stringify(res)); 
//    })
//    .catch((err) => {
//     console.log(err.message);
//    });


//  async function myName() {

//     return 'hello';
// };
// console.log(myName());


// const name1 = Promise.resolve('hello how are you?');


// console.log(name1);

// const hello = 'Jobayer';

// const createPromise = new Promise(function(resolve, reject) {
//    if(hello = 'Jobayer') {
//     const obj = {
//         name: 'Joban',
//         age: 19,
//         email: 'jabayerjoban0048@gmail.com',
//     };
//     resolve(obj)
//    }else {

//     reject(new Error('Something is wrong happend'));
//    }
// });

// createPromise
//   .then((err) => {
//     console.log(JSON.stringify())
//   }).catch((err) => {
//     console.log(err.message);
//   });

// const promise = new Promise((resolve, reject) => {
//     console.log('hello how are');
// });
// console.log(promise);


// function promise() {
//     return Promise.resolved('Hello Jobayer how are you?');
// };
// promise

//      .then((res) => {
//         console.log(res) 
//      }).catch((err) => {
//         console.log(err);
//      });


// practice callBack function 

// function callBack(){
//    setTimeout(function() {
//       console.log('Hello javascript');

//    },3000)
// };

// function newFunction(){

//    console.log('Hello callBack function');
// }

// callBack();
// newFunction();
// console.log('Hello how are you?');


//  Make a callBack function;

// const callBack = (callBack) => {

//    setTimeout(() => {

//       console.log('hello Jobayer');
//       callBack();

//    }, 3000)
// };

// const noun = () => {

// console.log('oh, Jobayer I am sorry ')

// }
// callBack(noun);



// const functionCAll = (callBack) => {

//    setTimeout(() => {

//       console.log('Thats the beauty of human')
//       callBack();

//    }, 3000)
// };

// functionCAll(() => {
//    console.log('hello Jobayer');
// })


// const Data = getSomeData('https:// aremoteserver.com');
// console.log(Data);

// getSomeData('https:// aremoteserver.com', (Data) => {
//    console.log(Data);

// });


// Promise;
//  Create a new Promise;

// const promise = (control) => {
//    return new Promise((resolve, reject) => {
//       setTimeout(() =>{
//          if(control){
//             resolve();
//          }else{
//             reject();
//          }
//       }, 3000)
//    })
// };


// promise(false).then(() => {
//    console.log('promise is success');
// }).catch(() => {
//    console.log('Promise is not success');
// });


//  Handle Promise;

// promise.then((res) => {
//    console.log('Promise is success')
// }).catch((err) => {
//    console.log('')
// })
// const user = new Promise(function(resolve, reject) {
//    let control = false; 
//   setTimeout(() => {
//    if(control) {
//       resolve('hello Promise')

//    }else{

//       reject('error');

//    }

//   }, 2000)
// })

// user
//    .then((data) => {
//       console.log(data);
//    }).catch((err) => {
//       console.log(err);
//    })

// const promise = (control) => {
//    return new Promise((resolve, reject) =>{
//       setTimeout(() => {
//          if(control) {
//             resolve('Hello Promise');
//          }else{
//             reject(new Error('just pick up a  error'));
//          }
//       }, 2000)
//    })
// };

// promise(false) 
//    .then((res) => {
//       console.log(res);
//    }).catch((err) => {
//       console.log(err.message)
//    });
const promise1 = new Promise((resolve , reject) => {
   setTimeout(() => {
      if(true) {
         resolve('Promise done');
      }else{
         reject('Promise has been failed');
      }
   }, 2000)
});
 

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      if(false) {
         resolve('hello Jobayr');
      }else{
         reject('hello Joban')
      }
    }, 2000)
});

// Promise.all([promise1, promise2])
//      .then((res) => {
//       console.log(res);
//      }).catch((err) => {
//       console.log(err);
//      });

const promiseHandle = async () => {
   
   const data = await Promise.all([promise1, promise2]);
   console.log(data);

};
promiseHandle();