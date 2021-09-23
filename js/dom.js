
 const UNCOMPLETED_LIST_TODO_ID = "todos";
 // const COMPLETED_LIST_TODO_ID = "completed-todos"; 


 
function addTodo()
{    
    const uncompletedTODOList = document.getElementById(UNCOMPLETED_LIST_TODO_ID );

    const textTodo = document.getElementById("title").value;
    const timestamp = document.getElementById("date").value;

    console.log("textTodo "+textTodo);
    console.log("date "+timestamp);

    for(let i = 0; i < 10; i++){
        const todo = makeTodo();

        uncompletedTODOList.append(todo);
    }
}



function makeTodo()
{

    const textTitle = document.createElement("h2");
    textTitle.innerText = "Tugas Android";

    const textTimestamp = document.createElement("p");
    textTimestamp.innerText = "2021-06-22";

    const textContainer = document.createElement("div");
    textContainer.classList.add("inner");

    textContainer.append(textTitle,textTimestamp);

    const container = document.createElement("div");
    container.classList.add("item","shadow");

    container.append(textContainer);

    return container;
}