import { Assessment, AssessmentUpdate, NewAssessment, AssessmentRequest } from '@/types/assessment.type';
import { baseAxios } from './base';
import { ListQueryOptions } from '@/types/common.type';
import { List } from '@/types/list.type';
import { Question } from '@/types/question.type';

const mapDataToRequestAssessment = ({ questions, ...assessment }: NewAssessment | Partial<Assessment>) => {
    const innerAssessment: AssessmentRequest = {
        questions: [],
        org: typeof assessment.org === 'string' ? assessment.org : assessment.org?.id,
        title: assessment.title,
        description: assessment.description,
        duration: assessment.duration,
        order: assessment.order || -1,
        status: assessment.status,
        type: assessment.type,
    };
    innerAssessment.questions = Array.from(questions?.values() || []).map((q) => q.id);
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

export const updateAssessmentService = async (assessment: Partial<Assessment>) => {
    const innerAssessment = mapDataToRequestAssessment(assessment);
    return (await baseAxios.patch(`/assessments/${assessment.id}`, innerAssessment)).data;
};

export const updateAssessmentWithIdService = async (id: string, data: Partial<Assessment>) => {
    return (await baseAxios.patch(`/assessments/${id}`, data)).data;
};

export const deleteAssessmentService = async (id: string) => {
    return (await baseAxios.delete(`/assessments/${id}`)).data;
};

export const getPublicAssessmentService = async (id: string) => {
    const result = (await baseAxios.get<Assessment>(`/assessments/public/${id}`)).data;
    result.questions = new Map((result.questions as unknown as Question[]).map((q) => [q.id, q]));
    return result;
};
