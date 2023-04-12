'use client'
import Image from 'next/image';
import Link from 'next/link';
import spotifyLogo from '../assets/Spotify_Logo_RGB_Green.png'
import { Palette } from 'color-thief-react';

function Song({ title, artists, imageUrl, link }) {

    function getGlowEffect(color) {

        if (color === undefined) {
            return {};
        }

        return {
            filter: `drop-shadow(0 0 50px ${color}`
        }
    }

    function isColorLight(color) {
        // Remove "rgb(" and ")" to isolate the color values
        var colorValues = color.substring(4, color.length - 1)
            .replace(/ /g, '')
            .split(',');

        // Convert the color values to an array of integers
        var r = parseInt(colorValues[0]);
        var g = parseInt(colorValues[1]);
        var b = parseInt(colorValues[2]);

        // Calculate the relative luminance of the color
        var luminance = (0.2126 * r) + (0.7152 * g) + (0.0722 * b);

        // Check if the luminance is greater than or equal to 128
        const luminanceThreshhold = 80; // This value is just an estimate

        if (luminance >= luminanceThreshhold) {
            return true; // Color is light
        } else {
            return false; // Color is dark
        }
    }

    return (
        <div className='flex justify-center flex-col m-1 pb-5'>
            <Palette src={imageUrl} crossOrigin='anonymous' format='rgbString'>
                {({ data, loading }) => {
                    if (loading)
                        return <div className="animate-pulse w-songw h-songh bg-slate-500" />;

                    let lightColor;
                    data.forEach((color, index) => {
                        if (isColorLight(color) && lightColor === undefined) {
                            lightColor = color;
                        }
                    });

                    // If there is no light color, we just take the first one
                    if (lightColor === undefined)
                        lightColor = data[0];

                    return (
                        <Image
                            src={imageUrl}
                            width={600}
                            height={600}
                            alt={`Coverimage of song \'${title}\' from artists \'${artists}\'`}
                            style={getGlowEffect(lightColor)}
                        />
                    );
                }}
            </Palette>
            <div className='mt-5 flex flex-row justify-end'>
                <div className='basis-2/3'>
                    <h3 className='text-white text-xl'>{title}</h3>
                    <h3 className='text-slate-400 text-sm'>{artists}</h3>
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