import { useQuery } from "react-query";
import { getFlakeById } from "../api/getFlakeById";

export const useFlake = (id) => {
  const flake = useQuery("flake", () => getFlakeById(id), {
    enabled: !!id,
  });
  return {
    flake,
  };
};
