import isLogin from "./isLogin"

const isSeller = async () => {
    try {
        const user = await isLogin();
        if (!user) return false
        if (user.role !== 'SELLER') return false;
        return user
    } catch (error) {
        console.log(error);
        return false;
    }
}

export default isSeller