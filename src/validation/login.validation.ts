import { validateEmail } from '@/utils/regex';
import * as Yup from 'yup';

export const loginSchema = Yup.object({
    email: Yup.string().test('email', 'Invalid email', (value) => {
        if (value) return !!validateEmail(value);
        return false;
    }),
});
