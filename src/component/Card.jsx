export function Card({sign,period,onClick}){
    return  <div className="sign sign--contains cursor-pointer hover:bg-(--blue) transition-all duration-500 ease-in-out md:py-[5%] lg:py-[8%]" onClick={onClick}>
                <h3>{sign}</h3>
                <p>({period})</p>
            </div>
}