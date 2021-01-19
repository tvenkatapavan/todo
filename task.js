export default (title, description, dueDate, priority, completed = false, id = undefined) => {
  const setId = (newId) => {
    id = newId;
  };

  const getId = () => id;

  const update = (newtitle, newDescription, newDueDate, newPriority) => {
    title = newtitle;
    description = newDescription;
    dueDate = newDueDate;
    priority = newPriority;
  };

  const getTitle = () => title;

  const getDescription = () => description;

  const getDueDate = () => dueDate;

  const getPriority = () => priority;

  const getCompleted = () => completed;

  const toggleCompleted = () => {
    completed = !completed;
  };

  return {
    getTitle,
    getDescription,
    getDueDate,
    getPriority,
    getCompleted,
    setId,
    getId,
    update,
    toggleCompleted,
  };
};
