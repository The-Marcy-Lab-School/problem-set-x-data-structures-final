class BinaryTree{
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insertLeft(value){
    let left = new BinaryTree(value)
    this.left = left
    return left
  }

  insertRight(value){
    let right = new BinaryTree(value)
    this.right = right
    return right  
  }
}

module.exports = {
  BinaryTree
}