import { Editable } from '../common';
import ExperienceForm from './ExperienceForm';

const Experiences = () => {
    return (
        <Editable
            mode="new"
            deletable
            type="custom"
            name="experience"
            placeholder="Enter your education..."
            // setValue={(value) => setProfile({ ...profile, bio: value })}
            // value={profile.bio}
            custom={<ExperienceForm />}
        ></Editable>
    );
};

export default Experiences;
