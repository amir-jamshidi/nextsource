import jwt from 'jsonwebtoken'

export default function TokenGenerator(phone: string) {
    try {
        const JWTSECRET = process.env.JWTSECRET || '';
        const token = jwt.sign({ phone }, JWTSECRET, { expiresIn: '10d' });
        return token
    } catch (error) {
        console.log(error);
    }
}