export default interface Status {

  /**
   * Id of the status
   */
  _id: string

  /**
   * Status label
   */
  label: string

  /**
   * Id of the project status belongs to
   */
  projectId?: string

  /**
   * Ids of the tasks that have this status in board view.
   * Order of the ids in the list effects cards sort order
   */
  tasks: string[]
}