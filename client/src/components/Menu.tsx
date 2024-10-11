import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { PropsWithChildren, useState } from "react";

export function Menu({ children }: PropsWithChildren) {
    const [menuExpand, setMenuExpand] = useState(true);

    return (
        <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <span className="font-semibold text-xl tracking-tight">
                    Countries App
                </span>
            </div>
            <div className="block lg:hidden">
                <button
                    onClick={() => setMenuExpand(!menuExpand)}
                    className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
                >
                    {menuExpand ? (
                        <FontAwesomeIcon icon={faClose} />
                    ) : (
                        <FontAwesomeIcon icon={faBars} />
                    )}
                </button>
            </div>
            {menuExpand ? (
                <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                    <div className="text-sm lg:flex-grow">{children}</div>
                </div>
            ) : null}
        </nav>
    );
}
