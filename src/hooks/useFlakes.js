import { useQuery } from "react-query";
import { getAllFlakes } from "../api/getAllFlakes";

export const useFlakes = () => {
  const flakes = useQuery("flakes", getAllFlakes);

  return {
    flakes,
  };
};
