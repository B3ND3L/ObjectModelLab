// import * as model from './model';

class Point {
  constructor(x, y) {
    this.data = [];
    this.data.push(x);
    this.data.push(y);
  }
  get x() {
    return this.data[0] || 0;
  }
  set x(val) {
    this.data[0] = val;
  }
  set y(val) {
    this.data[1] = val;
  }
  get y() {
    return this.data[1] || 0;
  }
}
class Point3D extends Point {
  constructor(x, y, z) {
    super(x, y);
    this.data[2] = z;
  }
  get z() {
    return this.data[2] || 0;
  }
  set z(val) {
    this.data[2] = val;
  }
  toString() {
    return (`(${this.x}, ${this.y}, ${this.z})`);
  }
}
