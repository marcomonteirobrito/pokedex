import api from "../api";
import { ResponseProps } from "./types";

export const getPokemonList = async (params: string) => {
  try {
    const response = await api.get("pokemon", {
      params,
    });
    return response.data;
  } catch (err) {
    console.error(err);
  }
};
