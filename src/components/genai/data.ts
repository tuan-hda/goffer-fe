export type CreateJobResult =
    | {
          id: string;
          status: string;
          message: string;
      }
    | string;

export const GEN_AI_CREATE_JOB = {
    title: 'Create Job with AI',
    systemMessage: 'Create Job with AI',
};
