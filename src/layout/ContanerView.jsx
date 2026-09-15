import { useLocation, useNavigate, useParams } from "react-router-dom"
import { Button } from "../component/Button.jsx"
import { useEffect, useState } from "react"
import { ChevronLeft } from 'lucide-react';

export function ContainerView(){
    let navigate = useNavigate()
    const params = useParams()

    const title = params.postId

    const location = useLocation()

    const signData = location.state.some

    // Response format d'après freehoroscopeapi.com

    // {
    //     "data": {
    //         "date":      "2026-02-25",
    //         "period":    "daily" | "weekly" | "monthly",
    //         "sign":      "Aries",
    //         "horoscope": "..."
    //     }
    // }

    const [period,setPeriod]= useState('daily')


    const [dataState,setDataState]=useState(null)

    useEffect(() => {
        async function fetchDataHoroscope() {
            const url = import.meta.env.DEV
                ? `/horoscope-api/api/v1/get-horoscope/${period}?sign=${signData}`
                : `/api/horoscope?sign=${signData}&period=${period}`

            const response = await fetch(url)

            const dataJson = await response.json()

            setDataState(dataJson)
        }
        fetchDataHoroscope()

    }, [signData,period])

    const horoscope = dataState?.data.horoscope

    return <section className="flex flex-col gap-[5%]">
        <div className="flex justify-center items-baseline" onClick={()=>navigate(-1)}>
            <button className=" text-white" onClick={()=>navigate(-1)}> <ChevronLeft /></button>
            <h1 className=" text-(--orange)  orbitron-bold">{title} </h1>
        </div>
        <div className="flex justify-between mx-[2%]">
            <Button className={"border border-(--orange) text-white anonymous-pro-bold p-2.5 rounded-sm  hover:bg-(--blue) transition-all duration-500 ease-in-out"} onClick={()=>setPeriod('daily')} children={'Daily'}></Button>
            <Button className={"border border-(--orange) text-white anonymous-pro-bold p-2.5 rounded-sm  hover:bg-(--blue) transition-all duration-500 ease-in-out"} onClick={()=>setPeriod('weekly')} children={'Weekly'}></Button>
            <Button className={"border border-(--orange) text-white anonymous-pro-bold p-2.5 rounded-sm  hover:bg-(--blue) transition-all duration-500 ease-in-out"} onClick={()=>setPeriod('monthly')} children={'Monthly'}></Button>
        </div>
        <div className="h-full border border-(--blue) p-[2%] rounded-md text-white  m-[2%]">
            <textarea name="horoscope" id="h" className="h-full w-full" value={horoscope ?? "Loading data ..." } readOnly>
                
            </textarea>
        </div>
    </section>
} 