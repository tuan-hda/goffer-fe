import * as Yup from 'yup';

export const confirmPasswordSchema = Yup.object({
    password: Yup.string()
        .min(8, 'Password must be 8 characters at least')
        .matches(/\d/, 'Password must have at least 1 number')
        .matches(/[a-zA-Z]/, 'Password must have at least 1 alphabet')
        .required('Password is required'),
    confirmPassword: Yup.string().test('passwords-match', 'Passwords must match', function (value) {
        return this.parent.password === value;
    }),
});
