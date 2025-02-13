"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
var express_1 = require("express");
var CreateUserController_1 = require("../modules/users/useCases/createUser/CreateUserController");
exports.userRoutes = (0, express_1.Router)();
var createUserController = new CreateUserController_1.CreateUserController();
exports.userRoutes.post("/", createUserController.handle);
//# sourceMappingURL=user.routes.js.map