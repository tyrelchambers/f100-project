import axios from "axios";

export const getRankedFlakes = (data) => {
  return axios.get("https://flakerank.herokuapp.com/api/flakes", {
    params: data,
  });
};
