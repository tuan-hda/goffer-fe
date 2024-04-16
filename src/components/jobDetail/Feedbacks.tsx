import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { MdEmojiFoodBeverage } from 'react-icons/md';
import { Progress } from '../ui/progress';

const Feedbacks = () => {
    const [feedbacks, setFeedbacks] = useState<any[]>([]);
    // ['😡', '😔', '😐', '😊', '🥰']
    return (
        <div className="text-sm text-text">
            {(!feedbacks || feedbacks.length === 0) && 'You have no feedback.'}
            <div className="mt-6 grid grid-cols-3 gap-6">
                <Card className="shadow-none">
                    <CardHeader className="pb-[14px]">
                        <CardTitle className="flex items-center gap-2">NPS</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-3xl">50</p>
                        <p className="my-2 text-text/70">You're doing good, based on 100% respondents</p>
                        <table className="-mx-2 border-separate border-spacing-x-2 border-spacing-y-1 text-base">
                            {[
                                <div className="flex items-center gap-2 text-sm">
                                    <div className="h-3 w-3 rounded-full bg-green-500" />
                                    <p className="text-[13px]">Promoters</p>
                                </div>,
                                <div className="flex items-center gap-2 text-sm">
                                    <div className="h-3 w-3 rounded-full bg-yellow-500" />
                                    <p className="text-[13px]">Passives</p>
                                </div>,
                                <div className="flex items-center gap-2 text-sm">
                                    <div className="h-3 w-3 rounded-full bg-red-500" />
                                    <p className="text-[13px]">Detractors</p>
                                </div>,
                            ].map((symbol, index) => (
                                <tr key={index}>
                                    <td>{symbol}</td>
                                    <td className="w-full">
                                        <Progress className="h-[6px]" value={Math.random() * 100} />
                                    </td>
                                    <td className="text-right font-mono text-sm">5</td>
                                    <td className="text-right font-mono text-sm">{Math.round(Math.random() * 100)}%</td>
                                </tr>
                            ))}
                        </table>
                    </CardContent>
                </Card>
                <Card className="shadow-none">
                    <CardHeader className="pb-[14px]">
                        <CardTitle className="flex items-center gap-2">
                            Overall sentiment <MdEmojiFoodBeverage className="text-base" />
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-3xl">
                            🥰 <span className="text-3xl"> - 4.8/5</span>
                        </p>
                        <p className="my-2 text-text/70">Based on 12 feedbacks</p>
                        <table className="-mx-2 border-separate border-spacing-x-2 border-spacing-y-1 text-base">
                            {['😡', '😔', '😐', '😊', '🥰'].reverse().map((emoji) => (
                                <tr key={emoji}>
                                    <td>{emoji}</td>
                                    <td className="w-full">
                                        <Progress className="h-[6px]" value={Math.random() * 100} />
                                    </td>
                                    <td className="text-right font-mono text-sm">5</td>
                                    <td className="text-right font-mono text-sm">{Math.round(Math.random() * 100)}%</td>
                                </tr>
                            ))}
                        </table>
                    </CardContent>
                </Card>
                <Card className="shadow-none">
                    <CardHeader className="pb-4">
                        <CardTitle className="flex items-center gap-2">Feedback rate</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-3xl">100%</p>
                        <p className="my-2 text-text/70">12 out of 12 of applied candidates</p>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default Feedbacks;
