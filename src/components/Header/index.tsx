import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header
            className={`fixed top-0 right-0 left-0 z-50 h-20 w-full transition-all duration-500 ease-in-out ${
                scrolled
                    ? 'border-b border-[#6b6375]/10 bg-[#fff]/90 shadow-sm backdrop-blur-xl dark:border-[#9ca3af]/10 dark:bg-[#16171d]/90'
                    : 'border-b border-[#6b6375]/5 bg-[#fff]/70 backdrop-blur-md dark:border-[#9ca3af]/5 dark:bg-[#16171d]/70'
            }`}
        >
            <div className="relative container flex h-full w-full items-center">
                <div className="relative flex h-full w-full items-center justify-between">
                    {/* Left Column - Logo */}
                    <div className="flex h-full items-center">
                        <Link
                            to="/"
                            className="group relative z-10 flex shrink-0 items-center no-underline decoration-0"
                            aria-label="Página Inicial"
                        >
                            <svg
                                width="35"
                                height="35"
                                viewBox="0 0 100 60"
                                className="transition-all duration-700 ease-in-out"
                                style={{ overflow: 'visible' }}
                            >
                                <defs>
                                    <filter
                                        id="glow"
                                        x="-20%"
                                        y="-20%"
                                        width="140%"
                                        height="140%"
                                    >
                                        <feGaussianBlur
                                            stdDeviation="2"
                                            result="blur"
                                        />
                                        <feComposite
                                            in="SourceGraphic"
                                            in2="blur"
                                            operator="over"
                                        />
                                    </filter>
                                </defs>
                                <g className="transition-all duration-300 group-hover:drop-shadow-lg group-hover:filter">
                                    {/* Chevrons (< >) com a cor principal (igual ao texto do footer) */}
                                    <g className="transition-all duration-300">
                                        <polyline
                                            points="32,16 14,30 32,44"
                                            className="fill-none stroke-slate-800 stroke-[3.5] transition-all duration-300 dark:stroke-white"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <circle
                                            cx="32"
                                            cy="16"
                                            r="3.5"
                                            className="fill-slate-800 dark:fill-white"
                                        />
                                        <circle
                                            cx="14"
                                            cy="30"
                                            r="3.5"
                                            className="fill-slate-800 dark:fill-white"
                                        />
                                        <circle
                                            cx="32"
                                            cy="44"
                                            r="3.5"
                                            className="fill-slate-800 dark:fill-white"
                                        />
                                    </g>
                                    {/* Barra (/) com a cor secundária */}
                                    <g className="transition-all duration-300">
                                        <line
                                            x1="44"
                                            y1="52"
                                            x2="56"
                                            y2="8"
                                            className="stroke-slate-500 stroke-[3.5] transition-all duration-300 dark:stroke-slate-400"
                                            strokeLinecap="round"
                                        />
                                        <circle
                                            cx="44"
                                            cy="52"
                                            r="3.5"
                                            className="fill-slate-500 dark:fill-slate-400"
                                        />
                                        <circle
                                            cx="56"
                                            cy="8"
                                            r="3.5"
                                            className="fill-slate-500 dark:fill-slate-400"
                                        />
                                    </g>
                                    {/* Chevrons (< >) com a cor principal (igual ao texto do footer) */}
                                    <g className="transition-all duration-300">
                                        <polyline
                                            points="68,17 86,31 68,45"
                                            className="fill-none stroke-slate-800 stroke-[3.5] transition-all duration-300 dark:stroke-white"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <circle
                                            cx="68"
                                            cy="17"
                                            r="3.5"
                                            className="fill-slate-800 dark:fill-white"
                                        />
                                        <circle
                                            cx="86"
                                            cy="31"
                                            r="3.5"
                                            className="fill-slate-800 dark:fill-white"
                                        />
                                        <circle
                                            cx="68"
                                            cy="45"
                                            r="3.5"
                                            className="fill-slate-800 dark:fill-white"
                                        />
                                    </g>
                                </g>
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}
