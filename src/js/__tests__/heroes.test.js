import sortHeroes from '../heroes';

describe('sortHeroes', () => {
    test('should sort heroes by health in descending order', () => {
        const heroes = [
            { name: 'мечник', health: 10 },
            { name: 'маг', health: 100 },
            { name: 'лучник', health: 80 },
        ];
        const result = sortHeroes(heroes);
        const expected = [
            { name: 'маг', health: 100 },
            { name: 'лучник', health: 80 },
            { name: 'мечник', health: 10 },
        ];
        expect(result).toEqual(expected);
        expect(result).not.toBe(expected);
    });

    test('should handle heroes with same health', () => {
        const heroes = [
            { name: 'герой1', health: 50 },
            { name: 'герой2', health: 50 },
            { name: 'герой3', health: 100 },
        ];
        const result = sortHeroes(heroes);
        const expected = [
            { name: 'герой3', health: 100 },
            { name: 'герой1', health: 50 },
            { name: 'герой2', health: 50 },
        ];
        expect(result).toEqual(expected);
    });

    test('should handle single hero', () => {
        const heroes = [
            { name: 'одинокий герой', health: 75 },
        ];
        const result = sortHeroes(heroes);
        const expected = [
            { name: 'одинокий герой', health: 75 },
        ];
        expect(result).toEqual(expected);
    });

    test('should handle empty array', () => {
        const heroes = [];

        const result = sortHeroes(heroes);

        expect(result).toEqual([]);
    });

    test('should handle heroes already sorted', () => {
        const heroes = [
            { name: 'герой1', health: 100 },
            { name: 'герой2', health: 80 },
            { name: 'герой3', health: 60 },
        ];
        const result = sortHeroes(heroes);
        const expected = [
            { name: 'герой1', health: 100 },
            { name: 'герой2', health: 80 },
            { name: 'герой3', health: 60 },
        ];
        expect(result).toEqual(expected);
    });

    test('should handle heroes in reverse order', () => {
        const heroes = [
            { name: 'герой1', health: 10 },
            { name: 'герой2', health: 20 },
            { name: 'герой3', health: 30 },
        ];
        const result = sortHeroes(heroes);
        const expected = [
            { name: 'герой3', health: 30 },
            { name: 'герой2', health: 20 },
            { name: 'герой1', health: 10 },
        ];
        expect(result).toEqual(expected);
    });

    test('should mutate original array and return sorted array', () => {
        const heroes = [
            { name: 'мечник', health: 10 },
            { name: 'маг', health: 100 },
        ];
        const result = sortHeroes(heroes);
        expect(heroes).toEqual(result);
        expect(heroes).toBe(result); 
    });
});
