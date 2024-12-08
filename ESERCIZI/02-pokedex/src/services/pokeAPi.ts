const POKEMON_API_BASE_URL = "https://pokeapi.co";

const DEFAULT_MAX_RESULTS = 10;

const POKEMON_LIST_API_DEFAULTS = {
    maxResults: DEFAULT_MAX_RESULTS,
    page: 0,
};

export const pokemonListApi = async ({
    maxResults,
    page,
} = POKEMON_LIST_API_DEFAULTS) => {
    const res = await fetch(
        `${POKEMON_API_BASE_URL}/api/v2/pokemon?offset=${page * maxResults
        }&limit=${maxResults}`
    );

    const data = await res.json();

    return data;
};

export const pokemonDetailAPI = async (name: string) => {
    if (!name) return undefined;
    const res = await fetch(`${POKEMON_API_BASE_URL}/api/v2/pokemon/${name}`);
    const data = await res.json();
    return data;
};

// vista --> tsx
// logica x vist --> use*
// logica x dati --> service
