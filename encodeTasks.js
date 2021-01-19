export default (tasks) => {
  return JSON.stringify(Object.values(tasks).map((task) => {
    return {title: task.getTitle(), description: task.getDescription(), dueDate: task.getDueDate(), priority: task.getPriority(), id: task.getId(), completed: task.getCompleted()};
  }));
}
