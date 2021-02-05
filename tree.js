class BinaryTreeNode{
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insertLeft(value){
    let left = new BinaryTreeNode(value)
    this.left = left
    return left
  }

  insertRight(value){
    let right = new BinaryTreeNode(value)
    this.right = right
    return right  
  }
}

module.exports = {
  BinaryTreeNode
}