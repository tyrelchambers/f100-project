import axios from "axios";

export const getAllFlakes = (data) => {
  return axios
    .get("https://flakerank.herokuapp.com/api/flakes", {
      params: data,
    })
    .then((res) => res.data);
};
