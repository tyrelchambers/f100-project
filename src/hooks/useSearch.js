import { useQuery } from "react-query";
import { getFlakeByQuery } from "../api/getFlakeByQuery";

export const useSearch = (query) => {
  const search = useQuery(["search", query], () => getFlakeByQuery(query), {
    enabled: query.length > 0,
    select: (data) => data.data,
  });

  return { search };
};
