export interface Country {
    countryCode: string;
    commonName: string;
    officialName: string;
    region: string;
    borders: Array<Country>;
}
