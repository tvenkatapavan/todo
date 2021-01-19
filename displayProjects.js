export default (projects) => {
  const sidebar = document.getElementById('sidebar');
  while (sidebar.children.length > 4) {
    sidebar.removeChild(sidebar.lastChild);
  }

  Object.values(projects).forEach((project) => {
    if (project.getId() !== 0) {
      const button = document.createElement('button');
      button.innerHTML = project.getName();
      button.id = project.getId();
      button.classList.add('project-button');
      sidebar.appendChild(button);
    }
  });
};
