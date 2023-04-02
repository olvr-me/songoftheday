import Image from 'next/image';
import Link from 'next/link';

import spotifyLogo from '../assets/Spotify_Logo_RGB_White.png'

function Song({ title, artists, imageUrl, link }) {

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
            <Link href={link}>
                <Image
                    src={spotifyLogo}
                    width={120}
                    height={120}
                    alt={`Spotify logo'`}
                />
            </Link>
        </>
    );
};

export default Song;