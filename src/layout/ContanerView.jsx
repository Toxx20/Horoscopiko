import { useLocation, useNavigate, useParams } from "react-router-dom"
import { Button } from "../component/Button.jsx"
import { useEffect, useState } from "react"

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
            const dataAwait = await fetch(
                `/horoscope-api/api/v1/get-horoscope/${period}?sign=${signData}`
            )
            const dataJson = await dataAwait.json()
            setDataState(dataJson)
        }
        fetchDataHoroscope()

    }, [signData,period])

    const horoscope = dataState?.data.horoscope

    return <section className="flex flex-col gap-[5%]">
        <div className="flex justify-center">
        <button className="bg-(--blue)" onClick={()=>navigate(-1)}>Retour</button>
        <h1 className=" text-(--orange)">{title} </h1>
        </div>
        <div className="flex justify-between mx-[2%]">
            <Button onClick={()=>setPeriod('daily')} children={'Daily'}></Button>
            <Button onClick={()=>setPeriod('weekly')} children={'Weekly'}></Button>
            <Button onClick={()=>setPeriod('monthly')} children={'Monthly'}></Button>
        </div>
        <div className="h-full bg-amber-300 m-[2%]">
            <textarea name="horoscope" id="h" className="h-full w-full" value={horoscope ?? "Load data ..." }>
                
            </textarea>
        </div>
    </section>
} 