import { formatResponse, formatResults } from "@/utils/formatResponse";
import api from "../api";
import { ApiProps, ResponseProps, ResultProps } from "./types";

export const getPokemonList = async ({
  params,
  currentPage,
}: ApiProps): Promise<ResponseProps | null> => {
  const limit = 10;
  const offset = (currentPage - 1) * limit;

  const paramsRouter = params ? params : `?offset=${offset}&limit=${limit}`;

  const response = await api.get<ResponseProps>(`pokemon/${paramsRouter}`);

  if ("results" in response.data) {
    return response.data;
  }

  if (response) {
    return {
      count: 1,
      next: "",
      previous: "",
      results: [response.data],
    };
  }

  return null;
};

export const getPokemonInfo = async (url: ResultProps["url"]) => {
  const response = await api.get(url);
  return response.data;
};
