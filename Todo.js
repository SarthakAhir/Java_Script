let todo =[];
let req;

do{
     req = prompt("Please enter your request: ");

    switch(req){
        case "add":
            let task = prompt("Please enter the task you want to add");
            todo.push(task);
            console.log("task added");
            break;

        case "list":
            console.log("========================");
            for(let i=0;i<todo.length;i++){
                console.log(`${i+1}. ${todo[i]}`);
            }
            console.log("========================");
            break;

        case "delet":
            let idx = prompt("Please enter the index of the task you want to delete");
            todo.splice(idx-1,1);
            console.log("task deleted");
           
            break;

        case "quit":
            console.log("Goodbye!");
            break;
    }

}while(req !== "quit");