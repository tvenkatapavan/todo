export default (tasks) => {
  const list = document.getElementById('notes');

  while (list.children.length > 1) {
    const child = list.lastChild;
    if (!child.classList.contains('header')) {
      list.removeChild(child);
    }
  }

  Object.values(tasks).forEach((task) => {
    const note = document.createElement('li');
    note.classList.add('note');

    const title = document.createElement('span');
    title.innerHTML = task.getTitle();
    title.classList.add('task-link');
    title.id = task.getId();
    note.appendChild(title);

    const dueDate = document.createElement('span');
    dueDate.innerHTML = task.getDueDate();
    note.appendChild(dueDate);

    const priority = document.createElement('span');
    priority.innerHTML = task.getPriority();
    priority.classList.add('priority');
    note.appendChild(priority);

    const status = document.createElement('span');
    status.innerHTML = task.getCompleted() ? 'Complete' : 'Incomplete';
    status.classList.add('status-button');
    status.id = task.getId();
    note.appendChild(status);

    status.style.backgroundColor = task.getCompleted() ? 'lightgreen' : '';

    list.appendChild(note);
  });
};
