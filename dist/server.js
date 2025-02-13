"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var router_1 = require("./routes/router");
var appErrors_1 = require("./errors/appErrors");
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(router_1.routes);
app.use(function (err, request, response, next) {
    if (err instanceof appErrors_1.AppError) {
        return response.status(err.statusCode).json({
            status: "error",
            message: err.message
        });
    }
    return response.status(500).json({
        status: "error",
        message: "Internal server error - ".concat(err.message)
    });
});
app.listen(3333, function () { return console.log("Server in running"); });
//# sourceMappingURL=server.js.map