import moment from 'moment';
import * as Yup from 'yup';

export const newEducationSchema = Yup.object({
    school: Yup.string().required('School is required'),
    degree: Yup.string(),
    startDate: Yup.date(),
    endDate: Yup.date().test('end-date-after-start-date', 'End date must be after start date', function (value) {
        const { startDate } = this.parent;
        return !startDate || !value || moment(value).isAfter(moment(startDate));
    }),
    major: Yup.string(),
    description: Yup.string(),
});
