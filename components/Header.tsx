import { getPlaylistLink } from "@/lib/api";
import Link from "next/link";

export default async function Header() {

    const playlistUrl = await getPlaylistLink();

    return (
        <div className="flex justify-between items-center m-1 text-lg">
            <Link
                className="text-green-400"
                href=""
            >
                songoftheday
            </Link>
            <Link
                className="text-green-400"
                href={playlistUrl}
            >
                playlist
            </Link>
        </div>
    )
}