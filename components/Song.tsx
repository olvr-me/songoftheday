import Image from 'next/image';

function Song({ title, artists, imageUrl }) {

    return (
        <>
            <Image
                src={imageUrl}
                width={600}
                height={600}
                alt={`Coverimage of song \'${title}\' from artists \'${artists}\'`}
            />
            <h3>{title}</h3>
            <h3 className='text-slate-400'>{artists}</h3>
        </>
    );
};

export default Song;