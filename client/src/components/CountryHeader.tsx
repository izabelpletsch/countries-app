type headerProps = {
    flag: string;
    commonName: string;
    officialName: string;
};

export function CountryHeader({ flag, commonName, officialName }: headerProps) {
    return (
        <div className="flex items-center gap-4 bg-slate-300 w-full p-4">
            <img className="w-12" src={flag} alt={`${commonName}'s flag`}></img>

            <div className="flex flex-col justify-start">
                <h1 className="text-2xl">{commonName}</h1>
                <span className="text-xl">{officialName}</span>
            </div>
        </div>
    );
}
