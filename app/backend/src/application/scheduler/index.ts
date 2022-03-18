import { Job } from 'types/entities';
import { ScheduledJob } from './scheduled-job';
import { JobId, JobPayload, JobSchedule, JobType } from 'types/entities/job';

/**
 * Scheduled Jobs controller
 */
class Scheduler {
  /**
   * Scheduler instance itself
   *
   * @private
   */
  private static instance: Scheduler;

  /**
   * Map of jobs
   *
   * @private
   */
  private jobs: Map<string, ScheduledJob> = new Map();

  /**
   * Private constructor
   */
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private constructor() {}

  /**
   * Instance getter to provide singleton pattern
   */
  public static getInstance(): Scheduler {
    if (!Scheduler.instance) {
      Scheduler.instance = new Scheduler();
    }

    return Scheduler.instance;
  }

  /**
   * Scheduler's initializer
   */
  public async start(): Promise<void> {
    await this.runSavedJobs();
  }

  /**
   * @param type
   * @param payload
   * @param schedule
   */
  public async addJob(type: JobType, payload: JobPayload, schedule: JobSchedule): Promise<void> {
    /**
     * Create job data object
     */
    const job = {
      type,
      payload,
      schedule,
    };

    /**
     * Compose scheduled job object
     */
    const scheduledJob = this.composeScheduledJob(job.type, job.payload, job.schedule);

    /**
     * Run this job
     */
    scheduledJob.start();

    // todo: save job to db
  }

  /**
   * @param jobId
   */
  public async removeJob(jobId: JobId): Promise<void> {
    const scheduledJob = this.jobs.get(jobId);

    if (!scheduledJob) {
      return;
    }

    scheduledJob.stop();

    this.jobs.delete(jobId);

    // todo: remove job from db
  }

  // /**
  //  *
  //  */
  // private async saveJob() {
  //
  // }
  //
  // /**
  //  *
  //  */
  // private async removeJob() {
  //
  // }
  //
  // /**
  //  *
  //  */
  // private async getJob() {
  //
  // }


  /**
   * Pull saved jobs from database
   */
  private async runSavedJobs(): Promise<void> {
    console.log('load jobs');

    /**
     * Get saved jobs from DB
     */
    // todo: get jobs from db
    const jobs: Job[] = [
      {
        _id: '123',
        type: JobType.REPORT_PROJECT_LABEL,
        payload: {
          projectId: 100,
        },
        schedule: '*/7 * * * * *',
      },
      {
        _id: '123',
        type: JobType.REPORT_PROJECT_LABEL,
        payload: {
          projectId: 200,
        },
        schedule: '*/5 * * * * *',
      },
    ];

    /**
     * Process loaded jobs
     */
    jobs.forEach(job => {
      const scheduledJob = this.composeScheduledJob(job.type, job.payload, job.schedule);

      /**
       * Run loaded job
       */
      scheduledJob.start();

      /**
       * Add job to array
       */
      this.jobs.set(job._id, scheduledJob);
    });
  }

  /**
   * Initialize Scheduled Job from Job data
   *
   * @param type
   * @param payload
   * @param schedule
   */
  private composeScheduledJob(type: JobType, payload: JobPayload, schedule: JobSchedule): ScheduledJob {
    if (!ScheduledJob.validateSchedule(schedule)) {
      throw Error('Schedule string is invalid');
    }

    return new ScheduledJob(type, payload, schedule);
  }
}

/**
 * Function wrapper to get Scheduler instance
 * Used to beautify Scheduler calls
 */
export default function scheduler(): Scheduler {
  return Scheduler.getInstance();
}
