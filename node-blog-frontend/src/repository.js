import axios from "axios";
const URL = "http://localhost:8080/api/"


export const getInitialNavbarSections = async () => {
  const getData = {};

  const response = await axios
    .get(URL + "sections/", { params: getData });
    console.log("Here!");
    console.log(response.data);
  return response.data;
};
