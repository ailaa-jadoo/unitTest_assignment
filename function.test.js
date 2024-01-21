const { sum, getElementAtIndex, removeElement, popOperation } = require("./function");

describe("sum function", () => {
  test("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
  });

  test('adds "1" + "2" to equal 3', () => {
    expect(sum("1", "2")).toBe(3);
  });

  test('adds "1" + 2 to equal 3', () => {
    expect(sum("1", 2)).toBe(3);
  });

  test('adds 1 + "2" to equal 3', () => {
    expect(sum(1, "2")).toBe(3);
  });

  test("throws an error when provided with non-numeric values", () => {
    expect(() => sum("abc", "def")).toThrow(
      "Invalid input: sum function expects numeric values"
    );
  });
});

describe("getElementAtIndex", () => {
  test("should return the element at the specified index", () => {
    const arr = [1, 2, 3, 4, 5];

    expect(getElementAtIndex(arr, 2)).toBe(3);
    expect(getElementAtIndex(arr, 4)).toBe(5);
  });

  test("should throw an error if the index is negative", () => {
    const arr = [1, 2, 3];

    expect(() => getElementAtIndex(arr, -1)).toThrow("Index out of bounds");
  });

  test("should throw an error if the index is greater than or equal to the array length", () => {
    const arr = [1, 2, 3];

    expect(() => getElementAtIndex(arr, 3)).toThrow("Index out of bounds");
    expect(() => getElementAtIndex(arr, 5)).toThrow("Index out of bounds");
  });
});

describe("removeElement", () => {
  test("removes an element that exists in the array", () => {
    const arr = [1, 2, 3, 4];
    const result = removeElement(arr, 3);

    expect(result).toEqual([1, 2, 4]);
  });

  test("does nothing if the element does not exist in the array", () => {
    const arr = [1, 2, 3, 4];
    const result = removeElement(arr, 5);

    // The array should remain unchanged
    expect(result).toEqual([1, 2, 3, 4]);
  });

  test("handles an empty array correctly", () => {
    const arr = [];
    const result = removeElement(arr, 1);

    // The array should remain empty
    expect(result).toEqual([]);
  });
});

describe("popOperation", () => {
  test("removes the last element from the array", () => {
    const arr = [1, 2, 3, 4];
    popOperation(arr);
    expect(arr).toEqual([1, 2, 3]);
  });

  test("returns the removed element", () => {
    const arr = [1, 2, 3];
    const result = popOperation(arr);
    expect(result).toBe(3);
  });

  test("returns undefined for an empty array", () => {
    const arr = [];
    const result = popOperation(arr);
    expect(result).toBeUndefined();
  });
});
