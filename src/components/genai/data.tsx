import { experienceList } from '@/data/experiences';
import skills from '@/data/skills';
import timezones from '@/data/timezones';
import tools from '@/data/tools';
import moment from 'moment';
import { CSSProperties, FC, useEffect, useState } from 'react';

export type GenAIProviderProps = {
    children?: React.ReactNode;
    title: string;
    systemMessage: string;
    onResponse: (result: any) => void;
    maxTokens?: number;
    min?: number;
    suggestions: string[];
    resultDisplayComponent?: FC<{ data: any }>;
    name: string;
};

export type CreateJobResult = {
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
} | null;

export const GEN_AI_CREATE_JOB: Omit<GenAIProviderProps, 'onResponse'> = {
    name: 'create_job',
    suggestions: [
        'Create Lead AI Engineer job. Must have strong foundation about math and machine learning.',
        'Generate Microchips Designer for fresher level. Priority for students who have experience in VLSI.',
        'Video Editor job for part-time. Must have experience in Adobe Premiere, After Effect.',
    ],
    min: 20,
    title: 'Setup your job with AI',
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
    
    - for "skills" field, return some of these values: ${skills.map((skill) => skill.value).join(',')}, maximum is 3. Do not return values that are not from the list.
    - for "tools" field, return some of these values: ${tools.map((tool) => tool.value).join(',')}, maximum is 7. Do not return values that are not from the list.
    - for "times" field, if user don't specify data related to the UTC time, return "Any working time", else return the corresponding time from these values: ${timezones.map((tz) => tz.text).join(',')}
    - for "experience" field, return one of these values: ${experienceList.map((exp) => exp.value).join(',')}
    - for "location" field, if user don't specify data related to the location, return "Any working location", else return the location
    - for "salaryFrom" from, return a number in string format
    - for "salaryTo", return a number in string format if user specify the data, else return undefined
    - for "description" field, return string list. Some section like: responsibilities, requirements, benefits should come with list format if possible (comes with a "-"). Each item in description should be each line.
    The response should not include redundant spaces, and generate the longest description possible. The result should be in JSON format.
`,
    resultDisplayComponent({ data }: { data: CreateJobResult | null }) {
        const [content, setContent] = useState<string>('');

        useEffect(() => {
            try {
                if (!data) return;
                setContent(data.description.join(' '));
            } catch (error) {
                setContent('');
                console.error(error);
            }
        }, [data]);

        if (!data) return <div>Error generating profile. Please try again.</div>;

        return (
            <>
                {data && typeof data !== 'string' && (
                    <div>
                        <p>
                            <strong>Title:</strong> {data.title}
                        </p>
                        <p
                            className="lines-ellipsis"
                            style={
                                {
                                    '--lines': 4,
                                } as CSSProperties
                            }
                        >
                            <strong>Description:</strong> {content}
                        </p>
                        <p>
                            <strong>Skills:</strong> {data.skills.join(', ')}
                        </p>
                        <p>
                            <strong>Tools:</strong> {data.tools.join(', ')}
                        </p>
                        <p>
                            <strong>Experience:</strong> {data.experience}
                        </p>
                        <p>
                            <strong>Location:</strong> {data.location}
                        </p>
                        <p>
                            <strong>Salary from:</strong> {data.salaryFrom}
                        </p>
                        <p>
                            <strong>Salary to:</strong> {data.salaryTo}
                        </p>
                        <p>
                            <strong>Slots:</strong> {data.slots}
                        </p>
                        <p>
                            <strong>Working hours:</strong> {data.workingHours}
                        </p>
                        <p>
                            <strong>Time:</strong> {data.time}
                        </p>
                    </div>
                )}
            </>
        );
    },
};
/* Generate Senior Software Engineer. Should have at least 4 yoe. Focus in Web development with tech stacks: NextJS, Java Spring Boot. Each should have at least 3 years of experience using.
 */

export type CreateProjectResult = {
    description: string;
    title: string;
    content: string[];
    tools: string[];
    skills: string[];
} | null;

export const GEN_AI_CREATE_PROJECT: Omit<GenAIProviderProps, 'onResponse'> = {
    name: 'create_project',
    min: 20,
    suggestions: [
        'Project about hiring website (ATS). Using AI for resume screening. Technology: REST, AWS, LLM, RAG, DevOps.',
        'Project about data analysis for e-commerce. Using Python, Pandas, Numpy, Scikit-learn, Matplotlib.',
        'Campaign project for marketing. Using Google Analytics, SEO, SEM, Social Media.',
    ],
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

    - for "skills" field, return some of these values: ${skills.map((skill) => skill.value).join(',')}, maximum is 5. Do not return values that are not from the list.
    - for "tools" field, return some of these values: ${tools.map((tool) => tool.value).join(',')}, maximum is 10. Do not return values that are not from the list.
    - for "description", it should be a short description of the project (around 100-200 characters).
    - for "content", it should be a detailed description of the project, everything about it. Each paragraph should be each line. You should write like an article based on the given information.
    
    The response of yours should not include redundant spaces, and generate the longest content possible. The result should be in JSON format, nothing else. No yapping.
    `,
    resultDisplayComponent({ data }: { data: CreateProjectResult | null }) {
        const [content, setContent] = useState<string>('');

        useEffect(() => {
            try {
                if (!data) return;
                setContent(data.content.join(' '));
            } catch (error) {
                setContent('');
                console.error(error);
            }
        }, [data]);

        if (!data) return <div>Error generating profile. Please try again.</div>;

        return (
            <>
                {data && typeof data !== 'string' && (
                    <div>
                        <p>
                            <strong>Title:</strong> {data.title}
                        </p>
                        <p
                            className="lines-ellipsis"
                            style={
                                {
                                    '--lines': 4,
                                } as CSSProperties
                            }
                        >
                            <strong>Content:</strong> {content}
                        </p>
                        <p>
                            <strong>Skills:</strong> {data.skills.join(', ')}
                        </p>
                        <p>
                            <strong>Tools:</strong> {data.tools.join(', ')}
                        </p>
                        <p>
                            <strong>Description:</strong> {data.description}
                        </p>
                    </div>
                )}
            </>
        );
    },
};

