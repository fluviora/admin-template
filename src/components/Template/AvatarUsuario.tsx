import useAuth from "../../data/hook/useAuth"
import Link from "next/link"

export default function AvatarUsuario() {
    const {usuario} = useAuth()
        return (
        <Link href="/perfil">
            <img 
                src={usuario?.imagemUrl ?? "/avatar200px.svg"} 
                alt="Avatar do Usuário"
                className="h-8 w-8 rounded-full cursor-pointer"
                
            />
        </Link>
        
    )
}


