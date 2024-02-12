import { baseAddress } from "./BaseAddress";

export default function useAPI() {
    const getMethod = async (endpoint: string) => {
        try {
            const response = await fetch(baseAddress + endpoint, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            });
            const data = await response.json();
        
            if (data) {
                return data;
            }
        } catch (error) {
            throw new Error('Something went wrong: ' + error);
        }
    }

    return { getMethod }
}
