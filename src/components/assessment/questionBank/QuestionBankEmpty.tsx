import React from 'react';

type QuestionBankEmptyProps = {
    children?: React.ReactNode;
    isEmpty?: boolean;
};

const QuestionBankEmpty = ({ children, isEmpty }: QuestionBankEmptyProps) => {
    if (isEmpty) {
        return 'No questions here.';
    }
    return children;
};

export default QuestionBankEmpty;
