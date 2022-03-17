/**
 * List of available job types
 */
export enum JobType {
  ReportProjectLabel = 'REPORT_PROJECT_LABEL'
}

/**
 * Job resolver method
 */
export type JobResolver = (payload: JobPayload) => Promise<void>;

/**
 * Job's payload
 */
export type JobPayload = Record<string, unknown>;

/**
 * This interface represents the Job entity
 */
export default interface Job {
  /**
   * Job's unique identity
   */
  _id: string;

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
  schedule: string;
}
