import Link from "next/link";

const playlistUrl = 'https://open.spotify.com/playlist/19VvREnkIgYtLATS9s9hFo?si=20ceb02ab6854365'

export default function Header() {
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