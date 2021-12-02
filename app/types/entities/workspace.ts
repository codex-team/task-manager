import Teammate from "./teammate";

/**
 * This interface represents the Workspace entity
 */
export default interface Workspace {
  /**
   * Workspace unique identity
   */
  id: string;

  /**
   * Workspace name
   */
  name: string,

  /**
   * Workspace teammates
   */
  team: Array<Teammate>

  /**
   * Workspace projects
   */
  projects: Array<string>
}
