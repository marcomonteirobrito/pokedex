import api from "../api";
import { ResponseProps, ResultProps } from "./types";

export const getPokemonList = async (
  params: string
): Promise<ResponseProps | null> => {
  try {
    const response = await api.get<ResponseProps | ResultProps>(
      `pokemon/${params}`
    );
    if ("results" in response.data) {
      return response.data;
    } else {
      return {
        count: 1,
        next: "",
        previous: "",
        results: [response.data],
      };
    }
  } catch (err) {
    console.error(err);
  }

  return null;
};

export const getPokemonInfo = async (url: ResultProps["url"]) => {
  try {
    const response = await api.get(url);
    return response.data;
  } catch (err) {
    console.error(err);
  }
};
