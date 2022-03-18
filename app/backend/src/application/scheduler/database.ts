import JobSchema from 'database/models/job';
import Job, { JobId, JobPayload, JobSchedule, JobType } from 'types/entities/job';

/**
 * Create a new Job
 *
 * @param type — Job's type
 * @param payload — Job resolver's payload
 * @param schedule — Job's schedule
 */
export async function createJob(type: JobType, schedule: JobSchedule, payload: JobPayload): Promise<Job> {
  const data = {
    type,
    schedule,
    payload,
  };

  return await JobSchema.create(data);
}

/**
 * Get all jobs
 */
export async function getJobs(): Promise<Job[]> {
  return await JobSchema.find().exec();
}

/**
 * Update Job Schedule
 *
 * @param _id — job's id
 * @param newSchedule — new cron-like schedule
 */
export async function updateJobSchedule(_id: JobId, newSchedule: JobSchedule): Promise<void> {
  const query = {
    _id,
  };
  const data = {
    schedule: newSchedule,
  };

  await JobSchema.findOneAndUpdate(query, data).exec();
}

/**
 * Remove Job
 *
 * @param _id — job's id
 */
export async function removeJobById(_id: JobId): Promise<void> {
  const filter ={
    _id,
  };

  await JobSchema.findOneAndRemove(filter).exec();
}
