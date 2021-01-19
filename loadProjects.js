import Project from './project';
import loadTasks from './loadTasks';

export default (projects) => {
  const list = {};
  JSON.parse(projects).forEach((object) => {
    const project = Project(object.name, object.id);
    project.setTasks(loadTasks(object.tasks));
    list[project.getId()] = project;
  });

  return list;
}