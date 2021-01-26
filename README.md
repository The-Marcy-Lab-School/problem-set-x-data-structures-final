# Data Structures and Algorithms: Final Problem Set

## Directions

Respond to short response questions in clear, concise sentences directly within this file. Use markdown to ensure that your answers are formatted correctly.

### Short Answer Questions

1. What is Big O notation? Why is it useful for describing performance?

2. What are the tradeoffs between linked lists and arrays?

3. What type of problems are best solved using recursion?

4. What is the definition of a tree data structure? Define it in two ways: (1) a description of edges, nodes, and paths, and (2) as a recursive data structure??

5. What types of problems do graphs help us solve? What are some of the limitations?

6. What is the difference between breadth-first and depth-first search? When might you choose one over the other?



### Coding Exercises

1. Implement a function `containsDuplicates` that takes in an array of numbers and returns a boolean indicating if the array contains any duplicates. In the comments of your code, **write the runtime complexity AND the space complexity** of your implementation.

```js
containsDuplicates([1, 2, 3]) // false
containsDuplicates([4, 5, 4]) // true
containsDuplicates([4, 4, 5, 5]) // true
containsDuplicates([]) // false
```

2. Implement a function `mySort` to sort a list of numbers using an *efficient* sorting algorithm of your choice. Do not use `Array.prototype.sort()`. **Assume that the list could potentially be very long** and that it is not already sorted. In the comments of your code, write the **runtime complexity** of your implementation.

3. Write a function `myFind` that, given a sorted array and a number, returns the index of that element using **[Binary Search](https://www.geeksforgeeks.org/binary-search/)**. If the element is not in the array, return `-1`. Your solution should be **O(log n) runtime**. It should be not linear, you can do better than that! Do not use `Array.prototype.indexOf` of `Array.prototype.findIndex` as those are O(n), linear run time. 

4. Given a singuly linked list and an integer `num`, write a function `removeNodes` that removes all nodes with a value greater than `num` and returns the head of the linked list. Reference the `Node` class in `linkedList.js` is needed.
```
  4 -> 100 -> 5 -> 6 ->
  x = 50
  4 -> 5 -> 6 ->
```

5. Given the root node of a binary tree, write a function `sumOfBinaryTree` that returns the sum of values of all nodes in the tree. Reference the `BinaryTree` class in `tree.js` if needed. The below tree would return `25` because `4 + 2 + 6 + 1 + 5 + 7`:
```
     4
   /   \
  2     6
 /     / \
1     5   7 
```
