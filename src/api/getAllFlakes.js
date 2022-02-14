import axios from "axios";

export const getAllFlakes = () => {
  return axios
    .get("https://flakerank.herokuapp.com/api/flakes")
    .then((res) => res.data);
};
