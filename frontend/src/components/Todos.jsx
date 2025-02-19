
export function Todos({todos}){    //todos is an array using function map we can cover this
    return <div>
        {todos.map(function(todos){
            return <div>
                   <h1>{todos.title}</h1>
        <h2>{todos.description}</h2>
        <button>{todos.completed == true ? "completed" : "mark as done"}</button>
            </div>
        })}
        
    </div>
}