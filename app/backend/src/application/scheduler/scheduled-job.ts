import * as NodeCron from 'node-cron';
import { ScheduledTask } from 'node-cron';
import { JobResolversMap } from './resolvers';
import { JobPayload, JobResolver, JobSchedule, JobType } from 'types/entities/job';

/**
 * Class provides an ability to start and stop a job
 */
export class ScheduledJob {
  /**
   * Job type to choose the right resolver
   */
  private readonly type: JobType;

  /**
   * Job payload to be passed to resolver
   */
  private readonly payload: JobPayload;

  /**
   * Cron-like schedule string
   */
  private schedule: JobSchedule;

  /**
   * Scheduled Job class created by NodeCron library
   *
   * @private
   */
  private job?: ScheduledTask;

  /**
   * @param type — job's type
   * @param payload — job's payload
   * @param schedule — job's schedule
   */
  constructor(type: JobType, payload: JobPayload, schedule: JobSchedule) {
    this.type = type;
    this.payload = payload;
    this.schedule = schedule;
  }

  /**
   * Validate cron-schedule string
   *
   * @param schedule — cron-like settings string
   */
  public static validateSchedule(schedule: JobSchedule): boolean {
    return NodeCron.validate(schedule);
  }

  /**
   * Add the job to the schedule
   */
  public start(): void {
    const resolver = this.getResolver();
    const payload = this.payload;

    this.job = NodeCron.schedule(this.schedule, () => {
      resolver(payload);
    });
  }

  /**
   * Remove the job from the schedule
   */
  public stop(): void {
    if (this.job) {
      this.job.stop();
    }
  }

  /**
   * Restart the job with a new schedule
   *
   * @param newSchedule — new schedule for the job
   */
  public reschedule(newSchedule: JobSchedule): void {
    this.stop();

    this.schedule = newSchedule;

    this.start();
  }

  /**
   * Get the job resolver by its type
   */
  private getResolver(): JobResolver {
    const resolver = JobResolversMap.get(this.type);

    if (!resolver) {
      throw Error(`Job resolver for type ${this.type} is missing.`);
    }

    return resolver;
  }
}
