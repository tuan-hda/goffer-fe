import { User } from './user.type';
import { Assessment } from './assessment.type';
import { Answer } from './answer.type';

export type TakeAssessmentStatus = 'pending' | 'closed';

export type TakeAssessment = {
    id: string;
    user: User;
    assessment: Assessment;
    answers: Answer[];
    status: TakeAssessmentStatus;
    endingAt?: string; // ISO date string
    createdAt: string; // ISO date string
    updatedAt: string; // ISO date string
};

export type NewTakeAssessment = Omit<TakeAssessment, 'id' | 'createdAt' | 'updatedAt'>;

export type EditTakeAssessment = Partial<NewTakeAssessment>;
