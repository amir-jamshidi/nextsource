import * as Yup from 'yup'

export const LoginSchema = Yup.object({
    phone: Yup.string().required('َشماره همراه رو وارد کن').max(11, 'شماره همراه باید یازده رقم باشه').min(11, 'شماره همراه باید یازده رقم باشه').matches(/^09[\d]{9}$/, 'فرمت وارد شده اشتباهه')
})

export const VerifyFormSchema = Yup.object({
    code: Yup.string().required('کد تایید رو وارد کن').max(5, 'کد تایید باید پنج رقم باشه').min(5, 'کد تایید باید پنج رقم باشه').matches(/^[\d]{5}$/, 'فرمت وارد شده اشتباهه'),
})

export const TicketSchema = Yup.object({
    sectionID: Yup.string().required('وارد کردن سکشن مورد نظر اجباریه').min(5, 'وارد کردن سکشن مورد نظر اجباریه'),
    body: Yup.string().required('وارد کردن متن تیکت اجباریه').min(15, 'متن تیکت حداقل باید پانزده کاراکتر باشه'),
    orderID: Yup.string().required()
})

export const AccountSchema = Yup.object({
    cardNumber: Yup.string().required().min(16, '').max(16, ''),
    cardBank: Yup.string().required().min(3, ''),
    cardShaba: Yup.string().required().min(24, '').max(26, ''),
    cardName: Yup.string().required().min(5, '')
})