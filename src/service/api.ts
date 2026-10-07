import { API_URL } from '../config/env';

export async function api(endpoint: string) {
    const response = await fetch(`${API_URL}${endpoint}`);

    if (!response.ok) {
        throw new Error(
            `Error fetching data from ${endpoint}: ${response.statusText}`,
        );
    }

    return response.json();
}
