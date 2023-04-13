'use client'
import { getPlaylistLink } from "@/lib/api";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
    const [playlistUrl, setPlaylistUrl] = useState("");

    useEffect(() => {
        async function fetchPlaylistLink() {
            const url = await getPlaylistLink();
            setPlaylistUrl(url);
        }
        fetchPlaylistLink();
    }, []);

    return (
        <div className="flex justify-between items-center m-1 text-lg">
            <Link className="text-green-400" href="/">
                songoftheday
            </Link>
            <Link className="text-green-400" href={playlistUrl}>
                playlist
            </Link>
        </div>
    );
}