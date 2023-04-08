import Image from 'next/image';
import Link from 'next/link';

import spotifyLogo from '../assets/Spotify_Logo_RGB_Green.png'

function Song({ title, artists, imageUrl, link }) {

    return (
        <div className='flex justify-center flex-col ml-1 pb-5'>
            <Image
                src={imageUrl}
                width={600}
                height={600}
                alt={`Coverimage of song \'${title}\' from artists \'${artists}\'`}
            />
            <div className='mt-5 flex flex-row justify-end'>
                <div className='basis-2/3'>
                    <h3 className='text-white'>{title}</h3>
                    <h3 className='text-slate-400'>{artists}</h3>
                </div>
                <Link href={link} className='basis-1/3'>
                    <Image
                        src={spotifyLogo}
                        width={2362/10}
                        height={709/10}
                        alt={`Spotify logo'`}
                    />
                </Link>
            </div>
        </div>
    );
};

export default Song;