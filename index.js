// // TO DO LIST APP


// ToDo list object to store categories and tasks
let todoList = {};

// Function to add a task to a specified category
function addTask(description, category) {
    if (!todoList[category]) {
        todoList[category] = [];
    }
    todoList[category].push({ description: description, completed: false });
}

// Function to display tasks grouped by categories
function displayTasks() {
    for (const category in todoList) {
        console.log(`Category: ${category}`);
        todoList[category].forEach((task, index) => {
            console.log(`${index + 1}. [${task.completed ? 'x' : ' '}] ${task.description}`);
        });
    }
}

// Function to mark a task as completed
function markTaskAsCompleted(category, taskIndex) {
    if (todoList[category] && todoList[category][taskIndex]) {
        todoList[category][taskIndex].completed = true;
    }
}

// Function to remove a task from the ToDo list
function removeTask(category, taskIndex) {
    if (todoList[category] && todoList[category][taskIndex]) {
        todoList[category].splice(taskIndex, 1);
    }
}

// Adding tasks to the ToDo list
addTask("Do laundry", "Home");
addTask("Finish project", "Work");
addTask("Go grocery shopping", "Home");

// Displaying tasks
displayTasks();

// Marking a task as completed
markTaskAsCompleted("Home", 0); // Mark the first task in the "Home" category as completed

// Removing a task
removeTask("Home", 0); // Remove the first task in the "Home" category

// Displaying tasks after marking and removing tasks
console.log("\nTasks after marking and removing:");
displayTasks();


// let toDoListA = []
//  function addTask(task,category,completed=false) {
//   task = {task:task,category:category,completed:completed}
// toDoListA.push(task)
// return toDoListA
//  }


//  addTask("I want to clean my home","cleaning")
//  addTask('I need to wash my clothes', 'cleaning')
//  addTask("Complete assignment", "school work");
//  addTask('working on my project','school work');
//  console.log(toDoListA)

// //  const taskCategory =[]
// //  function displayTaskByCategory(category) {
 
// // toDoListA.forEach(task =>{
// //   if(task.category === category){
// //     taskCategory.push(task)
// //   }
// //   return taskCategory;
// // })
// //  }
// //  displayTaskByCategory()
// //  console.log(taskCategory)

// // function displayTask() {
// //   let taskToDisplay = [];
// // // let categoryDisplayed = [];

// // toDoListA.forEach(taskDisplayed => {
// //   for (let i in taskDisplayed) {
// //     let task = taskDisplayed[i];
// //     if ( task.category === category) {
// //       taskToDisplay.push(task);
// //     }
   
// //   }
// // });

// // console.log("Completed tasks is represented by category 1:");
// // console.log(taskToDisplay);
// // }
// // displayTask()
// // function toDoList() {
// // // let task ={
// // // task1:{
// // //     todo:'wake up early',
// // //     completed: true,
// // //     category:1
// // // },
// // // task2:{
// // //     todo:"clean up early",
// // //     completed:true,
// // //     category:'clean'
// // // },
// // // task3:{
// // //     todo:"going to school",
// // //     completed:false,
// // //     category:2
// // // },
// // // task4:{
// // //     todo:"studying at 9:00",
// // //     completed:false,
// // //     category:'school'
// // // }
// // }
// // toDoListA.push(task)
// // }

// // toDoList()
// // // console.log(toDoListA)

// // function displayTask() {
// //     let taskToDisplay = [];
// //   let categoryDisplayed = [];

// //   toDoListA.forEach(taskDisplayed => {
// //     for (let tasks in taskDisplayed) {
// //       let task = taskDisplayed[tasks];
// //       if (task.completed && task.category === '') {
// //         taskToDisplay.push(task);
// //       }
// //       if (!task.completed && task.category === Number) {
// //         categoryDisplayed.push(task);
// //       }
// //     }
// //   });

// //   console.log("Completed tasks is represented by category 1:");
// //   console.log(taskToDisplay);
// //   console.log("Incomplete tasks is represented by category 2:");
// //   console.log(categoryDisplayed);
// // }
// // displayTask()
// // // console.log(displayTask())

// // function taskCompleted(){
 
// // }
// // taskCompleted()

// // // function createTask(task, category) {
// // //   return { task, category, completed: false };
// // // }
// // // const tasks = {}
// // // function addTask(task, category){
// // //     if (!tasks[category]) {
// // //     tasks[category] = [];
// // //   }
// // //   tasks[category].push(createTask(task, category));
// // // }



// // // function addToDoList() {
// // //   const tasks = {};

// //   // function addTask(description, category) {
// //     // if (!tasks[category]) {
// //     //   tasks[category] = [];
// //     // }
// //     // tasks[category].push(createTask(description, category));
// //   // }

//   function displayTasksByCategory() {
//     for (const category in tasks) {
//       console.log(`${category}:`);
//       tasks[category].forEach((task) => {
//         const status = task.completed ? "Done" : "Pending";
//         console.log(`\t- ${task.description} (${status})`);
//       });
//     }
//   }

//   function markTaskAsCompleted(description) {
//     for (const category in tasks) {
//       const task = tasks[category].find((task) => task.description === description);
//       if (task) {
//         task.completed = true;
//         break;
//       }
//     }
//   }

//   function removeTask(description) {
//     for (const category in tasks) {
//       tasks[category] = tasks[category].filter((task) => task.description !== description);
//     }
//   }

// // //   return { addTask, displayTasksByCategory, markTaskAsCompleted, removeTask };
// // // }

// // // Example usage:
// // // const todoList = addToDoList();

// // // Adding tasks
// // // addTask("Complete project proposal", "Work");
// // // addTask("Buy groceries", "Personal");
// // // addTask("Call mom", "Personal");
// // // addTask("Review meeting notes", "Work");
// // // console.log(tasks)
// // // // Displaying tasks by category
// // // console.log("Tasks by category:");
// // // todoList.displayTasksByCategory();

// // // // Marking a task as completed
// // // todoList.markTaskAsCompleted("Complete project proposal");

// // // // Displaying tasks by category after marking one completed
// console.log("\nTasks by category after marking one completed:");
// // toDoListA.displayTasksByCategory();

// // // // Removing a task
// toDoListA.removeTask("Call mom");

// // Displaying tasks by category after removing one task
// console.log("\nTasks by category after removing one task:");
// toDoListA.displayTasksByCategory();
