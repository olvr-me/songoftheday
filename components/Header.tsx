import Link from "next/link";

export default function Header() {
    return (
        <div className="flex justify-between items-center mb-1 text-lg">
            <h1>songoftheday</h1>
            <Link
                href="https://open.spotify.com/playlist/19VvREnkIgYtLATS9s9hFo?si=20ceb02ab6854365">playlist
            </Link>
        </div>
    )
}