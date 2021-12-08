import Project from '../../../database/models/project';
import { Query } from 'mongoose';

/**
 * @param id
 * @param newChannel
 */
export function updateChannel(id: string, newChannel: string): Query<any, any> {
  return Project.findByIdAndUpdate(id,
    { messengerChannelUrl: newChannel });
}
