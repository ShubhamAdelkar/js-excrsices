const Shape = require("./moveShape");

function Rectangle(x, y, height, width) {
  Shape.call(this, x, y);
  this.height = height;
  this.width = width;
}

Rectangle.prototype.move = function (x, y, height, width) {
  this.x += x;
  this.y += y;
  this.height += height;
  this.width += width;
};

const rect = new Rectangle(0, 0, 20, 40);

Rectangle.prototype = Object.create(Shape.prototype);

console.log(rect.x, rect.y);
console.log(rect.height, rect.width);
module.exports = Rectangle;
