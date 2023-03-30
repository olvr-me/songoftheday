import Image from 'next/image';

function DateSelectorElement({ title, artists, imageUrl }) {

    return (
        <>
            <h3>Song: {title}</h3>
            <h3>Artist: {artists}</h3>
            <Image 
                src={imageUrl}
                width={600}
                height={600}
                alt={`Coverimage of song \'${title}\' from artists \'${artists}\'`}
            />
        </>
    );
};

export default DateSelectorElement;