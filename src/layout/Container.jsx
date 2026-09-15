import { useNavigate } from "react-router-dom"
import { Card } from "../component/Card.jsx"
import {  useState } from "react"

export function Container(){
    let navigate = useNavigate()
    const dateNow = new Date()
    const [dateState,setDateState]= useState(dateNow.getFullYear())

    const CardArr = [
                        {
                            sign : "Aries",
                            period : "21/03 - 19/04",
                            click : ()=> navigate({pathname: "/view/aries"},{state:{some:"aries"}}),
                            dateDebut : [2,21],
                            dateFin : [3,19]
                        },
                        {
                            sign: "Taurus",
                            period: "20/04 - 20/05",
                            click: ()=> navigate({pathname: "/view/taurus"},{state:{some:"taurus"}}),
                            dateDebut : [3,20],
                            dateFin : [4,20]
                        },
                        {
                            sign: "Gemini",
                            period: "21/05 - 20/06",
                            click: ()=> navigate({pathname: "/view/gemini"},{state:{some:"gemini"}}),
                            dateDebut : [4,21],
                            dateFin : [5,20]
                        },
                        {
                            sign:"Cancer",
                            period:"21/06 - 22/07",
                            click: ()=> navigate({pathname: "/view/cancer"},{state:{some:"cancer"}}),
                            dateDebut : [5,21],
                            dateFin : [6,22]
                        },
                        {
                            sign: "Leo",
                            period: "23/07 - 22/08",
                            click: ()=> navigate({pathname: "/view/leo"},{state:{some:"leo"}}),
                            dateDebut : [6,23],
                            dateFin : [7,22]
                        },
                        {
                            sign: "Virgo",
                            period: "23/08 - 22/09",
                            click: ()=> navigate({pathname: "/view/virgo"},{state:{some:"virgo"}}),
                            dateDebut : [7,23],
                            dateFin : [8,22]
                        },
                        {
                            sign: "Libra",
                            period: "23/09 - 22/10",
                            click: ()=> navigate({pathname: "/view/libra"},{state:{some:"libra"}}),
                            dateDebut : [8,23],
                            dateFin : [9,22]
                        },
                        {
                            sign: "Scorpio",
                            period: "23/10 - 21/11",
                            click: ()=> navigate({pathname: "/view/scorpio"},{state:{some:"scorpio"}}),
                            dateDebut : [9,23],
                            dateFin : [10,21]
                        },
                        {
                            sign: "Sagittarius",
                            period: "22/11 - 21/12",
                            click: ()=> navigate({pathname: "/view/sagittarius"},{state:{some:"sagittarius"}}),
                            dateDebut : [10,22],
                            dateFin : [11,21]
                        },
                        {
                            sign: "Capricorn",
                            period: "22/12 - 19/01",
                            click: ()=> navigate({pathname: "/view/capricorn"},{state:{some:"capricorn"}}),
                            dateDebut : [11,22],
                            dateFin : [0,19]
                        },
                        {
                            sign: "Aquarius",
                            period: "20/01 - 18/02",
                            click: ()=> navigate({pathname: "/view/aquarius"},{state:{some:"aquarius"}}),
                            dateDebut : [0,20],
                            dateFin : [1,18]
                        },
                        {
                            sign: "Pisces",
                            period: "19/02 - 20/03",
                            click: ()=> navigate({pathname: "/view/pisces"},{state:{some:"pisces"}}),
                            dateDebut : [1,19],
                            dateFin : [2,20]
                        }
                    ]
    let CardArrFilter = CardArr

    if( typeof(dateState) === 'string'){
        const dateStateArr = dateState.split("-")
        const mois = dateStateArr[1]
        const jours = dateStateArr[2]
        CardArrFilter = CardArr.filter((el) => {
            const testDebut = (Number(el.dateDebut[0])+1 == mois & (el.dateDebut[1]<=jours) ) 
            const testFin = (Number(el.dateFin[0])+1 == mois & (el.dateFin[1]>=jours) )
            return testDebut || testFin
        })    
    }
    if(dateState ===''){
        CardArrFilter = CardArr
    }
    

    return <section className=" flex flex-col gap-[2%] justify-center items-center">
        <h3 className="text-red-500 text-center"> Enter your birthday or select your sign.</h3>
        <Input value={dateState} onChange={setDateState} ></Input>
        <div className="container">
            {CardArrFilter.map((el,index) =>{
                const listCard = <Card 
                                    key={index}
                                    sign={el.sign}
                                    period={el.period}
                                    onClick={el.click}
                                ></Card>
                return listCard
                    })}

        </div>
    </section>
}

function Input ({value,onChange}){
    return <div className="px-2 w-full md:w-[50%]">
                <input id="date" type="date" className="p-4 w-full rounded-2xl text-white bg-(--blue) " value={value} onChange={(e)=>onChange(e.target.value) } />
            </div>
}