import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <nav>
                <Link href="/analytics/page-views">Page Views</Link>
                <Link href="/analytics/visitors">Visitors</Link>
            </nav>
            <div>
            {children}
            </div>
        </>
    )
}

