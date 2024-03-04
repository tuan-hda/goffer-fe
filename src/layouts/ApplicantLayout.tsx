import React from 'react';
import { Footer, Header } from '../components/applicant';

const ApplicantLayout = () => {
    return (
        <div className="flex flex-col flex-1">
            <Header />
            <Footer />
        </div>
    );
};

export default ApplicantLayout;
