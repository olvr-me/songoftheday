import Link from "next/link";

function DateSelectorElement({ date, songId, isActive, dateWasClicked }) {

    return (
        <>
            <Link
                href={songId}
                className={`${isActive ? 'text-white' : 'text-gray-500'} text-sm font-bold mr-2`}
                onClick={() => dateWasClicked(date)}
            >
                {date}
            </Link>
        </>
    );
};

export default DateSelectorElement;