// contains list of todos 

// ability to add todo to project
// ability to remove todo from project

// ability to rename project
// ability to delete project

const Project = (name) => {
    let projectName = name;
    let todos = [];

    const addTodo = (todo) => {
        todos.add(todo);
    }

    const removeTodo = (todo) => {
        todos.splice(todos.indexOf(todo), 1);
    }

    return {
        addTodo, removeTodo,
        get name() {
            return projectName;
        },
        get todos() {
            return todos;
        },
        set name(name) {
            projectName = name;
        }

    }

}