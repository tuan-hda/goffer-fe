import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const CustomFeedback = () => {
    return (
        <div className="text-sm">
            <h1 className="text-3xl">Custom Feedback</h1>
            <p className="mt-2 text-text/70">
                Applicants have option to submit a feedback for the hiring process experience.{' '}
            </p>
            <div className="mt-4 space-y-6">
                <Card className="bg-white/50 shadow-none">
                    <CardContent className="mt-4">
                        <p>Are you satisfied with the overall interview experience?</p>
                        <div className="mt-4 grid grid-cols-5 gap-3">
                            <Button variant="outline" className="text-lg">
                                😡
                            </Button>
                            <Button variant="outline" className="text-lg">
                                😔
                            </Button>
                            <Button variant="outline" className="text-lg">
                                😐
                            </Button>
                            <Button variant="outline" className="text-lg">
                                😊
                            </Button>
                            <Button variant="outline" className="text-lg">
                                🥰
                            </Button>
                        </div>
                    </CardContent>
                </Card>
                <Card className="bg-white/50 shadow-none">
                    <CardContent className="mt-4">
                        <p>Would recommend the company to other job seekers?</p>
                        <div className="mt-4 grid grid-cols-5 gap-3">
                            <Button variant="outline">1</Button>
                            <Button variant="outline">2</Button>
                            <Button variant="outline">3</Button>
                            <Button variant="outline">4</Button>
                            <Button variant="outline">5</Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default CustomFeedback;
