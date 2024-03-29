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
  insert(value: number) {
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
    let current: Node | null = this.root;
    let parent: Node | null = null;
    let isCurrentOnTheLeft: boolean = false; // refactor the code
    while (true) {
      if (value > current.value && current.right) {
        parent = current;
        current = current.right;
        isCurrentOnTheLeft = false;
      } else if (value < current.value && current.left) {
        parent = current;
        current = current.left;
        isCurrentOnTheLeft = true;
      } else if (value === current.value && !current.left && !current.right) {
        //* leaf node
        if (value === this.root.value) {
          this.root = null;
          break;
        }
        if (isCurrentOnTheLeft) {
          parent.left = null;
        } else {
          parent.right = null;
        }

        break;
      } else if (
        value === current.value &&
        ((current.left && !current.right) || (current.right && !current.left))
      ) {
        //* one child case
        if (value === this.root.value) {
          if (isCurrentOnTheLeft) {
            this.root = current.left;
          } else {
            this.root = current.right;
          }
          break;
        }

        if (isCurrentOnTheLeft) {
          parent.left = current.left;
        } else {
          parent.right = current.right;
        }
        break;
      } else if (value === current.value && current.left && current.right) {
        //* two childe case
        let successor = this.getSuccessor(current);

        // check if current is on the right or left of parent

        if (value === this.root.value) {
          this.root = successor;
          break;
        }
        if (isCurrentOnTheLeft) {
          parent.left = successor;
        } else {
          parent.right = successor;
        }
        break;
      } else {
        break;
      }
    }
  }
  getSuccessor(delNode: Node): Node {
    let parentSuccessor = delNode;
    let successor = delNode.right;
    let rightSuccessor = successor.right;

    const leftDelNode = delNode.left;
    const rightDelNode = delNode.right;

    while (successor.left) {
      // move left
      parentSuccessor = successor;
      rightSuccessor = successor.right;
      successor = successor.left; // move down left find closest element;
    }
    // update parentNode
    if (successor.right) {
      parentSuccessor.left = successor.right;
    } else {
      parentSuccessor.left = null;
    }

    //copy delNode.right and left to successor (after deleting successor)
    successor.right = rightDelNode;

    successor.left = leftDelNode;

    return successor;
  }
  find(value: number) {
    /**
     * Write a find(value) function that returns the node with the given value
     */

    let c = this.root;
    while (true) {
      if (value === this.root.value) {
        return this.root;
      }
      if (value > c.value && c.right) {
        //
        c = c.right;
      } else if (value < c.value && c.left) {
        //
        c = c.left;
      } else if (value === c.value) {
        return c;
      } else {
        return null;
      }
    }
  }
  levelOrder(callback) {
    const queue = [this.root];
    let string = '';
    const array = [];
    while (queue.length > 0) {
      const node = queue.shift(); //
      array.push(node.value);
      string = callback(string, node.value);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }

    return string ? string : array;
  }

  /**Write inOrder(callback), preOrder(callback), and postOrder(callback) functions that also accept an optional callback as a parameter.
   * Each of these functions should traverse the tree in their respective depth-first order and yield each node to the provided callback.
   * The functions should return an array of values if no callback is given as an argument. */
  preOrder(callback) {
    // recursive function
    const array: object[] = [];

    function transverse(node: Node) {
      if (node !== null) {
        if (callback) {
          callback(node);
        } else {
          array.push(node);
        }
        transverse(node.left);
        transverse(node.right);
      }
    }
    transverse(this.root);
    if (!callback) return array;
  }

  inOrder(callback) {
    //
    const array: Node[] = [];

    function transverse(node: Node) {
      if (node !== null) {
        transverse(node.left);
        if (callback) {
          callback(node);
        } else {
          array.push(node);
        }
        transverse(node.right);
      }
    }
    transverse(this.root);
    if (!callback) return array;
  }
  postOrder(callback) {
    const array: object[] = [];

    function transverse(node: Node) {
      if (node !== null) {
        transverse(node.left);
        transverse(node.right);

        if (callback) {
          callback(node);
        } else {
          array.push(node);
        }
      }
    }
    transverse(this.root);
    if (!callback) return array;
  }

  height(node: Node) {
    //Write a height(node) function that returns the given node’s height.
    // Height is defined as the number of edges in the longest path from a given node to a leaf node.
    // well how can i do it?
    //* ideas:
    if (!node) {
      return null;
    }
    if (!this.root) {
      return null;
    }
    let height = -1;
    let depth = -1;
    const queue = [this.root];
    let level = -1;

    while (queue.length > 0) {
      // transverse each level
      // after each level -> level++
      // if the node is inside the level -> height = level;
      const staticQueueLength = queue.length; // each level queue length
      for (let i = 0; i < staticQueueLength; i++) {
        const frontNode = queue.shift();
        if (node.value === frontNode.value) {
          depth = level;
        }
        if (frontNode.left !== null) {
          queue.push(frontNode.left);
        }
        if (frontNode.right !== null) {
          queue.push(frontNode.right);
        }
      }

      level++;
    }

    height = level - depth - 1;

    return height;
  }
  depth(node: Node) {
    if (!node) {
      return null;
    }
    if (!this.root) {
      return null;
    }

    let depth = -1;
    const queue = [this.root];
    let level = -1;

    while (queue.length > 0) {
      // transverse each level
      // after each level -> level++
      // if the node is inside the level -> height = level;
      const staticQueueLength = queue.length; // each level queue length
      for (let i = 0; i < staticQueueLength; i++) {
        const frontNode = queue.shift();
        if (node.value === frontNode.value) {
          depth = level;
        }
        if (frontNode.left !== null) {
          queue.push(frontNode.left);
        }
        if (frontNode.right !== null) {
          queue.push(frontNode.right);
        }
      }

      level++;
    }
    return depth;
  }
  isBalanced() {
    //Write an isBalanced function that checks if the tree is balanced.
    // A balanced tree is one where the difference between heights of the left subtree
    // and the right subtree of every node is not more than 1.

    /**
     * *assumption:
     * checking height of each leaf.
     * need to transverse and find every single parent contain only one child.
     *
     * if this.height(these parent) once return >2
     * return false
     *
     *
     *
     * return true
     */

    const arr = this.preOrder();

    for (let i = 0; i < arr.length; i++) {
      if ((arr[i].left && !arr[i].right) || (arr[i].right && !arr[i].left)) {
        if (this.height(arr[i]) > 1) {
          return false;
        }
      }
    }
    return true;
  }

  rebalance() {
    //Write a rebalance function that rebalances an unbalanced tree.
    // Tip: You’ll want to use a traversal method to provide a new array to the buildTree function.
    /**
     * *assumptions:
     * using traversal method like postorder,inorder, preorder ->return array
     * -> tree.buildTree(that array,0,array.length)
     */

    if (this.isBalanced()) {
      return;
    }

    const arr = this.postOrder();
    const values: number[] = [];
    for (let i = 0; i < arr.length; i++) {
      values.push(arr[i].value);
    }
    console.log(values);

    this.root = this.buildTree(values, 0, values.length - 1);
  }
}

const tree = new Tree([5, 10, 15, 20, 25, 30, 400, 55, 75, 60, 45, 55]); // 1,2,3,4,5,6,7,8,9
tree.root = tree.buildTree(tree.sortedArray, 0, tree.sortedArray.length - 1);

// prettyPrint(tree.root);

function printTree(string, value) {
  return (string += `${value}  `); // string is passed by value
  // it won't change
  // need to return it
}

const node = tree.find(5);
tree.insert(76);
tree.insert(77);
console.log(tree.isBalanced());
prettyPrint(tree.root);

tree.rebalance();
prettyPrint(tree.root);
