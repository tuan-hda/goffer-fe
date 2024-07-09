import moment from 'moment';

export function formatUTCDate(time: string) {
    const now = moment();
    const createdAtMoment = moment(time);
    const diffDays = now.diff(createdAtMoment, 'days');

    return createdAtMoment.fromNow();
    // if (diffDays < 30) {
    //     return createdAtMoment.fromNow(); // "xxx days ago"
    // } else if (createdAtMoment.year() === now.year()) {
    //     return createdAtMoment.format('DD-MM'); // "dd-mm"
    // } else {
    //     return createdAtMoment.format('DD-MM-YYYY'); // "dd-mm-yyyy"
    // }
}

export function remainTime(endingAt?: string) {
    if (!endingAt) {
        return 0;
    }
    const now = moment();
    const endTime = moment(endingAt);

    if (endTime <= now) {
        return 0;
    }

    // Calculate the duration between now and the ending time
    const duration = moment.duration(endTime.diff(now));
    // Format the duration as hh:mm:ss
    return duration.asMilliseconds();
}

export const formatMinSec = (secs: number) => {
    const minutes = Math.floor(secs / 60);
    const seconds = secs % 60;
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
};
