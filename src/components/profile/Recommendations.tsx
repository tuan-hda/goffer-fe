import NewRecommendation from './NewRecommendation';
import Recommendation from './Recommendation';
import { Fragment } from 'react/jsx-runtime';
import { QueryObserverResult, RefetchOptions } from '@tanstack/react-query';
import { List } from '@/types/list.type';
import { Recommendation as RecommendationType } from '@/types/recommendation.type';

type Props = {
    recommendations?: any[];
    userId?: string;
    showNewRecommendation?: boolean;
    refetch: (options?: RefetchOptions | undefined) => Promise<QueryObserverResult<List<RecommendationType>, Error>>;
};

const Recommendations = ({ refetch, recommendations, userId, showNewRecommendation }: Props) => {
    return (
        <div>
            {!userId && recommendations?.length === 0 && (
                <p className="mb-4">You don't have any recommendations yet.</p>
            )}
            {showNewRecommendation && userId && <NewRecommendation userId={userId} />}
            <div className="mt-12 space-y-10">
                {recommendations?.map((recommendation, index) => (
                    <Fragment key={index}>
                        <Recommendation refetch={refetch} key={index} info={recommendation} />
                        {index < recommendations?.length - 1 && <div className="border-t"></div>}
                    </Fragment>
                ))}
            </div>
        </div>
    );
};

export default Recommendations;
