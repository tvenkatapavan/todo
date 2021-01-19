import encodeTasks from './encodeTasks';

export default (projects) => {
  localStorage.setItem('projects',
    JSON.stringify(Object.values(projects).map((project) => {
      return {name: project.getName(), id: project.getId(), tasks: encodeTasks(project.getTasks())};
    })));
}
