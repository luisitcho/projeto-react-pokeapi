import { useEffect, useState } from 'react';
import { Container } from '../../components/Container';
import { getPokemons } from '../../service/pokemonService';
import { Card } from '../../components/Card';

export default function Home() {
    // Usando 'any' temporariamente pois estamos focando apenas em layout
    const [pokemons, setPokemons] = useState<any[]>([]);

    useEffect(() => {
        getPokemons()
            .then((data) => {
                setPokemons(data.results);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <Container>
            {/* Header da Página */}
            <div className="relative mt-20 mb-16 flex flex-col items-center px-4 text-center">
                {/* Glow suave no fundo */}
                <div className="absolute top-0 -z-10 h-32 w-32 rounded-full bg-blue-500/20 blur-3xl dark:bg-blue-500/10"></div>

                <h2 className="mb-3 text-[10px] font-bold tracking-[0.3em] text-slate-400 uppercase dark:text-slate-500">
                    PokéAPI Explorer
                </h2>
                <h1 className="text-4xl tracking-tight text-slate-500 md:text-5xl lg:text-6xl dark:text-slate-400">
                    Encontre seu{' '}
                    <strong className="font-bold text-slate-800 dark:text-white">
                        Pokémon
                    </strong>
                </h1>
                <p className="mt-6 max-w-xl text-sm leading-relaxed font-light text-slate-500 md:text-base dark:text-slate-400">
                    Pesquise por nome ou filtre por tipo para encontrar o
                    parceiro ideal para a sua jornada.
                </p>
            </div>

            {/* Sessão de Filtros (Apenas Layout) */}
            <div className="mb-12 flex flex-col items-center justify-between gap-4 rounded-2xl border border-[#6b6375]/10 bg-white/50 p-4 shadow-sm backdrop-blur-md sm:flex-row dark:border-[#9ca3af]/10 dark:bg-[#16171d]/50">
                {/* Input de Pesquisa */}
                <div className="relative w-full sm:w-96">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <svg
                            className="h-5 w-5 text-slate-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                        </svg>
                    </div>
                    <input
                        type="text"
                        placeholder="Pesquisar pokémon..."
                        className="block w-full rounded-xl border-0 bg-slate-100 py-3 pr-3 pl-10 text-slate-900 outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-blue-500 sm:text-sm sm:leading-6 dark:bg-[#202129] dark:text-white"
                    />
                </div>

                <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
                    {/* Select de Quantidade */}
                    <select className="block w-full cursor-pointer rounded-xl border-0 bg-slate-100 py-3 pr-10 pl-3 text-slate-900 outline-none focus:ring-2 focus:ring-blue-500 sm:w-32 sm:text-sm sm:leading-6 dark:bg-[#202129] dark:text-white">
                        <option value="10">10 itens</option>
                        <option value="20">20 itens</option>
                        <option value="50">50 itens</option>
                        <option value="100">100 itens</option>
                    </select>

                    {/* Select de Tipo */}
                    <select className="block w-full cursor-pointer rounded-xl border-0 bg-slate-100 py-3 pr-10 pl-3 text-slate-900 outline-none focus:ring-2 focus:ring-blue-500 sm:w-48 sm:text-sm sm:leading-6 dark:bg-[#202129] dark:text-white">
                        <option value="">Todos os Tipos</option>
                        <option value="fire">Fogo</option>
                        <option value="water">Água</option>
                        <option value="grass">Planta</option>
                        <option value="electric">Elétrico</option>
                    </select>
                </div>
            </div>

            {/* Grid de Pokémons */}
            <div className="mb-16 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {pokemons.map((pokemon) => (
                    <Card key={pokemon.name} pokemon={pokemon} />
                ))}
            </div>
        </Container>
    );
}
