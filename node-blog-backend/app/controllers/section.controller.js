"use strict";
const data = require("../../data"); // We will eventually write to mongoose to get this

exports.getSections = (request, response) => {
  /* No parsing the body, we if we reach here just return the sections from data */

  return response.status(200).json(data.sections);
};
