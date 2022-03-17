import * as NodeCron from 'node-cron';
import { ScheduledTask } from 'node-cron';

/**
 *
 */
export class ScheduledJob {
  public action: () => Promise<void>;

  public schedule: string;

  public id: string;

  private job?: ScheduledTask;

  /**
   * @param action
   * @param type
   * @param schedule
   * @param id
   */
  constructor(type, schedule?: string, id?: string) {
    // this.action = action;
    // this.schedule = schedule;
    // this.id = id;
  }

  /**
   *
   */
  public run(): void {
    this.job = NodeCron.schedule(this.schedule, this.action);
  }

  /**
   *
   */
  public stop(): void {
    if (this.job) {
      this.job.stop();
    }
  }

  /**
   *
   */
  private getResolver() {

  }
}
