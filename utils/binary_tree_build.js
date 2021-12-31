const valList = [3, 9, 20, null, null, 15, 7];
class BinaryTreeNode {
    constructor(val, left, right) {
        Object.assign(this, {val, left, right});
    }
}

function buildBinaryTree(valList) {
}

module.exports = {
    buildBinaryTree
};

class BinaryTreeNode {
    constructor(val, left, right) {
        Object.assign(this, {val, left, right});
    }
}

const d =  new BinaryTreeNode(null, null, 15);
const e =  new BinaryTreeNode(null, null, 7);
const b =  new BinaryTreeNode(null, null, 20);
const c =  new BinaryTreeNode(d, e, 9);
const a =  new BinaryTreeNode(b, c, 3);