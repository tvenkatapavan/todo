export default (taskID, projectID) => {
  localStorage.setItem('taskID', JSON.stringify(taskID));

  localStorage.setItem('projectID', JSON.stringify(projectID));
};