export type GenerateProfileResult =
    | {
          oneLiner: string;
          bio: string;
          skills: string[];
          tools: string[];
          education: {
              school: string;
              degree?: string;
              startDate?: Date;
              endDate?: Date;
              major?: string;
              description?: string;
          }[];
          experiences: {
              title: string;
              company: string;
              startDate: Date;
              endDate?: Date;
              description?: string;
              logo?: string;
          }[];
          location: string;
          links: { label: string; url: string }[];
      }
    | string;
/* Generate MERN project. I'm doing with my team (has four members and I was the leader) in UIT. The project is about Hiring web platform.
 */

export const GEN_AI_GENERATE_PROFILE: Omit<GenAIProviderProps, 'onResponse'> = {
    name: 'generate_profile',
    min: 20,
    suggestions: [
        'Generate profile of Software Engineer with REST, AWS, DevOps',
        'Generate profile of UI/UX Designer with Figma, Adobe XD',
        'Generate profile of Marketing Specialist with SEO, Google Analytics',
    ],
    title: 'Generate profile with AI',
    systemMessage: `
    You are an AI assistant. Your task is to generate a profile based on the given information.
    Only return the object with the following format: 
    {
        oneLiner: string;
        bio: string;
        skills: string[];
        tools: string[];
        education: {
            school: string;
            degree?: string;
            startDate?: Date;
            endDate?: Date;
            major?: string;
            description?: string;
        }[];
        experiences: {
            title: string;
            company: string;
            startDate: Date;
            endDate?: Date;
            description?: string;
            logo?: string;
        }[];
        links: { label: string; url: string }[];
        location: string;
    }
    
    - for "oneLiner" field, return a short title for user (should be a role with some fancy words) based on the given information
    - for "bio" field, return a short description of user (around 100-200 characters) based on the given information
    - for "skills" field, return some of these values: ${skills.map((skill) => skill.value).join(',')}. Do not return values that are not from the list.
    - for "tools" field, return some of these values: ${tools.map((tool) => tool.value).join(',')}. Do not return values that are not from the list.
    - for "education" field, take input from the user and return the data in the format of the object above. If user don't specify the data, return an empty array.
    - for "experiences" field, take input from the user and return the data in the format of the object above. If user don't specify the data, return an empty array.
    - for "location" field,data explanation, no yapping.
    `,
    resultDisplayComponent({ data }: { data: GenerateProfileResult | null }) {
        if (!data) return <div>Error generating profile. Please try again.</div>;

        return (
            <>
                {data && typeof data !== 'string' && (
                    <div>
                        <p>
                            <strong>One-liner:</strong> {data.oneLiner}
                        </p>
                        <p>
                            <strong>Bio:</strong> {data.bio}
                        </p>
                        <p>
                            <strong>Skills:</strong> {data.skills.join(', ')}
                        </p>
                        <p>
                            <strong>Tools:</strong> {data.tools.join(', ')}
                        </p>
                        <div>
                            <strong>Education:</strong>
                            {data.education.map((edu, index) => (
                                <div key={index}>
                                    <p>
                                        {edu.school}, {edu.degree} ({moment(edu.startDate)?.format('MM/YY')} -{' '}
                                        {moment(edu.endDate)?.format('MM/YY')})
                                    </p>
                                    {edu.major && <p>Major: {edu.major}</p>}
                                    {edu.description && <p>Description: {edu.description}</p>}
                                </div>
                            ))}
                        </div>
                        <div>
                            <strong>Experiences:</strong>
                            {data.experiences.map((exp, index) => (
                                <div key={index}>
                                    <p>
                                        {exp.title} at {exp.company} ({moment(exp.startDate).format('MM/YY')} -{' '}
                                        {moment(exp.endDate)?.format('MM/YY')})
                                    </p>
                                    {exp.description && <p>Description: {exp.description}</p>}
                                </div>
                            ))}
                        </div>
                        <p>
                            <strong>Location:</strong> {data.location}
                        </p>
                        <div>
                            <strong>Links:</strong>
                            {data.links.map((link, index) => (
                                <p key={index}>
                                    <a href={link.url}>
                                        {link.label} ({link.url})
                                    </a>
                                </p>
                            ))}
                        </div>
                    </div>
                )}
            </>
        );
    },
};

/* Example prompt: Im a final student at University of Information Technology - Vietnam National University. My major is in Software Engineering, focus in web development: ReactJS, NodeJS, MongoDB, ExpressJS. Also have knowledge in Cloud: AWS, and a lil bit about DevOps. I have good understanding in Algorithm and Development concept like OOP, SOLID and Design Pattern. Im currently working in Bosch from the start of this year 2024. Im in Ho Chi Minh City right now. Here's my github: https://github.com/tuan-hda */
