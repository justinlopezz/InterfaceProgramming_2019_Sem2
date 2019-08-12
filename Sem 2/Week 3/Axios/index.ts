//-----------------EXAMPLE

// import axios from 'axios';

//-----------------LONG METHOD

// var url = "https://jsonplaceholder.typicode.com/users";

// axios ({
//     method: 'get',
//     url: url,
//     responseType: 'json'
// })

//-----------------QUICK METHOD

// axios.get<UserInterface[]>('https://jsonplaceholder.typicode.com/users')
// .then((res) => {
//     var data = res.data;


//     var userArr: UserInterface[] = []
//     for(var i = 0; i < data.length; i++){
        
//         let _id = data[i].id;
//         let _username = data[i].username;

//         userArr.push({id: _id, username: _username})
//         //console.log(data[i].username);
//         //let user1: User = new User(data[i].id, data[i].username);
//     }

//     for(var i = 0; i < userArr.length; i++){
//         console.log(userArr[i].id);
//     }
// })

// class User {
//     private id: number;
//     private username: string;

//     constructor(id: number, username: string){
//         this.id = id;
//         this.username = username;
//     }
// }

// interface UserInterface {
//     id: number;
//     username: string;
// }


//----------------- EXERCISE

import axios from 'axios';

interface UserInterface {
    userId: number;
    id: number;
    title: string;
    body: string;
} 

axios.get<UserInterface[]>('https://jsonplaceholder.typicode.com/posts')
.then((res) => {
    var data = res.data;

    for(var i = 0; i < data.length; i++){
        
        let _userId = data[i].userId;
        let _title = data[i].title;
        
        console.log(data[i].userId);
        console.log(data[i].title);
    }

})
        
class User {
    private userId: number;
    private title: string;

    constructor(userId: number, title: string){
        this.userId = userId;
        this.title = title;
    }
}


