import axios from "axios";

export const getInitialNavbarSections = () => {
  const getData = {};

  return axios
    .get("api/sections/", { params: getData })
    .then(response => response.data);
};
