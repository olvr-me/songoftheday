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
    const [activeDate, setActiveDate] = useState(new Date(2023, 2, 28)); // Note that months are zero-indexed in JavaScript, so March is represented by 2

    const handleDateClick = (date) => {
        setActiveDate(date);
    }

    return (
        <SelectionBar>
            {songs.map(s => {
                const parts = s.date.split('.');
                const europeanDate = new Date(`${parts[2]}-${parts[1]}-${parts[0]}`);
                europeanDate.setHours(0, 0, 0, 0);
                
                const formattedDate = new Date(europeanDate);
                const isActive = europeanDate.getTime() === activeDate.getTime();

                return <DateSelectorElement 
                    key={s.date}
                    date={s.date} 
                    songId={s.songId}
                    isActive={isActive}
                />
            })}
        </SelectionBar>
    )
}

export default DateSelectionBar;