class Path {
  constructor(startX, xLen, startY, yLen) {
    this.startX = startX;
    this.xLen = xLen;
    this.startY = startY;
    this.yLen = yLen;
  }
}

let t1 = new Path(3, 5, 4, 9);
let t2 = new Path(3, 1, 1, 1);


function findCross(startX, xLen, startX2, xLen2) {
  let highestStart = Math.max(startX, startX2);

  let lowestEnd = Math.min(startX + xLen, startX2 + xLen2);

  if (highestStart > lowestEnd) {
    return false;
  }
  return true;
}

console.log(findCross(t1.startX, t1.xLen, t2.startX, t2.xLen) && findCross(t1.startY, t1.yLen, t2.startY, t2.yLen));
