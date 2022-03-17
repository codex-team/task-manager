/**
 *
 */
import { Job } from 'types/entities';
import { ScheduledJob } from './scheduled-job';

/**
 *
 */
class Scheduler {
  private static instance: Scheduler;

  private jobs: ScheduledJob[] = [];

  /**
   *
   */
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private constructor() {}

  /**
   *
   */
  public static getInstance(): Scheduler {
    if (!Scheduler.instance) {
      Scheduler.instance = new Scheduler();
    }

    return Scheduler.instance;
  }

  /**
   *
   */
  public async start(): Promise<void> {
    await this.loadJobs();
    this.runJobs();
  }

  // /**
  //  * @param action
  //  * @param schedule
  //  * @param id
  //  */
  // public static addJob(action: () => void, schedule: string, id: string): void {
  //   // create a new job
  //
  //   // save job to db
  // }
  //
  // /**
  //  *
  //  */
  // public static removeJob(): void {
  //   const job: ScheduledJob;
  //
  //   // remove job
  //   job.stop();
  //
  //   // remove job from db
  // }

  /**
   * Pull saved jobs from database
   */
  private async loadJobs(): Promise<void> {
    console.log('load jobs');

    /**
     * Get saved jobs from DB
     */
    const jobs: Job[] = [];

    /**
     * Fill scheduled jobs array
     */
    this.jobs = jobs.map(this.createScheduledJob);
  }

  /**
   * Run all loaded jobs
   */
  private runJobs(): void {
    this.jobs.forEach(job => {
      job.run();
    });
  }

  /**
   * Initialize Scheduled Job from Job data
   *
   * @param job
   */
  private createScheduledJob(job: Job): ScheduledJob {
    const scheduledJob = new ScheduledJob();

    return scheduledJob;
  }
}

/**
 * Function wrapper to get Scheduler instance
 * Used to beautify Scheduler calls
 */
export default function scheduler(): Scheduler {
  return Scheduler.getInstance();
}
