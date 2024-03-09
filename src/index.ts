// import './style.css';
import './style.scss';
import mergeSort from './mergeSort';
/**

Build a Node class/factory. It should have an attribute for the data it stores as well as its left and right children.

Build a Tree class/factory which accepts an array when initialized. The Tree class should have a root attribute, which uses the return value of buildTree which you’ll write next.

Tip: If you would like to visualize your binary search tree, here is a prettyPrint() function that will console.log your tree in a structured format.
This function will expect to receive the root of your tree as the value for the node parameter.
*/

const prettyPrint = (node, prefix = '', isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
  }
  console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.value}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
  }
};
type cb = () => void;
class Node {
  value: number;
  right: Node | null; // give it type class Node
  left: Node | null; // give it type class Node
  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
function removeDuplicates(arr: number[]) {
  return arr.filter(
    (item: number, index: number) => arr.indexOf(item) === index
  );
}

class Tree {
  array: number[];
  sortedArray: number[] | null;
  root: Node | null;
  sortedArrayButNotRemoveDuplicates: number[];
  constructor(array: number[]) {
    this.array = array;
    this.sortedArrayButNotRemoveDuplicates = mergeSort(array);
    this.sortedArray = removeDuplicates(mergeSort(array));
    this.root = null;
  }

  buildTree(array: number[], start: number, end: number): Node {
    //* check empty array

    if (array.length === 0) return null;
    //* check if it is the first  call -> push node to this.root? currently don't know how to do
    //base case
    if (start > end) return null;
    // recursive case

    const midIndex = Math.ceil((start + end) / 2);

    const node = new Node(array[midIndex]);

    node.left = this.buildTree(array, start, midIndex - 1);

    node.right = this.buildTree(array, midIndex + 1, end);
    return node;
  }
  /** * You may be tempted to 
   * implement these methods using the original input array used to build the tree,
     but it’s important for the efficiency of these operations that you don’t do this. If we refer back to the Big O Cheatsheet,
     we’ll see that binary search trees can insert/delete in O(log n) time, 
     which is a significant performance boost over arrays for the same operations.
     To get this added efficiency, your implementation of these methods
      should traverse the tree and manipulate the nodes and their connections.
     * */
  insert(value: number) {
    /* functions that insert the given value.
    the idea is to compare value with current node.value
    
    if(value === current node .value) return current node.value = value;

    if(value > current node.value) move down to the next right node
    if(value < current node. value) move down to the next left node
     if(current node.value === null) return current node.value = value;
    
    */
    // can't use recursive -> using while
    let current = this.root;
    const node = new Node(value);
    if (this.root === null) return (this.root = node);

    while (true) {
      if (current.value === value) {
        break;
      }
      if (value > current.value && current.right === null) {
        current.right = node;
        break;
      } else if (value < current.value && current.left === null) {
        current.left = node;
        break;
      } else if (value > current.value) {
        current = current.right;
      } else {
        current = current.left;
      }
    }
  }
  deleteItem(value: number) {
    /**
     * algorithm:
     * case 1: del leaf( a node without child)
     * ->
     *case 2: del node with only one child
     * ->  replace the node and let the child pointed to its parent'parent
     * case 3: del node with two child
     * -> finding the nearest bigger than the node ( move down on the right)
     *   -> recursively call deleteItem(that node.value)
     */
  }

  find(value: number) {
    /**
     * Write a find(value) function that returns the node with the given value
     */
  }
  levelOrder(callback: cb) {
    /**
     * Write a levelOrder(callback) function that accepts an optional callback function as its parameter.
     * levelOrder should traverse the tree in breadth-first level order and provide each node as an argument to the callback.
     *  As a result, the callback will perform an operation on each node following the order in which they are traversed.
     * levelOrder may be implemented using either iteration or recursion (try implementing both!).
     * The method should return an array of values if no callback is given as an argument.
     *  Tip: You will want to use an array acting as a queue to keep track of all the child nodes that you have yet to traverse and to add new ones to the list (as you saw in the video).
     */
  }

  /**Write inOrder(callback), preOrder(callback), and postOrder(callback) functions that also accept an optional callback as a parameter.
   * Each of these functions should traverse the tree in their respective depth-first order and yield each node to the provided callback.
   * The functions should return an array of values if no callback is given as an argument. */
  inOrder(callback: cb) {
    //
  }
  preOrder(callback: cb) {
    //
  }
  postOrder(callback: cb) {
    //
  }
  height(node: Node) {
    //Write a height(node) function that returns the given node’s height.
    // Height is defined as the number of edges in the longest path from a given node to a leaf node.
  }
  depth(node: Node) {
    //Write a depth(node) function that returns the given node’s depth.
    //Depth is defined as the number of edges in the path from a given node to the tree’s root node.
  }
  isBalanced() {
    //Write an isBalanced function that checks if the tree is balanced.
    // A balanced tree is one where the difference between heights of the left subtree
    // and the right subtree of every node is not more than 1.
  }
  rebalance() {
    //Write a rebalance function that rebalances an unbalanced tree.
    // Tip: You’ll want to use a traversal method to provide a new array to the buildTree function.
  }
}

const tree = new Tree([5, 1, 5, 2, 2, 2, 9, 7, 3, 4, 8, 6]); // 1,2,3,4,5,6,7,8,9
tree.root = tree.buildTree(tree.sortedArray, 0, tree.sortedArray.length - 1);
tree.insert(10);
tree.insert(15);
tree.insert(14);

console.log(tree.root);

prettyPrint(tree.root);
