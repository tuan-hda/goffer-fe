import React from 'react';
import { Filter, Footer, Header, PersonCard } from '../components/applicant';

const ApplicantLayout = () => {
    return (
        <div className="flex flex-col flex-1">
            <Header />
            <div className="flex flex-row justify-between">
                <PersonCard />
                <PersonCard />
                <PersonCard />
            </div>
            <Filter />
            <Footer />
            <Footer />
            <Footer />
            <Footer />
            <Footer />
            <Footer />
        </div>
    );
};

export default ApplicantLayout;
