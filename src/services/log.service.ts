import { User } from '@/types/user.type';
import { baseAxios } from './base';
import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';

export const addViewService = async (user?: User, ref?: string) => {
    const identifier = getIdentifier(user);
    if (isViewCoolDown(identifier)) return;
    updateViewCoolDown(identifier);
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

const getIdentifier = (user?: User) => {
    if (user) return user.id;
    const guestId = localStorage.getItem('guestId');
    if (!guestId) {
        const newGuestId = uuidv4();
        localStorage.setItem('guestId', newGuestId);
        return newGuestId;
    }
    return guestId;
};

const isViewCoolDown = (identifier: string) => {
    const viewMetrics = JSON.parse(localStorage.getItem('viewMetrics') || '{}');
    const last = viewMetrics[identifier];
    if (!last) return false;
    const lastTime = moment(last.time);
    if (moment().diff(lastTime, 'hours') < 1) return true;
    return false;
};

const updateViewCoolDown = (identifier: string) => {
    const viewMetrics = JSON.parse(localStorage.getItem('viewMetrics') || '{}');
    viewMetrics[identifier] = {
        time: moment().toISOString(),
    };
    localStorage.setItem('viewMetrics', JSON.stringify(viewMetrics));
};
