export function Footer() {
    return (
        <footer className="relative z-20 mt-24 flex w-full flex-col items-center justify-center bg-transparent pt-12">
            <div className="z-10 container flex h-full w-full flex-col items-center justify-center text-center">
                <div className="flex w-full flex-col items-center justify-between gap-6 border-t border-slate-200 py-8 text-[10px] font-light tracking-widest text-slate-500 uppercase md:flex-row dark:border-slate-800 dark:text-slate-400">
                    <span>© 2026 LUIS HENRIQUE</span>
                    <div className="flex items-center gap-6">
                        <a
                            href="https://www.linkedin.com/in/luishenriquesc/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition-colors duration-300 hover:text-blue-500"
                        >
                            Linkedin
                        </a>
                        <a
                            href="https://github.com/luisitcho/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition-colors duration-300 hover:text-slate-900 dark:hover:text-white"
                        >
                            GitHub
                        </a>
                        <a
                            href="https://www.instagram.com/luisitcho/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition-colors duration-300 hover:text-pink-500"
                        >
                            Instagram
                        </a>
                    </div>
                    <span className="font-bold tracking-widest text-slate-800 dark:text-white">
                        Eng. High-Performance
                    </span>
                </div>
            </div>
        </footer>
    );
}
