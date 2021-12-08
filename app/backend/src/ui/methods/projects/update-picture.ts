import Project from '../../../database/models/project';
import { Query } from 'mongoose';

/**
 * @param id
 * @param newPicture
 */
export function updatePicture(id: string, newPicture: string): Query<any, any> {
  return Project.findByIdAndUpdate(id,
    { picture: newPicture });
}
