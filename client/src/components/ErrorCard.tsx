type cardProps = {
    errorMessage: string;
};

export function ErrorCard({ errorMessage }: cardProps) {
    return (
        <div className="countryCard rounded w-1/2 m-8 border flex flex-col justify-center border-red-900 bg-red-300 p-4">
            {errorMessage}
        </div>
    );
}
