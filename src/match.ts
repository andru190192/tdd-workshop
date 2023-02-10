export function add(numbers: number[]) {
  let sum = 0;

  for (const number of numbers) {
    if (isNaN(number) || typeof number !== "number") {
      throw new Error("no es un numero");
    }
    sum += number;
  }

  return sum;
}
