import { PropsWithChildren } from "react";

export function CardsGrid({ children }: PropsWithChildren) {
    return (
        <div className="p-5 lg:grid-cols-6 md:grid-cols-2 grid grid-rows-4 gap-6">
            {children}
        </div>
    );
}
