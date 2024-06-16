export type NewAnswer = {
    url: string;
    question: string;
    duration: number;
    apply?: string;
};

export type AnswerResponse = Omit<NewAnswer, 'apply'> & {
    id: string;
    owner: string;
};
