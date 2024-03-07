import React from 'react';
import { Filter, Footer, Header, PersonCard } from '../components/applicant';

const ApplicantLayout = () => {
    return (
        <div className="flex flex-col flex-1">
            <Header />
            <Filter />
            <div className="flex flex-row justify-around pb-32">
                <PersonCard />
                <PersonCard />
                <PersonCard />
            </div>
            <Footer />
        </div>
    );
};

export default ApplicantLayout;
