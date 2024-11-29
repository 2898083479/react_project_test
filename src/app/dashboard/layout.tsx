export default function Layout({ children }: { children: React.ReactNode, team: React.ReactNode, analytics: React.ReactNode }) {
    return (
        <div>
            <div className="text-2xl font-bold">This is dashboard layout</div>
            <div>
                {children}
            </div>
        </div>
    );
}