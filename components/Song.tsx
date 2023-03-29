import Image from 'next/image';

function DateSelectorElement({ title, artist, imageUrl }) {

    return (
        <>
            <h3>Song: {title}</h3>
            <h3>Artist: {artist}</h3>
            <Image 
                src={imageUrl}
                width={600}
                height={600}
                alt={`Coverimage of song \'${title}\' from artist \'${artist}\'`}
            />
        </>
    );
};

export default DateSelectorElement;