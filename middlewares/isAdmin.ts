import isLogin from "./isLogin"

const isAdmin = async () => {

    try {
        const user = await isLogin();
        if (!user) return false;
        if (user.role !== 'ADMIN') return false
        return user
    } catch (error) {
        console.log(error);
        return false
    }

}

export default isAdmin