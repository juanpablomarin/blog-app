import axios from "axios";
const URL = "http://localhost:8080/api/";

export const getInitialNavbarSections = async () => {
  const getData = {};

  const response = await axios.get(URL + "sections/", getData);
  return response.data;
};

export const publishPost = async ({ title, body, url }) => {
  const postData = { title: title, body: body, url: url };
  const response = await axios.post(URL + "blogPosts/", postData);
  return response.data;
};
