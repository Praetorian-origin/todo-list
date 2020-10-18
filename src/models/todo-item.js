/*
Brainstorm what kind of properties your todo-items are going to have. At a minimum they should have a title, description, dueDate and priority. You might also want to include notes or even a checklist.
*/

// setTitle setDescription setDueDate, setPriority

// addCheckList

// ability to check items or uncheck

const TodoItem = (title, description, dueDate, priority) => {
  let itemTitle = title;
  let itemDescription = description;
  let itemDueDate = dueDate;
  let itemPriority = priority;
  let complete = false;
  let checklist = null;

  const toggleComplete = () => {
    complete = !complete;
  };

  return {
    set title(title) {
      itemTitle = title;
    },
    set description(description) {
      itemDescription = description;
    },
    set dueDate(dueDate) {
      itemDueDate = dueDate;
    },
    set priority(priority) {
      itemPriority = priority;
    },
    set checklist(checklist) {
      this.checklist = checklist;
    },
  toggleComplete,
    get title() {
      return itemTitle;
    },
    get complete() {
      return complete;
    },
    get description() {
      return itemDescription;
    },
    get dueDate() {
      return itemDueDate;
    },
    get priority() {
      return itemPriority;
    },
    get checklist() {
      return checklist;
    }

  };
};

export default TodoItem;
