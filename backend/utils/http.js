const axios = require("axios").default;

const http = (baseurl) => {
  const instance = axios.create({
    baseURL: baseurl || "",
    timeout: 3000,
    /* headers: { "X-Custom-Header": "foobar" }, */
  });

  const post = (url, body) => {
    try {
      const response = instance.post(url, body);
      return response;
    } catch (error) {
      console.log(error);
      return error.response;
    }
  };
  return { post };
};

module.exports = http;
