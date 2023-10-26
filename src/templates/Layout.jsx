import "../styles/styles.css"


function Layout ({children}){
const[headerComponent, addTasksComponent, TasksGroupComponent] = children;


console.log (children);
    return (
    <div className="container">
        <header>{headerComponent}</header>
        <div className="add-task-component">{addTasksComponent}</div>
        <div className="tasks-group">{TasksGroupComponent}</div>
    </div>
    )
}


export default Layout;
