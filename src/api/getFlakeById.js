import axios from "axios";

export const getFlakeById = (id) => {
  return axios
    .get(`https://flakerank.herokuapp.com/api/flakes/${id}`)
    .then((res) => res.data);
};
