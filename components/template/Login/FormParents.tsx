'use client'

import LoginForm from "@/components/forms/LoginForm";
import VerifyForm from "@/components/forms/VerifyForm";
import { useState } from "react"

const FormParents = () => {
    const [isShowVerify, setIsShowVerify] = useState(false);
    const [phone, setPhone] = useState('')
    const handleChangeState = (phone: string) => {
        setIsShowVerify(true);
        setPhone(phone);
    }

    return (

        <>
            {!isShowVerify ? <LoginForm handleChangeState={handleChangeState} /> : <VerifyForm phone={phone} />}
        </>
    )
}

export default FormParents