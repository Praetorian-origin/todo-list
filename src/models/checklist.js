// a checklist is made of tasks that can be completed or not
// a checklist has a name

const Checklist = (name) => {
    let checklistName = name;
    let tasks = [];
    const addTask = (task) => {
        tasks.push(task);
    }
    const removeTask = (task) => {
        tasks.splice(tasks.indexOf(task), 1);
    }

    return {
        get name() {
            return checklistName;
        },
        set name(name) {
            checklistName = name;
        },
        get tasks() {
            return tasks;
        },
        addTask,
        removeTask
    }
}


