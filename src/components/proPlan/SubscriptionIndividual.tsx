import { Image } from '@nextui-org/react';
import { TbDiamond, TbLoader } from 'react-icons/tb';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '../ui/button';
import catchAsync from '@/utils/catchAsync';
import { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import config from '@/configs/config';
import { subscribeProService } from '@/services/users.service';
import useSelfProfileQuery from '@/hooks/useSelfProfileQuery';

const SubscriptionIndividual = () => {
    const [loading, setLoading] = useState(false);
    const { data: self } = useSelfProfileQuery();
    const handleSubscribe = () =>
        catchAsync(
            async () => {
                setLoading(true);
                const stripe = await loadStripe(config.STRIPE_PUBLISHABLE_KEY);
                if (!stripe) {
                    throw new Error('Failed to load stripe');
                }

                const session = await subscribeProService();

                if (session.id) {
                    await stripe!.redirectToCheckout({ sessionId: session.id });
                }
            },
            () => {
                setLoading(false);
            },
        );

    if (self?.isPro)
        return (
            <div className="relative mb-4 block w-[248px] overflow-hidden rounded-xl border bg-white p-4 text-left text-black invert">
                <div className="absolute -right-14 -top-2 z-0 invert">
                    <Image
                        src="/ice-cube.png"
                        classNames={{
                            wrapper: 'w-36 h-36',
                        }}
                    />
                </div>
                <div className="relative z-[1] flex w-[70%] items-center gap-3">
                    <div>
                        <p className="font-medium">You are PRO</p>
                        <p className="mt-1 text-xs font-light mix-blend-difference">Discover the power of Goffer Pro</p>
                    </div>
                </div>
            </div>
        );

    return (
        <Dialog>
            <DialogTrigger>
                <div className="relative mb-4 block w-[248px] overflow-hidden rounded-xl border p-4 text-left">
                    <div className="absolute -right-14 -top-2 z-0">
                        <Image
                            src="/ice-cube.png"
                            classNames={{
                                wrapper: 'w-36 h-36',
                            }}
                        />
                    </div>
                    <div className="relative z-[1] flex items-center gap-3">
                        <div>
                            <p className="font-medium">Goffer Pro</p>
                            <p className="mt-1 text-xs font-light mix-blend-difference">
                                Access to pro features and AI-powered tools
                            </p>
                        </div>
                        <div className="flex rounded-full bg-white/70 p-3 shadow-large backdrop-blur-3xl">
                            <TbDiamond className="text-2xl" />
                        </div>
                    </div>
                </div>
            </DialogTrigger>
            <DialogContent className="overflow-hidden">
                <DialogHeader>
                    <DialogTitle className="flex items-center gap-2">
                        Goffer Pro - Star <TbDiamond className="text-xl" />
                    </DialogTitle>
                    <DialogDescription>
                        Subscribe to Goffer Pro to access pro features and AI-powered tools.
                    </DialogDescription>
                </DialogHeader>

                <div className="w-full items-center gap-8 text-sm">
                    <ul className="list-disc space-y-2 pl-5">
                        <li>Advanced AI-powered tools</li>
                        <li>Unlimited access to premium content</li>
                        <li>Exclusive Portfolio templates</li>
                        <li>Customizable dashboards and analytics</li>
                        <li>Early access to new features</li>
                    </ul>
                    <div className="mt-4">
                        <Button variant="black" onClick={handleSubscribe} disabled={loading}>
                            {loading && <TbLoader className="mr-2 animate-spin text-xl" />}
                            Subscribe
                        </Button>
                    </div>
                    <div className="absolute -right-16 top-16">
                        <Image
                            src="/ice-cube.png"
                            classNames={{
                                wrapper: 'w-72 h-72',
                            }}
                        />
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default SubscriptionIndividual;
