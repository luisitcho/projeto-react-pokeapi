import { api } from './api';

export function getPokemons() {
    return api('pokemon?limit=10&offset=0');
}

export function getPokemon(name: string) {
    return api(`pokemon/${name}`);
}
