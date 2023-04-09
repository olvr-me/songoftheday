import Link from "next/link";

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
                href="https://open.spotify.com/playlist/19VvREnkIgYtLATS9s9hFo?si=20ceb02ab6854365"
            >
                playlist
            </Link>
        </div>
    )
}