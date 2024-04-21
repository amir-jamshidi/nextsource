import * as Yup from 'yup'

export const LoginSchema = Yup.object({
    phone: Yup.string().required().max(11).min(11)
})

export const VerifyFormSchema = Yup.object({
    code: Yup.string().required().max(5).min(5),
})