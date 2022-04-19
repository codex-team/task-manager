import { Workspace } from 'types/entities';
import WorkspaceSchema from 'database/models/workspace';

/**
 * Returns stored workspace
 */
export async function getWorkspace(): Promise<Workspace | null> {
  return WorkspaceSchema.findOne();
}
