'use client'

import { LoginUser } from "@/actions/user.action"

const LoginButton = () => {
    return (
        <button onClick={() => LoginUser('09195854705')} className="bg-primary">LoginButton</button>
    )
}

export default LoginButton