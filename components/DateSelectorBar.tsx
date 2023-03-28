'use client'
import { useState } from "react";
import DateSelectorElement from "./DateSelectorElement";

const songs = [
    {
        date: '28.03.2023',
        songId: '1sklC11tCgdL59gNWB7Vli'
    },
    {
        date: '27.03.2023',
        songId: '4AGwu2Zn3sYmR2s2y3vfft'
    },
    {
        date: '26.03.2023',
        songId: '3KffMs30iYfPNYI8epNj5a'
    },
    {
        date: '25.03.2023',
        songId: '4zlbKky2yA657Sk5rekZoR'
    },
];

function SelectionBar({children}) {
    return <div>{children}</div>
}

const DateSelectionBar = () => {
    const [activeDate, setActiveDate] = useState('28.3.2023');

    const handleDateClick = (date) => {
        setActiveDate(date);
    }

    console.log(activeDate);
    console.log(`isActiveDate: ${'28.3.2023' === activeDate}`);

    return (
        <SelectionBar>
            {songs.map(s => {
                console.log(`Button for date ${s.date} should active:${s.date} valueOfState:${activeDate} - activeDate type: ${typeof activeDate}, s.date type: ${typeof s.date}`)

                return <DateSelectorElement 
                    key={s.date} 
                    date={s.date} 
                    songId={s.songId}
                    isActive={s.date === activeDate}
                />
            })}
        </SelectionBar>
    )
}

export default DateSelectionBar;