import Project from '../../../database/models/project';

/**
 * @param id
 * @param newTitle
 */
export function updateTitle(id: string, newTitle: string) {
  return Project.findByIdAndUpdate(id,
    { title: newTitle });
}
