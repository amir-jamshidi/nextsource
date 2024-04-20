import jwt from 'jsonwebtoken'

export default function VerifyToken(token: string) {
    try {
        const JWTSECRET = process.env.JWTSECRET || ''
        const verify = jwt.verify(token, JWTSECRET) as { phone: string };
        return verify.phone
    } catch (error) {
        console.log(error);
    }
}