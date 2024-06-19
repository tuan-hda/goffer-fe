import { TakeAssessment } from '@/types/takingAssessment.type';
import { baseAxios } from './base';

export const createTakeAssessmentSessionService = async (assessmentId: string) => {
    return (
        await baseAxios.post('/assessments/starting', {
            assessment: assessmentId,
        })
    ).data;
};

export const getTakingAssessmentByAssessmentId = async (assessmentId: string) => {
    return (
        await baseAxios.get<TakeAssessment>(`/assessments/taking/current`, {
            params: {
                assessment: assessmentId,
            },
        })
    ).data;
};
