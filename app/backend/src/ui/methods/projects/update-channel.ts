import Project from '../../../database/models/project';

/**
 * @param id
 * @param newChannel
 */
export function updateChannel(id: string, newChannel: string) {
  return Project.findByIdAndUpdate(id,
    { messengerChannelUrl: newChannel });
}
