import { Country } from "../model/Country";
import { Link } from "react-router-dom";

type cardProps = {
    country: Country;
};

export function Card({ country }: cardProps) {
    return (
        <div className="countryCard rounded w-48 border flex flex-col justify-center border-gray-300 bg-gray-100 p-4">
            <Link to={"/country/" + country.countryCode}>{country.name}</Link>
        </div>
    );
}
