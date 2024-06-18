import { Assessment, NewAssessment, NewAssessmentRequest } from '@/types/assessment.type';
import { baseAxios } from './base';
import { ListQueryOptions } from '@/types/common.type';
import { List } from '@/types/list.type';
import { Question } from '@/types/question.type';

const mapDataToRequestAssessment = ({ questions, ...assessment }: NewAssessment | Assessment) => {
    const innerAssessment: NewAssessmentRequest = { ...assessment, questions: [] };
    innerAssessment.questions = Array.from(questions.values()).map((q) => q.id);
    return innerAssessment;
};

export const createAssessmentService = async (assessment: NewAssessment, mapData = true) => {
    const innerAssessment = mapData ? mapDataToRequestAssessment(assessment) : assessment;
    return (await baseAxios.post('/assessments', innerAssessment)).data;
};

export const listAssessmentsService = async (
    query?: Partial<Record<keyof (Assessment & ListQueryOptions), string>>,
) => {
    return (await baseAxios.get<List<Assessment>>('/assessments', { params: query })).data;
};

export const getAssessmentService = async (id: string) => {
    const result = (await baseAxios.get<Assessment>(`/assessments/${id}`)).data;
    result.questions = new Map((result.questions as unknown as Question[]).map((q) => [q.id, q]));
    return result;
};

export const updateAssessmentService = async ({ deleted, createdAt, updatedAt, id, ...assessment }: Assessment) => {
    const innerAssessment = mapDataToRequestAssessment(assessment);
    return (await baseAxios.patch(`/assessments/${id}`, innerAssessment)).data;
};

export const updateAssessmentWithIdService = async (id: string, data: Partial<Assessment>) => {
    return (await baseAxios.patch(`/assessments/${id}`, data)).data;
};

export const deleteAssessmentService = async (id: string) => {
    return (await baseAxios.delete(`/assessments/${id}`)).data;
};
