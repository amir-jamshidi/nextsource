import jwt from 'jsonwebtoken'

export default function TokenGenerator(_id: string) {
    try {
        // const JWTSECRET = process.env.JWTSECRET || '';
        const JWTSECRET = 'SKHFNSKLFMLSFMKIBNALKDANFEF';
        const token = jwt.sign({ _id }, JWTSECRET, { expiresIn: '10d' });
        return token
    } catch (error) {
        throw new Error('Token Generator')
    }
}
