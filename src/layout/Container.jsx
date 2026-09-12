import { useNavigate } from "react-router-dom"
import { Card } from "../component/Card.jsx"

export function Container(){
    let navigate = useNavigate()
    const CardArr = [
                        {
                            sign : "Aries",
                            period : "21/03 - 19/04",
                            click : ()=> navigate({pathname: "/view/aries"},{state:{some:"aries"}})
                        },
                        {
                            sign: "Taurus",
                            period: "20/04 - 20/05",
                            click: ()=> navigate({pathname: "/view/taurus"},{state:{some:"taurus"}}) 
                        },
                        {
                            sign: "Gemini",
                            period: "21/05 - 20/06",
                            click: ()=> navigate({pathname: "/view/gemini"},{state:{some:"gemini"}})
                        },
                        {
                            sign:"Cancer",
                            period:"21/06 - 22/07",
                            click: ()=> navigate({pathname: "/view/cancer"},{state:{some:"cancer"}}),
                        },
                        {
                            sign: "Leo",
                            period: "23/07 - 22/08",
                            click: ()=> navigate({pathname: "/view/leo"},{state:{some:"leo"}}),
                        },
                        {
                            sign: "Virgo",
                            period: "23/08 - 22/09",
                            click: ()=> navigate({pathname: "/view/virgo"},{state:{some:"virgo"}}),
                        },
                        {
                            sign: "Libra",
                            period: "23/09 - 22/10",
                            click: ()=> navigate({pathname: "/view/libra"},{state:{some:"libra"}}),
                        },
                        {
                            sign: "Scorpio",
                            period: "23/10 - 21/11",
                            click: ()=> navigate({pathname: "/view/scorpio"},{state:{some:"scorpio"}}),
                        },
                        {
                            sign: "Sagittarius",
                            period: "22/11 - 21/12",
                            click: ()=> navigate({pathname: "/view/sagittarius"},{state:{some:"sagittarius"}}),
                        },
                        {
                            sign: "Capricorn",
                            period: "22/12 - 19/01",
                            click: ()=> navigate({pathname: "/view/capricorn"},{state:{some:"capricorn"}}),
                        },
                        {
                            sign: "Aquarius",
                            period: "20/01 - 18/02",
                            click: ()=> navigate({pathname: "/view/aquarius"},{state:{some:"aquarius"}}),
                        },
                        {
                            sign: "Pisces",
                            period: "19/02 - 20/03",
                            click: ()=> navigate({pathname: "/view/pisces"},{state:{some:"pisces"}})
                        }
                    ]

    return <section className=" flex flex-col gap-[2%] justify-center ">
        <h3 className="text-red-500 text-center"> Enter your birthday or select your sign.</h3>
        <Input></Input>
        <div className="container">
            {CardArr.map((el,index) =>{
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

function Input (){
    return <div className="px-2">
                <input id="date" type="date" className="p-4 w-full rounded-2xl text-white bg-(--blue)" />
            </div>
}