type CardProps = {
    pokemon: {
        name: string;
        url: string;
    };
};

export function Card({ pokemon }: CardProps) {
    // A Lógica da imagem e do ID vai entrar aqui!

    return (
        <div className="group relative flex cursor-pointer flex-col items-center justify-center overflow-hidden rounded-2xl border border-[#6b6375]/10 bg-white/40 p-6 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:border-[#9ca3af]/10 dark:bg-[#16171d]/60">
            {/* Fundo sutil que aparece no hover para dar destaque na imagem */}
            <div className="absolute top-10 h-32 w-32 rounded-full bg-slate-200/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:bg-slate-700/30"></div>

            {/* O SEU <img /> VAI ENTRAR EXATAMENTE AQUI, SUBSTITUINDO ESSA DIV */}
            <div className="z-10 flex h-32 w-32 items-center justify-center rounded-full border-2 border-dashed border-slate-300 text-xs text-slate-400 dark:border-slate-600">
                Sem Imagem
            </div>

            <div className="z-10 mt-4 text-center">
                {/* O Número (Nº 001) vai entrar aqui! */}

                <h2 className="mt-1 text-xl font-bold text-slate-800 capitalize dark:text-white">
                    {pokemon.name}
                </h2>
            </div>
        </div>
    );
}
