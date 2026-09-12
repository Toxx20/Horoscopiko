import { useEffect, useState } from "react"

export function Header (){
    const [dateState,setDateState]=useState( new Date())

    useEffect(()=>{
        const t= setInterval(()=>setDateState(new Date()),1000)
        return ()=>clearInterval(t)
    },[dateState])

    return <header className="flex flex-col gap-[5%] items-center pt-[5%]">
                <h2 className="text-(--white) orbitron-bold ">{`${dateState.getDate()}-${dateState.getMonth()}-${dateState.getFullYear()}`} </h2>
                <h1 className="text-(--white) orbitron-bold ">{`${dateState.getHours()}:${dateState.getMinutes()}`} </h1>
            </header>
}