import React from "react";


import Layout from "../templates/Layout";
import Header from "../molecules/header";
import AddTask from "../organisms/add-task";
import TasksGroup from "../organisms/tasks-group"


function App() {
  const [tasks,setTasks] =React.useState([]);

  const addTask =(taskName) =>{
      const isTaskNameInTasks = tasks.includes(taskName.toLowerCase());

      if(!isTaskNameInTasks && taskName !== ''){
        setTasks ([...tasks,taskName.toLowerCase()]);
      } 
  };

const deleteTask = (taskToDelete) =>{
  const filteredTaskList = tasks.filter((task) => task !== taskToDelete);
  setTasks (filteredTaskList);
}



  return ( 
    <Layout>
      <Header/>
      <AddTask onAddClick ={addTask}/>
      <TasksGroup taskList={tasks} onDeleteTask ={deleteTask}/>
  </Layout>
  );
}

export default App;
