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
 * Job's payload
 */
export type JobPayload = Record<string, unknown>;

/**
 * Job's schedule
 */
export type JobSchedule = string;

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
   * Job's payload
   */
  payload: JobPayload;

  /**
   * Job's schedule
   */
  schedule: JobSchedule;
}
