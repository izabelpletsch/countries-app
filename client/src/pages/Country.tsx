import React from "react";
import { useParams } from "react-router-dom";
import { fetchData } from "../utils/fetchData";
import {
    BorderCountriesWidget,
    PopulationWidget,
    CountryHeader,
    ErrorCard,
} from "../components";
import { CountryInfo } from "../model/CountryInfo";
import { Error } from "../model/Error";

function Country() {
    const { countryCode } = useParams();

    const [countryInfo, setcountryInfo] = React.useState<CountryInfo>();
    const [error, setError] = React.useState<Error>();

    React.useEffect(() => {
        async function loadData() {
            const data = await fetchData("/country/" + countryCode);

            if (data.error_status) {
                setError(data);
                return;
            }

            setcountryInfo(data);
        }

        loadData();
    }, [countryCode]);

    return (
        <main>
            {!error && !countryInfo ? "Loading..." : null}

            {error ? <ErrorCard errorMessage={error.msg}></ErrorCard> : null}

            {countryInfo && !error ? (
                <>
                    <CountryHeader
                        flag={countryInfo.flag}
                        commonName={countryInfo.commonName}
                        officialName={countryInfo.officialName}
                    />

                    <div className="w-full flex flex-wrap gap-6 p-8 justify-around">
                        <BorderCountriesWidget borders={countryInfo.borders} />
                        <PopulationWidget
                            populationData={countryInfo.population}
                        />
                    </div>
                </>
            ) : null}
        </main>
    );
}

export default Country;
