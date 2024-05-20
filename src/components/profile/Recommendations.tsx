import NewRecommendation from './NewRecommendation';
import Recommendation from './Recommendation';

const Recommendations = () => {
    return (
        <div>
            <p className="mb-4">This tab will not be shown on public since you don't have any recommendation yet.</p>
            <NewRecommendation />
            <div className="mt-12 space-y-10">
                <Recommendation />
                <div className="border-t" />
                <Recommendation />
            </div>
        </div>
    );
};

export default Recommendations;
