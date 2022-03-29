# Scheduler

Manager for scheduled jobs. It stores jobs in the database
and restarts them on app reloading.

## What is a job

> Job is an action which runs according to its schedule.

Job should have a `type` from [JobType](/app/types/entities/job.ts) enum.

Also, each `type` should have a defined `resolver` in a [JobResolversMap](/app/backend/src/application/scheduler/resolvers.ts) — method
should be fired for processing this job.

Job may have a `payload` object which will be passed as a param to `resolver`.

And of course Job should have a `schedule` in a [cron format](https://github.com/node-cron/node-cron#cron-syntax) string.

## Job Types

You may check for existing types and add a new one by updating these places:

- [JobType](/app/types/entities/job.ts) — enum of the defined types,
- [JobResolversMap](/app/backend/src/application/scheduler/resolvers.ts) — map of types and their resolvers

You need to name and add a new type to enum first.

Then you can update map by adding a new pair of `type` and `resolver`.

That's it. Now you can use this new type in the code.

## Usage

On the start scheduler gets all saved jobs from database and schedule them via [node-cron](https://github.com/node-cron/node-cron#cron-syntax) module.

Import module in the root of your app and call the `start()` method.

```typescript
import scheduler from 'application/scheduler';

scheduler().start();
```

You have not to create any instances of the Scheduler.
It already exports wrapper method to call getting singleton instance.

### Add a job

You can ask Scheduler to add a new job by passing a few params.
It should register a new job and save it to database.

```typescript
// type from JobType
const type = JobType.REPORT_PROJECT_LABEL;

// for example run every minute
const schedule = '0 */1 * * * *';

// payload may be empty object
const payload = {
  projectId: '12345678',
}

// Registering a new job and getting it's id
const jobId = await scheduler().addJob(type, schedule, payload);
```

Then you need to save this `jobId` somewhere to be able to remove or reschedule this job later.

### Remove a job

To stop and remove the job you need to call `removeJob()` method with a job's id.

```typescript
await scheduler().removeJob(jobId);
```

### Reschedule a job

If you want to just update the job's schedule use `rescheduleJob()` method.

You have to pass job's id and a new schedule string params.

```typescript
await scheduler().rescheduleJob(jobId, newSchedule);
```
