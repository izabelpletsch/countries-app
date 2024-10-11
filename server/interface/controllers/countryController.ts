import { Request, Response } from "express";
import axios from "axios";

export class countryController {
    public static async getAllCountries(req: Request, res: Response) {
        try {
            const { data: response } = await axios.get(
                "https://date.nager.at/api/v3/AvailableCountries"
            );

            res.send(response);
        } catch (e) {
            if (axios.isAxiosError(e)) {
                console.log(e.status);
                console.error(e.response);

                res.status(e.status || 500).send(e);
            } else {
                res.status(500).send("Internal error");
                console.error(e);
            }
        }
    }

    public static async getCountryInfo(req: Request, res: Response) {
        const { countryCode } = req.params;

        try {
            const { data: countryInfo } = await axios.get(
                "https://date.nager.at/api/v3/CountryInfo/" + countryCode
            );
            const {
                data: { data: populationData },
            } = await axios.post(
                "https://countriesnow.space/api/v0.1/countries/population",
                {
                    country: countryInfo?.commonName,
                }
            );
            const {
                data: { data: flagData },
            } = await axios.post(
                "https://countriesnow.space/api/v0.1/countries/flag/images",
                {
                    iso2: countryCode,
                }
            );

            const response = {
                ...countryInfo,
                population: populationData.populationCounts,
                flag: flagData.flag,
            };

            res.send(response);
        } catch (e) {
            if (axios.isAxiosError(e)) {
                console.log(e.status);
                console.error(e.response);

                res.status(e.status || 500).send(e);
            } else {
                res.status(500).send("Internal error");
                console.error(e);
            }
        }
    }
}
