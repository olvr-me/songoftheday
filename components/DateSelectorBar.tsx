'use client'
import { useState, useEffect } from "react";
import DateSelectorElement from "./DateSelectorElement";
import { getAllDates } from "@/lib/api";

function SelectionBar({ className, children }) {
    return <div className={className}>
        {children}
    </div>
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
        <div className="basis-1/3 ">
            <SelectionBar className='flex flex-col'>
                {dates.map(d => {
                    return <div>
                        <DateSelectorElement
                            key={d.date}
                            date={d.date}
                            isActive={activeDate === d.date}
                            dateWasClicked={handleDateClick}
                        />
                    </div>
                })}
            </SelectionBar>
        </div>
    )
}

export default DateSelectionBar;