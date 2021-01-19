export default (name, id) => {
  let tasks = {};

  const getName = () => name;

  const changeName = (newName) => {
    name = newName;
  };

  const add = (task, taskID) => {
    tasks[taskID] = task;
  };

  const remove = (taskID) => {
    delete tasks[taskID];
  };

  const getTasks = () => tasks;

  const getId = () => id;

  const setTasks = (newTasks) => {
    tasks = newTasks;
  };

  return {
    getName,
    changeName,
    add,
    remove,
    getTasks,
    getId,
    setTasks,
  };
};
