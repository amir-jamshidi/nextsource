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
    cardNumber: Yup.string().required('لطفا شماره کارت را وارد کنید').min(16, 'شماره کارت باید شانزده رقم باشه').max(16, 'شماره کارت باید شانزده رقم باشه'),
    cardBank: Yup.string().required('لطفا نام بانک را وارد کنید').min(3, 'نام بانک حداقل باید سه کاراکتر باشه'),
    cardShaba: Yup.string().required('لطفا شماره شبا را وارد کنید').min(24, 'شماره شبا باید 26 رقم باشه').max(26, 'شماره شبا باید 26 رقم باشه'),
    cardName: Yup.string().required('لطفا نام خود را وارد کنید').min(5, 'نام کامل شما باید حداقل باید پنج کاراکتر باشه')
})