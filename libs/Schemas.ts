import * as Yup from 'yup'

export const LoginSchema = Yup.object({
    phone: Yup.string().required('َشماره همراه رو وارد کن').max(11, 'شماره همراه باید یازده رقم باشه').min(11, 'شماره همراه باید یازده رقم باشه').matches(/^09[\d]{9}$/, 'فرمت وارد شده اشتباهه')
})

export const VerifyFormSchema = Yup.object({
    code: Yup.string().required('کد تایید رو وارد کن').max(5, 'کد تایید باید پنج رقم باشه').min(5, 'کد تایید باید پنج رقم باشه').matches(/^[\d]{5}$/, 'فرمت وارد شده اشتباهه'),
})

export const TicketSchema = Yup.object({
    sectionID: Yup.string().required().min(5),
    body: Yup.string().required().min(5),
    orderID: Yup.string().required()
})