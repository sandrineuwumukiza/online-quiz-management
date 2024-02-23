// TASK SCHEDULE

// Task scheduler array to store tasks
let taskScheduler = [];

// Function to add a task to the scheduler
function addTask(title, description, dueDate) {
    const task = { title, description, dueDate, completed: false };
    taskScheduler.push(task);
    sortTasksByDueDate(); // Sort tasks after adding a new task
}

// Function to sort tasks by due date
function sortTasksByDueDate() {
    taskScheduler.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
}

// Function to display tasks sorted by due dates
function displayTasksSortedByDueDate() {
    console.log("Tasks sorted by due date:");
    taskScheduler.forEach(task => {
        console.log(`Title: ${task.title}, Description: ${task.description}, Due Date: ${task.dueDate}, Completed: ${task.completed ? 'Yes' : 'No'}`);
    });
}

// Function to update task details
function updateTask(title, newDescription, newDueDate, markCompleted) {
    const task = taskScheduler.find(task => task.title === title);
    if (!task) {
        console.log(`Task "${title}" not found.`);
        return;
    }
    if (newDescription !== undefined) {
        task.description = newDescription;
    }
    if (newDueDate !== undefined) {
        task.dueDate = newDueDate;
        sortTasksByDueDate(); // Sort tasks after updating due date
    }
    if (markCompleted !== undefined) {
        task.completed = markCompleted;
    }
    console.log(`Task "${title}" updated successfully.`);
}

// Function to remove a task from the scheduler
function removeTask(title) {
    const index = taskScheduler.findIndex(task => task.title === title);
    if (index === -1) {
        console.log(`Task "${title}" not found.`);
        return;
    }
    taskScheduler.splice(index, 1);
    console.log(`Task "${title}" removed successfully.`);
}

// Adding tasks to the scheduler
addTask("Complete project", "Finish the project documentation", "2024-02-28");
addTask("Prepare presentation", "Prepare slides for the team meeting", "2024-03-05");
addTask("Submit report", "Submit the quarterly report to the manager", "2024-03-10");

// Display tasks sorted by due date
displayTasksSortedByDueDate();

// Update task details or mark tasks as completed
updateTask("Complete project", "Finalize the project documentation", "2024-02-25", false);

// Display tasks sorted by due date after updating
// console.log("\nTasks sorted by due date after updating:");
displayTasksSortedByDueDate();

// Remove a task from the scheduler
removeTask("Submit report");

// Display tasks sorted by due date after removing
// console.log("\nTasks sorted by due date after removing:");
// displayTasksSortedByDueDate();
