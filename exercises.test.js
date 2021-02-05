const { mySort, containsDuplicates, myFind, removeNodes, sumOfBinaryTree } = require('./exercises');
const { Node } = require('./linkedList');
const { BinaryTree } = require('./tree');

describe('containsDuplicates', () => {
    it('returns true if array contains duplicate elements', () => {
        expect(containsDuplicates([1, 2, 3])).toEqual(false);
        expect(containsDuplicates([4, 5, 4])) .toEqual(true);
        expect(containsDuplicates([4, 4, 5, 5])).toEqual(true);
        expect(containsDuplicates([])).toEqual(false);
    });
});

describe('mySort', () => {
    it('sorts a list of numbers', () => {
        const numbers = [99, 45, 37, 82, 1, 9, 12];
        const sorted = numbers.sort((a, b) => a - b);

        const numbers2 = [12, 65, 27, 92, 11, 1, 32];
        const sorted2 = numbers2.sort((a, b) => a - b);

        expect(mySort(numbers)).toEqual(sorted);
        expect(mySort(numbers2)).toEqual(sorted2);
    });
});

describe('myFind', () => {
    it('finds an element in an array', () => {
        const numbers = [1, 5, 6, 7, 9, 12, 16];
        expect(myFind(numbers, 6)).toEqual(2);
    });

    it('returns -1 if the element is not in the array', () => {
        const numbers = [1, 5, 6, 7, 9, 12, 16];
        expect(myFind(numbers, 100)).toEqual(-1);
    });
});

describe('removeNodes', () => {
    it('can remove nodes greater than num', () => {
        const list = new Node(4);
        list.next = new Node(100);
        list.next.next = new Node(5);
        list.next.next.next = new Node(6);

        const newList = removeNodes(list, 50)
        expect(newList.data).toEqual(4);
        expect(newList.next.data).toEqual(5);
        expect(newList.next.next.data).toEqual(6);
    });

    it('can remove nodes greater than num at the head', () => {
        const list2 = new Node(100);
        list2.next = new Node(5);
        list2.next.next = new Node(6);
        list2.next.next.next = new Node(7);

        const newList2 = removeNodes(list2, 90)
        expect(newList2.data).toEqual(5);
        expect(newList2.next.data).toEqual(6);
        expect(newList2.next.next.data).toEqual(7);
    });
});

describe('sumOfBinaryTree', () => {
    it('can return the sum of a binary tree', () => {
        const tree = new BinaryTree(4);
        const left = tree.insertLeft(2);
        const right = tree.insertRight(6);
        left.insertLeft(1);
        right.insertLeft(5);
        right.insertRight(7)

        expect(sumOfBinaryTree(tree)).toEqual(25);
    });
});