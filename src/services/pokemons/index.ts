import api from "../api";

export const getPokemonList = async (params: string) => {
  try {
    const response = await api.get(`pokemon/${params}`);
    return response.data;
  } catch (err) {
    console.error(err);
  }
};
