import Task from './task';

export default (tasks) => {
  if (tasks === null) {
    return false;
  }

  const list = {};

  JSON.parse(tasks).map((task) => {
    return Task(task.title, task.description, task.dueDate, task.priority, task.completed, task.id)
  }).forEach((task) => {
    list[task.getId()] = task;
  });

  return list;
}
