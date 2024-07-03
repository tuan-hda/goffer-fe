import { User } from '@/types/user.type';
import { baseAxios } from './base';
import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';

export const addViewService = async (user: User | undefined, ref: string) => {
    const identifier = getIdentifier(user, ref);
    if (isViewCoolDown(identifier, ref)) return;
    updateViewCoolDown(identifier, ref);
    return baseAxios.post('/logs', {
        type: 'view',
        identifier,
        ref,
        user: user ? user.id : null,
        pathname: window.location.pathname,
        url: window.location.href,
    });
};

export const queryLogsService = async (params: any) => {
    return (await baseAxios.get('/logs', { params })).data;
};

const getIdentifier = (user?: User, ref?: string) => {
    if (user) return user.id;
    const guestId = localStorage.getItem('guestId');
    if (!guestId) {
        const newGuestId = uuidv4();
        localStorage.setItem('guestId', newGuestId);
        return newGuestId;
    }
    return guestId;
};

const isViewCoolDown = (identifier: string, ref: string) => {
    const viewMetrics = JSON.parse(localStorage.getItem('viewMetrics') || '{}');
    const view = viewMetrics[identifier];
    if (!view) return false;
    const last = view[ref];
    if (!last) return false;
    const lastTime = moment(last.time);
    if (moment().diff(lastTime, 'minutes') < 1) return true;
    return false;
};

const updateViewCoolDown = (identifier: string, ref: string) => {
    const viewMetrics = JSON.parse(localStorage.getItem('viewMetrics') || '{}');
    viewMetrics[identifier] = {
        ...viewMetrics[identifier],
        [ref]: {
            time: moment().toISOString(),
        },
    };
    localStorage.setItem('viewMetrics', JSON.stringify(viewMetrics));
};
