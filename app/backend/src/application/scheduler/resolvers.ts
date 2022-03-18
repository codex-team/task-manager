import { JobResolver, JobType } from 'types/entities/job';

export const JobResolversMap = new Map<JobType, JobResolver>([
  [JobType.REPORT_PROJECT_LABEL, async (payload) => {
    console.log(`[REPORT_PROJECT_LABEL] called with ${JSON.stringify(payload)}`);
  }],
]);
