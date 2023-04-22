"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Circle_1 = require("./Circle");
var Triangle_1 = require("./Triangle");
function drawAllShape(shape) {
    shape.draw();
}
drawAllShape(new Circle_1.Circle());
drawAllShape(new Triangle_1.Triangle());
