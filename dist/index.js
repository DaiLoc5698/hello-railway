"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = _interopRequireDefault(require("express"));
var _bodyParser = _interopRequireDefault(require("body-parser"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
const app = (0, _express.default)();
app.use(_bodyParser.default.json());
app.use(_bodyParser.default.urlencoded({
  extended: false
}));
const APP_HOST = '0.0.0.0';
const APP_PORT = 8080;
app.get('/contacts', async (req, res) => {
  try {
    res.send('GET contacts');
  } catch (e) {
    res.status(e?.statusCode || 500).send(e?.message || 'Something went wrong');
  }
});
app.post('/contacts', async (req, res) => {
  try {
    res.send('POST contacts', req.body);
  } catch (e) {
    res.status(e?.statusCode || 500).send(e?.message || 'Something went wrong');
  }
});
app.get('/contacts/:id', async (req, res) => {
  try {
    res.send('GET contacts', req.params.id);
  } catch (e) {
    res.status(e?.statusCode || 500).send(e?.message || 'Something went wrong');
  }
});
app.put('/contacts/:id', async (req, res) => {
  try {
    res.send('PUT contacts', _objectSpread(_objectSpread({}, req.body), {}, {
      id: req.params.id
    }));
  } catch (e) {
    res.status(e?.statusCode || 500).send(e?.message || 'Something went wrong');
  }
});
app.delete('/contacts/:id', async (req, res) => {
  try {
    res.send('DELETE contacts', req.params.id);
  } catch (e) {
    res.status(e?.statusCode || 500).send(e?.message || 'Something went wrong');
  }
});
app.listen(APP_PORT, APP_HOST, () => {
  console.log(`Example app listening on http://${APP_HOST}:${APP_PORT}`);
});
var _default = app;
exports.default = _default;