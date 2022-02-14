import { useQuery } from "react-query";
import { getAllFlakes } from "../api/getAllFlakes";

export const useFlakes = (query) => {
  const flakes = useQuery(["flakes", query], () => getAllFlakes(query), {
    keepPreviousData: true,
    retryOnMount: false,
    refetchOnWindowFocus: false,
  });

  return {
    flakes,
  };
};
