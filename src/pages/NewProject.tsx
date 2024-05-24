import NewResourceLayout from '@/layouts/NewResourceLayout';
import { useState } from 'react';

const NewProject = () => {
    const [loading, setLoading] = useState(false);
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {};

    return <NewResourceLayout handleSubmit={handleSubmit} loading={loading}></NewResourceLayout>;
};

export default NewProject;
