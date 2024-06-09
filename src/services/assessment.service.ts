import { Assessment, NewAssessment, NewAssessmentRequest } from '@/types/assessment.type';
import { baseAxios } from './base';
import { ListQueryOptions } from '@/types/common.type';
import { List } from '@/types/list.type';

export const createAssessmentService = async ({ questions, ...assessment }: NewAssessment) => {
    const innerAssessment: NewAssessmentRequest = { ...assessment, questions: [] };
    innerAssessment.questions = Array.from(questions.values()).map((q) => q.id);
    if (!innerAssessment.job) {
        delete innerAssessment.job;
    }
    return (await baseAxios.post('/assessments', innerAssessment)).data;
};

export const listAssessmentsService = async (
    query?: Partial<Record<keyof (Assessment & ListQueryOptions), string>>,
) => {
    return (await baseAxios.get<List<Assessment>>('/assessments', { params: query })).data;
};
