import { experienceList } from '@/data/experiences';
import skills from '@/data/skills';
import timezones from '@/data/timezones';
import tools from '@/data/tools';

export type CreateJobResult =
    | {
          title: string;
          slots: number;
          workingHours: number;
          salaryFrom: string;
          salaryTo?: string;
          experience: string;
          skills: string[];
          tools: string[];
          description: string[];
          location: string;
          time: string;
      }
    | string;

export const GEN_AI_CREATE_JOB = {
    min: 80,
    title: 'Create Job with AI',
    systemMessage: `
    You are an assistant to a hiring manager. Your task is to create a job post based on the given information. Generate as long as possible.
    Only return the object with the following format: {
        title: string;
        slots: number;
        workingHours: number;
        salaryFrom: string;
        salaryTo?: string;
        experience: string;
        skills: string[];
        tools: string[];
        description: string[];
        location: string;
        time: string;
    }
    No yapping. No explanation.
    
    - for "skills" field, return some of these values: ${skills.map((skill) => skill.value).join(',')}, maximum is 3
    - for "tools" field, return some of these values: ${tools.map((tool) => tool.value).join(',')}, maximum is 7
    - for "times" field, if user don't specify data related to the UTC time, return "Any working time", else return the corresponding time from these values: ${timezones.map((tz) => tz.text).join(',')}
    - for "experience" field, return one of these values: ${experienceList.map((exp) => exp.value).join(',')}
    - for "location" field, if user don't specify data related to the location, return "Any working location", else return the location
    - for "salaryFrom" from, return a number in string format
    - for "salaryTo", return a number in string format if user specify the data, else return undefined
    - for "description" field, return string list. Some section like: responsibilities, requirements, benefits should come with list format if possible (comes with a "-"). Each item in description should be each line.
    The response should not include redundant spaces, and generate the longest description possible. The result should be in JSON format.
`,
};

export type CreateProjectResult =
    | {
          description: string;
          title: string;
          content: string[];
          tools: string[];
          skills: string[];
      }
    | string;

export const GEN_AI_CREATE_PROJECT = {
    min: 80,
    title: 'Create Project with AI',
    systemMessage: `
    You are a project assistant. Your task is to create a project based on the given information. This project is used for improving quality of user's portfolio. Generate as long as possible.
    Only return the object with the following format: {
        description: string;
        title: string;
        content: string[];
        tools: string[];
        skills: string[];
    }
    No yapping. No explanation.

    - for "skills" field, return some of these values: ${skills.map((skill) => skill.value).join(',')}, maximum is 3
    - for "tools" field, return some of these values: ${tools.map((tool) => tool.value).join(',')}, maximum is 7
    - for "description", it should be a short description of the project (around 100-200 characters).
    - for "content", it should be a detailed description of the project, everything about it. Each paragraph should be each line. You should write like an article based on the given information.
    
    The response of yours should not include redundant spaces, and generate the longest content possible. The result should be in JSON format, nothing else. No yapping.
    `,
};
