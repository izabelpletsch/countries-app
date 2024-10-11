import React from "react";
import { Card, CardsGrid } from "../components/index";
import { Country } from "../model/Country";
import { fetchData } from "../utils/fetchData";

function Countries() {
    const [countries, setCountries] = React.useState<Country[]>([]);

    React.useEffect(() => {
        async function loadData() {
            const data = await fetchData("/all");
            setCountries(data);
        }

        loadData();
    }, []);

    return (
        <main className="p-8">
            <h1>Countries</h1>

            <CardsGrid>
                {countries?.length
                    ? countries.map((c) => (
                          <Card key={c.countryCode} country={c}></Card>
                      ))
                    : null}
            </CardsGrid>
        </main>
    );
}

export default Countries;
