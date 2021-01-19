export default (tasks, task, id) => {
  // let list = document.getElementById('notes');
  // let note = document.createElement('li');
  // note.classList.add('note');

  // let title = document.createElement('span')
  // title.innerHTML = task.getTitle();
  // assign id, add to global hash
  // title.id = id;
  tasks[id] = task;
  task.setId(id);

  // title.classList.add('task-link');
  // note.appendChild(title);

  // let dueDate = document.createElement('span');
  // dueDate.innerHTML = task.getDueDate();
  // note.appendChild(dueDate);

  // let priority = document.createElement('span');
  // priority.innerHTML = task.getPriority();
  // note.appendChild(priority);

  // let status = document.createElement('span');
  // status.innerHTML = task.getCompleted() ? 'Complete' : 'Incomplete';
  // status.classList.add('status-button');
  // status.id = task.getId();
  // note.appendChild(status);

  // list.appendChild(note);
}