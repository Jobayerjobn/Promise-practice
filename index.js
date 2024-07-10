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

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => response.json())
.then((body) => {
    const lis = body.map((data) => {
        const li = document.createElement('li');
        const text = `Name ${data.name} Email ${data.email} `;
        const texNode = document.createTextNode(text);

        li.appendChild(texNode);

        return li;
    })

    lis.forEach((li) => {
        document.getElementById('mySelf').appendChild(li);
    })
})