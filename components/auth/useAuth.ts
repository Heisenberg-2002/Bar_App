interface Credentials {
    username : string,
    password : string
}

interface User {
    id : number,
    username: string
}

export const useAuth = () => {
    const user = ref<User | null>(null);
    const error = ref<string | null>(null);
    const router = useRouter()

    const login = async (credentials : Credentials) => {
        try {
            const response = await fetch('http://localhost:8080/v1/users/auth', {
                method : 'POST',
                headers : {
                   'Content-Type' : 'application/json'
                },
                body : JSON.stringify(credentials)
            });
            if(!response.ok){
                throw new Error('Erreur lors de la connexion')
            }
            const {data} = await response.json();
            user.value = data.user as User;
            localStorage.setItem('token', data.token);
            router.push('/')
        }catch (err: any) {
            error.value = err.message
        }
    }
    const logout = () =>{
        user.value = null;
        router.push('/login')
    }

    return {
        user, 
        error,
        login,
        logout,
    };
};