function raycast$$module$zombie$scene$system$physics$raycast(query, start, end, sort = true) {
  start = vec2$$module$zombie$scene$system$physics$raycast.fromOther(start);
  end = vec2$$module$zombie$scene$system$physics$raycast.fromOther(end);
  var cols = [];
  var raytest = new ray$$module$zombie$scene$system$physics$raycast(start, end);
  for (var i = query.length - 1; i >= 0; i--) {
    var bcols = ray$$module$zombie$scene$system$physics$raycast.bodyCollisions(raytest, query[i].body);
    for (var k = bcols.length - 1; k >= 0; k--) {
      cols.push(bcols[k]);
    }
  }
  if (sort) {
    cols.sort(function(a, b) {
      return a.point.distance(start) > b.point.distance(start);
    });
  }
  return cols;
}
class raycol$$module$zombie$scene$system$physics$raycast {
  constructor(body, point, normal, verts) {
    this.body = body;
    this.point = point;
    this.normal = normal;
    this.verts = verts;
  }
}
class ray$$module$zombie$scene$system$physics$raycast {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }
  yValueAt(x) {
    return this.offsetY + this.slope * x;
  }
  xValueAt(y) {
    return (y - this.offsetY) / this.slope;
  }
  pointInBounds(point) {
    var minX = Math.min(this.start.x, this.end.x);
    var maxX = Math.max(this.start.x, this.end.x);
    var minY = Math.min(this.start.y, this.end.y);
    var maxY = Math.max(this.start.y, this.end.y);
    return point.x >= minX && point.x <= maxX && point.y >= minY && point.y <= maxY;
  }
  calculateNormal(ref) {
    var dif = this.difference;
    var norm1 = dif.normalized().rotate(Math.PI / 2);
    var norm2 = dif.normalized().rotate(Math.PI / -2);
    if (this.start.plus(norm1).distance(ref) < this.start.plus(norm2).distance(ref)) {
      return norm1;
    }
    return norm2;
  }
  get difference() {
    return this.end.minus(this.start);
  }
  get slope() {
    var dif = this.difference;
    return dif.y / dif.x;
  }
  get offsetY() {
    return this.start.y - this.slope * this.start.x;
  }
  get isHorizontal() {
    return compareNum$$module$zombie$scene$system$physics$raycast(this.start.y, this.end.y);
  }
  get isVertical() {
    return compareNum$$module$zombie$scene$system$physics$raycast(this.start.x, this.end.x);
  }
  static intersect(rayA, rayB) {
    if (rayA.isVertical && rayB.isVertical) {
      return null;
    }
    if (rayA.isVertical) {
      return new vec2$$module$zombie$scene$system$physics$raycast(rayA.start.x, rayB.yValueAt(rayA.start.x));
    }
    if (rayB.isVertical) {
      return new vec2$$module$zombie$scene$system$physics$raycast(rayB.start.x, rayA.yValueAt(rayB.start.x));
    }
    if (compareNum$$module$zombie$scene$system$physics$raycast(rayA.slope, rayB.slope)) {
      return null;
    }
    if (rayA.isHorizontal) {
      return new vec2$$module$zombie$scene$system$physics$raycast(rayB.xValueAt(rayA.start.y), rayA.start.y);
    }
    if (rayB.isHorizontal) {
      return new vec2$$module$zombie$scene$system$physics$raycast(rayA.xValueAt(rayB.start.y), rayB.start.y);
    }
    var x = (rayB.offsetY - rayA.offsetY) / (rayA.slope - rayB.slope);
    return new vec2$$module$zombie$scene$system$physics$raycast(x, rayA.yValueAt(x));
  }
  static collisionPoint(rayA, rayB) {
    var intersection = ray$$module$zombie$scene$system$physics$raycast.intersect(rayA, rayB);
    if (!intersection) {
      return null;
    }
    if (!rayA.pointInBounds(intersection)) {
      return null;
    }
    if (!rayB.pointInBounds(intersection)) {
      return null;
    }
    return intersection;
  }
  static bodyEdges(body) {
    var r = [];
    for (var i = body.parts.length - 1; i >= 0; i--) {
      for (var k = body.parts[i].vertices.length - 1; k >= 0; k--) {
        var k2 = k + 1;
        if (k2 >= body.parts[i].vertices.length) {
          k2 = 0;
        }
        var tray = new ray$$module$zombie$scene$system$physics$raycast(vec2$$module$zombie$scene$system$physics$raycast.fromOther(body.parts[i].vertices[k]), vec2$$module$zombie$scene$system$physics$raycast.fromOther(body.parts[i].vertices[k2]));
        tray.verts = [body.parts[i].vertices[k], body.parts[i].vertices[k2]];
        r.push(tray);
      }
    }
    return r;
  }
  static bodyCollisions(rayA, body) {
    var r = [];
    var edges = ray$$module$zombie$scene$system$physics$raycast.bodyEdges(body);
    for (var i = edges.length - 1; i >= 0; i--) {
      var colpoint = ray$$module$zombie$scene$system$physics$raycast.collisionPoint(rayA, edges[i]);
      if (!colpoint) {
        continue;
      }
      var normal = edges[i].calculateNormal(rayA.start);
      r.push(new raycol$$module$zombie$scene$system$physics$raycast(body, colpoint, normal, edges[i].verts));
    }
    return r;
  }
}
function compareNum$$module$zombie$scene$system$physics$raycast(a, b, leniency = 0.00001) {
  return Math.abs(b - a) <= leniency;
}
class vec2$$module$zombie$scene$system$physics$raycast {
  constructor(x = 0, y = x) {
    this.x = x;
    this.y = y;
  }
  normalized(magnitude = 1) {
    return this.multiply(magnitude / this.distance());
  }
  get inverted() {
    return this.multiply(-1);
  }
  multiply(factor) {
    return new vec2$$module$zombie$scene$system$physics$raycast(this.x * factor, this.y * factor);
  }
  plus(vec) {
    return new vec2$$module$zombie$scene$system$physics$raycast(this.x + vec.x, this.y + vec.y);
  }
  minus(vec) {
    return this.plus(vec.inverted);
  }
  rotate(rot) {
    var ang = this.direction;
    var mag = this.distance();
    ang += rot;
    return vec2$$module$zombie$scene$system$physics$raycast.fromAng(ang, mag);
  }
  get direction() {
    return Math.atan2(this.y, this.x);
  }
  distance(vec = new vec2$$module$zombie$scene$system$physics$raycast) {
    var d = Math.sqrt(Math.pow(this.x - vec.x, 2) + Math.pow(this.y - vec.y, 2));
    return d;
  }
  clone() {
    return new vec2$$module$zombie$scene$system$physics$raycast(this.x, this.y);
  }
  static fromAng(angle, magnitude = 1) {
    return new vec2$$module$zombie$scene$system$physics$raycast(Math.cos(angle) * magnitude, Math.sin(angle) * magnitude);
  }
  static fromOther(vector) {
    return new vec2$$module$zombie$scene$system$physics$raycast(vector.x, vector.y);
  }
  toString() {
    return "vector\x3c" + this.x + ", " + this.y + "\x3e";
  }
}
/** @const */ 
var module$zombie$scene$system$physics$raycast = {};
/** @const */ 
module$zombie$scene$system$physics$raycast.raycast = raycast$$module$zombie$scene$system$physics$raycast;

$CLJS.module$zombie$scene$system$physics$raycast=module$zombie$scene$system$physics$raycast;
//# sourceMappingURL=module$zombie$scene$system$physics$raycast.js.map
