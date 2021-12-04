import Project from '../../../database/models/project';

/**
 * @param id
 * @param newPicture
 */
export function updatePicture(id: string, newPicture: string) {
  return Project.findByIdAndUpdate(id,
    { picture: newPicture });
}
