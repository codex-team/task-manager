/**
 * List of available job types
 */
export enum JobType {
  REPORT_PROJECT_LABEL = 'REPORT_PROJECT_LABEL'
}

/**
 * Job's id
 */
export type JobId = string;

/**
 * Job's schedule
 */
export type JobSchedule = string;

/**
 * Job resolver's payload
 */
export type JobPayload = Record<string, unknown>;

/**
 * Job resolver method
 */
export type JobResolver = (payload: JobPayload) => Promise<void>;

/**
 * This interface represents the Job entity
 */
export default interface Job {
  /**
   * Job's identifier
   */
  _id: JobId;

  /**
   * Job's type
   */
  type: JobType;

  /**
   * Job's schedule
   */
  schedule: JobSchedule;

  /**
   * Job resolver's payload
   */
  payload: JobPayload;
}
