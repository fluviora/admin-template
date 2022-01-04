import { IconeAjustes, IconeCasa, IconeSair, IconeSino } from "../icons"
import MenuItem from "./MenuItem"
import Logo from "./Logo"
import NomeEmpresa from "./NomeEmpresa"
import useAuth from "../../data/hook/useAuth"

export default function MenuLateral() {

    const { logout } = useAuth()

    return (
      <aside className={`flex flex-col
        bg-gray-200 text-gray-700 
        dark:bg-gray-900 dark:text-gray-200`}>
        <div className={`
          flex flex-col items-center justify-center text-center
          bg-gradient-to-b from-red-500  h-40 w-20
          `}> 
          <Logo/> 
          <NomeEmpresa empresa='LÍBANO SEGUROS'/> 
                                    
        </div>
        <ul className={`flex-grow`}>
          <MenuItem url="/" texto="Início" icone={IconeCasa}/>
          <MenuItem url="/ajustes" texto="Ajustes" icone={IconeAjustes}/>
          <MenuItem url="/notificacoes" texto="Novidades" icone={IconeSino}/>
        </ul> 
        <ul>
          <MenuItem 
            texto="Sair" icone={IconeSair}
            onClick={logout}
            className={`
              text-red-600
              hover:text-white hover:bg-gradient-to-t from-red-400`}
          />
            
        </ul> 
      </aside>
    )
} 

