import axios from "axios";

export const getFlakeByQuery = (data) => {
  return axios.get("https://flakerank.herokuapp.com/api/flakes", {
    params: {
      s: data,
    },
  });
};
