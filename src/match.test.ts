import { it, expect } from "vitest";

import { add } from "./match";

it("should summarize all number values in an array", () => {
  // Arrange
  const numbers = [1, 2];

  // Act
  const result = add(numbers);

  // Assert
  const expectedResult = numbers.reduce(
    (prevValue, curValue) => prevValue + curValue,
    0
  );

  expect(result).toBe(expectedResult);
});

it("should validate all number values in an array are a number", () => {
  // Arrange
  const numbers = ["asdads", 1, 2];

  // Act
  const resultFn = () => {
    add(numbers);
  };

  // Assert
  expect(resultFn).toThrow(/no es un numero/);
});
