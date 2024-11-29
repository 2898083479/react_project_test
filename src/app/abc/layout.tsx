const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="w-full h-full flex">
            <div className="w-full h-full flex items-center justify-center">
                <span>This is abc layout</span>
            </div>
            <div className="w-full h-full flex items-center justify-center">
                {children}
            </div>
        </div>
    );
}

export default Layout;