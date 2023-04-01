'use client'
import { useState, useEffect } from "react";
import DateSelectorElement from "./DateSelectorElement";
import { getAllDates } from "@/lib/api";

function SelectionBar({ children }) {
    return <div>{children}</div>
}

function DateSelectionBar() {
    const [activeDate, setActiveDate] = useState('');
    const [dates, setDates] = useState([]);

    useEffect(() => {
        async function fetchDates() {            
            const data = await getAllDates();

            setDates(data.dates);
        }

        fetchDates();
    }, []);

    const handleDateClick = (date) => {
        if (date === undefined)
            return;

        setActiveDate(date);
    }

    return (
        <SelectionBar>
            {dates.map(d => {
                return <DateSelectorElement
                    key={d.date}
                    date={d.date}
                    songId={d.songId}
                    isActive={activeDate === d.date}
                    dateWasClicked={handleDateClick}
                />
            })}
        </SelectionBar>
    )
}

export default DateSelectionBar;