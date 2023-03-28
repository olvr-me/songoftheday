function DateSelectorElement({ date, songId, isActive }) {

    console.log(`Button for date ${date} is active:${isActive}`)

    return (
        <>
            <h3
                className={`${isActive ? 'text-white' : 'text-gray-500'} text-sm font-bold`}>
                {date}
            </h3>
        </>
    );
};

export default DateSelectorElement;