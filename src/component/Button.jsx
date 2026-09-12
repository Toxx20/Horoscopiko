export function Button ({ onClick,children}){
     return <button className="bg-(--blue)" onClick={onClick}>
                {children}
            </button>
}