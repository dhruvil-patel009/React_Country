import { useState, useTransition } from "react"
import { useEffect } from "react"
import { getCountryData } from "../api/postApi"
import { Loader } from "../components/UI/Loader"
import { CountryCard } from "../components/Layout/CoutryCard"

export const Country = () => {
    const [isPending, startTransition] = useTransition()
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        startTransition(async () => {
            const res = await getCountryData();
            setCountries(res.data)
            console.log(res.data)
        })
    }, [])

    if (isPending) return <Loader />
    return (
        <section className="country-section">
            <ul className="grid grid-four-cols">
                {
                    countries.map((curlCountry, index) => {
                        return <CountryCard country={curlCountry} key={index} />
                    })
                }
            </ul>
        </section>
    )
}