"use strict";
//-----------------Example
exports.__esModule = true;
// import axios from 'axios';
//-----------------Long Method
// var url = "https://jsonplaceholder.typicode.com/users";
// axios ({
//     method: 'get',
//     url: url,
//     responseType: 'json'
// })
//-----------------Quick Method
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
var axios_1 = require("axios");
axios_1["default"].get('https://jsonplaceholder.typicode.com/posts')
    .then(function (res) {
    var data = res.data;
    for (var i = 0; i < data.length; i++) {
        var _userId = data[i].userId;
        var _title = data[i].title;
        console.log(data[i].userId);
        console.log(data[i].title);
    }
});
var User = /** @class */ (function () {
    function User(userId, title) {
        this.userId = userId;
        this.title = title;
    }
    return User;
}());
