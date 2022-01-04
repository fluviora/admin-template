interface NomeEmpresa {
    empresa: any
}

export default function NomeEmpresa(props: NomeEmpresa){
    return(
        <div className={`flex flex-col h-0 pb-10 text-xs font text-gray600`}>
        {props.empresa}
        </div>
    )
}