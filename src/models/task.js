const Task = (name) => {
    let taskName = name;
    let complete = false;
    const toggleComplete = () => {
        complete = !complete;
    }

    return {
        get name() {
            return taskName;
        },
        set name(name) {
            taskName = name;
        },
        get complete() {
            return complete;
        },
        toggleComplete
    }
}