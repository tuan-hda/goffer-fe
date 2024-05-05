import moment from 'moment';
import * as Yup from 'yup';

export const newExperienceSchema = Yup.object({
    title: Yup.string().required('Title is required'),
    company: Yup.string().required('Company is required'),
    startDate: Yup.date().required('Start date is required'),
    endDate: Yup.date().test('end-date-after-start-date', 'End date must be after start date', function (value) {
        const { startDate } = this.parent;
        return !startDate || !value || moment(value).isAfter(moment(startDate));
    }),
    description: Yup.string(),
});
