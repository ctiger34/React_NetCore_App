"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_axios["default"].defaults.baseURL = "https://localhost:5001/api";

var responseBody = function responseBody(res) {
  return res.data;
};

var requests = {
  get: function get(url) {
    return _axios["default"].get(url).then(responseBody);
  },
  post: function post(url, body) {
    return _axios["default"].post(url, body).then(responseBody);
  },
  put: function put(url, body) {
    return _axios["default"].put(url, body).then(responseBody);
  },
  del: function del(url) {
    return _axios["default"]["delete"](url).then(responseBody);
  }
};
var Books = {
  list: function list() {
    return requests.get("/books");
  },
  details: function details(id) {
    return requests.get("/books/".concat(id));
  },
  create: function create(book) {
    return requests.post('/books', book);
  },
  update: function update(book) {
    return requests.put("/books/".concat(book.id), book);
  },
  "delete": function _delete(id) {
    return requests.del("/books/".concat(id));
  }
};
var _default = {
  Books: Books
};
exports["default"] = _default;