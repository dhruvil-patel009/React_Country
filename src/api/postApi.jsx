import axios from "axios"


const api = axios.create({
    baseURL: "https://restcountries.com/v3.1",
})


//HTTP Get Method

export const getCountryData = ()=>{
    return api.get("/all?fields=name,population,region,capital,flags")
}

//