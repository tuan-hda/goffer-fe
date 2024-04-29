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
