import jwt from 'jsonwebtoken'

export default function VerifyToken(token: string) {
    try {
        const JWTSECRET = process.env.JWTSECRET || 'SKHFNSKLFMLSFMKIBNALKDANFEF'
        const verify = jwt.verify(token, JWTSECRET) as { _id: string };
        return verify._id
    } catch (error) {
        console.log(error);
    }
}