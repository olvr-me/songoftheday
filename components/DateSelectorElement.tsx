import { sounce_sans_3 } from "@/lib/fonts";
import Link from "next/link";

function DateSelectorElement({ date, isActive, dateWasClicked }) {

    return (
        <>
            <Link
                href={date}
                className={`${isActive ? 'text-white' : 'text-gray-500'} text-sm font-bold mr-2 ${sounce_sans_3.className}`}
                onClick={() => dateWasClicked(date)}
            >
                {date}
            </Link>
        </>
    );
};

export default DateSelectorElement;