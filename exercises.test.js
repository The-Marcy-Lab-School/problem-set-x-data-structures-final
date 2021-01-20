const { mySort, containsDuplicates, myFind } = require('./exercises');
const { Graph } = require('./graph');

describe('containsDuplicates', () => {
    it('returns true if array contains duplicate elements', () => {
        expect(containsDuplicates([1, 2, 3])).toEqual(false);
        expect(containsDuplicates([4, 5, 4])) .toEqual(true);
        expect(containsDuplicates([4, 4, 5, 5, ])).toEqual(true);
        expect(containsDuplicates([])).toEqual(false);
    });
});

describe('mySort', () => {
    it('sorts a list of numbers', () => {
        const numbers = [99, 45, 37, 82, 1, 9, 12];
        const sorted = numbers.sort((a, b) => a - b);

        const numbers2 = [12, 65, 27, 92, 11, 1, 32];
        const sorted2 = numbers.sort((a, b) => a - b);

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

describe('breadthFirstSearch', () => {
    it('can determine the path between two verticies using BFS', () => {
        const list = {
            'A': ['B', 'C'],
            'B': ['A', 'F', 'G'],
            'C': ['A', 'H'],
            'F': ['B', 'I', 'J'],
            'G': ['B'],
            'H': ['C'],
            'I': ['F'],
            'J': ['F'],
        }
        const graph = new Graph(list);

        expect(breadthFirstSearch(graph, 'A', 'J')).toEqual(['A', 'B', 'F', 'J']);
    });
});

describe('mergeLists', () => {
    it('can merge two sorted lists', () => {
        const list1 = [1, 5, 7, 9];
        const list2 = [1, 2, 3, 8, 12];

        expect(mergeLists(list1, list2)).toEqual([1, 1, 2, 3, 5, 7, 8, 9, 12]);

        const list3 = [99, 100, 101];
        const list4 = [1, 2, 3];

        expect(mergeLists(list3, list4)).toEqual([1, 2, 3, 99, 100, 101]);
    });
});