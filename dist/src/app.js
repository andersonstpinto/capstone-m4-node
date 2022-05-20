"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("express-async-errors");
const routes_1 = __importDefault(require("./routes"));
const errorHandle_middleware_1 = __importDefault(require("./middlewares/errorHandle.middleware"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
(0, routes_1.default)(app);
app.use(errorHandle_middleware_1.default);
exports.default = app;
