import { Link } from "react-router-dom";
import { CountryInfo } from "../model/CountryInfo";

type simpleCountryInfo = Omit<CountryInfo, "population" | "flag">;

type widgetProps = {
    borders: Array<simpleCountryInfo>;
};

export function BorderCountriesWidget({ borders }: widgetProps) {
    return (
        <div className="flex flex-col bg-white p-8 rounded-md flex-grow-1">
            <h2>Border-countries</h2>

            {borders.length ? (
                <ol className="list-decimal list-inside">
                    {borders.map((b) => (
                        <li>
                            <Link to={"/country/" + b.countryCode}>
                                {b.commonName}
                            </Link>
                        </li>
                    ))}
                </ol>
            ) : (
                <span>There are no border countries!</span>
            )}
        </div>
    );
}
