import Image from 'next/image';

function DateSelectorElement({ title, artists, imageUrl }) {

    return (
        <>
            <Image
                src={imageUrl}
                width={600}
                height={600}
                alt={`Coverimage of song \'${title}\' from artists \'${artists}\'`}
            />
            <h3>Song: {title}</h3>
            <h3 className='text-slate-400'>Artist: {artists}</h3>
        </>
    );
};

export default DateSelectorElement;