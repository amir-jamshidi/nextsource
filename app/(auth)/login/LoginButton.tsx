'use client'

import { LoginUser, VerifyCodeUser } from "@/actions/user.action"

const LoginButton = () => {
    const verify = async () => {
        const res = await VerifyCodeUser('09195854705', 19976)
        console.log(res);
    }
    return (
        <>
            <button onClick={() => LoginUser('09195854705')} className="bg-primary">LoginButton</button>
            <button onClick={() => verify()} className="bg-primary">Verify</button>
        </>
    )
}

export default LoginButton