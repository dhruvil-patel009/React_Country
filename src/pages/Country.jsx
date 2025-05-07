import { useState, useTransition } from "react";
import { useEffect } from "react";
import { getCountryData } from "../api/postApi";
import { Loader } from "../components/UI/Loader";
import { CountryCard } from "../components/Layout/CoutryCard";
import { SearchFilter } from "../components/UI/SearchFilter";

export const Country = () => {
    const [isPending, startTransition] = useTransition();
    const [countries, setCountries] = useState([]);
    const [search, setSearch] = useState();
    const [filter, setFilter] = useState("all");

    useEffect(() => {
        startTransition(async () => {
            const res = await getCountryData();
            setCountries(res.data);
            console.log(res.data);
        });
    }, []);

    const searchCountry = (country) => {
        if (search) {
            return country.name.common.toLowerCase().includes(search.toLowerCase());
        }
        return country;
    };

    const filterRegion = (country) => {
        if (filter === "all") return country;
        return country.region.toLowerCase() === filter.toLowerCase();
    };

    //Here is the main logic
    const filterCountries = countries.filter(
        (country) => searchCountry(country) && filterRegion(country)
    );

    if (isPending) return <Loader />;
    return (
        <section className="country-section">
            <SearchFilter
                search={search}
                setSearch={setSearch}
                filter={filter}
                setFilter={setFilter}
            />
            <ul className="grid grid-four-cols">
                {filterCountries.map((curlCountry, index) => {
                    return <CountryCard country={curlCountry} key={index} />;
                })}
            </ul>
        </section>
    );
};
