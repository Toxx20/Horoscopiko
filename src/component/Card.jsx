export function Card({sign,period,onClick}){
    return  <div className="sign sign--contains cursor-pointer hover:bg-(--blue) transition-all duration-500 ease-in-out" onClick={onClick}>
                <h3>{sign}</h3>
                <p>({period})</p>
            </div>
}