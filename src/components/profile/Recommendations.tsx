import { recommendations } from '@/data/mock/recommendations';
import NewRecommendation from './NewRecommendation';
import Recommendation from './Recommendation';
import { Fragment } from 'react/jsx-runtime';

type Props = {
    recommendations?: any[];
    userId?: string;
    showNewRecommendation?: boolean;
};

const Recommendations = ({ recommendations, userId, showNewRecommendation }: Props) => {
    return (
        <div>
            {!userId && recommendations?.length === 0 && (
                <p className="mb-4">
                    This tab will not be shown on public since you don't have any recommendation yet.
                </p>
            )}
            {showNewRecommendation && userId && <NewRecommendation userId={userId} />}
            <div className="mt-12 space-y-10">
                {recommendations?.map((recommendation, index) => (
                    <Fragment key={index}>
                        <Recommendation key={index} info={recommendation} />
                        {index < recommendations?.length - 1 && <div className="border-t"></div>}
                    </Fragment>
                ))}
            </div>
        </div>
    );
};

export default Recommendations;
