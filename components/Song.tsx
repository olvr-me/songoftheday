'use client'
import Image from 'next/image';
import Link from 'next/link';
import spotifyLogo from '../assets/Spotify_Logo_RGB_Green.png'
import Color from 'color-thief-react';
import SongSkeleton from './SongSkeleton';

function Song({ title, artists, imageUrl, link }) {

    function getGlowEffect(color) {

        if (color.data === undefined)
        {
            return {};
        }

        return {
            filter: `drop-shadow(0 0 40px ${color.data}`
        }
    }

    return (
        <div className='flex justify-center flex-col ml-1 pb-5'>
            <Color src={imageUrl} crossOrigin="anonymous" format='rgbString'>
                {({ data, loading }) => {
                    if (loading) return <div><SongSkeleton /> <h1>Hiii</h1> </div>;
                    return (
                        <Image
                            src={imageUrl}
                            width={600}
                            height={600}
                            alt={`Coverimage of song \'${title}\' from artists \'${artists}\'`}
                            style={getGlowEffect({data})}
                        />
                    );
                }}
            </Color>
            <div className='mt-5 flex flex-row justify-end'>
                <div className='basis-2/3'>
                    <h3 className='text-white'>{title}</h3>
                    <h3 className='text-slate-400'>{artists}</h3>
                </div>
                <Link href={link} className='basis-1/3'>
                    <Image
                        src={spotifyLogo}
                        width={2362 / 10}
                        height={709 / 10}
                        alt={`Spotify logo`}
                    />
                </Link>
            </div>
        </div>
    );
};

export default Song;