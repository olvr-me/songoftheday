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
    return (
        <SelectionBar>
            {songs.map(s => {
                return <DateSelectorElement date={s.date} songId={s.songId} />
            })}
        </SelectionBar>
    )
}

export default DateSelectionBar;