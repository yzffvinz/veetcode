class PointSet {
    constructor() {
        this.points = [];
    }

    includes(p) {
        let i = -1;
        points.find((point, index) => {
            if (p.x === point.x && p.y === point.y) {
                i = index;
                return true;
            }
        });
        return i;
    }

    add(...ps) {
        ps.forEach(p => {
            const samePos = this.includes(p);
            if (samePos > -1) {
                this.points.splice(samePos, 1);
            }
        })
        
    }

    size() {
        return this.points.length;
    }
}

class Point {
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
    equal(p) {
        return this.x === p.x && this.y === p.y;
    }
}

class Rect {
    constructor(xs, ys, xm, ym){
        this.ps = new Point(xs, ys);
        this.pm = new Point(xm, ym);        
    }

    size() {
        return (this.pm.y - this.ps.y) * (this.pm.x - this.ps.x);
    }
}

function sizeOf(p1, p2) {
    return (p2.y - p1.y) * (p2.x -p1.x);
}

// 遍历，左下角、右上角; 面积加起来，坐标存储到列表；计算总面积
// 计算总面积，坐标匹配


/**
 * @param {number[][]} rectangles
 * @return {boolean}
 */
var isRectangleCover = function(rectangles) {
    let sumSize = 0;


    let xs = Number.MAX_SAFE_INTEGER;
    let xm = -1;
    let ys = Number.MAX_SAFE_INTEGER;
    let ym = -1;
    
    const pointSet = new PointSet;



    rectangles.forEach((rectangle, index) => {
        const rect = new Rect(...rectangle);
        
        let [x0, y0, x1, y1] = rectangle;

        pointSet.push([x0, y0], [x0, y1], [x1, y0], [x1, y1]);

        // 总面积
        sumSize += rect.size(); 
    });

    const size = sizeOf(new Point(xs, ys), new Point(xm, ym));
    if (pointSet.size() > 4) return false;
    return size === sumSize;
};