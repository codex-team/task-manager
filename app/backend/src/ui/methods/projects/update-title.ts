import Project from '../../../database/models/project';
import { Query } from 'mongoose';

/**
 * @param id
 * @param newTitle
 */
export function updateTitle(id: string, newTitle: string): Query<any, any> {
  return Project.findByIdAndUpdate(id,
    { title: newTitle });
}
