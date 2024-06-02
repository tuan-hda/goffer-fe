import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { useEffect, useState } from 'react';
import _ from 'lodash';
import { ImageEdit, Loading } from '../common';
import useCurrOrganization from '@/hooks/useCurrOrganization';
import { Organization } from '@/types/organization.type';
import { Textarea } from '../ui/textarea';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';
import { TbChevronDown, TbInfoCircle } from 'react-icons/tb';
import classNames from 'classnames';
import { useAnimation, motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { isAxiosError } from 'axios';
import { updateOrganizationService } from '@/services/organizations.service';
import useListOrganizations from '@/hooks/useListOrganizations';

const General = () => {
    const [expanded, setExpanded] = useState(false);
    const ctrls = useAnimation();

    const [loading, setLoading] = useState(false);
    const [uploading, setUploading] = useState(false);

    const { data, refetch } = useCurrOrganization();
    const { refetch: refetchList } = useListOrganizations();
    const [curr, setCurr] = useState<Organization>();

    useEffect(() => {
        setCurr(data);
    }, [data]);

    const handleChange =
        (name: keyof Organization) =>
        (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
            setCurr((prev) => ({ ...prev, [name]: e.target.value }) as Organization);
        };

    const isInvalid = _.isEqual(curr, data);

    const handleSave = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            setLoading(true);
            if (curr) {
                await updateOrganizationService(curr.id, {
                    name: curr.name,
                    domain: curr.domain,
                    email: curr.email,
                    website: curr.website,
                    description: curr.description,
                    logo: curr.logo,
                });
                if (curr?.domain !== data?.domain) {
                    window.location.pathname = `/app/organization/${curr?.domain}/settings`;
                }
                const list = [refetchList(), refetch()];
                await Promise.all(list);
            }
        } catch (error) {
            if (isAxiosError(error)) {
                return toast.error(error.response?.data.message || 'Something went wrong. Please try again later.');
            }
            toast.error('Something went wrong. Please try again later.');
            console.log('Save error:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        ctrls.start(expanded ? 'visible' : 'hidden');
    }, [ctrls, expanded]);

    return (
        <form onSubmit={handleSave} className="w-full rounded-xl p-6 text-sm shadow-medium">
            <h1 className="text-2xl">General</h1>
            <div className="group relative mt-6 w-fit">
                <ImageEdit
                    image={curr?.logo}
                    loading={uploading}
                    setLoading={setUploading}
                    setImage={(url) => setCurr((prev) => ({ ...prev, logo: url }) as Organization)}
                />
            </div>
            <div className="mt-5">
                <label htmlFor="domain" className="flex gap-1">
                    Domain
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger type="button">
                                <TbInfoCircle />
                            </TooltipTrigger>
                            <TooltipContent className="bg-pale text-black shadow-medium">
                                <p>
                                    The domain is the unique identifier for your organization. It is used to create your
                                    organization&apos;s workspace URL.
                                </p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </label>
                <Input onChange={handleChange('domain')} id="domain" value={curr?.domain} className="mt-1  bg-white" />
            </div>

            <button onClick={() => setExpanded((prev) => !prev)} className="mt-5 flex items-center gap-1">
                Expand <TbChevronDown className={classNames('text-lg transition', expanded && '-rotate-90')} />
            </button>

            <motion.div
                initial="hidden"
                className="-mx-1 overflow-hidden px-1"
                variants={{
                    hidden: {
                        height: 0,
                    },
                    visible: {
                        height: 'auto',
                    },
                }}
                animate={ctrls}
            >
                <div className="mt-5">
                    <label htmlFor="name">Name</label>
                    <Input
                        className="mt-1  bg-white"
                        onChange={handleChange('name')}
                        id="name"
                        placeholder="Your name here"
                        value={curr?.name}
                    />
                </div>
                <div className="mt-5">
                    <label htmlFor="email">Corporate email</label>
                    <Input onChange={handleChange('email')} className="mt-1  bg-white" id="email" value={curr?.email} />
                </div>
                <div className="mt-5">
                    <label htmlFor="email">Website</label>
                    <Input
                        onChange={handleChange('website')}
                        className="mt-1  bg-white"
                        id="website"
                        value={curr?.website}
                    />
                </div>
                <div className="mt-5">
                    <label htmlFor="email">Description</label>
                    <Textarea
                        onChange={handleChange('description')}
                        className="mt-1 bg-white"
                        id="description"
                        value={curr?.description}
                    />
                </div>
            </motion.div>

            <Button type="submit" disabled={loading || isInvalid} className="mt-6 w-full" variant="secondary">
                {loading && <Loading />}
                Save
            </Button>
        </form>
    );
};

export default General;
