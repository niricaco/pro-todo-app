const jwt_decode = require("jwt-decode");

const token = "eyJ0eXAiO.../// jwt token";
const decoded = jwt_decode(token);

console.log(decoded);
