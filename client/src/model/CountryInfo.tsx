export interface CountryInfo {
    countryCode: string;
    commonName: string;
    officialName: string;
    region: string;
    borders: Array<CountryInfo>;
    population: {
        year: number;
        value: number;
    }[];
    flag: string;
}
