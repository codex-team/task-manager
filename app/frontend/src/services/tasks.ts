import client from 'transport/ctproto-client';

/**
 * Returns list of tasks
 *
 * @param projectId
 */
export async function getTasks(projectId?: string): Promise<void>/* : Promise<GetTasksResponse>*/ {
  // const response = await client.send('get-tasks' );

  // return response as GetTasksResponse;
}


/**
 * @param data
 */
export async function createTask(data: any): Promise<void> { // в какой проект попадает таска, если она создается в all projects view

}