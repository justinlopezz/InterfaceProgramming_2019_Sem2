var TodoItem = /** @class */ (function () {
    function TodoItem(title) {
        this.title = title;
    }
    return TodoItem;
}());
var arr1 = [];
var view = 1;
while (view <= 1) {
    var MyTodo1 = new TodoItem("sleep");
    arr1.push(MyTodo1);
    var MyTodo2 = new TodoItem("eat");
    arr1.push(MyTodo2);
    var MyTodo3 = new TodoItem("school");
    arr1.push(MyTodo3);
    var MyTodo4 = new TodoItem("Home");
    arr1.push(MyTodo4);
    console.log(arr1);
    view++;
}
// let arr1: TodoItem[] = [];
// var arr1 = ["Eat", ""]
// arr1.push("Eat");
// console.log(arr1);
// var MyTodo = new TodoItem("Sleep");
// var MyTodo = new TodoItem("Eat");
// var MyTodo = new TodoItem("School");
// var MyTodo = new TodoItem("Home");
// var count = 0;
// while (count <= 10) {
//     console.log(count);
//     count++;
// }
