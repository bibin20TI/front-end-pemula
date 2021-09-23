

 const UNCOMPLETED_LIST_TODO_ID = "todos";
 const COMPLETED_LIST_TODO_ID = "completed-todos"; 

 


function addTodo()
{

    const textTodo = document.getElementById("title").value;
    const timestamp = document.getElementById("date").value;

    console.log("textTodo "+textTodo);
    console.log("date "+timestamp);
}