import { Job } from 'types/entities';
import { ScheduledJob } from './scheduled-job';
import { JobId, JobPayload, JobSchedule, JobType } from 'types/entities/job';
import { createJob, getJobs, removeJobById, updateJobSchedule } from './database';

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
   * Add new job
   *
   * @param type — job's type
   * @param schedule — job's schedule
   * @param payload — job resolver's payload
   * @returns {JobId} JobId — id of the saved job
   */
  public async addJob(type: JobType, schedule: JobSchedule, payload: JobPayload = {}): Promise<JobId> {
    /**
     * Check for a correct schedule
     */
    this.checkSchedule(schedule);

    /**
     * Create job data object
     */
    const job: Job = await createJob(type, schedule, payload);

    /**
     * Compose scheduled job object
     */
    const scheduledJob = this.composeScheduledJob(job);

    /**
     * Run this job
     */
    scheduledJob.start();

    /**
     * Return Job's id
     */
    return job._id;
  }

  /**
   * Remove job ny id
   *
   * @param jobId — job's id
   */
  public async removeJob(jobId: JobId): Promise<void> {
    const scheduledJob = this.jobs.get(jobId);

    if (!scheduledJob) {
      throw Error(`Cannot remove job because job with id ${jobId} is missing`);
    }

    /**
     * Stop running job
     */
    scheduledJob.stop();

    /**
     * Remove job from jobs maps
     */
    this.jobs.delete(jobId);

    /**
     * Remove job from database
     */
    await removeJobById(jobId);
  }

  /**
   * Reschedule job
   *
   * @param jobId — job's id
   * @param newSchedule — new cron-link schedule
   */
  public async rescheduleJob(jobId: JobId, newSchedule: JobSchedule): Promise<void> {
    /**
     * Get scheduled job object
     */
    const scheduledJob = this.getScheduledJobById(jobId);

    /**
     * Check for a correct schedule
     */
    this.checkSchedule(newSchedule);

    /**
     * Update job data in database
     */
    await updateJobSchedule(jobId, newSchedule);

    /**
     * Reschedule and restart job
     */
    scheduledJob.reschedule(newSchedule);
  }

  /**
   * Pull saved jobs from database
   */
  private async runSavedJobs(): Promise<void> {
    console.log('load jobs');

    /**
     * Get jobs from DB
     */
    const jobs: Job[] = await getJobs();

    /**
     * Process loaded jobs
     */
    jobs.forEach(job => {
      const scheduledJob = this.composeScheduledJob(job);

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
   * @param job — job data
   */
  private composeScheduledJob(job: Job): ScheduledJob {
    return new ScheduledJob(job.type, job.schedule, job.payload);
  }

  /**
   * Find Scheduled Job object
   *
   * @param jobId — job's id
   */
  private getScheduledJobById(jobId: JobId): ScheduledJob {
    const scheduledJob = this.jobs.get(jobId);

    if (!scheduledJob) {
      throw Error(`Job with id ${jobId} is missing`);
    }

    return scheduledJob;
  }

  /**
   * Check passed schedule string for a validness
   *
   * @param schedule — cron-like string to be checked
   * @private
   */
  private checkSchedule(schedule: JobSchedule): void {
    if (ScheduledJob.validateSchedule(schedule)) {
      return;
    }

    throw Error('Schedule is not valid');
  }
}

/**
 * Function wrapper to get Scheduler instance
 * Used to beautify Scheduler calls
 */
export default function scheduler(): Scheduler {
  return Scheduler.getInstance();
}
