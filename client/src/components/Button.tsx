import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

type buttonProps = {
    buttonText: string;
    buttonLink: string;
    icon?: "faCirclePlus";
};

export function Button({ buttonText, buttonLink, icon }: buttonProps) {
    return (
        <>
            <Link
                to={buttonLink}
                className="bg-teal-700 gap-2 flex items-center justify-start w-fit hover:bg-teal-800 text-white py-1 px-2 rounded"
            >
                {icon ? <FontAwesomeIcon icon={faCirclePlus} /> : ""}
                {buttonText}
            </Link>
        </>
    );
}
