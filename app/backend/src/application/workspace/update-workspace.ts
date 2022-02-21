import { Workspace } from 'types/entities';
import WorkspaceModel from 'database/models/workspace';

/**
 * Updates existing workspace
 *
 * @param _id - workspace's id
 * @param [name] - name of workspace
 * @param [teammates] - list of teammates
 */
export async function updateWorkspace(_id: string, name?: string, teammates?: string[]): Promise<Workspace | any> {
  const query = { _id };
  const data = {
    _id,
    name,
    teammates,
  };

  return WorkspaceModel.findOneAndUpdate(query, data).exec();
}
