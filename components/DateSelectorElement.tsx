function DateSelectorElement({ date, songId, isActive, dateWasClicked }) {

    return (
        <>
            <h3
                className={`${isActive ? 'text-white' : 'text-gray-500'} text-sm font-bold`}
                onClick={() => dateWasClicked(date)}
            >
                {date}
            </h3>
        </>
    );
};

export default DateSelectorElement;