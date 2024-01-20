import api from "../api";
import { ResultProps } from "./types";

export const getPokemonList = async (params: string) => {
  try {
    const response = await api.get(`pokemon/${params}`);
    return response.data;
  } catch (err) {
    console.error(err);
  }
};

export const getPokemonInfo = async (url: ResultProps["url"]) => {
  try {
    const response = await api.get(url);
    return response.data;
  } catch (err) {
    console.error(err);
  }
};
