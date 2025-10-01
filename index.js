//////////// Todo App/// eroor  aa raha hai /// bad me error solve karenge 
let todo = [];
let req = prompt("Please enter the your request");

while (true) {
    if (req == "quit") {
        console.log("quit the game");
        break;
    }
    if (req == "list") {
        console.log("-----------------");
        for (let i = 0; i < todo.length; i++) {
            console.log(i, todo[i]);
        }
        console.log("-----------------");
    }
    else if (req == "add") {
        let task = prompt("Please enter the task you want to add ");
        todo.push(task);
        console.log("task added");
    }

    else if (req == "delete") {
        let idx = prompt("Please enter ther task index");
        todo.splice(idx, 1);
        console.log("task delete");
    }
    else {
        console.log("wrang request");

    }
    req = prompt(("Please enter your request"));
}  